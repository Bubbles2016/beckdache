// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
let header = document.getElementById("primary-menu");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//online help modal
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var classActive = 'active'; 

var $categories = $('.category').click(function(e) {
    e.preventDefault();
    //run removeClass on every element
    //if the elements are not static, you might want to rerun $('.category')
    //instead of the saved $thumbs
    $categories.removeClass(classActive);
    //add the class to the currently clicked element (this)
    $(this).addClass(classActive);
});

var pagination = $('.category').click(function(e) {
    $pagination.removeClass(classActive);
    //add the class to the currently clicked element (this)
    $(this).addClass(classActive);
});

var viewAll = document.getElementById("viewAll");
var protection = document.getElementById("protection");
var whichPlan = document.getElementById("whichPlan");
var doihave = document.getElementById("doihave");
var whatif = document.getElementById("Whatif");
var anycontracts = document.getElementById("anycontracts");

var whatare = document.getElementById("whatare");
var howdoes = document.getElementById("howdoes");
var recurring = document.getElementById("recurring");

viewAll.onclick = function(event) {
  event.preventDefault();
  whichPlan.style.display = "block";
  doihave.style.display = "block";
  whatif.style.display = "block";
  anycontracts.style.display = "block";
  howdoes.style.display = "block";
  whatare.style.display = "block"

}

protection.onclick = function(event) {
  event.preventDefault();
  whichPlan.style.display = "none";
  doihave.style.display = "none";
  whatif.style.display = "none";
  anycontracts.style.display = "none";
  howdoes.style.display = "none";
  whatare.style.display = "block"

}

licensed.onclick = function(event) {
  event.preventDefault();
  whichPlan.style.display = "none";
  doihave.style.display = "none";
  whatif.style.display = "none";
  anycontracts.style.display = "none";
  whatare.style.display = "none";
  howdoes.style.display = "block";
}

recurring.onclick = function(event) {
  event.preventDefault();
  whichPlan.style.display = "none";
  doihave.style.display = "none";
  whatif.style.display = "none";
  anycontracts.style.display = "none";
  whatare.style.display = "none";
  howdoes.style.display = "none";
  recurring.style.display = "block"
}





