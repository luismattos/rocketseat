# Biscoito da Sorte

# 💻 Sobre o desafio

Neste desafio você deverá criar um jogo chamado Biscoito da Sorte, no qual o usuário, **a partir de um clique ou enter**, abre um biscoito com a sua sorte do dia. Você aplicará o que aprendeu sobre vários temas, entre eles:

- Estrutura de dados HTML
- Animações com CSS
- Funções no Javascript
- Manipulação da DOM
- Biblioteca JS Math()
- Funções _callback_
- Arrays

## Layout da aplicação

Aqui neste **[link](https://www.figma.com/community/file/1182751789348533739)** você tem acesso ao Figma do projeto**.** Abaixo você pode ver como a aplicação deve ficar:

[Figma](https://www.figma.com/community/file/1182751789348533739)

⚠️ **Alerta**: Caso ao clicar no link você se depare com o erro que `WebGL` não está ativado no seu navegador, [siga esses passos](https://help.figma.com/hc/en-us/articles/360039828614#Enable_WebGL).

## Quais arquivos devo criar na minha aplicação?

Além de criar a pasta **assets**, que irá conter as imagens da sua aplicação, seu projeto deverá ter os seguintes arquivos:

- index.html
- style.css
- main.js

## 🎬 Aplicação em funcionamento

[Biscoito da Sorte.mp4](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c9858101-d395-4bf3-a9e7-d1cbec1e093e/Biscoito_da_Sorte.mp4)

## Quer se desafiar ainda mais?

Que tal deixar esse jogo ainda mais misterioso adicionando uma **animação** ao background do **body**? Você pode criar uma animação com keyframes que altera o gradiente das cores, por exemplo.

## 💡 Dica

- Para fazer um background gradiente animado, você pode alterar o tamanho do background do body e animar a posição que é exibida na tela.

Por ser algo que não foi passado em aula, já vou deixar a solução por aqui caso você tenha alguma dificuldade, tudo bem? 💜

- Solução para animar o gradiente do background:

  ```css
  body {
    background: linear-gradient(45deg, #190361, #bb00ff);
    animation: gradient 10s ease infinite;
    background-size: 200% 200%;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  ```

## 📅 Entrega

Esse desafio deve ser entregue a partir da plataforma da Rocketseat.
Você pode nos enviar o link do CodePen ou GitHub com o seu código. 💜

Após concluir o desafio, que tal fazer um post no LinkedIn compartilhando o seu aprendizado e contando como foi a experiência?
É uma excelente forma de demonstrar seus conhecimentos e atrair novas oportunidades! 😍
Obs: Se você se sentir à vontade, pode postar um print do resultado final e nos marcar!

Vai ser incrível acompanhar a sua evolução! 💜

Feito com 💜 por Rocketseat 👋 Participe da nossa [comunidade aberta!](https://discord.gg/Ns86RQyVH8)
