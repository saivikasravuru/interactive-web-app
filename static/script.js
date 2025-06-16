function openLink(platform) {
  const urls = {
    GitHub: 'https://github.com',
    Copilot: 'https://copilot.microsoft.com',
    Instagram: 'https://instagram.com',
    Classroom: 'https://classroom.google.com',
    Gmail: 'https://mail.google.com',
    Google: 'https://www.google.com',
    YouTube: 'https://www.youtube.com',
    Chatgpt: 'https://chatgpt.com/'
  };

  const url = urls[platform];
  if (url) window.open(url, '_blank');

  fetch('/api/button', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ button: platform })
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('responseText').textContent = data.message;
  })
  .catch(error => console.error('Error:', error));
}
