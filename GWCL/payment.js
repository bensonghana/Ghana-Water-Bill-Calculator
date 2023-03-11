var paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack() {

  var handler = PaystackPop.setup({
    key: 'pk_test_xxxxxxxxxx', // Replace this with your Paystack public key
    first_name: document.getElementById("first-name").value,
    last_name: document.getElementById("last-name").value,
    meter_number: document.getElementById("meter-number").value,
    email: document.getElementById("email-address").value,
    amount: document.getElementById("amount").value * 100,
    currency: 'GHS',
    location: document.getElementById("location").value,
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so Paystack API will generate one for you
    // label: "Optional string that replaces customer email"
 
    callback: function(response){
        //this happens after the payment is completed successfully
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    },
    onClose: function(){
        alert('Transaction was not completed, Window closed.');
      },
  });

  handler.openIframe();
}


// SIGN UP ON PAYSTACK.COM TO GET A PUBLIC KEY FOR THE PAYMENT SYSTEM TO WORK AND RECEIVE PAYMENT
// FROM THE SITE. PAYMENT CAN BE DONE BY MOMO OR CARD PAYMENTS.