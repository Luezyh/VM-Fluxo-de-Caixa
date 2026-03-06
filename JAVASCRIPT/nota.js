const params = new URLSearchParams(window.location.search);

const nome = params.get("nome");
const cpf = params.get("cpf");
const telefone = params.get("telefone");
const carrinho = JSON.parse(decodeURIComponent(params.get("carrinho")))
const wop = params.get("wop");

console.log(nome, cpf, telefone, wop, carrinho)


const tabela = document.querySelector(".produtos tbody");
tabela.innerHTML = "";
let total = 0;
carrinho.forEach(produto => {
    tabela.innerHTML += `
        <tr>
            <td>${produto.quantidade}</td>
            <td>${produto.nome}</td>
            <td>UN</td>
            <td>${produto.preco.toFixed(2)}</td>
            <td>${produto.preco_total.toFixed(2)}</td>
        </tr>
    `;
    total += produto.preco_total;
});
document.querySelector(".total span").textContent = total.toFixed(2);
document.querySelector(".pgto").textContent = "Forma de pagamento:"+wop;
document.querySelector("#nome").textContent = "Nome: "+nome;
document.querySelector("#cpf").textContent = "CPF: "+cpf;
document.querySelector("#telefone").textContent = "Telefone: "+telefone;