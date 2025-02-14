const seats = document.querySelectorAll('.seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const ticketPrice = 20;

seats.forEach(seat => {
    seat.addEventListener('click', () => {
        if (!seat.classList.contains('occupied')) {
            seat.classList.toggle('selected');
            updateCount();
        }
    })
})

function updateCount() {
    const selectedSeats = document.querySelectorAll('.seat.selected').length;
    count.innerText = selectedSeats;
    total.innerText = selectedSeats * ticketPrice;
}