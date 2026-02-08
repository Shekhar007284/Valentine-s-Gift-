const SECRET = "21062024";


const lockScreen = document.getElementById('lockScreen');
const lovePage = document.getElementById('lovePage');
const music = document.getElementById('bgMusic');


function unlockLove() {
const input = document.getElementById('secret').value;
if (input === SECRET) {
lockScreen.classList.add('hidden');
lovePage.classList.remove('hidden');
music.play();
startConfetti();
spawnHearts();
startCountdown();
} else {
alert('Wrong secret 💔 Try again');
}
}


function shareWhatsApp() {
const text = encodeURIComponent('Satya ❤️ Priya
Our Love Story 💖
Unlock it here:');
window.open(`https://wa.me/?text=${text}${window.location.href}`);
}


// Floating hearts
function spawnHearts() {
setInterval(() => {
const heart = document.createElement('div');
heart.className = 'heart';
heart.innerText = '❤️';
heart.style.left = Math.random() * 90 + '%';
document.body.appendChild(heart);
setTimeout(() => heart.remove(), 2000);
}, 500);
}


// Countdown timer
function startCountdown() {
const target = new Date('2024-06-21').getTime();
const timer = document.createElement('p');
timer.id = 'countdown';
lovePage.appendChild(timer);


setInterval(() => {
const now = new Date().getTime();
const diff = now - target;
const days = Math.floor(diff / (1000 * 60 * 60 * 24));
timer.innerText = `💞 ${days} days of togetherness`;
}, 1000);
}


// Confetti
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let confetti = Array.from({length:150}, () => ({
x: Math.random()*canvas.width,
y: Math.random()*canvas.height,
r: Math.random()*6+2,
d: Math.random()*5+2
}));


function startConfetti() {
setInterval(() => {
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.fillStyle = 'rgba(255,255,255,0.8)';
confetti.forEach(c => {
ctx.beginPath();
ctx.arc(c.x,c.y,c.r,0,Math.PI*2);
ctx.fill();
c.y += c.d;
if (c.y > canvas.height) c.y = 0;
});
},20);
}
