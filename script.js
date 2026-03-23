// Show the form after 3 seconds
setTimeout(() => {
  document.getElementById('sideForm').classList.add('active');
}, 3000); // adjust delay

// Close button functionality
document.querySelector('.slide-form .close-btn').addEventListener('click', () => {
  document.getElementById('sideForm').classList.remove('active');
});
