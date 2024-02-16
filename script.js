const cards = document.querySelectorAll('.card');
let counter = 0;
// totalPrice
let total = 0;
const discountAmount = document.getElementById('discountPrice');
const couponInpValue = document.getElementById('input-field').value;
const totalContainer = document.getElementById('total');
const netTotal = document.getElementById('netTotal');

for (let card of cards) {
  card.addEventListener('click', () => {
    const cardTitle = card.querySelector('h3').innerText;
    const cardTextPrice = card.querySelector('span').innerText.split(' ')[1];
    const cardPrice = parseFloat(cardTextPrice);
    const titleContainer = document.getElementById('title-container');

    const p = document.createElement('p');
    p.innerText = `${++counter}. ${cardTitle}`;
    titleContainer.appendChild(p);
    // total price count
    total += cardPrice;
    const totalPrice = total.toFixed(2);
    totalContainer.innerText = totalPrice;

    if (totalContainer.innerText > 200) {
      const discountAmountCalc = (totalPrice * 0.2).toFixed(2);
      discountAmount.innerText = discountAmountCalc;
      // total -= discountAmount;
      // totalContainer.innerText = discountAmount;
      netTotal.innerText = totalPrice - parseFloat(discountAmountCalc);
    }
  });
}
