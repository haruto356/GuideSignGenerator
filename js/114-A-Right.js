// ロードされたときに実行
window.onload = function(){
    draw();
}

// 生成した画像を保存する関数
function download(){
    draw();
    downloadAsPng(document.getElementById("inputNameJa").value);
}

// canvasの描画
function draw(){
    const canvas = document.getElementById("canvas");
    /** @type {CanvasRenderingContext2D} */
    const context = canvas.getContext("2d");

    const inputNameJa = document.getElementById("inputNameJa").value;
    const inputNameEn = document.getElementById("inputNameEn").value;
    let inputDistance = document.getElementById("inputDistance").value;

    const inputNameLength = [...inputNameJa].length;
    let nameJaStartPos = 160;
    let nameEnStartPos = 440;
    let arrowStartPos = 840;

    const distanceUnitArray = document.getElementsByName("distanceUnit");

    for(let i = 0; i < distanceUnitArray.length; i++){
        if(distanceUnitArray.item(i).checked && distanceUnitArray.item(i).value != "none"){
            inputDistance += distanceUnitArray.item(i).value;
        }
    }

    // 文字数によって場合分け
    if(inputNameLength <= 2){
        canvas.width = 1200;
        context.font = "200px 'Kosugi Maru'";
        context.letterSpacing = "160px";
        nameJaStartPos = 160;
        nameEnStartPos = 440;
        arrowStartPos = 840;
    }
    else if(inputNameLength == 3){
        canvas.width = 1200;
        context.font = "200px 'Kosugi Maru'";
        context.letterSpacing = "40px";
        nameJaStartPos = 100;
        nameEnStartPos = 440;
        arrowStartPos = 840;
    }
    else if(inputNameLength == 4){
        canvas.width = 1400;
        context.font = "200px 'Kosugi Maru'";
        context.letterSpacing = "40px";
        nameJaStartPos = 80;
        nameEnStartPos = 540;
        arrowStartPos = 1060;
    }
    else if(inputNameLength == 5){
        canvas.width = 1700;
        context.font = "200px 'Kosugi Maru'";
        context.letterSpacing = "40px";
        nameJaStartPos = 110;
        nameEnStartPos = 690;
        arrowStartPos = 1330;
    }
    else if(inputNameLength == 6){
        canvas.width = 1700;
        context.font = "160px 'Kosugi Maru'";
        context.letterSpacing = "40px";
        nameJaStartPos = 110;
        nameEnStartPos = 690;
        arrowStartPos = 1300;
    }

    // canvasをクリア
    context.clearRect(0, 0, canvas.width, canvas.height);

    // 背景
    context.fillStyle = "#fff";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // 枠線
    context.lineWidth = 10;
    context.strokeStyle = "#2269b0";
    strokeRoundRect(context, 20, 20, canvas.width - 40, canvas.height - 40, 2);

    // 地名
    context.fillStyle = "#2269b0";
    context.textBaseline = "top";
    context.textAlign = "left";
    context.fillText(inputNameJa, nameJaStartPos, 80);

    // ローマ字
    context.font = "bold 100px Arial";
    context.letterSpacing = "0px";
    context.textAlign = "center";
    context.fillText(inputNameEn, nameEnStartPos, 320);

    // 距離
    context.fillText(inputDistance, arrowStartPos + 130, 320);

    // 矢印
    drawRightArrow114(context, arrowStartPos, 80);
}