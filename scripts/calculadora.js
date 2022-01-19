// Teremos eventos da nossa calculadora

/**
 * Objetivo será de configurar todos os elementos da minha calculadora
 */
function configurar() {
	console.log("configurar");
	configurarAbrirHistorico();
	configurarFecharHistorico();
	configurarClicksTeclas();
}

//#region | Funções do painel
function configurarAbrirHistorico() {
	console.log("configurarAbrirHistorico");

	let abrirHistorico = document.getElementById("abrirHistorico");
	abrirHistorico.addEventListener("click", (event) => {
		let historicoLista = document.getElementById("historicoLista");
		historicoLista.style.visibility = "visible";
	});
}

function configurarFecharHistorico() {
	console.log("configurarFecharHistorico");

	let fecharHistorico = document.getElementById("fecharHistorico");
	fecharHistorico.addEventListener("click", (event) => {
		let historicoLista = document.getElementById("historicoLista");
		historicoLista.style.visibility = "hidden";
	});
}

//#endregion

//#region | Funções do teclado da caculadora
function configurarClicksTeclas() {
	console.log("configurarClicksTeclas");

	let botoes = document.getElementsByClassName("botao");

	for (const botao of botoes) {
		botao.addEventListener("click", (event) => {
			let valorBotao = event.target.getAttribute("data-value");
			let expressaoAoVivo = document.getElementById("expressaoAoVivo");

			if (valorBotao == "AC") {
				expressaoAoVivo.innerText = "";
			} else if (valorBotao == "=") {
				calcular();
			} else if (
				valorBotao == "+" ||
				valorBotao == "-" ||
				valorBotao == "/" ||
				valorBotao == "x"
			) {
				expressaoAoVivo.innerText += valorBotao;
				// expressaoAoVivo.innerText += " ";

				// Interpolação
				//expressaoAoVivo.innerText += ` ${valorBotao} `;
			} else {
				expressaoAoVivo.innerText += valorBotao;
			}
		});
	}

	console.log("botões", botoes);
}
//#endregion

//#region | Operações da calculadora
function calcular() {
	console.log("Criar mecanismo de calculo");

	let expressaoAoVivo = document.getElementById("expressaoAoVivo");
	let expressaoDigitada = document.getElementById("expressaoDigitada");

	let expressaoSoma = expressaoAoVivo.innerText.split("+");
	let expressaoSubtracao = expressaoAoVivo.innerText.split("-");
	let expressaoDivisao = expressaoAoVivo.innerText.split("/");
	let expressaoMultiplicacao = expressaoAoVivo.innerText.split("/");

	let resultado = 0;

	if(expressaoSoma){
		resultado = parseFloat(expressaoSoma[0]) + parseFloat(expressaoSoma[1]); 
	} else if (expressaoSubtracao){
		console.log("Implemetar subtração");
	} else if(expressaoDivisao){
		console.log("Implemetar divisão");
	} else {
		console.log("Implemetar multiplicação");
	}


	expressaoDigitada.innerText = expressaoAoVivo.innerText + " = ";
	expressaoAoVivo.innerText = resultado;
}
//#endregionCriar
