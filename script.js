const bannerDescription = document.querySelector('.banner-description');
console.log(bannerDescription)

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split(''); // separando cada letra ou espaço

  elemento.innerHTML = ''; // zerando texto

  textoArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 90 * i)
  })
}

typeWriter (bannerDescription)