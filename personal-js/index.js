

$(document).ready(function () {

  function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if ($('.mainpage')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 1000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
    document.querySelector(selector).style.transition = "0.5s";
}

onReady(function() {
  setVisible('.mainpage', true);
  setVisible('.loadingcontainer', false);
});


  var typed = new Typed("#title2",{
    strings: [,"<mark>I'm a Web Developer.</mark>", "<mark>I'm a Game Developer.</mark>", "<mark>I'm an Android Developer.</mark>"],
    smartBackspace:true,
    typeSpeed: 50,
    loop:true,
    showCursor:false,

  })


  let progress = document.getElementById('progressbar');
  let totHeight = document.body.scrollHeight - window.innerHeight;
  window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totHeight) * 100;
    progress.style.height = progressHeight + "%";
  }

  /* navbar sticky*/
  window.addEventListener('scroll', function(){
    var navybar = document.querySelector('header');
    navybar.classList.toggle('sticky',window.scrollY > 623)
  })

  /* projects listing*/
  let  list = document.querySelectorAll('.list');
  let projectbox = document.querySelectorAll('.projectbox');

  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function(event){
      for (let j = 0; j < list.length; j++) {
        list[j].classList.remove('activeselection');
      }
      list.forEach(elements => {
        elements.addEventListener('click', function(event) {
          let bg = document.querySelector('body');
          let svg = document.querySelector('svg')
          let color = event.target.getAttribute('data-color');
          bg.style.backgroundColor = color;
          svg.style.fill = color;
        })
      this.classList.add('activeselection');

      });

      let dataFilter = this.getAttribute('data-filter');
      let datapublished = this.getAttribute('data-filter-published');

      for (let k = 0; k < projectbox.length; k++) {
        projectbox[k].style.setProperty('--animate-duration', '0.5s');
        projectbox[k].classList.remove('activeselection');
        projectbox[k].classList.remove('animate__zoomIn');
        projectbox[k].classList.add('animate__zoomOut');
        projectbox[k].classList.add('hide');
        if (projectbox[k].getAttribute('data-items') ==  dataFilter || projectbox[k].getAttribute('data-items-published') == datapublished || dataFilter == "all") {
          projectbox[k].classList.remove('hide');
          projectbox[k].classList.remove('animate__zoomOut');
          projectbox[k].classList.add('activeselection');
          projectbox[k].classList.add('animate__zoomIn');
        }
        projectbox[k].addEventListener('animationend', () => {
          projectbox[k].classList.remove('animate__zoomIn');
        });
      }

    })
  };



  const modal = document.querySelectorAll("#modal, #modal1, #modal2, #modal3, #modal4, #modal5, #modal6, #modal7, #modal8, #modal9, #modal10");


});


/*content on projects*/
function modalToggle(){
  const body = document.querySelector("body");
  const popup = document.getElementById('modal');
  popup.classList.toggle('activeprojcontent');

  if (!popup.classList.contains("activeprojcontent")) {
                // Enable scroll
                body.style.overflow = "auto";
                $('.maincontainer' ).removeClass('blur' );
            } else {
                // Disable scroll
                body.style.overflow = "hidden";
                $('.maincontainer' ).addClass('blur' );
            }
};
function modal1Toggle(){
  const body = document.querySelector("body");
  const popup = document.getElementById('modal1');
  popup.classList.toggle('activeprojcontent');
  if (!popup.classList.contains("activeprojcontent")) {
                // Enable scroll
                body.style.overflow = "auto";
                $('.maincontainer' ).removeClass('blur' );
            } else {
                // Disable scroll
                body.style.overflow = "hidden";
                $('.maincontainer' ).addClass('blur' );
            }
};
function modal2Toggle(){
  const body = document.querySelector("body");
  const popup = document.getElementById('modal2');
  popup.classList.toggle('activeprojcontent');
  if (!popup.classList.contains("activeprojcontent")) {
                // Enable scroll
                body.style.overflow = "auto";
                $('.maincontainer' ).removeClass('blur' );
            } else {
                // Disable scroll
                body.style.overflow = "hidden";
                $('.maincontainer' ).addClass('blur' );
            }
};
function modal3Toggle(){
  const body = document.querySelector("body");
  const popup = document.getElementById('modal3');
  popup.classList.toggle('activeprojcontent');
  if (!popup.classList.contains("activeprojcontent")) {
                // Enable scroll
                body.style.overflow = "auto";
                $('.maincontainer' ).removeClass('blur' );
            } else {
                // Disable scroll
                body.style.overflow = "hidden";
                $('.maincontainer' ).addClass('blur' );
            }
};
function modal4Toggle(){
  const body = document.querySelector("body");
  const popup = document.getElementById('modal4');
  popup.classList.toggle('activeprojcontent');
  if (!popup.classList.contains("activeprojcontent")) {
                // Enable scroll
                body.style.overflow = "auto";
                $('.maincontainer' ).removeClass('blur' );
            } else {
                // Disable scroll
                body.style.overflow = "hidden";
                $('.maincontainer' ).addClass('blur' );
            }
};
function modal5Toggle(){
  const body = document.querySelector("body");
  const popup = document.getElementById('modal5');
  popup.classList.toggle('activeprojcontent');
  if (!popup.classList.contains("activeprojcontent")) {
                // Enable scroll
                body.style.overflow = "auto";
                $('.maincontainer' ).removeClass('blur' );
            } else {
                // Disable scroll
                body.style.overflow = "hidden";
                $('.maincontainer' ).addClass('blur' );
            }
};
function modal6Toggle(){
  const body = document.querySelector("body");
  const popup = document.getElementById('modal6');
  popup.classList.toggle('activeprojcontent');
  if (!popup.classList.contains("activeprojcontent")) {
                // Enable scroll
                body.style.overflow = "auto";
                $('.maincontainer' ).removeClass('blur' );
            } else {
                // Disable scroll
                body.style.overflow = "hidden";
                $('.maincontainer' ).addClass('blur' );
            }
};
function modal7Toggle(){
  const body = document.querySelector("body");
  const popup = document.getElementById('modal7');
  popup.classList.toggle('activeprojcontent');
  if (!popup.classList.contains("activeprojcontent")) {
                // Enable scroll
                body.style.overflow = "auto";
                $('.maincontainer' ).removeClass('blur' );
            } else {
                // Disable scroll
                body.style.overflow = "hidden";
                $('.maincontainer' ).addClass('blur' );
            }
};
function modal8Toggle(){
  const body = document.querySelector("body");
  const popup = document.getElementById('modal8');
  popup.classList.toggle('activeprojcontent');
  if (!popup.classList.contains("activeprojcontent")) {
                // Enable scroll
                body.style.overflow = "auto";
                $('.maincontainer' ).removeClass('blur' );
            } else {
                // Disable scroll
                body.style.overflow = "hidden";
                $('.maincontainer' ).addClass('blur' );
            }
};
function modal9Toggle(){
  const body = document.querySelector("body");
  const popup = document.getElementById('modal9');
  popup.classList.toggle('activeprojcontent');
  if (!popup.classList.contains("activeprojcontent")) {
                // Enable scroll
                body.style.overflow = "auto";
                $('.maincontainer' ).removeClass('blur' );
            } else {
                // Disable scroll
                body.style.overflow = "hidden";
                $('.maincontainer' ).addClass('blur' );
            }
};
function modal10Toggle(){
  const body = document.querySelector("body");
  const popup = document.getElementById('modal10');
  popup.classList.toggle('activeprojcontent');
  if (!popup.classList.contains("activeprojcontent")) {
                // Enable scroll
                body.style.overflow = "auto";
                $('.maincontainer' ).removeClass('blur' );
            } else {
                // Disable scroll
                body.style.overflow = "hidden";
                $('.maincontainer' ).addClass('blur' );
            }
};
