const cards = document.querySelectorAll('.card');
let counter = 0;
// totalPrice
let total = 0;

for (let card of cards) {
  card.addEventListener('click', () => {
    const cardTitle = card.querySelector('h3').innerText;
    const cardTextPrice = card.querySelector('span').innerText.split(' ')[1];
    const cardPrice = parseFloat(cardTextPrice);
    const titleContainer = document.getElementById('title-container');
    const totalContainer = document.getElementById('total');

    const p = document.createElement('p');
    p.innerText = `${++counter}. ${cardTitle}`;
    titleContainer.appendChild(p);
    // total price count
    total += cardPrice;
    totalContainer.innerText = total.toFixed(2);
  });
}
