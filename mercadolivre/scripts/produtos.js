function buscarProdutos(descricao) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) { // HTTP STATUS CODE					
			var produtos = JSON.parse(this.responseText);
			mostrarProdutos(produtos);
		}
	};
	
	//JEITO 2 (concatenar - interpolação)
	let endpoint = `http://localhost:3000/produtos?descricao=${descricao}`;

	xhttp.open("GET", endpoint, false); // PREPARADANDO A REQUEST
	xhttp.send(); // REQUEST (REQUISIÇÃO) 			
}

function mostrarProdutos(produtos){
	let ofertas = document.getElementById("ofertas");
	ofertas.innerHTML = "";

	for (const produto of produtos) {

		let templateOferta = 
		`<div class="produto">
			<img src="${produto.imageCapa}" />
			<div>
				<span class="preco">R$ ${produto.precoOriginal}<span class="ofertaPreco">${produto.descontoEmPercentagem} OFF</span></span>
				<span class="parcelas">${produto.parcelasMaximaSemJuros}x <span class="valorParcela">R$ -</span></span>
				<span class="frete">${produto.freteGratis ? "Frete Grátis" : ""} <span class="freteFull">${produto.freteFull ? "FULL" : ""}</span></span>
				<span class="descricao">${produto.descricao}</span>
			</div>					
		</div>`;

		ofertas.innerHTML += templateOferta;		
	}
}