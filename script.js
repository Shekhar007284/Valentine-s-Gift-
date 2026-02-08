const form = document.getElementById('valentineForm');
const result = document.getElementById('result');
const message = document.getElementById('message');


const music = document.getElementById('bgMusic');


form.addEventListener('submit', function(e) {
e.preventDefault();
const from = document.getElementById('from').value;
const to = document.getElementById('to').value;


message.innerText = `${from} ❤️ ${to} — Happy Valentine's Day!`;
result.classList.remove('hidden');
startConfetti();
music.play();
});


function shareWhatsApp() {
const text = encodeURIComponent(message.innerText + " 💖\nCreate yours here:");
window.open(`https://wa.me/?text=${text}${window.location.href}`);
}


function copyLink() {
navigator.clipboard.writeText(window.location.href);
alert('Link copied! 💌');
}


// Confetti animation
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let confetti = [];
for (let i = 0; i < 150; i++) {
confetti.push({
x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
r: Math.random() * 6 + 2,
d: Math.random() * 5 + 2
});
}


function startConfetti() {
setInterval(() => {
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = 'rgba(255,255,255,0.8)';
confetti.forEach(c => {
ctx.beginPath();
ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
ctx.fill();
c.y += c.d;
if (c.y > canvas.height) c.y = 0;
});
}, 20);


// Instagram-style floating hearts
for (let i = 0; i < 12; i++) {
const heart = document.createElement('div');
heart.className = 'heart';
heart.innerText = '❤️';
heart.style.left = Math.random() * 80 + 10 + '%';
document.body.appendChild(heart);
setTimeout(() => heart.remove(), 2000);
}
});
}, 20);
}}, 20);


// Instagram-style floating hearts
for (let i = 0; i < 12; i++) {
const heart = document.createElement('div');
heart.className = 'heart';
heart.innerText = '❤️';
heart.style.left = Math.random() * 80 + 10 + '%';
document.body.appendChild(heart);
setTimeout(() => heart.remove(), 2000);
}
});
}, 20);
  }
