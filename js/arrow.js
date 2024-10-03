export const arrowUp = document.getElementById('arrow');

// Обробник події прокрутки
window.addEventListener('scroll', () => {
  if (window.scrollY >= 300) {
    arrowUp.style.opacity = '0.7';
  } else {
    arrowUp.style.opacity = '0';
  }
});

// Обробник події при наведенні миші (hover)
arrowUp.addEventListener('mouseover', () => {
  arrowUp.style.opacity = '1'; // Збільшуємо прозорість при наведенні
});

// Обробник події, коли миша покидає елемент
arrowUp.addEventListener('mouseout', () => {
  arrowUp.style.opacity = '0.7'; // Повертаємо початкове значення прозорості
});
