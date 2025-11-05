// ロードしたときに実行される
window.onload = function(){
    draw();
}

// 生成した画像を保存する関数
function download(){
    draw();
    downloadAsPng("105"); // 地名1の名前で保存する用に変更する
}

// 地名を描画する関数
function draw(){
    const canvas = document.getElementById("canvas");
    /** @type {CanvasRenderingContext2D} */
    const context = canvas.getContext("2d");

    // 日本語地名
    const inputNameJa1 = document.getElementById("inputNameJa1").value;
    const inputNameJa2 = document.getElementById("inputNameJa2").value;
    const inputNameJa3 = document.getElementById("inputNameJa3").value;

    // ローマ字地名
    const inputNameEn1 = document.getElementById("inputNameEn1").value;
    const inputNameEn2 = document.getElementById("inputNameEn2").value;
    const inputNameEn3 = document.getElementById("inputNameEn3").value;

    // 距離
    const inputDistance1 = document.getElementById("inputDistance1").value;
    const inputDistance2 = document.getElementById("inputDistance2").value;
    const inputDistance3 = document.getElementById("inputDistance3").value;

    // canvasサイズの設定（縦）
    canvas.height = 500;
    if(inputNameJa2 != ""){
        canvas.height = 900;
    }
    if(inputNameJa3 != ""){
        canvas.height = 1300;
    }

    context.fillStyle = "#ccc";
    context.fillRect(0,0,canvas.width, canvas.height)
}