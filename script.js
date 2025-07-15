/* _ _ _ _ _ _ _ _ _ _ CARRINHO _ _ _ _ _ _ _ _ _ _ */
const cartItems = [];
const cartList =
    document.getElementById('cart-items');
    const totalText =
    document.getElementById('total');
/* Converter preço string ("5,99" ou "5.99") para número */
function toNumber(priceStr) {
    // Troca vírgula por ponto e remove qualquer espaço
    return parseFloat(priceStr.replace('.', ',').trim());
}
/* Adiciona evento a todos os botões */
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', () => {
            const card =
            btn.closest('.product-card');
            const name = card.dataset.name;
            const price =
        parseFloat(card.dataset.price); // Usa função de conversão

            cartItems.push({ name, price });
            atualizarCarrinho();
        });
    });

function atualizarCarrinho() {
    cartList.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => {
        const li = 
        document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2).replace('.', ',')}`;
        cartList.appendChild(li);
        total += item.price;
    });

    totalText.textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
}
function finalizarCompra() {
    if (cartItems.length === 0) {
        alert("Seu carrinho está vazio!"); return;
    }

    let mensagem = "*Pedido via Tapioca da Tiça*\n\n";
        mensagem += "Olá! Gostaria de comprar:\n";

    cartItems.forEach(item => {
        mensagem += `- ${item.name} - R$ ${item.price.toFixed(2).replace('.', ',')}\n`; 
    });
    const Total = cartItems.reduce((s, i) => s + i.price, 0);
    mensagem += `\n*Total: R$ ${Total.toFixed(2).replace('.', ',')}*`;
    const numeroWhatsApp  = '5561994152225';
    const url = "https://wa.me/${numeroWhatsaApp}?text=${encodeURIComponent(mensagem)}";
window.open(url, '_blank');
}