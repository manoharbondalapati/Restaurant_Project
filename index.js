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

    // document.getElementById('form').style.display = 'none';



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
// const sc = ScrollReveal({origin:'top',distance:"40px",duration:2500});

// // Use the reveal method
// sc.reveal(`.why-section-card,.menu-card, .menu-items, .thank-section-img,.thank-section-heading,.thank-section-para,.thank-section-button,.reservation,.about,.address,.Quick .footer-section1-part,.copyright,i,.svgicon`, { interval: 200 });
  

// const sc1 = ScrollReveal({origin:'top',distance:"40px",duration:2500});

// // Use the reveal method
// sc1.reveal(`.carousel-matter`, { interval: 500 });
   


  