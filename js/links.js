const navItems = [
  { href: '#1', text: 'Day 1' },
  { href: '#2', text: 'Day 2' },
  { href: '#3', text: 'Day 3' },
  { href: '#4', text: 'Day 4' },
  { href: '#5', text: 'Day 5' },
  { href: '#6', text: 'Day 6' },
  { href: '#7', text: 'Day 7' },
  { href: '#8', text: 'Day 8' },
  { href: '#9', text: 'Day 9' },
  { href: '#10', text: 'Day 10' },
];

const navBar = document.getElementById('navBar');

navItems.forEach((item) => {
  const li = document.createElement('li');
  li.classList.add('nav_item');

  const a = document.createElement('a');
  a.classList.add('nav_link');
  a.href = item.href;
  a.textContent = item.text;

  // Add event listener to each nav_link to handle the click event
  a.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    // Get the slide index from the href (e.g., '#1' should map to 0)
    const slideIndex = parseInt(item.href.replace('#', ''), 10) - 1;

    // Find the corresponding carousel indicator button
    const indicatorButton = document.querySelector(
      `.carousel-indicators button[data-bs-slide-to="${slideIndex}"]`
    );

    // Check if the indicator button exists and click it
    if (indicatorButton) {
      indicatorButton.click();
    }
  });
  li.appendChild(a);
  navBar.appendChild(li);
});
