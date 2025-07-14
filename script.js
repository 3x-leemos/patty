const cartItems = [];
const cartList =
    document.getElementById("cart-items");
    const totalText =
    document.getElementById("total");

    document.querySelectorAll(".add-to-cart").forEach(button =>
    {
        button.addEventListener("click", function()
        {
            const card = this.parentElement;
            const name = card.dataset.name;
            const price =
        parseFloat(card.dataset.price);

            cartItems.push({ name, price });
            atualizarCarrinho();
        });
    });

function atualizarCarrinho() {
    cartList.innerHTML = "";
    let total = 0;

    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = '${item.name} - R$ ${item.price.toFixed(2)}';
        cartList.appendChild(li);
        total +=item.price;
    });

    totalText.textContent = 'Total: R$ ${total.toFixed(2)}'; 
}
function finalizarCompra() {
    if (cartItems.length === 0) {
        alert("Seu carrinho está vazio!"); return;
    }

    let mensagem = "*Pedido via Tapioca da Tiça*\n\n";
        mensagem += "Olá! Gostaria de comprar:\n";
    cartItems.forEach(item => {
        mensagem += '° ${item.name} - R$ ${item.price.toFixed(2)}\n'; 
    });
    const Total = cartItems.reduce((acc, item) => acc + item.price, 0);
    mensagem += 'Total: R$ ${total.toFixed(2)}';
    const numeroWhatsApp  = "5561994152225";
    const url = 'https://wa.me/${numeroWhatsaApp}?text=${encodeURIComponent(mensagem)}';
    window.open(url, "_blank");
}