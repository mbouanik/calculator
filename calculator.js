window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update()
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {amount:5000, rate:4.15, years: 5}
  const amountUI = document.querySelector("#loan-amount");
  amountUI.value = values.amount;
  const yearsUI = document.querySelector("#loan-years");
  yearsUI.value = values.years;
  const rateUI = document.querySelector("#loan-rate");
  rateUI.value = values.rate;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = getCurrentUIValues()
  updateMonthly(calculateMonthlyPayment(values))

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const p = values.amount
  const i = (values.rate/100)/12
  const n = values.years * 12
 const monthlyPayment = (p * i ) / (1 -  (1 + i)**-(n))
 return monthlyPayment.toFixed(2)
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.querySelector("#monthly-payment");
  monthlyUI.innerText = `$${monthly}`;
}
