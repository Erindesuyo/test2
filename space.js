
$(document).ready(function(){
  $("h1,p").hide().fadeIn(2000); 
});



const sin = Math.sin;
const cos = Math.cos;
const PI = Math.PI;
const fov = 150;

class Dot {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

let canvas = document.querySelector('.canvas');
let context = canvas.getContext('2d');
let dots = [];
let dotsLength = (window.innerWidth + window.innerHeight) / 20;

function setSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initDots();
}

function initDots() {
  dots = [];
  let x, y, z;
  for (let i = 0; i < dotsLength; i++) {
    x = Math.random() * window.innerWidth - window.innerWidth / 2;
    y = Math.random() * window.innerHeight - window.innerHeight / 2;
    z = Math.random() * window.innerWidth - window.innerWidth / 2;
    dots.push(new Dot(x, y, z));
  }
}

function drawDots(dot) {
  let scale = fov / (fov + dot.z);
  let x2d = dot.x * scale + window.innerWidth / 2;
  let y2d = dot.y * scale + window.innerHeight / 2;
  context.fillStyle = '#ffffff';
  context.fillRect(x2d, y2d, scale * 4, scale * 3);
}

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (let dot of dots) {
    dot.z -= 4;
    if (dot.z < -fov) {
      dot.z += (window.innerWidth + window.innerHeight) / 2;
    }
    drawDots(dot);
  }
  requestAnimationFrame(render);
}

window.addEventListener('resize', setSize);

setSize();
render();

// 배경 모션
$(document).ready(function() {
  let scale = 1;
  let growing = true;

  function animateBackground() {
      if (growing) {
          scale += 0.005;  // 확대 속도를 조금 더 천천히 설정
          if (scale >= 1.3) growing = false;  // 최대 크기 제한
      } else {
          scale -= 0.005;
          if (scale <= 1) growing = true;
      }

      // 배경 크기와 위치를 조정
      $('body').css({
          'background-size': `${scale * 100}%`,   // 확대/축소
          'background-position': 'center center'  // 이미지 중앙 유지
      });
  }

  setInterval(animateBackground, 50);  // 50ms마다 애니메이션 실행
});


