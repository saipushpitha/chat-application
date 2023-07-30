const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');

function appendMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);
}

function sendMessage() {
  const message = messageInput.value;
  if (message) {
    appendMessage('You: ' + message);
    messageInput.value = '';
  }
}