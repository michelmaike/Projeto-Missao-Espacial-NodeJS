# Projeto de Missão Espacial

## O que é?
Uma API para gerenciar missões espaciais e astronautas, criada com Node.js, Express e MongoDB. Você pode adicionar, listar, editar e excluir astronautas e missões.

## Tecnologias
- Node.js
- Express
- MongoDB
- Mongoose

## Como Configurar
1. **Clonar o Projeto**:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd projetoMissaoEspacial
   ```

2. **Instalar Dependências**:
   ```bash
   npm install
   ```

3. **Configurar o Banco**:
   - Crie um arquivo `variables.env` na raiz com:
     ```
     DATABASE=mongodb://localhost:27017/missaoEspacial
     PORTA=3000
     ```
   - Inicie o MongoDB:
     ```bash
     mongod
     ```

4. **Rodar o Servidor**:
   ```bash
   node server.js
   ```
   - Você verá:
     ```
     Servidor rodando na porta 3000
     ```

## Testando
Use o Postman para testar as rotas.

### Astronautas
- **Adicionar** (POST `http://localhost:3000/astronautas`):
  ```json
  {
      "nome": "João Silva",
      "email": "joao.silva@agencia.com",
      "senha": "senha123"
  }
  ```
- **Listar** (GET `http://localhost:3000/astronautas`): Não precisa de corpo.
- **Editar** (PUT `http://localhost:3000/astronautas`):
  ```json
  {
      "id": "<ID_DO_ASTRONAUTA>",
      "nome": "João Silva Atualizado",
      "email": "joao.atualizado@agencia.com",
      "senha": "novaSenha456"
  }
  ```

### Missões
- **Adicionar** (POST `http://localhost:3000/missoes`):
  ```json
  {
      "nome": "Explorador de Marte 2030",
      "descricao": "Missão para explorar Marte",
      "custo": 500,
      "categoria": "Exploração",
      "vagasTripulacao": 5,
      "organizacao": "SpaceX",
      "estaAtiva": true,
      "criadoPor": "<ID_DO_ASTRONAUTA>"
  }
  ```
- **Listar** (GET `http://localhost:3000/missoes`): Não precisa de corpo.
- **Editar** (PUT `http://localhost:3000/missoes`):
  ```json
  {
      "id": "<ID_DA_MISSAO>",
      "nome": "Explorador de Marte 2030 Atualizado",
      "descricao": "Missão atualizada",
      "custo": 600,
      "categoria": "Exploração",
      "vagasTripulacao": 6,
      "organizacao": "SpaceX",
      "estaAtiva": false
  }
  ```
- **Excluir** (DELETE `http://localhost:3000/missoes`):
  ```json
  {
      "id": "<ID_DA_MISSAO>"
  }
  ```

## Problemas?
- **Servidor não inicia**:
  - Certifique-se de que o MongoDB está rodando (`mongod`).
  - Verifique se a porta `3000` não está em uso.
- **Erro de conexão**:
  - Confirme o arquivo `variables.env`.