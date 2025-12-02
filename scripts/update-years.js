/**
 * Pre-build script to dynamically update experience years in index.html
 * Calculates years from March 2022 (work start date) to current date
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Work start date: March 2022
const WORK_START_DATE = new Date(2022, 2, 1); // Month is 0-indexed, so 2 = March

function calculateYearsOfExperience() {
  const now = new Date();
  const diffInMs = now - WORK_START_DATE;
  const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
  
  // Floor to get complete years
  const years = Math.floor(diffInYears);
  
  return `${years}+`;
}

function updateIndexHtml() {
  const indexPath = path.join(__dirname, '..', 'index.html');
  
  let content = fs.readFileSync(indexPath, 'utf-8');
  
  const yearsExp = calculateYearsOfExperience();
  
  // Replace all instances of "X+ years" pattern with calculated years
  // This regex matches patterns like "4+ years", "3+ years", etc.
  content = content.replace(/\d\+\s*years/gi, `${yearsExp} years`);
  
  fs.writeFileSync(indexPath, content, 'utf-8');
  
  console.log(`✅ Updated experience to "${yearsExp} years" in index.html`);
  console.log(`   Work started: March 2022`);
  console.log(`   Current date: ${new Date().toLocaleDateString()}`);
}

updateIndexHtml();

