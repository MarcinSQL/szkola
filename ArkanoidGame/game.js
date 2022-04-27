//odwolujemy sie do elementu canvas
const canvas = document.querySelector('#canvas');
//ustawiamy tryb pracy canvas
const ctx = canvas.getContext('2d');
//wymiary plotna canvas
canvas.width = 900;
canvas.height = 500;

//ZMIENNE
const fps = 40; //klatki na sekunde do animacji
let lastTime = 0;
const space = (window.innerWidth - canvas.width) / 2;   //przestrzen miedzy plansza a rozmiarem okna przegladarki
let gameOver = false;

const playerWidth = 100;    //dlugosz paletki gracza
const playerHeight = 10;    //grubosc paletki gracza
let playerX = canvas.width / 2 - playerWidth / 2;   //polozenie paletki gracza w osi X
const playerY = canvas.height - 50; //polozenie paletki gracza w osi Y

const ballSize = 8;
let ballX = canvas.width / 2;
let ballY = canvas.height / 1.5;
let ballSpeedX = 15;
let ballSpeedY = 12;

const bricks = [];  //tablica przechowujaca nasze cegielki
const brickWidth = canvas.width / 10;   //szerokosc cegielki
const brickHeight = 35; //wysokosc cegielki
let brickX = 0; //wspolrzedna X cegielki
let brickY = 0; //wspolrzedna Y cegielki

let score = 0;    //aktualny wynik gracza
const scoreField = document.querySelector('input[name="results"]'); //pobieramy pole gdzie bedziemy umieszczac aktualny 

scoreField.value = score;

//KOD GRY

//tworzenie planszy gry
function Table(){
    ctx.fillStyle = '#333';
    ctx.fillRect(0,0, canvas.width, canvas.height);
}

//tworzenie paletki gracza
function Player(){
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(playerX, playerY, playerWidth, playerHeight);

    //przypisujemy do naszej planszy gry ruch myszy
    canvas.addEventListener('mousemove', PlayerMoveM);

    //przypisujemy do naszego dokumentu HTML obsluge klawiatury
    document.addEventListener('keydown', PlayerMoveK);
}

//ruch paletki gracza
function PlayerMoveM(event){
    //ruch za pomoca myszy
    playerX = event.clientX - space - playerWidth / 2;
    //zabezpieczenie, aby paletka sie nie chowala
    if(playerX <= 0){
        playerX = 0;
    }
    if(playerX >= canvas.width - playerWidth){
        playerX = canvas.width - playerWidth;
    }
}

function PlayerMoveK(event){
   //ruch za pomoca klawiatury
    if(event.key == 'ArrowLeft'){
        playerX = playerX - 20;
        if(playerX <= 0){
            playerX = 0;
        }
    }
    if(event.key == 'ArrowRight'){
        playerX = playerX + 20;
        if(playerX >= canvas.width - playerWidth){
            playerX = canvas.width - playerWidth;
        }
    }   
}

//tworzenie pilki
function Ball(){
    ctx.fillStyle = '#FF6600';
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballSize, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
}

//ruch pilki
function BallMove(){
    Ball();

    ballX += ballSpeedX;
    ballY -= ballSpeedY;

    //odbicie pilki od gory
    if(ballY - ballSize <= 0){
        ballSpeedY = - ballSpeedY;  //zmieniami kierunek ruchu pilki w osi Y
    }
    
    //odbie pilki od dolu
    //if(ballY + ballSize >= canvas.height){
    //    ballSpeedY = -ballSpeedY;
    //}

    //odbicie pilki z lewej strony
    if(ballX - ballSize <= 0){
        ballSpeedX = -ballSpeedX;
    }
    //odbicie pilki z prawej strony
    if(ballX + ballSize >= canvas.width){
        ballSpeedX = -ballSpeedX;
    }
    //odbie pilki od paletki
    if((ballY + ballSize >= playerY) && (ballX > playerX) && (ballX < playerX + playerWidth)){
        ballSpeedY = -ballSpeedY + Math.random() * 1;
    }
    //game over
    if(ballY - ballSize >= canvas.height){
        gameOver = true;
        alert('Koniec gry! Przegrales');
    }
}

//tworzymy cegielki (zapelniamy tablice bricks)
function CreateBricks(){
    //do tablicy dodajemy 30 cegielek
    for(let i = 0; i < 30; i++){
        bricks.push({
            wX: brickX, //wspolrzedne X kazdej cegielki
            wY: brickY, //wspolrzedne Y kazdej cegielki
            w: brickWidth,  //szerokosc kazdej cegielki
            h: brickHeight, //wysokosc kazdej cegielki
            //kolor cegielki
            r: Math.random() * 255,
            g: Math.random() * 255,
            b: Math.random() * 255,
        });
        //zmieniamy wspolrzedne kolejnych cegielek
        //pierwszy rzad
        brickX += brickWidth;
        //drugi rzad
        if (i == 9){
            brickX = 0;
            brickY = brickHeight;
        }
        //trzeci rzad
        if (i == 19){
            brickX = 0;
            brickY = brickHeight * 2;
        }
    }
}
CreateBricks();

//rysujemy cegielki na planszy gry
function DrawBricks(){
    bricks.forEach((brick) =>{  //zastosowanie petli forEach
        ctx.fillStyle = `rgb(${brick.r}, ${brick.g}, ${brick.b})`;
        ctx.fillRect(brick.wX, brick.wY, brick.w, brick.h);
    });
}

//zderzenie pilki z cegielka
function BallVsBrick(){
    bricks.forEach((brick) =>{
        if(ballY - ballSize < brick.wY + brick.h && ballX > brick.wX && ballX < brick.wX + brick.w){
            ballSpeedY = -ballSpeedY;
            //znikanie cegielki
            brick.w = 0;
            brick.h = 0;

            //wynik gracza
            score += 10;    //po zbiciu cegielki zwiekszamy ilosc punktow
            scoreField.value = score;   //zapisujemy aktualne punkty na stronie
        }
    });
}

//funkcja uruchamiajaca i obslugujaca gre
function game(time){
    if(gameOver == false){
        requestAnimationFrame(game);
        if(time - lastTime >= 1000 / fps){
            lastTime = time;

            //tutaj bedziemy wywolywac poszczegolne moduly/funkcje gry
            Table();
            DrawBricks();
            Player();
            BallMove();
            BallVsBrick();
        }
    }
}

game();