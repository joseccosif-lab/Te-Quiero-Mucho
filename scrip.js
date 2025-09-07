const messages = [
  "Eres mi todo 💕",
  "Siempre en mi corazón ❤️",
  "Mi persona favorita 🌸",
  "Tu sonrisa ilumina mi mundo ✨",
  "Gracias por existir 💜",
  "Eres mi razón de ser 💘",
  "Cada día contigo es un regalo 🎁",
  "Eres mi lugar feliz 🌈",
  "Te pienso a cada momento 🌹",
  "Eres mi sonrisa favorita 💖",
  "Contigo todo es más bonito 🌸",
  "Eres a quien más aprecio 💖",
  "Tu risa es mi canción preferida ",
  "Te quiero hoy, mañana y siempre 💕",
  "Cada día es un regalo porque estás tú 🎁",
  "Me haces feliz con solo existir ✨",
  "Tu voz es mi sonido favorito :)",
  "Eres mi mejor pensamiento al despertar ☀️",
  "Gracias por ser mi compañera y amiga 🤍",
  "Eres la mejor parte de mis días 🌞",
  
];

const container = document.querySelector(".container");

// Mensajes fijos
function createFixedMessages() {
  for (let i = 0; i < 1; i++) {
    const msg = document.createElement("div");
    msg.className = "message-fixed";
    msg.textContent = messages[Math.floor(Math.random() * messages.length)];

    msg.style.top = (Math.random() * 70 + 10) + "%";
    msg.style.left = (Math.random() * 80 + 10) + "%";

    container.appendChild(msg);
  }
}

// Mensajes flotantes
function createFloatingMessage() {
  const msg = document.createElement("div");
  msg.className = "message-float";
  msg.textContent = messages[Math.floor(Math.random() * messages.length)];

  msg.style.top = (Math.random() * 70 + 10) + "%";
  msg.style.left = (Math.random() * 80 + 10) + "%";

  container.appendChild(msg);

  setTimeout(() => {
    msg.remove();
  }, 4500);
}

// Corazones animados
function createHearts() {
  const heartsContainer = document.getElementById("hearts");

  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤";

    heart.style.left = Math.random() * 90 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }, 400);
}

// Inicialización
createFixedMessages();
setInterval(createFloatingMessage, 2000);
createHearts();
