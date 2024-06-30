const calendarIcon = document.getElementById('calendarIcon');
const agendaContent = document.getElementById('agendaContent');
const todayDate = document.getElementById('todayDate'); // Get the element for the date

calendarIcon.addEventListener('click', () => {
  agendaContent.classList.toggle('show');
});

// Function to get today's date in the format "MM/DD/YYYY"
function getTodaysDate() {
  const today = new Date();
  const dateOptions = { month: 'numeric', day: 'numeric', year: 'numeric' };
  return today.toLocaleDateString('en-US', dateOptions);
}

// Update the content of the 'todayDate' element with today's date
todayDate.textContent = getTodaysDate(); 

// Get the table rows
const tableRows = document.querySelectorAll('table tbody tr');

// Update the dates for upcoming events
tableRows.forEach(row => {
  const dateCell = row.cells[1]; // Get the date cell
  const eventDate = dateCell.textContent;

  // Replace "Next Week" with the actual date (assuming next Monday)
  if (eventDate === 'Next Week') {
    const nextMonday = getNextMonday();
    const formattedNextMonday = nextMonday.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' });
    dateCell.textContent = formattedNextMonday;
  }

  // Replace "In 2 days" with the actual date
  if (eventDate === 'In 2 days') {
    const twoDaysLater = new Date();
    twoDaysLater.setDate(twoDaysLater.getDate() + 2); 
    const formattedTwoDaysLater = twoDaysLater.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' });
    dateCell.textContent = formattedTwoDaysLater;
  }
});

// Function to get the date of the next Monday
function getNextMonday() {
  const today = new Date();
  const day = today.getDay();
  const nextMonday = new Date();
  nextMonday.setDate(today.getDate() + (7 + (1 - day)) % 7); // Calculate the next Monday
  return nextMonday;
}