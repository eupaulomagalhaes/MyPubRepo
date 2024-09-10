// app.js
function pesquisar() {
    const campoPesquisa = document.getElementById('search').value.toLowerCase();
    const resultados = document.getElementById('resultados-pesquisa');
    resultados.innerHTML = '';
  
    dados.forEach(dado => {
      if (dado.titulo.toLowerCase().includes(campoPesquisa) || dado.descricao.toLocaleLowerCase().includes(campoPesquisa)) {
        const item = document.createElement('div');
        item.classList.add('item-resultado');
        item.innerHTML = `
          <h2><a href="${dado.link}" target="_blank">${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.descricao}</p>
        `;
        resultados.appendChild(item);
      }
    });
  }