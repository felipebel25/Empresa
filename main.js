// selector
var menu = document.querySelector('.hamburger');

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);
window.onload = () =>{
  document.querySelector(".boton-left").addEventListener("click", espic2 );
  document.querySelector(".boton-right").addEventListener("click", espic );

}
const espic=() =>{
  const fondo = document.getElementById("fondo")
  const fondo2 = document.getElementById("fondo-2")
  console.log(`hola soy ${fondo}`)
  console.log(`hola soy ${fondo2}`)
  
 
  const condicion2 = () =>{
    fondo2.style.left= "0px";
    fondo.style.left = "-100%"
   
   
   
  }
  condicion2();
}

const espic2=() =>{ 
 
    

  
  const fondo = document.getElementById("fondo")
  const fondo2 = document.getElementById("fondo-2")
  console.log(`hola soy ${fondo}`)
  console.log(`hola soy ${fondo2}`)

  const condicion =()=> {
  fondo.style.left= "0px";
  fondo2.style.left= "-100%";    

  }
  
  
  condicion();
}
