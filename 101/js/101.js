// ロードしたときに実行される
window.onload = function(){
    initDraw101();
}

function initDraw101(){
    const context101 = document.getElementById("canvas101").getContext("2d");
    context101.lineWidth = 5;
    context101.strokeRect(15,15,1870,870, 10);
}