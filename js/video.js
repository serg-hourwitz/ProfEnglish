import { videos } from './video-list.js';

document
  .querySelectorAll('.video-placeholder')
  .forEach((placeholder, index) => {
    placeholder.addEventListener('click', function () {
      // Ховаємо поточний постер
      this.style.display = 'none';

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

      // Вставляємо iframe в батьківський div
      this.parentNode.appendChild(iframe);
    });
  });
