const elementoReposta = document.querySelector
("#resposta")
const Pergunta = document.querySelector
("#Pergunta")
const buttonPerguntar = document.querySelector
("#buttonPerguntar")
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

//clicar em fazer pergunta
function fazerPergunta() {

  if (Pergunta.value == "") {
  alert("Digite sua pergunta")
  return
  }
  buttonPerguntar.setAttribute("disabled", true)
  const answer = "<div>" + Pergunta.value + "<div>"

  //gerar numero aleatório
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
  elementoReposta.innerHTML = answer + respostas[numeroAleatorio]
  elementoReposta.style.opacity = 1
  //sumir a respostas dps de 3 s 
  setTimeout(function() {
    elementoReposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 3000)
}


