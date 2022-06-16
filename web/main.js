const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const sliderView = document.querySelector('.sliderView');
const sliderUl = document.querySelector('.sliderUl');

let currentIdx = 1;

// 화면 전체 너비
const imgSize = window.innerWidth;

const imgPosition = () => {
	sliderUl.style.left = `-${imgSize * (currentIdx - 1)}px`;
};

prev.addEventListener('click', () => {
	if (currentIdx === 1) currentIdx = 3;
	else currentIdx -= 1;
	imgPosition();
});

next.addEventListener('click', () => {
	if (currentIdx === 3) currentIdx = 1;
	else currentIdx += 1;
	imgPosition();
});
