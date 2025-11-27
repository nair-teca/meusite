document.addEventListener("DOMContentLoaded", () => {
    const topPopup = document.getElementById('top-popup');
    const closeBtn = document.getElementById('close-top-popup');

    // Fechar popup ao clicar no X
    closeBtn.addEventListener('click', () => {
        topPopup.classList.remove('show');
    });

    // Observer para a seção #projetos
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                topPopup.classList.add('show'); // adiciona classe para mostrar
                observer.unobserve(entry.target); // mostra apenas uma vez
            }
        });
    }, { threshold: 0.5 });

    const sectionProjetos = document.getElementById('projetos');
    observer.observe(sectionProjetos);
});












  // Seleciona o link do menu Skills
  const skillsLink = document.querySelector('a[href="#skills"]');
  const skillCircles = document.querySelectorAll('.skill-circle');

  skillsLink.addEventListener('click', (e) => {
    e.preventDefault(); // previne scroll automático (opcional)
    
    // Adiciona a classe 'active'
    skillCircles.forEach(circle => circle.classList.add('active'));
    
    // Remove após 5 segundos
    setTimeout(() => {
      skillCircles.forEach(circle => circle.classList.remove('active'));
    }, 5000);

    // Opcional: faz scroll até a secção
    document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
  });

