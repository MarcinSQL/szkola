const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

const bokKwadratu = 80;
const kolorKwadratu = 'green';
let wspolrzednaXKwadratu = 50;
let wspolrzednaYKwadratu = 50;

const fps = 40;
let lastTime = 0;

//utworzymy funkcje, ktora rysuje nasz kwadrat
function rysujKwadrat(){
    ctx.fillStyle = kolorKwadratu;
    ctx.fillRect(wspolrzednaXKwadratu, wspolrzednaYKwadratu, bokKwadratu, bokKwadratu);
}

//utworzmy funkcje, ktora zmienia polozenie kwadratu
function ruchKwadratu(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    rysujKwadrat();
    wspolrzednaXKwadratu = wspolrzednaXKwadratu + 5;
    wspolrzednaYKwadratu = wspolrzednaYKwadratu + 2;
}

//utworzymy funkcje do animacji ruchu kwadratu
function animacja(time){
    requestAnimationFrame(animacja);

    if(time - lastTime >= 1000 / fps) {
        ruchKwadratu();
        lastTime = time;
    }  
}
animacja();

//setInterval(ruchKwadratu, 1000/ 30); //wywoluje funkcje ruchKwadratu co 1000/30 milisekund