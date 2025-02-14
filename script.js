const seats = document.querySelectorAll('.seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const purchaseButton = document.getElementById('purchase');

let ticketPrice = +movieSelect.value; // Obtém o preço inicial

// Atualiza o preço ao trocar o filme
movieSelect.addEventListener('change', () => {
    ticketPrice = +movieSelect.value;
    updateCount();
});

// Selecionar e desselecionar assentos
seats.forEach(seat => {
    seat.addEventListener('click', () => {
        if (!seat.classList.contains('occupied')) {
            seat.classList.toggle('selected');
            updateCount();
        }
    });
});

// Atualiza a quantidade de ingressos e o total
function updateCount() {
    const selectedSeats = document.querySelectorAll('.seat.selected').length;
    count.innerText = selectedSeats;
    total.innerText = selectedSeats * ticketPrice;
}

// Finaliza a compra
purchaseButton.addEventListener('click', () => {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    
    if (selectedSeats.length === 0) {
        alert("Por favor, selecione pelo menos um assento.");
    } else {
        alert(`Compra finalizada! Você comprou ${selectedSeats.length} ingresso(s) por R$${selectedSeats.length * ticketPrice}.`);
        
        // Marcar os assentos como ocupados e limpar seleção
        selectedSeats.forEach(seat => {
            seat.classList.remove('selected');
            seat.classList.add('occupied');
        });
        
        updateCount();
    }
});
