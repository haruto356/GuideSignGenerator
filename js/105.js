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

    // canvasのリセット
    context.clearRect(0, 0, canvas.width, canvas.height);

    // 背景の描画
    context.fillStyle = "#2269b0";
    context.fillRect(0,0,canvas.width, canvas.height)

    context.fillStyle = "#fff";
    fillRoundRect(context, 10, 10, canvas.width - 20, canvas.height - 20, 2);

    context.fillStyle = "#2269b0";
    fillRoundRect(context, 15, 15, canvas.width - 30, canvas.height - 30, 2);

    // 地名1の矢印の描画
    arrowSelectArray1 = document.getElementsByName("arrow1");
    for(let i = 0; i < arrowSelectArray1.length; i++){
        if(arrowSelectArray1.item(i).checked){
            drawArrow105(context, canvas.width - 360, canvas.height - (canvas.height - 130), i);
        }
    }

    // 地名2の矢印の描画
    if(inputNameJa2 != ""){
        arrowSelectArray2 = document.getElementsByName("arrow2");
        for(let i = 0; i < arrowSelectArray2.length; i++){
            if(arrowSelectArray2.item(i).checked){
                drawArrow105(context, canvas.width - 360, canvas.height - (canvas.height - 520), i);
            }
        }
    }

    // 地名3の矢印の描画
    if(inputNameJa3 != ""){
        arrowSelectArray3 = document.getElementsByName("arrow3");
        for(let i = 0; i < arrowSelectArray3.length; i++){
            if(arrowSelectArray3.item(i).checked){
                drawArrow105(context, canvas.width - 360, canvas.height - (canvas.height - 910), i);
            }
        }
    }

    // 文字数による場合分け
    const inputNameJa1Length = [...inputNameJa1].length;
    const inputNameJa2Length = [...inputNameJa2].length;
    const inputNameJa3Length = [...inputNameJa3].length;

    const inputNameMaxLength = Math.max(inputNameJa1Length, inputNameJa2Length, inputNameJa3Length);

    let nameJaStartPosX = 130;

    switch(inputNameMaxLength){
        case 0:
        case 1:
        case 2:
            // canvas.width = 1200;
            context.font = "200px 'Kosugi Maru'";
            context.letterSpacing = "160px";
            nameJaStartPosX = 170;
            break;
    }

    // 市町村名の描画
    context.fillStyle = "#fff";
    context.textBaseline = "top";
    context.textAlign = "left";
    context.fillText(inputNameJa1, nameJaStartPosX, 80);
}