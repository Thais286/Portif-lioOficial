const botao = document.getElementById('botao-tema');
const body = document.body;

botao.addEventListener('click', function (e) {
  e.preventDefault(); // 🚫 impede ir para o topo
});

// Persistência do tema
const temasalvo = localStorage.getItem('tema');
temaEscuro(temasalvo === 'escuro');

// Função para alternar entre tema claro e escuro
function temaEscuro(tipo) {
  if (tipo == true) {
    body.classList.add('escuro');
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.classList.remove('escuro');
    botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

botao.addEventListener('click', () => {
  const isescuro = body.classList.toggle('escuro');
  temaEscuro(isescuro);
  localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
});

// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu ul a.link');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {

    if (this.id === 'botao-tema') return; // ignora o botão de tema

    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===== MODAL DE IMAGEM (ZOOM) =====

const imagens = document.querySelectorAll('.img-projeto');
const modal = document.getElementById('modal-img');
const imgModal = document.getElementById('img-modal');

// abrir modal
imagens.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    imgModal.src = img.src;
  });
});

// fechar modal ao clicar
modal.addEventListener('click', () => {
  modal.style.display = 'none';
});


