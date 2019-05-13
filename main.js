// smooth links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// sticky menu
window.onscroll = function() {myFunction()};
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset -25 >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// textarea auto-expand
let textarea = document.getElementById('message');
textarea.addEventListener('keydown',function(){
    let el = this;
    setTimeout(function(){
        el.style.cssText = 'height:auto;';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
    })
})

//responsive nav
let navbar_main = document.getElementById('navbar-menu');
let navbar_toggle = document.getElementById('navbar-toggle');
let toggle_icon = document.querySelector('.toggle-icon');
navbar_toggle.addEventListener('click',function(){
  navbar_main.classList.toggle('collapse');
  if(toggle_icon.className == 'fas fa-bars toggle-icon'){
    toggle_icon.className = 'fas fa-times toggle-icon clicked';
  }
  else{
    toggle_icon.className = 'fas fa-bars toggle-icon';
  }
})

//after click on nav link menu hide on mobile
let navbar_links = document.querySelectorAll('.navbar-links');
for(let i = 0; i < navbar_links.length; i++){
  navbar_links[i].addEventListener('click',function(){
    navbar_main.classList.remove('collapse');
    toggle_icon.className = 'fas fa-bars toggle-icon';
  })
}

//link gain active class after click
let active_link = document.getElementById('menu-home');
let header_link = document.getElementById('header-link');
let menu_about = document.getElementById('menu-about');
header_link.addEventListener('click',function(){
  active_link.classList.remove('active-link');
  menu_about.classList.add('active-link');
})
document.addEventListener('click',function(event){
  if(event.target.id == 'header-link'){
    active_link.classList.remove('active-link');
    menu_about.classList.add('active-link');
    active_link = menu_about;
  }
  else{
    active_link.classList.remove('active-link');
    active_link = event.target;
    active_link.classList.add('active-link');
  } 
})