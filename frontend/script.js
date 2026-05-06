const API = "http://localhost:3000";

async function carregarProdutos() {
  const res = await fetch(API + "/produtos");
  const produtos = await res.json();

  const div = document.getElementById("produtos");

  produtos.forEach(p => {
    div.innerHTML += `<p>${p.nome} - R$ ${p.preco}</p>`;
  });
}

carregarProdutos();