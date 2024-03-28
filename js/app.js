let totalGeral = 0;
limpar();



function adicionar() {
    //recuperar valores: nome do produto, quantidade e valor unitário
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade  = document.getElementById('quantidade').value;
    
    //calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitario;
    
    if (!valorUnitario) {
        alert('Produto inválido!');
        return;
    }
    if (quantidade == 0) {
        alert('Quantidade inválida!');
        return;
    }
    
    //adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`;
    document.getElementById('quantidade').value = 0;
    
    //atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
}

function limpar() {
    //limpar o carrinho de compras
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = `R$ 0`;
    totalGeral = 0;
}