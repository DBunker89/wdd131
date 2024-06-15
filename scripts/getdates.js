// Get the current year
const currentYear = new Date().getFullYear();

// Set the current year in the first paragraph of the footer
document.getElementById('copyright-year').textContent = `© ${currentYear}`;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Set the last modified date in the second paragraph of the footer
document.getElementById('last-modified').textContent = `Last Modified: ${lastModifiedDate}`;
