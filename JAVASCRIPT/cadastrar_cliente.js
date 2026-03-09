const inputTelefone = document.getElementById('telefone');

inputTelefone.addEventListener('input', (event) => {
    let valor = event.target.value.replace(/\D/g, ""); // Remove tudo que não é número
    
    // Aplica a formatação progressivamente
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2"); 
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");    
    
    event.target.value = valor;
});

const inputCpf = document.getElementById('cpf');

inputCpf.addEventListener('input', (event) => {
    let valor = event.target.value.replace(/\D/g, ""); // Remove letras e símbolos

    // Aplica a máscara passo a passo
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");       // Adiciona o primeiro ponto
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");       // Adiciona o segundo ponto
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Adiciona o traço

    event.target.value = valor;
});