let menus = document.querySelectorAll('.box-menu');
let background = document.querySelector('.bg-boxFirts');
const content = document.querySelector('.history');

background.style.background = 'url(assets/img/Luffy.jpg)';
background.style.backgroundRepeat = 'no-repeat';
background.style.backgroundSize = 'cover';

fetch('dados.json')
  .then(response => response.json())
  .then(data => {
    const variaveis = ['Luffy', 'Aokiji', 'Crocodile', 'Zoro', 'Barbanegra'];
    const historias = {};
    
    variaveis.forEach(variavel => {
        const dados = data[variavel];
        const texto = JSON.stringify(dados, null, 2)
          .replace(/"/g, '')
          .replace(/[{}]/g, '')
          .replace(/linha\d+: /g, '')
          .replace(/\n/g, '\n ')
          .replace(/,/g, ' ')
          .replace(/\[/g, ' ')
          .replace(/\]/g, ' ');
        const resultado = texto.trim(); 
        historias[variavel] = resultado; 
      })
        content.innerHTML = historias['Luffy'];
    menus.forEach(element => {
      element.addEventListener('click', () =>{
        switch (element.id) {
          case 'luffy':
            content.innerHTML = historias['Luffy'];
            background.style.background = 'url(assets/img/Luffy.jpg)';
            background.style.backgroundRepeat = 'no-repeat';
            background.style.backgroundSize = 'cover';
            break;
          case 'aokiji':
            content.innerHTML = historias['Aokiji'];
            background.style.background = 'url(assets/img/Aokiji.svg)';
            background.style.backgroundRepeat = 'no-repeat';
            background.style.backgroundSize = 'cover';
            break;
          case 'crocodile':
            content.innerHTML = historias['Crocodile'];
            background.style.background = 'url(assets/img/Crocodile.svg)';
            background.style.backgroundRepeat = 'no-repeat';
            background.style.backgroundSize = 'cover';
            break;
          case 'zoro':
            content.innerHTML = historias['Zoro'];
            background.style.background = 'url(assets/img/Zoro.svg)';
            background.style.backgroundRepeat = 'no-repeat';
            background.style.backgroundSize = 'cover';
            break;
          case 'barbanegra':
            content.innerHTML = historias['Barbanegra'];
            background.style.background = 'url(assets/img/Barbanegra.svg)';
            background.style.backgroundRepeat = 'no-repeat';
            background.style.backgroundSize = 'cover';
            break;
        }
      }); 
    });
  })
  .catch(error => console.error('Erro ao carregar o JSON:', error));