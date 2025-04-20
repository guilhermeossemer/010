document.querySelector('.btn-order').addEventListener('click', function () {
    // Pega o preço
    const valor = document.querySelector('.price-product').innerText.trim();

    // Pega a descrição do produto
    const descricao = document.querySelector('.description-product').innerText.trim();

    // Pega o que a pessoa escreveu no textarea
    const observacoes = document.querySelector('.textarea').value.trim();

    // Monta a mensagem para o WhatsApp
    const mensagem = `Olá! Gostaria de fazer um pedido:\n\n*Produto:* ${descricao}\n*Valor:* ${valor}` + (observacoes ? `\n*Observações:* ${observacoes}` : '');

    // Número de WhatsApp (substitua pelo seu número real)
    const numeroWhatsApp = "5547992384291";

    // Cria a URL do WhatsApp
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    // Abre o WhatsApp em uma nova aba
    window.open(url, '_blank');
});

const produtos = {
    necessaire: {
        nome: "Necessaire",
        preco: "R$ 49,90",
        descricao: "Necessaire feita à mão, com tecido 100% algodão, prática para viagens.",
        imagens: [
            "img/produtos/necessaire-removebg-preview.png",
            "img/produtos/necessaire-removebg-preview.png"
        ]
    },
    bolsa: {
        nome: "Bolsa Estilo Praia",
        preco: "R$ 99,90",
        descricao: "Bolsa grande, leve e estilosa, perfeita para praia ou piscina.",
        imagens: [
            "img/produtos/bolsa01 - transparente.png",
            "img/produtos/bolsa01 - transparente.png",
            "img/produtos/bolsa01 - transparente.png"
        ]
    }
};

function getProdutoId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

function carregarProduto() {
    const id = getProdutoId();
    const produto = produtos[id];

    if (!produto) {
        document.querySelector("main").innerHTML = "<p>Produto não encontrado.</p>";
        return;
    }

    document.querySelector(".h1").textContent = produto.nome;
    document.querySelector(".price-product").textContent = produto.preco;
    document.querySelector(".description-product").textContent = produto.descricao;

    const carouselInner = document.querySelector(".carousel-inner");
    const indicators = document.querySelector(".carousel-indicators");

    carouselInner.innerHTML = "";
    indicators.innerHTML = "";

    produto.imagens.forEach((img, index) => {
        const active = index === 0 ? "active" : "";

        carouselInner.innerHTML += `
        <div class="carousel-item ${active}">
          <img src="${img}" class="d-block w-100 product-img-carousel product-img-carousel-detail" alt="Imagem ${index + 1}">
        </div>
      `;

        indicators.innerHTML += `
        <button type="button" data-bs-target="#carouselProdutos" data-bs-slide-to="${index}" class="${active}"
          aria-label="Slide ${index + 1}"></button>
      `;
    });
}

document.addEventListener("DOMContentLoaded", carregarProduto);
