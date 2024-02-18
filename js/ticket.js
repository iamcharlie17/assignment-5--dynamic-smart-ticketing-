function bookingDynamic(elementId) {
  // change bg
  const element = document.getElementById(elementId);
  const elementBg = element.classList.add('bg-green-500');

  // remaining seat
  const remainingSeat = document.getElementById('remaining-seat');
  const remainingSeatNo = parseInt(remainingSeat.innerText);
  const newRemainingSeat = remainingSeatNo - 1;
  remainingSeat.innerText = newRemainingSeat;

  // seat count
  const selectedSeat = document.getElementById('selected-seat-no');
  const selectedSeatNumber = parseInt(selectedSeat.innerText);
  const updatedSeatNumber = selectedSeatNumber + 1;
  selectedSeat.innerText = updatedSeatNumber;

  console.log(updatedSeatNumber);
  if (updatedSeatNumber > 4) {
    element.removeAttribute('onclick')
  }


  // ticket info
  const ticketInfoContainer = document.getElementById('ticket-info-container');

  const div = document.createElement('div');
  div.classList.add('flex');
  div.classList.add('justify-between');

  const p1 = document.createElement('p');
  p1.innerText = document.getElementById(elementId).innerText;
  const p2 = document.createElement('p');
  p2.innerText = 'Economy';
  const p3 = document.createElement('p');
  p3.innerText = '550';

  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);

  ticketInfoContainer.appendChild(div);

  // total price
  const totalPriceElement = document.getElementById('total-price');
  const totalPrice = parseInt(totalPriceElement.innerText);
  const totalFinalPrice = totalPrice + 550;
  totalPriceElement.innerText = totalFinalPrice;

  
  // grand total price
  const grandTotalContainer = document.getElementById('grand-total-price');
  grandTotalContainer.innerText = totalFinalPrice;
  
}

function applyCoupon() {
  // apply coupon
  const couponContainer = document.getElementById('coupon');
  const couponText = couponContainer.value;
  if (couponText === 'Couple 20') {
    const grandTotalContainer = document.getElementById('grand-total-price');
    const discount = parseInt(grandTotalContainer.innerText) * .20;
    const discountedPrice = parseInt(grandTotalContainer.innerText) - discount;
    grandTotalContainer.innerText = discountedPrice;

    const couponContainer = document.getElementById('coupon-container');
    couponContainer.classList.add('hidden');
  }
  if (couponText === 'NEW15') {
    const grandTotalContainer = document.getElementById('grand-total-price');
    const discount = parseInt(grandTotalContainer.innerText) * .15;
    const discountedPrice = parseInt(grandTotalContainer.innerText) - discount;
    grandTotalContainer.innerText = discountedPrice;

    const couponContainer = document.getElementById('coupon-container');
    couponContainer.classList.add('hidden');
  }
}













