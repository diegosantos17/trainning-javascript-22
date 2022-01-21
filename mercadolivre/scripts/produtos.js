function buscarProdutos() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) { // HTTP STATUS CODE					
			var produtos = JSON.parse(this.responseText);
			mostrarProdutos(produtos);
		}
	};
	
	//JEITO 2 (concatenar - interpolação)
	let endpoint = `http://localhost:3000/produtos`;

	xhttp.open("GET", endpoint, false); // PREPARADANDO A REQUEST
	xhttp.send(); // REQUEST (REQUISIÇÃO) 			
}

function mostrarProdutos(produtos){
	let produtosView = document.getElementById("produtosView");

	for (const produto of produtos) {
		produtosView.innerHTML += produto.descricao + "<br>";		
	}
}