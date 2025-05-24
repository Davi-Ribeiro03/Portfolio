function sendMessage(e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const message = document.getElementById("message");

  const numero = "5585981721495";
  const mensagem = `Olá, me chamo ${name.value}\n${message.value}`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url);
}
