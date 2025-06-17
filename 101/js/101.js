// レイアウト図45P A-1

// ロードしたときに実行される
window.onload = function(){
    initDraw101();
}

function initDraw101(){
    /** @type {CanvasRenderingContext2D} */
    const context101 = document.getElementById("canvas101").getContext("2d");

    // 背景の描画
    context101.fillStyle = "#fff";
    context101.fillRect(0, 0, 900, 500);

    // 枠線の描画
    context101.lineWidth = 15;
    context101.strokeStyle = "#2269b0";
    strokeRoundRect(context101, 20, 20, 860, 460, 2);

    context101.fillStyle = "#2269b0";
    context101.font = "200px 'Kosugi Maru'";
    context101.textBaseline = "top";
    context101.textAlign = "left";
    context101.fillText("立川市", 110, 80);

}