
<script>
// Show the form after 3 seconds
setTimeout(() => {
  document.getElementById('sideForm').classList.add('active');
}, 3000); // adjust delay

// Close button functionality
document.querySelector('.slide-form .close-btn').addEventListener('click', () => {
  document.getElementById('sideForm').classList.remove('active');
});

let count = 0;
  let target = 394;
  let counter = document.getElementById("creatorCount");

  function updateCount() {
    count++;
    if (count > target) count = 0; // reset after reaching target
    counter.textContent = count;
    setTimeout(updateCount, 50); // adjust speed (smaller = faster)
  }

  updateCount();

  // Select all Get Started buttons
  const getStartedButtons = document.querySelectorAll('.get-started-btn');
  const sideForm = document.getElementById('sideForm');

  getStartedButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Scroll the form into view
      sideForm.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Optional: add a little "bounce" animation to grab attention
      sideForm.style.transform = 'translateY(-50%) scale(1.05)';
      setTimeout(() => {
        sideForm.style.transform = 'translateY(-50%) scale(1)';
      }, 300);
    });
  });

  // Close button functionality
  const closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    sideForm.style.display = 'none';
  });
</script>
</script>
