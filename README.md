## **Prova de Conceito**
O objetivo dessa PoC (_proof of concept_) é demonstrar um MVP (mínimo produto viável) funcional do TravelPlanner com as seguintes funcionalidades básicas:
- Cadastro e login de usuários;
- Preenchimento e armazenamento de preferências para elaboração de roteiros;
- Visualização das preferências salvas pelo usuário.
  
### Backend ###
- Autenticação básica;
- Armazenamento de dados do usuário e preferências.

### Frontend ###
- Tela de cadastro/login;
- Tela de preferências de viagem.

### Banco de dados ###
- Tabelas para usuários e preferências.

## **Tecnologias escolhidas**
### Backend ###
- Linguagem: Node.js
- Framework: Express.js
- Autenticação: JWT

### Frontend ###
- Framework: React.js
- Estilização: Tailwind CSS

### Banco de Dados ###
- Banco relacional: SQLite
- ORM: Prisma

## **Instruções para execução do projeto:**
1. Certifique-se de ter Node.js instalado;
2. Renomeie o arquivo .env.exemplo para .env e escolha uma chave secreta;
3. Execute os seguintes comandos no terminal:  
npx prisma migrate dev --name init  
npx prisma generate
4. Abra um terminal dentro da pasta /travelplanner-backend e execute o comando:  
node src/server.js
5. Abra um terminal dentro da pasta /travelplanner-frontend e execute o comando:  
npm run dev

Se tudo funcionar corretamente, a aplicação poderá ser acessada por meio do link gerado no terminal.

## **Integrantes do Grupo 47:**
- Arthur Claudino de Oliveira
- Erico Santos da Cruz
- Gabrielle de Carvalho da Mota Silveira
- Jhonatan Martins Oliveira
- Julio Augusto Carvalho Martos
- Maria Eduarda Coelho dos Santos
- Nathalia Alves de Jesus