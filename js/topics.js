const topics = [
  { value: '', text: 'Select a topic' },
  { value: '#1', text: 'Guide to IT resume writing' },
  { value: '#2', text: 'Mastering job interview' },
  { value: '#3', text: 'Teamwork Essentials in IT' },
  { value: '#4', text: 'Effective communication in the IT workplace' },
  { value: '#5', text: 'Email communication skills in IT' },
  { value: '#6', text: 'Understanding SRS' },
  { value: '#7', text: 'Stand-up meetings 101' },
  { value: '#8', text: 'Project phases and deadlines' },
  { value: '#9', text: 'Dealing with workplace challenges' },
  { value: '#10', text: 'IT troubleshooting toolkit' },
];

const selectElement = document.getElementById('topicSelect');

// Додаємо кожну тему як опцію до селекту
topics.forEach((topic) => {
  const option = document.createElement('option');
  option.value = topic.value;
  option.textContent = topic.text;
  selectElement.appendChild(option);
});
