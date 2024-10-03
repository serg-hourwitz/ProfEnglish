const topicSelect = document.getElementById('topicSelect');

topicSelect.addEventListener('change', function () {
  const selectedValue = this.value;
  if (selectedValue) {
    window.location.href = selectedValue; // Перенаправлення на відповідне посилання
  }
});
