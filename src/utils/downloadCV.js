import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const downloadCV = async () => {
  try {
    // Get the resume element
    const resumeElement = document.getElementById('resume_content');
    
    if (!resumeElement) {
      console.error('Resume element not found');
      return false;
    }

    // Create PDF
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    // Capture options with onclone to show hidden element
    const captureOptions = {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      windowWidth: 1200,
      onclone: (docClone) => {
        const targetElement = docClone.getElementById('resume_pdf_container');
        if (targetElement) {
          // Make the element visible in the cloned document
          targetElement.style.display = 'block';
          targetElement.style.position = 'relative';
          targetElement.style.left = '0';
        }
      },
    };

    // Capture the element with high quality
    const canvas = await html2canvas(resumeElement, captureOptions);

    // Convert canvas to image
    const imgData = canvas.toDataURL('image/png');

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    
    // Calculate dimensions to fit A4
    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    // If content is longer than one page, scale it down to fit
    if (imgHeight > pdfHeight) {
      const ratio = pdfHeight / imgHeight;
      const scaledWidth = imgWidth * ratio;
      const scaledHeight = pdfHeight;
      const xOffset = (pdfWidth - scaledWidth) / 2;
      
      pdf.addImage(imgData, 'PNG', xOffset, 0, scaledWidth, scaledHeight, '', 'FAST');
    } else {
      // Center vertically if smaller than page
      const yOffset = 0;
      pdf.addImage(imgData, 'PNG', 0, yOffset, imgWidth, imgHeight, '', 'FAST');
    }

    // Save the PDF
    pdf.save('David_Susairaj_CV.pdf');
    
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    return false;
  }
};

