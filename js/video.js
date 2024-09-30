import { videos } from './video-list.js';

function loadVideo(index, placeholder) {
  // Ховаємо постер
  placeholder.style.display = 'none';

  // Створюємо iframe для поточного відео
  const iframe = document.createElement('iframe');
  iframe.src = videos[index].src;
  iframe.loading = 'lazy';
  iframe.title = videos[index].title;
  iframe.allow = 'encrypted-media; fullscreen;';
  iframe.style.position = 'absolute';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.top = '0';
  iframe.style.left = '0';
  iframe.style.border = 'none';

  // Додаємо iframe в батьківський div
  placeholder.parentNode.appendChild(iframe);
}

// Додаємо обробники для кожного відео
document
  .querySelectorAll('.video-placeholder')
  .forEach((placeholder, index) => {
    // Обробник події для кліку
    placeholder.addEventListener('click', function () {
      loadVideo(index, this);
    });

    // Обробник події для натискання клавіші Enter
    placeholder.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        loadVideo(index, this);
      }
    });
  });
