function buscarProdutos(descricao) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			// HTTP STATUS CODE
			var produtos = JSON.parse(this.responseText);
			mostrarProdutos(produtos);
		}
	};

	//JEITO 2 (concatenar - interpolação)
	let endpoint = `http://localhost:3000/produtos?descricao=${descricao}`;

	xhttp.open("GET", endpoint, false); // PREPARADANDO A REQUEST
	xhttp.send(); // REQUEST (REQUISIÇÃO)
}

function mostrarProdutos(produtos) {
	let ofertas = document.getElementById("ofertas");
	ofertas.innerHTML = "";

	for (const produto of produtos) {
		let templateOferta = `<div class="produto">
			<img src="${produto.imageCapa}" />
			<div>
				<span class="preco">R$ ${produto.precoOriginal}<span class="ofertaPreco">${
			produto.descontoEmPercentagem
		} OFF</span></span>
				<span class="parcelas">${
					produto.parcelasMaximaSemJuros
				}x <span class="valorParcela">R$ -</span></span>
				<span class="frete">${
					produto.freteGratis ? "Frete Grátis" : ""
				} <span class="freteFull">${
			produto.freteFull ? "FULL" : ""
		}</span></span>
				<span class="descricao">${produto.descricao}</span>
			</div>					
		</div>`;

		ofertas.innerHTML += templateOferta;
	}
}

function criarProduto() {
	let produto = {
		imageCapa: document.getElementById("urlCapaImagem").value,			
		descricao: document.getElementById("nomeProduto").value,
		precoOriginal: 459.99,
		categoria: "eletronico",
		descontoEmPercentagem: 20,
		parcelasMaximaSemJuros: 10,
		freteFull: true,
		freteGratis: true,
		imagens: [
			"https://http2.mlstatic.com/D_Q_NP_723494-MLA47678954738_092021-AB.webp",
			"https://http2.mlstatic.com/D_Q_NP_723494-MLA47678954738_092021-AB.webp",
			"https://http2.mlstatic.com/D_Q_NP_723494-MLA47678954738_092021-AB.webp",
		],
		estoque: 10,
	};

	var xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
	let endpoint = `http://localhost:3000/produtos`;

	xmlhttp.open("POST", endpoint);
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xmlhttp.send(
		JSON.stringify(produto)
	);
}
