window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
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
  const values={
    amount: 50000,
    years: 5,
    rate: 5
     }
  const amountUI= document.getElementById('loan-amount');
  amountUI.value=values.amount;

  const yearUI= document.getElementById('loan-years');
  yearUI.value= values.years;

  const rateUI=document.getElementById("loan-rate");
  rateUI.value= values.rate;
  
  update();
  
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIvalues= getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIvalues));
  
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyPayment= (values.rate/100)/12;
  const n=Math.floor( values.years *12);

  return(
    (values.amount * monthlyPayment)/
    (1-Math.pow((1+monthlyPayment), -n))
  ).toFixed(2)

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI= document.getElementById('monthly-payment');
  monthlyUI.innerText="$"+monthly;
  
}
