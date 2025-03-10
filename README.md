Apresentação da Aplicação

Introdução

Este projeto tem como objetivo implementar uma aplicação web que gerencia o cadastro de usuários e o controle de acesso via RFID. A aplicação é composta por três componentes principais:

Backend (Node.js + Express): Fornece a API para interagir com o banco de dados e realizar operações CRUD.
Banco de Dados (MySQL): Armazena os dados dos usuários cadastrados.
Frontend (HTML + CSS + JavaScript + Nginx): Interface gráfica para interação do usuário.
A aplicação foi containerizada utilizando Docker e orquestrada com Docker Compose para garantir o isolamento e a funcionalidade de cada serviço de maneira independente.

Estrutura do Projeto
A estrutura de pastas do projeto é a seguinte:

bash
Copiar
meu-projeto/
├── backend/                    # Código do servidor Node.js
├── frontend/                   # Arquivos HTML, CSS e JS
├── docker-compose.yml          # Arquivo de orquestração
├── Dockerfile                  # Configuração do container do backend
├── nginx.conf                  # Arquivo de configuração do Nginx
└── README.md                   # Documentação do projeto
Descrição dos Componentes
Backend (Node.js + Express):

index.js: O arquivo principal do servidor, que configura as rotas da API (cadastro de usuários, verificação de acesso via RFID e listagem de usuários).
db.js: Responsável pela configuração da conexão com o MySQL e Redis.
Dockerfile: Define o ambiente e dependências para o backend, além de expor a porta 8080.
Banco de Dados (MySQL):

O MySQL é configurado para rodar como um serviço Docker e o backend interage com o banco de dados usando a biblioteca mysql2.
Frontend (HTML + CSS + JavaScript + Nginx):

index.html: A interface com o usuário, onde ele pode cadastrar novos usuários ou verificar o acesso via RFID.
script.js: Contém a lógica do frontend para interagir com a API, cadastrando usuários e verificando o acesso.
nginx.conf: Configuração do Nginx para servir o frontend e redirecionar as requisições da API para o backend.
Como Executar a Aplicação
Passo 1: Clonar o Repositório
Para começar, clone o repositório para o seu computador:

bash
Copiar
git clone <URL_DO_REPOSITORIO>
cd meu-projeto
Passo 2: Construir e Iniciar os Containers
Em seguida, execute o seguinte comando para construir e iniciar os containers Docker:

bash
Copiar
docker-compose up --build
Este comando irá:

Criar e iniciar o container do MySQL.
Criar e iniciar o backend (Node.js) na porta 8080.
Criar e iniciar o frontend no servidor Nginx na porta 80.
Passo 3: Testar a Aplicação
Agora você pode acessar os seguintes pontos:

Frontend: Acesse a interface gráfica da aplicação através de http://localhost/.
Backend (API): Teste a API no endpoint http://localhost:8080.
Endpoints da API:
Cadastro de usuários: POST /usuarios
Verificação de acesso: POST /acesso
Listagem de usuários: GET /usuarios
Passo 4: Encerrar os Containers
Quando terminar, você pode parar e remover todos os containers com o seguinte comando:

bash
Copiar
docker-compose down
Configuração dos Containers
Backend (Node.js + Express)
O backend é responsável por lidar com as requisições HTTP. Ele interage com o banco de dados MySQL e o cache Redis.
Dockerfile: O arquivo Dockerfile define o ambiente para rodar o servidor Node.js, instala as dependências e expõe a porta 8080.
Banco de Dados (MySQL)
O MySQL é configurado no docker-compose.yml para ser acessado pelo backend usando o nome de serviço db.
O banco de dados é persistido utilizando o volume do Docker.
Frontend (Nginx)
O frontend é servido pelo Nginx, que mapeia os arquivos HTML, CSS e JS para o caminho /usr/share/nginx/html no container.
O Nginx também está configurado para redirecionar as requisições da API para o backend.
