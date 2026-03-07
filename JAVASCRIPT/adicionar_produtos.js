const params = new URLSearchParams(window.location.search);

const nome = params.get("nome");
const cpf = params.get("cpf");
const telefone = params.get("telefone");

let carrinho = [];
let carrinho_preco = []
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach(c => c.classList.remove('selecionado'));

    card.classList.add('selecionado');
  });
});

function Add(nome, preco, img) {
    const carrinholista = document.querySelector(".carrinho-lista");

    if (carrinho.includes(nome)){
    }else{

        let produto = document.createElement("div")
        produto.classList.add("produto")
        produto.innerHTML = `
        <img src="${img}">
        <p>${nome}</p>
        <p class = "preco">${preco}</p>
        <input class = "quantidade" type="number" value="1" min="1">
        <button onclick="Remover(this, '${nome}')" class="remove">-</button>
        `
        carrinholista.appendChild(produto);
        
        carrinho.push(nome);
    }
    console.log(carrinho);
}
function Remover(botao, nome){
    botao.parentElement.remove();
    carrinho = carrinho.filter(item => item !== nome);
    console.log(carrinho);
}
function Fechar_Pagamento() {
    const tela = document.querySelector(".base");
    tela.style.display = "none";
}
function Selecionar_Pagamento() {
    const tela = document.querySelector(".base");
    tela.style.display = "flex";

    const quantidades = document.querySelectorAll(".quantidade");
    const precos = document.querySelectorAll(".preco");

    carrinho.forEach((nomeEl, index) => {
        let nome = nomeEl;
        let preco = Number(precos[index].textContent.replace("R$", "").replace(",", "."));
        let quantidade = Number(quantidades[index].value);
        let total = preco * quantidade;
        carrinho_preco.push({
            nome: nome,
            preco: preco,
            quantidade: quantidade,
            preco_total: total
        });
    });

    console.log(carrinho_preco)
}
function Limpar_Carrinho() {
    const carrinholista = document.querySelector(".carrinho-lista");
    carrinholista.innerHTML = "";
    carrinho = [];
    console.log(carrinho);
}
function Finalizar_Compra(){
    const wop = document.querySelector(".selecionado p").textContent;
    let dados = encodeURIComponent(JSON.stringify(carrinho_preco));

    window.location.href = `nota.html?nome=${nome}&cpf=${cpf}&telefone=${telefone}&carrinho=${dados}&wop=${wop}`;
}