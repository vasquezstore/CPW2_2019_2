/**
 * Nosso BD fake!
 * (in memory DB)
 */
var contatos = [];

function salvarContato(event) {
    // Inibe a recarga da página
    event.preventDefault();

    /**
     * $ -> document.querySelector
     * val() -> value
     */
    // Recupera os valores do formulário
    let nome = $('#nome').val();
    let telefone = $('#telefone').val();
    let email = $('#email').val();
    let dataNascimento = $('#dataNascimento').val();

    // Criar um objeto de contato
    let contato = {
        nome,
        telefone,
        email,
        dataNascimento
    };

    // Adiciona o contato no nosso BD (no final do vetor)
    contatos.push(contato);

    //Invoca a renderização da tabela 
    renderizarTabelaContatos();
}
function renderizarTabelaContatos() {
    if(contatos.length > 0) {
      let areaListagemContatos = document.getElementById('listagemContatos');
    
    //Limpa area de listagem 

    areaListagemContatos.innerHTML = '';
    

     /*
     cria tabela
     */

      let  tabela = document.createElement('table');

      /* Cria o cabeçalho da tabela*/

      let cabecalho = document.createElement('thead');
      let linhacabecalho = document.createElement('tr');
      let colunaNome  = document.createElement('th');
      colunaNome.innerText = 'Nome';
      let colunaTelefone = document.createElement('th');
      colunaTelefone.innerText = 'Telefone';
      let colunaEmail  = document.createElement('th');
      colunaEmail.innerText = 'Email';
      let colunaDataNasc  = document.createElement('th');
      colunaDataNasc.innerText = 'Data Nasc';
     
      //adiciona coluna nas linhas do cabeçalho//

      linhacabecalho.appendChild(colunaNome);
      linhacabecalho.appendChild(colunaTelefone);
      linhacabecalho.appendChild(colunaEmail);
      linhacabecalho.appendChild(colunaDataNasc);
    
      //Adicionar a linha do cabecalho no cabeçalho//
      cabecalho.appendChild(linhacabecalho);

      //Adiona o cabeçalho dentro da tabela
      tabela.appendChild(cabecalho);
      
      //Adiciona a tabela na area de listagem
      areaListagemContatos.appendChild(tabela);

     




    }
}

