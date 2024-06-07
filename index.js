function submitOrder(event){
  event.preventDefault();
  // document.getElementById('formcontainer').style.display = 'none'

  const VegStarters = document.forms["submitForm"]["VegStarters"].value;
  const NonVegStarters = document.forms["submitForm"]["NonVegStarters"].value;
  const Biryani = document.forms["submitForm"]["Biryani"].value;
  const Salads = document.forms["submitForm"]["Salads"].value;
  const Desserts = document.forms["submitForm"]["Desserts"].value;
  const Chainese= document.forms["submitForm"]["Chainese"].value;
  const  address = document.forms["submitForm"]["address"].value;
  const paymentMethod = document.forms["submitForm"]["paymentMethod"].value;
   
  if(VegStarters ===`Select items`)
  {
    alert('select veg items');
    return false;
  }
  if(NonVegStarters ===`Select items`)
  {
    alert('select nonveg items');
    return false;
  }
  if(Biryani ===`Select items`)
  {
    alert('select biryani items');
    return false;
  }
  if(Salads ===`Select items`)
  {
    alert('select salad items');
    return false;
  }
  if(Desserts ===`Select items`)
  {
    alert('select dessert items');
    return false;
  }
  if(Chainese===`Select items`)
  {
    alert('select chaninese item')
  }
  if( address ==='')
  {
    alert('select address');
    return false;
  }
  if(paymentMethod ===`Select one option`)
  {
    alert('select payment option');
    return false;
  }
  Swal.fire({
    title: 'Order Submitted!',
    text: ' Your order will be delivered within 30 minutes.\nThank you!',
    icon: 'success',
  });
  document.getElementById('formContainer').style.display = 'none';
  
  return true;

  
}

var togglerButton = document.getElementById('toggler-button');
var closeIcon = document.getElementById('close-icon');

// Add click event listeners to the buttons
togglerButton.addEventListener('click', toggleButtons);
closeIcon.addEventListener('click', toggleButtons);

// Function to toggle the buttons
function toggleButtons() {
    // Toggle the innerHTML of the buttons
    var temp = togglerButton.innerHTML;
    togglerButton.innerHTML = closeIcon.innerHTML;
    closeIcon.innerHTML = temp;
}

// for menu icon action
function toggleRotation() {
    var menuIcon = document.getElementById('menu-icon');
    menuIcon.classList.toggle('rotate-icon');
}




// dropdown and rotation
function toggler(element) {
    var dropdown = element.querySelector('.content');
    if (dropdown.classList.contains('show')) {
        // Dropdown is closing
        toggleRotation();
    } else {
        // Dropdown is opening
        toggleRotation();
    }
}

//view-menu
document.getElementById('showmenuBtn').addEventListener('click', function() {
    document.getElementById('displaymenu').classList.remove('viewmenu');
  });

  document.getElementById('closemenuBtn').addEventListener('click', function() {
    document.getElementById('displaymenu').classList.add('viewmenu');
  });

// order form

document.getElementById('showFormBtn').addEventListener('click', function() {
    document.getElementById('formContainer').classList.remove('hidden');
  });

  document.getElementById('closeFormBtn').addEventListener('click', function() {
    document.getElementById('formContainer').classList.add('hidden');
  });

  

// reservationform
function validateForm(event) {
  event.preventDefault()
  
  // Retrieve values from input fields
  let name = document.getElementById("nameInput").value;
  let contact = document.getElementById("contactInput").value;
  let email = document.getElementById("Email").value;
  let bookDate = document.getElementById("bookDate").value;
  let bookTime = document.getElementById("bookTime").value;
  let numberOfPeople = document.getElementById("numberOfPeople").value;

  // Validation for the "name" field
  if (name.trim() === "") {
      alert("Please enter your name");
      return;
  }

 
  if (contact.trim() === "") {
      alert("Please enter your contact number");
      return;
  } else if (!isValidContact(contact)) {
      alert("Please enter a valid 10-digit contact number");
      return;
  }

 
  if (email.trim() === "") {
      alert("Please enter your email address");
      return;
  } else if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
  }

  
  if (bookDate.trim() === "") {
      alert("Please select a booking date");
      return;
  }

 
  if (bookTime.trim() === "") {
      alert("Please select a booking time");
      return;
  }

 
  if (numberOfPeople.trim() === "" || isNaN(numberOfPeople) || parseInt(numberOfPeople) <= 0) {
      alert("Please enter a valid number of people (a positive integer)");
      return;
  }

  Swal.fire({
    title: 'Success!',
    text: 'Your table booked successfully!',
    icon: 'success',
  });
 document.getElementById('reset').reset();
}

// Helper functions for contact and email validation (same as before)...

function isValidContact(contact) {
  var contactRegex = /^\d{10}$/;
  return contactRegex.test(contact);
}

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


// gift vocher
function showVoucher() {
    document.getElementById('voucher').style.display = 'block';
  }

  function hideVoucher() {
    document.getElementById('voucher').style.display = 'none';
  }
// on mouse over
function mouseout(obj)
{
    obj.innerHTML ="Click me";
   
}

  //scroll intervel
// Initialize ScrollReveal
const sc = ScrollReveal({origin:'top',distance:"40px",duration:2500});

// Use the reveal method
sc.reveal(`.why-section-card,.menu-card, .menu-items, .thank-section-img,.thank-section-heading,.thank-section-para,.thank-section-button,.reservation,.about,.address,.Quick .footer-section1-part,.copyright,i,.svgicon`, { interval: 200 });
  

const sc1 = ScrollReveal({origin:'top',distance:"40px",duration:2500});

// Use the reveal method
sc1.reveal(`.carousel-matter`, { interval: 500 });
  
//payment
document.querySelectorAll('.menu-section-button').forEach(button => {
  button.addEventListener('click', async () => {
    const response = await fetch('https://restaurant-project-26gr.onrender.com/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const session = await response.json();

    const stripe = Stripe('pk_test_51PKx8QSJqtr5veewViq9KUGKAq7YkAzpltvEP5YHpViyLssL1RJEZysyxxHRqpxXeSM6ObmCYOpSBM2nDk1I2Iy400r1UwxMJB'); // Replace with your Stripe public key
    const { error } = await stripe.redirectToCheckout({ sessionId: session.id });

    if (error) {
      Swal.fire({
        title: 'Payment failed',
        text: error.message,
        icon: 'error',
      });
    }
  });
});

// Check for success or cancel parameters in the URL
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('success')) {
  Swal.fire({
    title: 'Order Placed!',
    text: 'Payment Success',
    icon: 'success'
  });
} else if (urlParams.has('cancel')) {
  Swal.fire({
    title: 'Cancelled',
    text: 'You cancelled the transaction.',
    icon: 'error'
  });
}
