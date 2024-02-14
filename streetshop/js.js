
const checkboxes = document.querySelectorAll('.check');

checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    const flexDiv = this.parentElement; // Get the parent div with class "flex"
    const svgDown = flexDiv.querySelector('.down');
    const svgUp = flexDiv.querySelector('.up');
    const dropdown = flexDiv.nextElementSibling; // Select the dropdown div

    if (this.checked) {
      dropdown.style.display = 'block';
      svgDown.style.display = 'none';
      svgUp.style.display = 'inline-block';
    } else {
      dropdown.style.display = 'none';
      svgDown.style.display = 'inline-block';
      svgUp.style.display = 'none';
    }
  });
});

// Get the navbar links element
const navbarLinks = document.getElementById('men');
const navbarLinks2 = document.getElementById('women');
const navbarLinks4 = document.getElementById('collections');
const navbarLinks5 = document.getElementById('drop');
const navbarLinks6 = document.getElementById('sale');
const navbarSearch = document.getElementById('search')
const navbarUser = document.getElementById('user');
const navbarCart = document.getElementById('cart');


// Get the men-dropdown element
const menDropdown = document.querySelector('.men-dropdown');
const womenDropdown = document.querySelector('.women-dropdown')
const collectionsDropdown = document.querySelector('.collections-dropdown');
const dropDropdown = document.querySelector('.drop-dropdown');
const saleDropdown = document.querySelector('.sale-dropdown');
const searchDropdown = document.querySelector('.search-box');


// Add event listener for mouseenter event on navbar links
navbarLinks.addEventListener('mouseenter', function() {
  // Change the background color of men-dropdown
  womenDropdown.style.display = 'none';
  collectionsDropdown.style.display = 'none';
  saleDropdown.style.display = 'none';
  dropDropdown.style.display = 'none';
  navbarSearch.style.borderBottom = 'none';
  navbarLinks2.style.borderBottom = 'none';
  navbarLinks4.style.borderBottom = 'none';
  navbarLinks5.style.borderBottom = 'none';
  navbarLinks6.style.borderBottom = 'none';
  navbarLinks.style.borderBottom = '0.5px solid black';
  searchDropdown.style.display = 'none';
  menDropdown.style.display = 'flex';
});

navbarLinks2.addEventListener('mouseenter', function() {
  // Change the background color of men-dropdown
  menDropdown.style.display = 'none';
  collectionsDropdown.style.display = 'none';
  saleDropdown.style.display = 'none';
  dropDropdown.style.display = 'none';
  navbarSearch.style.borderBottom = 'none';
  navbarLinks.style.borderBottom = 'none';
  navbarLinks4.style.borderBottom = 'none';
  navbarLinks5.style.borderBottom = 'none';
  navbarLinks6.style.borderBottom = 'none';
  navbarLinks2.style.borderBottom = '0.5px solid black';
  searchDropdown.style.display = 'none';
  womenDropdown.style.display = 'flex';
});


navbarLinks4.addEventListener('mouseenter', function() {
  // Change the background color of men-dropdown
  menDropdown.style.display = 'none';
  womenDropdown.style.display = 'none';
  saleDropdown.style.display = 'none';
  dropDropdown.style.display = 'none';
  navbarSearch.style.borderBottom = 'none';
  navbarLinks.style.borderBottom = 'none';
  navbarLinks2.style.borderBottom = 'none';
  navbarLinks5.style.borderBottom = 'none';
  navbarLinks6.style.borderBottom = 'none';
  navbarLinks4.style.borderBottom = '0.5px solid black';
  searchDropdown.style.display = 'none';
  collectionsDropdown.style.display = 'flex';
});
navbarLinks5.addEventListener('mouseenter', function() {
  // Change the background color of men-dropdown
  menDropdown.style.display = 'none';
  womenDropdown.style.display = 'none';
  collectionsDropdown.style.display = 'none';
  saleDropdown.style.display = 'none';
  navbarSearch.style.borderBottom = 'none';
  navbarLinks.style.borderBottom = 'none';
  navbarLinks2.style.borderBottom = 'none';
  navbarLinks6.style.borderBottom = 'none';
  navbarLinks4.style.borderBottom = 'none';
  navbarLinks5.style.borderBottom = '0.5px solid black';
  searchDropdown.style.display = 'none';
  dropDropdown.style.display = 'flex';
});
navbarLinks6.addEventListener('mouseenter', function() {
  // Change the background color of men-dropdown
  menDropdown.style.display = 'none';
  womenDropdown.style.display = 'none';
  collectionsDropdown.style.display = 'none';
  dropDropdown.style.display = 'none';
  navbarSearch.style.borderBottom = 'none';
  navbarLinks.style.borderBottom = 'none';
  navbarLinks2.style.borderBottom = 'none';
  navbarLinks6.style.borderBottom = 'none';
  navbarLinks4.style.borderBottom = 'none';
  navbarLinks5.style.borderBottom = 'none';
  navbarLinks6.style.borderBottom = '0.5px solid black';
  searchDropdown.style.display = 'none';
  saleDropdown.style.display = 'flex';
});



navbarSearch.addEventListener('mouseenter' , function() {
  menDropdown.style.display = 'none';
  womenDropdown.style.display = 'none';
  collectionsDropdown.style.display = 'none';
  dropDropdown.style.display = 'none';
  navbarSearch.style.borderBottom = 'none';
  navbarLinks.style.borderBottom = 'none';
  navbarLinks2.style.borderBottom = 'none';
  navbarLinks6.style.borderBottom = 'none';
  navbarLinks4.style.borderBottom = 'none';
  navbarLinks5.style.borderBottom = 'none';
  navbarLinks6.style.borderBottom = 'none';
  saleDropdown.style.display = 'none';
  navbarUser.style.borderBottom = 'none';
  navbarCart.style.borderBottom = 'none';
  navbarSearch.style.borderBottom = '0.5px solid black';
  searchDropdown.style.display = 'flex';
  const inputElement = searchDropdown.querySelector('input[type="text"]');
  if (inputElement) {
    inputElement.focus(); // Set focus to the input element
  }

});



navbarUser.addEventListener('mouseenter' , function() {
  menDropdown.style.display = 'none';
  womenDropdown.style.display = 'none';
  collectionsDropdown.style.display = 'none';
  dropDropdown.style.display = 'none';
  navbarSearch.style.borderBottom = 'none';
  navbarLinks.style.borderBottom = 'none';
  navbarLinks2.style.borderBottom = 'none';
  navbarLinks6.style.borderBottom = 'none';
  navbarLinks4.style.borderBottom = 'none';
  navbarLinks5.style.borderBottom = 'none';
  navbarLinks6.style.borderBottom = 'none';
  saleDropdown.style.display = 'none';
  navbarSearch.style.borderBottom = 'none';
  searchDropdown.style.display = 'none';
  navbarCart.style.borderBottom = 'none';
  navbarUser.style.borderBottom = '0.5px solid black';
});


navbarUser.addEventListener('mouseleave' , function() {
  navbarUser.style.borderBottom = 'none';
});



navbarCart.addEventListener('mouseenter' , function() {
  menDropdown.style.display = 'none';
  womenDropdown.style.display = 'none';
  collectionsDropdown.style.display = 'none';
  dropDropdown.style.display = 'none';
  navbarSearch.style.borderBottom = 'none';
  navbarLinks.style.borderBottom = 'none';
  navbarLinks2.style.borderBottom = 'none';
  navbarLinks6.style.borderBottom = 'none';
  navbarLinks4.style.borderBottom = 'none';
  navbarLinks5.style.borderBottom = 'none';
  navbarLinks6.style.borderBottom = 'none';
  saleDropdown.style.display = 'none';
  navbarSearch.style.borderBottom = 'none';
  searchDropdown.style.display = 'none';
  navbarUser.style.borderBottom = 'none';
  navbarCart.style.borderBottom = '0.5px solid black';
});


navbarCart.addEventListener('mouseleave' , function() {
  navbarCart.style.borderBottom = 'none';
});





// Add event listener for mouseleave event on navbar links
menDropdown.addEventListener('mouseenter', function() {
  // Reset the background color of men-dropdown
  menDropdown.style.display = 'flex';
});

menDropdown.addEventListener('mouseleave', function() {
  // Reset the background color of men-dropdown
  menDropdown.style.display = 'none';
  navbarLinks.style.borderBottom = 'none';
});
womenDropdown.addEventListener('mouseenter', function() {
  // Reset the background color of men-dropdown
  womenDropdown.style.display = 'flex';
});

womenDropdown.addEventListener('mouseleave', function() {
  // Reset the background color of men-dropdown
  womenDropdown.style.display = 'none';
  navbarLinks2.style.borderBottom = 'none';
});

collectionsDropdown.addEventListener('mouseenter', function() {
  // Reset the background color of men-dropdown
  collectionsDropdown.style.display = 'flex';
});

collectionsDropdown.addEventListener('mouseleave', function() {
  // Reset the background color of men-dropdown
  navbarLinks4.style.borderBottom = 'none';
  collectionsDropdown.style.display = 'none';
});

dropDropdown.addEventListener('mouseenter', function() {
  // Reset the background color of men-dropdown
  dropDropdown.style.display = 'flex';
});

dropDropdown.addEventListener('mouseleave', function() {
  // Reset the background color of men-dropdown
  navbarLinks5.style.borderBottom = 'none';
  dropDropdown.style.display = 'none';
});

saleDropdown.addEventListener('mouseenter', function() {
  // Reset the background color of men-dropdown
  saleDropdown.style.display = 'flex';
});

saleDropdown.addEventListener('mouseleave', function() {
  // Reset the background color of men-dropdown
  navbarLinks6.style.borderBottom = 'none';
  saleDropdown.style.display = 'none';
});


searchDropdown.addEventListener('mouseenter', function() {
  // Reset the background color of men-dropdown
  searchDropdown.style.display = 'flex';
});

searchDropdown.addEventListener('mouseleave', function() {
  // Reset the background color of men-dropdown
  navbarSearch.style.borderBottom = 'none';
  searchDropdown.style.display = 'none';
});


const emailInput = document.getElementById('emailInput');
const emailSubmit = document.getElementById('email-submit');
const subscribeForm = document.getElementById('subscribeForm');
const subscribed = document.querySelector('.subscribed');


emailInput.addEventListener('input', function() {
  if (emailInput.value === '') {
    emailSubmit.setAttribute("disabled", "true");
    emailSubmit.classList.remove('valid');
  } else if (emailInput.validity.valid) {
    emailSubmit.classList.add('valid');
    emailSubmit.removeAttribute("disabled");
  } else {
    emailSubmit.setAttribute("disabled", "true");
    emailSubmit.classList.remove('valid');
  }
});

subscribeForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior


  subscribeForm.style.display = 'none';
  subscribed.style.display = 'flex';
});

