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
    if (cartItems.length === 0) {alert("Seu carrinho está vazio!"); return;
    }

    let mensagem = "Olá! Gostaria de comprar:\n";
    cartItems.forEach(item => {
        mensagem += '° ${item.name} - R${item.price.toFixed(2)}\n'; 
    });
    mensagem += totalText.textContent;
    
    alert(mensagem);
}