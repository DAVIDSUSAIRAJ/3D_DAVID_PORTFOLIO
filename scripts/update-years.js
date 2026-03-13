/**
 * Pre-build script to dynamically update experience years in index.html
 * Calculates years from March 2022 (work start date) to current date
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Step 1: Current file path edukkanum
const __filename = fileURLToPath(import.meta.url);
//Result: /Users/david/Desktop/3D_DAVID_PORTFOLIO/scripts/update-years.js

// Step 2: Current directory path edukkanum
const __dirname = path.dirname(__filename);
//Result: /Users/david/Desktop/3D_DAVID_PORTFOLIO/scripts



// Work start date: March 2022
const WORK_START_DATE = new Date(2022, 2, 1); // Month is 0-indexed, so 2 = March

function calculateYearsOfExperience() {
  const now = new Date();
  
  // Calculate years
  let years = now.getFullYear() - WORK_START_DATE.getFullYear();
  
  // Calculate months
  let months = now.getMonth() - WORK_START_DATE.getMonth();
  
  // Adjust if months is negative
  if (months < 0) {
    years--;
    months += 12;
  }
  
  // Adjust if current day is before start day
  if (now.getDate() < WORK_START_DATE.getDate()) {
    months--;
    if (months < 0) {
      years--;
      months += 12;
    }
  }
  
  // Format: "3 years 9 months" or "4 years 0 months" → "4 years"
  if (months === 0) {
    return `${years} years`;
  }
  return `${years} years ${months} months`;
}

function updateIndexHtml() {
  // Step 3: index.html path edukkanum  get the index.html path from the current directory
  const indexPath = path.join(__dirname, '..', 'index.html');
  //Result: /Users/david/Desktop/3D_DAVID_PORTFOLIO/index.html

  // Step 4: index.html content edukkanum   
  let content = fs.readFileSync(indexPath, 'utf-8');

  const yearsExp = calculateYearsOfExperience();
  
  // Replace all instances of experience patterns with calculated years
  // Matches: "4+ years", "3+ years", "3 years 9 months", "3 years", etc.
  content = content.replace(/\d+\+?\s*years(\s+\d+\s*months)?/gi, yearsExp);
  
  fs.writeFileSync(indexPath, content, 'utf-8');
  
  console.log(`✅ Updated experience to "${yearsExp}" in index.html`);
  console.log(`   Work started: March 2022`);
  console.log(`   Current date: ${new Date().toLocaleDateString()}`);
}

updateIndexHtml();

