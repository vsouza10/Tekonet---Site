const imagens = document.querySelectorAll('.carrossel figure');
let index = 0;

function mostrarImagem(){
  imagens.forEach(img=> img.classList.remove('activo'));
  imagens[index].classList.add('ativo');
  index = (index + 1) % imagens.length;
}
mostrarImagem();
setInterval(mostrarImagem, 2000);
