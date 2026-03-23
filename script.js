
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
  let speed = 10; // smaller = faster

  let counter = document.getElementById("creatorCount");

  let updateCount = setInterval(() => {
    if (count < target) {
      count++;
      counter.textContent = count;
    } else {
      clearInterval(updateCount);
    }
  }, speed);
</script>
