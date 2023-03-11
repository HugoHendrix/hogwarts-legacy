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
setInterval(proximaImagem, 3000);

// Adiciona um evento de clique ao botão "Anterior"
document.querySelector('.botao-anterior').onclick = imagemAnterior;

// Exibe a primeira imagem
atualizarCarrossel();
