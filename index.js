// 시간 보여주는 코드
const todayTime = document.getElementById('todayTime');

function clock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    todayTime.innerText = `${hours} : ${minutes}`; 
}

function init() {
    clock();
    setInterval(clock, 1000);
}

init();