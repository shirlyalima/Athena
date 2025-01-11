Athena Game
Este projeto é um jogo interativo em 2D inspirado no estilo de corrida infinita. O jogador controla a personagem "Athena", que deve saltar para evitar colisões com colunas enquanto um cronômetro regressivo desafia sua habilidade. O jogo oferece uma experiência divertida com animações suaves e design minimalista.

Estrutura do Projeto
O jogo é composto por três principais arquivos:

1. HTML (index.html):
* Estrutura da página web.
* Importação de arquivos CSS e JavaScript.
* Elementos visuais como o fundo, o cronômetro e os botões.
2. CSS (style.css):
* Estilos e animações.
* Gerenciamento da aparência de elementos como Athena, as colunas e o fundo deslizante.
3. JavaScript (script.js):
* Lógica do jogo, incluindo:
* Detecção de colisão.
* Animações de salto.
* Controle do cronômetro.
* Reinício do jogo.

Funcionalidades
* Movimento da Athena: Pressione qualquer tecla para fazer Athena saltar.
* Cronômetro: O tempo restante é exibido no topo da tela e decremente a cada segundo.
* Detecção de Colisões: O jogo detecta automaticamente quando Athena colide com uma coluna, exibindo uma animação de "Game Over".
* Reinício: O botão "Reload" reinicia o jogo a qualquer momento.

Personalização
Imagens:
* Substitua os arquivos em ./imgs para mudar o design do fundo, colunas ou da personagem.
Dificuldade:
* Ajuste a velocidade das colunas no CSS (column-animation) para aumentar ou diminuir a dificuldade.
Cronômetro:
* Modifique o valor inicial de tempoAtual no JavaScript para alterar o tempo total.

  *Melhorias Futuras*
1. Adicionar um placar para registrar a pontuação do jogador.
2. Introduzir níveis de dificuldade.
3. Implementar sons para saltos e colisões.
4. Tornar o jogo responsivo para dispositivos móveis.

