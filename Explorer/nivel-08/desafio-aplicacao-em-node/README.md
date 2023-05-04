# Aplicação em Node

## 💻 Sobre o desafio

E aí, o que achou de criar a sua primeira aplicação em Node.js? Massa demais, né? 💜

Bora praticar mais um pouquinho tudo o que foi aprendido nesse Stage!
E olha que teve conteúdo, hein? 👀

A ideia agora é criar uma aplicação em Node.js onde o usuário cadastra um filme, preenche com algumas informações (nome, descrição, nota) e cria tags relacionadas a ele.
Abaixo, temos um diagrama que você pode usar como base:

![Tables](./assets/tables.png)

Explicando cada tabela e seus campos:

| Tabela de usuários | Tabela de anotações de um filme | Tabela de tags |
| (users) | (movie_notes) | (movie_tags) |
| --- | --- | --- |
| id | id | id |
| nome do usuário | título do filme | id da anotação |
| e-mail do usuário | descrição do filme | id do usuário |
| senha do usuário | nota que o usuário deu para o filme\* | nome da tag\*\* |
| avatar do usuário | id do usuário | |
| data de criação | data de criação | |
| data de edição | data de edição | |

_\*Valores inteiros que podem variar de 1 até o 5._
_\*\*Exemplos: ação, comedia, terror, medo...etc._

Você pode usar esse modelo como base, mas caso queira alterar algum dado e/ou montar o seu próprio diagrama você pode usar esse site **[aqui](https://drawsql.app/)**.

### **Observações:**

Ao subir o seu projeto no GitHub, lembre-se que a pasta **node_modules** não precisa ser enviada, já que, como dito em aula, você consegue facilmente criá-la no seu projeto usando `npm install`.

Para isso, basta criar um arquivo chamado **.gitignore** na raiz do seu projeto e adicionar o texto _node_modules_ nele.

Alguns detalhes aprendidos em aula que seria interessante você adicionar no seu desafio:

- Criptografia de senhas;
- Validação de e-mail;
- Aplicar o cascade para garantir que uma tag será excluída caso o usuário opte por excluir a nota.

# 📅 Entrega

Esse desafio deve ser entregue a partir da plataforma da Rocketseat.
Você pode nos enviar o link do CodePen ou GitHub com o seu código. 💜

Que tal fazer um post no LinkedIn compartilhando o seu aprendizado e os links dos seus projetos?
É uma excelente forma de compartilhar o seu conhecimento e, principalmente, ser visto pelos recrutadores... 👀

Obs: Se você se sentir à vontade, pode nos marcar!
Vai ser incrível acompanhar a sua evolução! 💜

Feito com 💜 por Rocketseat 👋 Participe da nossa [comunidade aberta](https://discord.gg/Ns86RQyVH8)
