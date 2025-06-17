// ロードしたときに実行される
window.onload = function(){
    initDraw101();
}

function initDraw101(){
    /** @type {CanvasRenderingContext2D} */
    const context101 = document.getElementById("canvas101").getContext("2d");

    // 背景の描画
    context101.fillStyle = '#fff';
    context101.fillRect(0, 0, 1900, 900);

    // 枠線の描画
    context101.lineWidth = 15;
    context101.strokeStyle = '#2269b0'
    strokeRoundRect(context101, 30, 30, 1840, 840, 2);

}