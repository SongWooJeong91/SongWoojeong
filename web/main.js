// 버튼
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
// 슬라이더 보이는 곳
const sliderView = document.querySelector('.sliderView');
const sliderUl = document.querySelector('.sliderUl');
// 현재 슬라이드 Index
let currentIdx = 1;
// 화면 전체 너비
const imgSize = window.innerWidth;

const imgPositionN = () => {
	if (currentIdx === 3) {
		currentIdx = 1;
		sliderUl.style.left = '0px';
	} else {
		sliderUl.style.left = `-${imgSize * currentIdx}px`;
		currentIdx += 1;
	}
};

const imgPositionP = () => {
	if (currentIdx === 1) {
		currentIdx = 3;
		sliderUl.style.left = `-${imgSize * (currentIdx - 1)}px`;
	} else {
		currentIdx -= 1;
		sliderUl.style.left = `-${imgSize * (currentIdx - 1)}px`;
	}
};

prev.addEventListener('click', () => {
	imgPositionP();
});

next.addEventListener('click', () => {
	imgPositionN();
});
