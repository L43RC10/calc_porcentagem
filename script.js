const elValor = document.getElementById("valor");
const elPorcentagem = document.getElementById("porcentagem");
const btnCalculate = document.getElementById("btn_calculate");
const resposta = document.getElementById("resposta");

btnCalculate.addEventListener("click", (e) => {
    e.preventDefault();
    const valor = Number(elValor.value);
    const porcentagem = Number(elPorcentagem.value);

    if(valor == "" || isNaN(valor) || (porcentagem == "" || isNaN(porcentagem))){
        alert('Preencha os campos com números...');
        return;
    }

    const resultado = valor * (porcentagem / 100);
    const total = valor *(1 + porcentagem/100);


    // ou se fosse o caso de alterar uma class: resposta.classList.remove('nome_clas)
    resposta.style.display = 'block';

    resposta.textContent = `${porcentagem}% de ${valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} é R$${resultado.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}. A soma do valor mais a porcentagem é ${total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`;
    
    // resposta.textContent = `${porcentagem}% de R$${valor.toFixed(2).replace('.',',')} é R$${resultado.toFixed(2).replace('.',',')}. A soma do valor mais a porcentagem é R$${total.toFixed(2).replace('.',',')}`;

});