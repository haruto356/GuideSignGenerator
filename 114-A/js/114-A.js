// ロードされたときに実行
window.onload = function(){
    draw();
}

// 入力内容を消去
function clearInput(){
    document.getElementById("inputNameJa").value = "";
    document.getElementById("inputNameEn").value = "";
    document.getElementById("inputDistance").value = "";

    draw();
}

// canvasの描画
function draw(){
    const canvas = document.getElementById("canvas114-A");
    /** @type {CanvasRenderingContext2D} */
    const context = canvas.getContext("2d");

    const inputNameJa = document.getElementById("inputNameJa").value;
    const inputNameEn = document.getElementById("inputNameEn").value;
    const inputDistance = document.getElementById("inputDistance").value;

    // canvasをクリア
    context.clearRect(0, 0, canvas.width, canvas.height);

    // 背景
    context.fillStyle = "#fff";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // 枠線
    context.lineWidth = 10;
    context.strokeStyle = "#2269b0";
    strokeRoundRect(context, 20, 20, canvas.width - 40, canvas.height - 40, 2);

    // 矢印
    drawRightArrow114(context, 840, 80);

    // 地名
    context.fillStyle = "#2269b0";
    context.textBaseline = "top";
    context.textAlign = "center";
    
    context.letterSpacing = "160px";
    context.font = "200px 'Kosugi Maru'";
    context.fillText(inputNameJa, 20 + 10 + 130 + 200 + (160 / 2), 80);

    // ローマ字
    context.font = "bold 100px Arial";
    context.letterSpacing = "0px";
    context.fillText(inputNameEn, 20 + 10 + 130 + 200 + (160 / 2), 320);

    // 距離
    context.fillText(inputDistance + "km", 20 + 10 + 130 + 200 + 160 + 200 + 120 + (260) / 2, 320);

    // TODO: 文字数に応じてcanvasのサイズを変更する
    // TODO: 矢印を左右逆にできるようにする
}