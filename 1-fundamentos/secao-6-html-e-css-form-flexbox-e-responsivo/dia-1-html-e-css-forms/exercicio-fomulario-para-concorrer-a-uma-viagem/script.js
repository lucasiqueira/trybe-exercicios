const submitButton = document.getElementById('submit-btn');
const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const imageRights = document.getElementById('image-rights');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (imageRights.checked) {
    if (fullName.value.length > 10 && fullName.value.length < 40 && email.value.length > 10 && email.value.length < 50) {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
    } else {
      alert('Dados Inválidos!');
    }
  } else {
    alert('Somente quem autorizar o uso de imagens pode enviar suas informações')
  }  
});
