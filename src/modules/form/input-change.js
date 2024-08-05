const clientId = document.getElementById("client-id")
const searchButton = document.getElementById("search")

clientId.oninput = () => {
  // Não deixa o usuário escrever nada diferente de números e -
  const allowedCharactersRegex = /[^0-9-]/g;
  clientId.value = clientId.value.replace(allowedCharactersRegex, "");
  
  const regex = /^\d{3}-\d{3}-\d{3}-\d{3}$/;

  // Verifica se o value tem o formato do ID = 123-123-123-123, e ativa o button
  if (!regex.test(clientId.value)) {
    searchButton.setAttribute('disabled', true)
  } else {
    searchButton.removeAttribute('disabled')
  }
}
