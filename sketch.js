//variaveis da bolinha 
let xBolinha = 100;
let yBolinha = 200;
let diametro = 13;
let raio = diametro /2;
 
//velocidade da bolinha 
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// variaveis da raquete 
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;
 
// variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

let ChancesDeErrar = 0
let colidiu = false

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  mostrarBolinha ();
  background(0);
  mostrarBolinha ();
  movimentarBolinha ( xRaquete, yRaquete);
  verificarColisaoBorda ();
  mostrarRaquete (xRaquete, yRaquete);
  movimentarMinhaRaquete ();
  //verificarColisaoRaquete ();
  verificarColisaoRaquete (xRaquete, yRaquete);
  mostrarRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentarRaqueteOponente ();
   verificarColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar ();
  marcaPonto ();
}


 function mostrarBolinha () {
    circle (xBolinha, yBolinha, diametro )
 }

 function movimentarBolinha () {
   xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
 }


 function verificarColisaoBorda () {
   if (xBolinha + raio > width ||
      xBolinha - raio < 0) {
  velocidadeXBolinha *= -1;
   
  }
  
  if (yBolinha + raio > height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
 }

function mostrarRaquete(x,y){
  rect(x, y, comprimentoRaquete, 
       alturaRaquete);
}




function movimentarMinhaRaquete () {
  if (keyIsDown (UP_ARROW)) {
    yRaquete -= 10;
    
  }
    if (keyIsDown (DOWN_ARROW)) 
    yRaquete += 10;
}

function verificarColisaoRaquete() {
    if (xBolinha - raio < xRaquete + comprimentoRaquete
        && yBolinha - raio < yRaquete + alturaRaquete
        && yBolinha + raio > yRaquete) {
        velocidadeXBolinha *= -1;
      raquetada.play();
    }
}

function verificarColisaoRaquete(x, y) {
  colidiu = 
    collideRectCircle(x, y,comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if(colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}



function movimentarRaqueteOponente () {
  if (keyIsDown(87)){
        yRaqueteOponente -= 10;
    }
    if (keyIsDown(83)){
        yRaqueteOponente += 10; + ChancesDeErrar
      calcularChancesDeErrar
    }
}


function incluiPlacar(){
    stroke(255)
    textAlign(CENTER);
    textSize(16);
    fill(color(255,140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255,140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}



function marcaPonto() {
  if (xBolinha > 590) {
    meusPontos += 1;
  }
  if (xBolinha < 10) {
    pontosDoOponente += 1;
  }
}

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}


function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}

