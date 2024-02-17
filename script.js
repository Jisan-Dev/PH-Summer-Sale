const cards = document.querySelectorAll('.card');
let counter = 0;
// totalPrice
let total = 0;
const discountAmountContainer = document.getElementById('discountPrice');
const couponInput = document.getElementById('input-field');
const totalContainer = document.getElementById('total');
const netTotalContainer = document.getElementById('netTotal');
const applyBtn = document.getElementById('apply-btn');

for (let card of cards) {
  card.addEventListener('click', () => {
    const cardTitle = card.querySelector('h3').innerText;
    const cardTextPrice = card.querySelector('span').innerText.split(' ')[1];
    const cardPrice = parseFloat(cardTextPrice);
    const titleContainer = document.getElementById('title-container');

    const p = document.createElement('p');
    p.classList.add('side-product-title');
    p.innerText = `${++counter}. ${cardTitle}`;
    titleContainer.appendChild(p);
    // total price count
    total += cardPrice;
    const totalPrice = total.toFixed(2);
    totalContainer.innerText = totalPrice;

    // activate the purchase button
    document.getElementById('btn-purchase').removeAttribute('disabled');
  });
}

applyBtn.addEventListener('click', () => {
  if (couponInput.value.toUpperCase() === 'SELL200' && totalContainer.innerText >= 200) {
    calcDiscount(discountAmountContainer, netTotalContainer, totalContainer);
  }
});

const calcDiscount = (discountContainer, netTotalContainer, totalContainer) => {
  const discountAmountCalc = (totalContainer.innerText * 0.2).toFixed(2);
  discountContainer.innerText = discountAmountCalc;
  netTotalContainer.innerText = (totalContainer.innerText - parseFloat(discountAmountCalc)).toFixed(2);
};

// modal control on purchase
const showModal = () => {
  document.getElementById('modal-container').classList.remove('hidden');
  total = 0;
  totalContainer.innerText = '';
  discountAmountContainer.innerText = '';
  netTotalContainer.innerText = '';
  couponInput.value = '';

  counter = 0;
  const sideTitle = document.querySelectorAll('.side-product-title');
  for (let title of sideTitle) {
    title.remove();
  }
};
const hideModal = () => {
  document.getElementById('modal-container').classList.add('hidden');
  document.getElementById('btn-purchase').setAttribute('disabled', 'true');
};
