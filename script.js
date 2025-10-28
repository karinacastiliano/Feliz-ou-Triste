const btnFeliz = document.getElementById("feliz");
const btnTriste = document.getElementById("triste");
const resultado = document.getElementById("resultado");

btnFeliz.addEventListener("click", () => {
  resultado.textContent = "😄 Você escolheu FELIZ! Que ótimo dia!";
});

btnTriste.addEventListener("click", () => {
  resultado.textContent = "😢 Você escolheu TRISTE. Tudo vai melhorar!";
});