# Aplicação em Node

## 💻 Sobre o desafio

E aí, o que achou de criar a sua primeira aplicação em Node.js? Massa demais, né? 💜

Bora praticar mais um pouquinho tudo o que foi aprendido nesse Stage!
E olha que teve conteúdo, hein? 👀

A ideia agora é criar uma aplicação em Node.js onde o usuário cadastra um filme, preenche com algumas informações (nome, descrição, nota) e cria tags relacionadas a ele.
Abaixo, temos um diagrama que você pode usar como base:

![Tables](./assets/tables.png)

Explicando cada tabela e seus campos:

| (users)           | (movie_notes)                         | (movie_tags)    |
| ----------------- | ------------------------------------- | --------------- |
| id                | id                                    | id              |
| nome do usuário   | título do filme                       | id da anotação  |
| e-mail do usuário | descrição do filme                    | id do usuário   |
| senha do usuário  | nota que o usuário deu para o filme\* | nome da tag\*\* |
| avatar do usuário | id do usuário                         |                 |
| data de criação   | data de criação                       |                 |
| data de edição    | data de edição                        |                 |

_\*Valores inteiros que podem variar de 1 até o 5._

_\*\*Exemplos: ação, comedia, terror, medo...etc._

Você pode usar esse modelo como base, mas caso queira alterar algum dado e/ou montar o seu próprio diagrama você pode usar esse site **[aqui](https://drawsql.app/)**.

### Observações

Ao subir o seu projeto no GitHub, lembre-se que a pasta **node_modules** não precisa ser enviada, já que, como dito em aula, você consegue facilmente criá-la no seu projeto usando: '`npm install`'.

Para isso, basta criar um arquivo chamado **.gitignore** na raiz do seu projeto e adicionar o texto _node_modules_ nele.

Alguns detalhes aprendidos em aula que seria interessante você adicionar no seu desafio:

- Criptografia de senhas;
- Validação de e-mail;
- Aplicar o cascade para garantir que uma tag será excluída caso o usuário opte por excluir a nota.

### 📅 Entrega

Esse desafio deve ser entregue a partir da plataforma da Rocketseat.
Você pode nos enviar o link do CodePen ou GitHub com o seu código. 💜

Que tal fazer um post no LinkedIn compartilhando o seu aprendizado e os links dos seus projetos?
É uma excelente forma de compartilhar o seu conhecimento e, principalmente, ser visto pelos recrutadores... 👀

Obs: Se você se sentir à vontade, pode nos marcar!
Vai ser incrível acompanhar a sua evolução! 💜

Feito com 💜 por Rocketseat 👋 Participe da nossa [comunidade aberta](https://discord.gg/Ns86RQyVH8)

---

## Resolução

### Dependencias

- [nodemon](https://www.npmjs.com/package/nodemon) _\*_ : ferramenta que ajuda a desenvolver aplicações baseadas em Node.js, reiniciando automaticamente a aplicação Node quando mudanças em arquivos no diretório são detectadas.
- [dotenv](https://www.npmjs.com/package/dotenv): módulo sem dependências que carrega variáveis de ambiente de um arquivo .env para o process.env. Armazenar a configuração no ambiente separadamente do código é baseado na metodologia [The Twelve-Factor](https://12factor.net/config) App.
- [express](https://www.npmjs.com/package/express): fornece ferramentas pequenas e robustas para servidores HTTP, tornando-o uma ótima solução para aplicações de página única, sites, híbridos ou APIs HTTP públicas.
- [express-validator](https://www.npmjs.com/package/express-validator): conjunto de middlewares do express.js que encapsula a extensa coleção de validators e sanitizators oferecidos pelo [validator](https://www.npmjs.com/package/validator).
- [migrate-mongo](https://www.npmjs.com/package/migrate-mongo) _\*\*_ : ferramenta que dá suporte a migrations para MongoDB.
- [mongoose](https://www.npmjs.com/package/mongoose): ferramenta de modelagem de objetos do MongoDB projetada para funcionar em um ambiente assíncrono.

_\* deve ser instalado como dependencia de desenvolvimento._

_\*\* deve ser executado via `npx` ou instalado globalmente._

### Estrutura da Aplicacao

```
projeto/
├── src/
│   ├── config/
│   │   ├── db.js
│   │   └── index.js
│   ├── controllers/
│   │   └── users.js
│   ├── migrations/
│   │   ├── 20220504170000-create-users.js
│   │   └── index.js
│   ├── models/
│   │   └── user.js
│   ├── routes/
│   │   ├── index.js
│   │   └── users.js
│   ├── utils/
│   │   ├── error.js
│   │   └── index.js
│   ├── app.js
│   └── server.js
├── .env
├── package.json
└── README.md
```

- O diretório `src` é onde ficarão todos os arquivos do seu projeto, incluindo código-fonte, configurações, rotas, modelos, controladores, utilitários e migrações.
- O diretório `config` contém arquivos de configuração, como o arquivo` db.js`, que exporta uma conexão com o banco de dados utilizando o Mongoose, e o arquivo `index.js`, que carrega as variáveis de ambiente do arquivo `.env`.
- O diretório `controllers` contém os arquivos que definem as funções que serão executadas quando uma rota for acessada.
- O diretório `migrations` contém os arquivos que definem as migrações do banco de dados utilizando o `migrate-mongo`.
- O diretório `models` contém os arquivos que definem os modelos do banco de dados utilizando o `mongoose`.
- O diretório `routes` contém os arquivos que definem as rotas da aplicação.
- O diretório `utils` contém arquivos utilitários, como o arquivo `error.js`, que exporta uma função para lidar com erros da aplicação, e o arquivo `index.js`, que exporta os utilitários que serão utilizados em outros arquivos.
- O arquivo `app.js` é o ponto de entrada da aplicação, onde são configurados middlewares e rotas.
- O arquivo `server.js` é responsável por iniciar o servidor HTTP.
- O arquivo `.env` é onde ficam as variáveis de ambiente, como as credenciais do banco de dados.
- O arquivo `package.json` é responsável por descrever as dependências e scripts do projeto.
- O arquivo `README.md` é utilizado para descrever o projeto e suas funcionalidades.
