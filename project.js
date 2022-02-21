{
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.querySelectorAll(".mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); 
}

}


var scroll = window.requestAnimationFrame ||

function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}


loop();


function isElementInViewport(el) {
  
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}


{
var slideIndex = 1;
showSlides(slideIndex);


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("recomendation-content");
  var dots = document.getElementsByClassName("recomendation-btn");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}
}

{

function createFilterForProjects() {
    
  let liItem = document.querySelectorAll(".latest-projects-nav ul li");
  let boxItem = document.querySelectorAll('.project-item ');
  let smallScreen = window.matchMedia( "(max-width: 768px)" );

  liItem.forEach(li => {
      li.addEventListener("click", function() {
          liItem.forEach(li => {
              li.className = "";
          })
          li.className = "All";

          let value = li.textContent;
          updatedValue = value.replace(/ /g,"_");
          boxItem.forEach(box => {
              box.style.display = "none";
              
              if(box.getAttribute("data-filter") == updatedValue.toLowerCase() || updatedValue == "All") {
                  box.style.display = "flex";
                  
                  if (smallScreen.matches) {
                      box.style.width = "100%";
                      
                  } else {
                      box.style.opacity = "0.9";
                  }
                  
              }

              if(updatedValue == "All") {
                  box.style.display = "flex";

                  if (smallScreen.matches) {
                      box.style.width = "100%";
                      
                  } else {
                      box.style.width = "calc(100% / 3)";
                  }
                  
              }
          })
      })

      
  })

}

createFilterForProjects();
}


// Get the modal
var modal = document.getElementById("user-notification");

var btn = document.querySelector(".sendbutton");

var span = document.getElementsByClassName("modal-close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

{
   const btn = document.querySelector('.sendbutton');

  
    const form = document.getElementById('contact-info-form')
    const userName = document.querySelector('#name');
    const email = document.querySelector('#email');
    const website = document.querySelector('#website');
    const message = document.querySelector('#message');
    
    form.addEventListener('submit', e => {
  e.preventDefault();
  const userData = {
    nameVal: userName.value,
    emailVal: email.value,
    websiteVal: website.value,
    messageVal: message.value,
  }; 
  console.log(userData);
  sendMessage(userData)
});
function createUser(userData) {
  const createUserRequest = fetch('http://api.kesho.me/v1/user-test/contact', {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-type': 'application/json'
    }
  });
  createUserRequest.then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
  }).catch(error => {
    console.log('Save error', error);
  });
}
}