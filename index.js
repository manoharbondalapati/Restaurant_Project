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
// order form

document.getElementById('showFormBtn').addEventListener('click', function() {
    document.getElementById('formContainer').classList.remove('hidden');
  });

  document.getElementById('closeFormBtn').addEventListener('click', function() {
    document.getElementById('formContainer').classList.add('hidden');
  });

  
  document.getElementById('submitOrder').addEventListener('click', function () {
    var isValid = true;

    
    var selectedCategories = ['VegStarters', 'NonVegStarters', 'Biryani\'s','Salad\'s', 'Dessert\'s', 'Chainese'];
    var isCategorySelected = false;

    for (var i = 0; i < selectedCategories.length; i++)
     {

        var category = document.getElementById(selectedCategories[i]).value;
        console.groupCollapsed("food")
        console.log(selectedCategories[i])
        console.log(category)
        console.groupEnd()
        if (category !== 'Select item\'s') {
            isCategorySelected = true;
            break;
        }
    }

    if (!isCategorySelected) {
        isValid = false;
        alert('Please select at least one item category.');
    }

    
    var address = document.getElementById('address').value;
    if (!address.trim()) {
        isValid = false;
        alert('Please enter your delivery address.');
    }

   
    var paymentMethod = document.getElementById('paymentMethod').value;
    if (paymentMethod === 'Select one option') {
        isValid = false;
        alert('Please select your payment option.');
    }

    
    if (isValid) {
        alert('Your order has been taken successfully!');
      
    }
  });






// reservationform

function validateForm() {
    // Retrieve values from input fields
    var name = document.getElementById("nameInput").value;
    var contact = document.getElementById("contactInput").value;
    var email = document.getElementById("Email").value;
   

    // Validation for the "name" field
    if (name.trim() === "") {
        alert("Please enter your name");
        return;
    }

    
    if (contact.trim() === "") {
        alert("Please enter your contact number");
        return;
    }

    
    if (email.trim() === "") {
        alert("Please enter your email address");
        return;
    } else if (!isValidEmail(email)) {
        alert("Please enter a valid email address");
        return;
    }

   
   
    alert("Form submitted successfully!");
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
   


  