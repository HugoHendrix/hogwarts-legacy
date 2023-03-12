
![Logo](https://hugohendrix.github.io/hogwarts-legacy/src/imagens/hero-logo-hogwarts.png)







### Projeto Hogwarts Legacy landing page
Entre no mundo mágico de Harry Potter em Hogwarts Legacy. Crie seu próprio bruxo, aprenda feitiços e lute contra criaturas mágicas em uma trama emocionante. 

Ricardo e Roberto Dias, da Dev Em Dobro, criaram um evento para promover a série The Last of Us. Para me diferenciar, escolhi promover o jogo Hogwarts Legacy, que está em alta. Meu projeto também tem um carrossel que muda as imagens automaticamente, mas no evento é preciso clicar para mudar as imagens.




# 🔍 Anotações e Pesquisas:

# Animações e keyframes

As animações em CSS permitem criar efeitos de transição e movimento em elementos HTML sem a necessidade de usar JavaScript. A animação é definida por meio de uma série de regras CSS que indicam o que o elemento deve fazer em cada etapa da animação.

Uma das formas de criar animações em CSS é por meio de keyframes, que são pontos-chave da animação que indicam o estado inicial e final do elemento em cada etapa. Os keyframes são definidos com a regra @keyframes, seguida de um nome que será usado para referenciar a animação. Dentro dos keyframes, é possível definir regras CSS para cada etapa da animação.

Por exemplo, o seguinte código define uma animação simples de rotação que gira um elemento em 360 graus:

```css
@keyframes girar {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

div {
  animation: girar 2s linear infinite;
}
```

Nesse exemplo, a animação é chamada de "girar" e é aplicada a um elemento div. A animação dura 2 segundos (definido pela propriedade "animation-duration") e é repetida infinitamente (definido pela propriedade "animation-iteration-count"). A animação é definida com a regra "animation", seguida do nome da animação e das propriedades adicionais.

É possível também definir as etapas da animação com porcentagens ao invés de "from" e "to", como no exemplo abaixo:

```css
@keyframes mover {
  0% { left: 0; }
  50% { left: 50%; }
  100% { left: 0; }
}

div {
  animation: mover 2s ease-in-out infinite;
}
```

Nesse exemplo, a animação chamada de "mover" define três etapas que fazem o elemento se mover da esquerda para a direita e depois voltar para a posição inicial. A animação usa uma curva de aceleração suave definida pela propriedade "ease-in-out".object fit 

O **`object-fit`** é uma propriedade CSS que controla como uma imagem ou vídeo se ajusta a seu contêiner. É útil quando você deseja ajustar o tamanho da imagem ou do vídeo sem distorcê-los.

Existem cinco valores possíveis para a propriedade **`object-fit`**:

1. **`fill`**: esse é o valor padrão. A imagem ou o vídeo são dimensionados para preencher completamente o contêiner, independentemente de sua proporção. Isso pode resultar em cortes ou distorções.
2. **`contain`**: redimensiona a imagem ou o vídeo para caber dentro do contêiner mantendo a proporção original. Nesse caso, a imagem pode ter espaços em branco ao redor para manter a proporção.
3. **`cover`**: redimensiona a imagem ou o vídeo para cobrir completamente o contêiner, mantendo a proporção. Isso pode resultar em cortes na imagem, se a proporção do contêiner não for a mesma da imagem ou do vídeo.
4. **`none`**: a imagem ou o vídeo não é redimensionado de maneira alguma e aparece em seu tamanho original.
5. **`scale-down`**: redimensiona a imagem ou o vídeo para caber dentro do contêiner. A diferença entre este valor e **`contain`** é que ele escolhe a menor escala, o que pode resultar em uma imagem menor do que seu tamanho original.

O **`object-fit`** pode ser usado em conjunto com o **`object-position`**, que controla a posição da imagem ou do vídeo dentro do contêiner.

# :after

O seletor :after é uma pseudo-classe do CSS que permite adicionar conteúdo após o conteúdo de um elemento HTML selecionado. Esse conteúdo é adicionado após o elemento em questão, mas dentro da sua caixa de conteúdo. O conteúdo adicionado pode ser texto, imagens, ícones, ou qualquer outro elemento HTML válido.

Para utilizar o seletor :after, é necessário definir a propriedade "content" no estilo do elemento. Essa propriedade determina o conteúdo a ser adicionado após o elemento.

Por exemplo, o seguinte código CSS adiciona um ícone de seta após um elemento <button>:

```css

button:after {
  content: "→";
}

```

O resultado desse código seria a exibição de uma seta após o conteúdo do botão, como por exemplo "Clique aqui →".

Além disso, o seletor :after pode ser combinado com outras propriedades CSS, como position, display, e z-index, para definir a posição e o estilo do conteúdo adicionado. Isso permite criar efeitos interessantes como setas que mudam de cor quando o usuário passa o mouse sobre o botão, ou balões de fala que aparecem ao lado de uma caixa de texto.

---

# FUNÇÃO FILTER

A função "filter" do CSS é uma propriedade que permite alterar a aparência de elementos HTML, aplicando efeitos visuais em imagens, vídeos, textos e outros conteúdos da página.

O "filter" funciona aplicando um ou mais filtros a um elemento, que alteram a maneira como ele é renderizado na tela. Os filtros podem ser usados para ajustar a cor, o contraste, a saturação, o desfoque, a nitidez e outros aspectos visuais do elemento.

```css
.menu-lateral .icone {
    width: 30px;
    filter: invert(1);  
}
/* Nesse exemplo trocamos a cor do logo originalmente preta para branco.*/
```

**Aqui estão alguns exemplos de filtros disponíveis no CSS:**

blur: aplica um efeito de desfoque ao elemento.

grayscale: converte o elemento em tons de cinza.

sepia: converte o elemento em tons de sépia.

hue-rotate: altera a matiz do elemento.

invert: inverte as cores do elemento.

saturate: aumenta ou diminui a saturação do elemento.

brightness: aumenta ou diminui a luminosidade do elemento.

O "filter" pode ser usado para criar efeitos visuais interessantes e adicionais às suas páginas da web. No entanto, é importante lembrar que o uso excessivo de filtros pode tornar a página pesada e afetar negativamente o desempenho. Por isso, é recomendável usá-los com moderação e de forma estratégica, de modo a não comprometer a usabilidade e a experiência do usuário.

---

# 📏 FLEXBOX CSS

O Flexbox é um modelo de layout que permite criar estruturas flexíveis e responsivas em CSS. Com o Flexbox, é possível criar layouts mais eficientes e dinâmicos, permitindo que os elementos dentro de um container sejam organizados de maneira mais fácil e intuitiva.

Em um layout Flexbox, o container principal é chamado de "flex container" e os elementos dentro dele são chamados de "flex items". O Flexbox usa dois eixos para posicionar os elementos: o eixo principal e o eixo transversal.

O eixo principal é definido pela propriedade "flex-direction", que pode ser definida como "row" (padrão, da esquerda para a direita), "row-reverse" (da direita para a esquerda), "column" (de cima para baixo) ou "column-reverse" (de baixo para cima).

Os flex items são organizados ao longo do eixo principal e podem ser alinhados com as propriedades "justify-content" (alinhamento horizontal) e "align-items" (alinhamento vertical).

O eixo transversal é perpendicular ao eixo principal e é definido pela propriedade "align-content" (alinhamento horizontal) e "align-self" (alinhamento vertical) nos flex items.

Além disso, o Flexbox permite que os elementos dentro do flex container sejam redimensionados automaticamente com base no espaço disponível na tela, tornando o layout mais responsivo.

Em resumo, o Flexbox permite criar layouts flexíveis e responsivos com uma hierarquia clara e intuitiva dos elementos dentro do container, permitindo que os elementos sejam organizados e alinhados de forma fácil e eficiente.

---

Existem muitos recursos disponíveis online para aprender sobre Flexbox. Aqui estão algumas opções:

1. Documentação oficial do CSS: A documentação oficial do CSS é um ótimo lugar para começar a aprender sobre Flexbox. Ela oferece uma explicação completa sobre como o Flexbox funciona e como usá-lo em seus projetos.
2. Tutoriais online: Existem muitos tutoriais em vídeo e em texto disponíveis gratuitamente online que podem ajudá-lo a entender como usar o Flexbox. Algumas opções populares incluem a plataforma de cursos online Udemy, o site W3Schools e o canal do YouTube "Layout Land" da Mozilla.
3. Livros: Se você prefere aprender por meio de livros, existem vários títulos disponíveis que abrangem o Flexbox. Alguns dos livros mais populares incluem "CSS Flexbox: Build Modern Web Layouts With Flexbox" de Eric Meyer e "Flexbox in CSS" de Estelle Weyl.
4. Exemplos práticos: Uma das melhores maneiras de aprender sobre o Flexbox é experimentando por conta própria. Procure por exemplos práticos online e tente replicá-los em seu próprio código. À medida que você experimenta e testa diferentes recursos do Flexbox, você pode adquirir uma compreensão mais profunda do assunto.

---

# 🌈 Cores HEXADECIMAIS e RGBA

As cores hexadecimais são representadas por uma sequência de seis caracteres alfanuméricos que representam os componentes vermelho, verde e azul (RGB) da cor. Cada componente é representado por um par de caracteres hexadecimais, que variam de 00 a FF (0 a 255 em decimal). Por exemplo, #FF0000 é vermelho puro e #00FF00 é verde puro.

Por outro lado, o RGBA é uma forma de representar cores que inclui um quarto valor, que representa a transparência da cor. O RGBA é representado por quatro valores separados por vírgulas: os três primeiros valores representam a cor em RGB, e o quarto valor representa a transparência, variando de 0 a 1. Por exemplo, rgba(255, 0, 0, 0.5) é vermelho com 50% de transparência. RGBA é uma sigla em inglês que significa "Red, Green, Blue, Alpha".

A principal diferença entre as cores hexadecimais e RGBA é que as cores hexadecimais não incluem informações de transparência, enquanto o RGBA permite controlar a transparência da cor. As cores hexadecimais são geralmente mais fáceis de ler e escrever, mas não oferecem a mesma flexibilidade do RGBA em termos de transparência.

Em resumo, as cores hexadecimais são uma forma simples e popular de representar cores no CSS, enquanto o RGBA oferece mais flexibilidade com relação à transparência da cor. Ambas as formas têm seus usos e dependem das necessidades do projeto em que são utilizadas.

---

# 🎠 Estrutura Carrossel 🎠

### 🖼️ As imagens são de 1920 de largura por 1080 de altura

# CSS

```css
/* ESTILIZAÇÃO DO CARROSSEL  */

.carrossel {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;

}

.carrossel .imagem {
    height: 100vh;
    width: 100%;
    object-fit: cover;
    display: none;
    animation: mudarImagem 0.7s;   /* NOME DA ANIMAÇÃO*/
}   

.carrossel .imagem.ativa {
    display: block;
}

/* ANIMAÇÃO PARA SUAVIZAR A TROCA DE IMAGENS */

@keyframes mudarImagem{
    from {
        opacity: 0.85;
    }

    to {
        opacity: 1;
    }
}
```

A propriedade "position" define o tipo de posicionamento do elemento. "Fixed" significa que o elemento ficará fixo em relação à janela do navegador, não se movendo mesmo que a página role.

"Top 0" e "left 0" definem a posição inicial do elemento, ou seja, no canto superior esquerdo da janela do navegador.

"Width 100%" define a largura do elemento como 100% da largura da janela do navegador.

"Z-index: -1" define a camada do elemento em relação aos outros elementos na página. Um valor negativo significa que o elemento estará abaixo dos demais elementos na página, o que pode ser útil para definir um fundo ou imagem de fundo que não interfira com o conteúdo da página.

Em resumo, esse código cria um elemento fixo que ocupa toda a largura da janela do navegador e é posicionado no canto superior esquerdo. Ele é colocado em uma camada abaixo dos outros elementos da página para ser usado como fundo ou imagem de fundo.

# HTML

```html
<main>
        <div class="carrossel">
            <img class="imagem ativa" src="./src/imagens/tlou-1.jpg" alt="Ellie e Joel abraçados">

            <img class="imagem" src="./src/imagens/tlou-2.jpg" alt="Personagens The Last of Us">

            <img class="imagem" src="./src/imagens/tlou-3.jpg" alt="Joel olhando pela janela">

            <img class="imagem" src="./src/imagens/tlou-4.jpg" alt="Ellie e Tess se olhando">

            <img class="imagem" src="./src/imagens/tlou-5.jpg" alt="Ellie e Joel caminhando em uma cidade destruída">

            <img class="imagem" src="./src/imagens/tlou-6.jpg" alt="Joel segurando uma lanterna ligada na mão direita">

            <img class="imagem" src="./src/imagens/tlou-1.jpg" alt="Ellie e Joel abraçados">

        </div>
```

Este código HTML cria um carrossel de imagens usando uma div com a classe "carrossel". Dentro dessa div, há várias tags img com diferentes classes. A primeira imagem tem a classe "imagem ativa", enquanto as outras imagens têm apenas a classe "imagem". Cada imagem tem um atributo src que define o caminho para o arquivo de imagem correspondente.

Essas classes podem ser usadas em conjunto com CSS e JavaScript para criar um carrossel de imagens que alterna entre as imagens de forma automática ou com o clique de um botão. Por exemplo, a classe "imagem ativa" pode ser usada para definir a imagem que está atualmente visível no carrossel, enquanto a classe "imagem" pode ser usada para definir a aparência das imagens que não estão sendo exibidas.

```html
<div class="botoes-carrossel">
                <button class="botao selecionado"></button>
                <button class="botao"></button>
                <button class="botao"></button>
                <button class="botao"></button>
                <button class="botao"></button>
                <button class="botao"></button>
            </div>
```

Este código representa um conjunto de botões utilizados em conjunto com o código do carrossel apresentado anteriormente. Esses botões são usados para selecionar qual imagem será exibida no carrossel.

Cada botão é representado por um elemento **`button`** com a classe **`.botao`**. O primeiro botão é representado por um elemento com a classe **`.selecionado`**, indicando que este é o botão atualmente selecionado.

O código acima cria um conjunto de seis botões no total. Cada um desses botões é usado para representar uma imagem específica do carrossel. Quando o usuário clica em um desses botões, a imagem correspondente é exibida no carrossel.

# JavaScript

```jsx
const botoes = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
let posicao = 0; // variável que armazena a posição da imagem atual

function atualizarCarrossel() {
  // Remove a classe "selecionado" de todos os botões
  botoes.forEach(botao => botao.classList.remove('selecionado'));
  // Adiciona a classe "selecionado" ao botão correspondente
  if (posicao < 0) {
    // Se a posição for negativa, seleciona o último botão
    botoes[botoes.length - 1].classList.add('selecionado');
  } else {
    // Senão, seleciona o botão correspondente à posição
    botoes[posicao].classList.add('selecionado');
  }
  // Remove a classe "ativa" de todas as imagens
  imagens.forEach(imagem => imagem.classList.remove('ativa'));
  // Adiciona a classe "ativa" à imagem correspondente à posição
  imagens[(posicao + imagens.length) % imagens.length].classList.add('ativa');
}

function proximaImagem() {
  // Atualiza a posição da próxima imagem
  posicao = (posicao + 1) % (imagens.length + 1);
  atualizarCarrossel();
}

function imagemAnterior() {
  // Atualiza a posição da imagem anterior
  posicao--;
  if (posicao < -1) {
    // Se a posição for menor que -1, volta para a última imagem
    posicao = imagens.length - 1;
  }
  atualizarCarrossel();
}

// Chama a função de clique do botão "Próxima" a cada 5 segundos
setInterval(proximaImagem, 5000);

// Adiciona um evento de clique ao botão "Anterior"
document.querySelector('.botao-anterior').onclick = imagemAnterior;

// Exibe a primeira imagem
atualizarCarrossel();
```

```jsx

const botoes = document.querySelectorAll('.botao');

```

Aqui estamos selecionando todos os elementos do HTML que têm a classe **`.botao`** e os armazenando em uma variável chamada **`botoes`**. Esses elementos são botões que serão usados para navegar entre as imagens do carrossel.

```jsx

const imagens = document.querySelectorAll('.imagem');

```

Aqui estamos selecionando todos os elementos do HTML que têm a classe **`.imagem`** e os armazenando em uma variável chamada **`imagens`**. Esses elementos são as imagens que serão exibidas no carrossel.

```jsx

let index = 0;

```

Aqui estamos criando uma variável chamada **`index`** e inicializando seu valor em 0. Essa variável será usada para controlar qual imagem está sendo exibida atualmente no carrossel.

```jsx
function proximaImagem() {
  // Remove a classe "selecionado" de todos os botões
  botoes.forEach(botao => botao.classList.remove('selecionado'));
  // Adiciona a classe "selecionado" ao botão correspondente
  botoes[index].classList.add('selecionado');
  // Remove a classe "ativa" de todas as imagens
  imagens.forEach(imagem => imagem.classList.remove('ativa'));
  // Adiciona a classe "ativa" à próxima imagem
  imagens[index].classList.add('ativa');
  // Atualiza o índice da próxima imagem
  index = (index + 1) % imagens.length;
}

```

Aqui estamos criando uma função chamada **`proximaImagem()`**. Essa função será chamada a cada intervalo de tempo (no caso, a cada 5 segundos) e será responsável por exibir a próxima imagem no carrossel.

Dentro da função, temos alguns passos:

1. Removemos a classe **`selecionado`** de todos os botões, para garantir que nenhum botão fique selecionado quando mudarmos de imagem.
2. Adicionamos a classe **`selecionado`** ao botão correspondente à imagem que será exibida.
3. Removemos a classe **`ativa`** de todas as imagens, para garantir que nenhuma imagem fique ativa quando mudarmos para a próxima imagem.
4. Adicionamos a classe **`ativa`** à próxima imagem no carrossel.
5. Atualizamos o valor da variável **`index`**, que é o índice da próxima imagem a ser exibida. Usamos o operador **`%`** para garantir que **`index`** permaneça dentro do intervalo de índices válido (de 0 a **`imagens.length - 1`**). Isso significa que, quando **`index`** chega ao último índice, ele volta para 0, criando um efeito de carrossel infinito.

```jsx

setInterval(proximaImagem, 5000);

```

Por fim, usamos a função **`setInterval()`** para chamar a função **`proximaImagem()`** a cada intervalo de tempo de 5 segundos. Isso faz com que o carrossel alterne automaticamente entre as imagens.

---





