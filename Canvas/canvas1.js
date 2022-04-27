//odwolujemy sie do elementu canvas w HTMLu
//utworzymy zmienna, ktora bedzie przechowywac ten element canvas
const canvas = document.querySelector('#canvas');
//pobieramy kontekst canvasa i zapisujemy do zmiennej
const ctx = canvas.getContext('2d');

//ustalmy wielkosc plotna canvasa
canvas.width = 800;
canvas.height = 600;

//prostokat
ctx.fillStyle = 'blue';
ctx.fillRect(20, 50, 100, 200);

ctx.fillStyle = 'yellow';
ctx.fillRect(100, 20, 300, 100);

ctx.strokeStyle = 'green';
ctx.strokeRect(300, 300, 150, 50);

//linia
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(700, 10);
ctx.lineTo(730, 100);
ctx.lineTo(600, 50);
ctx.closePath();
ctx.fill();
ctx.stroke();

//'czyscik'
ctx.clearRect(0, 0, canvas.width, canvas.height);

//luk, okrag

function stopnieNaRadiany(stopnie) {
    return (Math.PI / 180) * stopnie;
}

ctx.strokeStyle = 'brown';
ctx.beginPath();
ctx.arc(400, 300, 100, stopnieNaRadiany(0), stopnieNaRadiany(360));
ctx.fill();
ctx.stroke();

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.arc(400, 300, 50, stopnieNaRadiany(0), stopnieNaRadiany(360), true);
ctx.stroke();

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.arc(100, 100, 100, stopnieNaRadiany(0), stopnieNaRadiany(45));
ctx.stroke();

//'czyscik'
ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.beginPath();
ctx.arc(750, 20, 100, stopnieNaRadiany(0), stopnieNaRadiany(360));
ctx.fill();

ctx.strokeStyle = 'yellow';
ctx.beginPath();
ctx.moveTo(700, 10);
ctx.lineTo(730, 105);
ctx.lineTo(620, 135);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(600, 50);
ctx.lineTo(680, 0);
ctx.lineTo(680, 60);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(760, 180);
ctx.lineTo(700, 60);
ctx.lineTo(790, 60);
ctx.fill();
ctx.stroke();

ctx.fillStyle = '#93f600';
ctx.beginPath();
ctx.arc(0, 1422, 1000, stopnieNaRadiany(0), stopnieNaRadiany(360));
ctx.fill();

ctx.fillStyle = 'green';
ctx.beginPath();
ctx.arc(500, 1400, 1000, stopnieNaRadiany(0), stopnieNaRadiany(360));
ctx.fill();

ctx.fillStyle = 'orange';
ctx.fillRect(200, 300, 400, 200);

ctx.fillStyle = 'brown';
ctx.beginPath();
ctx.moveTo(150, 320);
ctx.lineTo(650, 320);
ctx.lineTo(400, 200);
ctx.fill();

ctx.fillStyle = 'brown';
ctx.fillRect(350, 380, 100, 120);

ctx.fillStyle = '#4169e1';
ctx.fillRect(250, 350, 45, 45);

ctx.fillStyle = '#4169e1';
ctx.fillRect(500, 350, 45, 45);

ctx.fillStyle = 'grey';
ctx.fillRect(450, 200, 50, 70);

ctx.fillStyle = '#ddd';
ctx.beginPath();
ctx.arc(100, 50, 20, stopnieNaRadiany(0), stopnieNaRadiany(360));
ctx.fill();

ctx.fillStyle = '#ddd';
ctx.beginPath();
ctx.arc(120, 40, 20, stopnieNaRadiany(0), stopnieNaRadiany(360));
ctx.fill();

ctx.fillStyle = '#ddd';
ctx.beginPath();
ctx.arc(120, 55, 20, stopnieNaRadiany(0), stopnieNaRadiany(360));
ctx.fill();

ctx.fillStyle = '#ddd';
ctx.beginPath();
ctx.arc(140, 40, 20, stopnieNaRadiany(0), stopnieNaRadiany(360));
ctx.fill();

ctx.fillStyle = '#ddd';
ctx.beginPath();
ctx.arc(145, 55, 20, stopnieNaRadiany(0), stopnieNaRadiany(360));
ctx.fill();

ctx.fillStyle = '#ddd';
ctx.beginPath();
ctx.arc(160, 45, 20, stopnieNaRadiany(0), stopnieNaRadiany(360));
ctx.fill();

//

ctx.fillStyle = '#ddd';
ctx.beginPath();
ctx.arc(300, 100, 20, stopnieNaRadiany(0), stopnieNaRadiany(360));
ctx.fill();

ctx.fillStyle = '#ddd';
ctx.beginPath();
ctx.arc(320, 90, 20, stopnieNaRadiany(0), stopnieNaRadiany(360));
ctx.fill();

ctx.fillStyle = '#ddd';
ctx.beginPath();
ctx.arc(320, 105, 20, stopnieNaRadiany(0), stopnieNaRadiany(360));
ctx.fill();

ctx.fillStyle = '#ddd';
ctx.beginPath();
ctx.arc(340, 90, 20, stopnieNaRadiany(0), stopnieNaRadiany(360));
ctx.fill();

ctx.fillStyle = '#ddd';
ctx.beginPath();
ctx.arc(345, 105, 20, stopnieNaRadiany(0), stopnieNaRadiany(360));
ctx.fill();

ctx.fillStyle = '#ddd';
ctx.beginPath();
ctx.arc(360, 100, 20, stopnieNaRadiany(0), stopnieNaRadiany(360));
ctx.fill();

