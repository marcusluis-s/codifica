# +praTi e Codifica - Exercício 5 - To-Do List

## Como usar

1. Clone o repositório com o comando `git clone <LINK_DO_REPOSITÓRIO>`.
2. Após clonar, abra o seu terminal e navegue até a pasta do projeto.

Se você estiver usando o Visual Studio Code (VSCode), é possível visualizar
este projeto facilmente usando a extensão **Live Server**. Siga os passos
abaixo:  

1. Abra o projeto no VSCode.
2. Instale a extensão **Live Server** no VSCode.
3. Clique com o botão direito no arquivo `index.html` e selecione **Open with
   Live Server**.
4. O navegador abrirá automaticamente com o projeto rodando.

Caso esteja usando o Vim ou Neovim, siga esses passos para rodar o servidor
HTTP.SERVER usando o arquivo `server.py`:  

1. Verifique se você tem o python instalado na sua máquina, pois você irá usar o comando `python3`.
2. Inicie o servidor com o comando: `python3 server.py`
3. Abre o navegador e digite `localhost:8000`

## Principais funcionalidades

1. Criar uma tarefa.
2. É possível ver a lista de tarefas que foram adicionadas.
3. Editar uma tarefa.
4. Deletar uma tarefa.

5. Persistência de dados:
    
    - As tarefas ficam salvas no localStorage do Web Broser do usuário.  
    - Mesmo após fechar ou recarregar a página, as taredas continuam salvas.  

6. É possível marcar uma tarefa como concluída ao clicar sobre ela.

    - Foi utilizado a estilziação do CSS `text-decoration: line-through`