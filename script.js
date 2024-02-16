const cards = document.querySelectorAll('.card');
let counter = 0;

for (let card of cards) {
  card.addEventListener('click', () => {
    const cardTitle = card.querySelector('h3').innerText;
    const cardPrice = card.querySelector('span').innerText;
    const titleContainer = document.getElementById('title-container');

    const p = document.createElement('p');
    p.innerText = `${++counter}. ${cardTitle}`;
    titleContainer.appendChild(p);
  });
}
