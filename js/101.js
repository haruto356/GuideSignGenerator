// ロードしたときに実行される
window.onload = function(){
    draw();
}

// 生成した画像を保存する関数
function download(){
    draw();
    downloadAsPng(document.getElementById("inputNameJa").value);
}

// 地名を描画する関数
function draw(){
    const canvas = document.getElementById("canvas");
    /** @type {CanvasRenderingContext2D} */
    const context = canvas.getContext("2d");

    let inputNameJa = document.getElementById("inputNameJa").value;
    let inputNameEn = document.getElementById("inputNameEn").value;

    const tailSelectArray = document.getElementsByName("tailSelect");
    let tailSelectValue = "";

    for(let i = 0; i < tailSelectArray.length; i++){
        if(tailSelectArray.item(i).checked){
            tailSelectValue = tailSelectArray.item(i).value;
        }
    }

    const inputNameLength = [...inputNameJa].length;
    let nameJaStartPos = 140;

    // 文字数による場合分け
    if(inputNameLength <= 2){
        canvas.width = 900;
        context.font = "200px 'Kosugi Maru'";
        context.letterSpacing = "160px";
        nameJaStartPos = 170;
    }
    else if(inputNameLength == 3){
        canvas.width = 900;
        context.font = "200px 'Kosugi Maru'";
        context.letterSpacing = "40px";
        nameJaStartPos = 110;
    }
    else if(inputNameLength == 4){
        canvas.width = 1100;
        context.font = "200px 'Kosugi Maru'";
        context.letterSpacing = "40px";
        nameJaStartPos = 90;
    }
    else if(inputNameLength == 5){
        canvas.width = 1400;
        context.font = "200px 'Kosugi Maru'";
        context.letterSpacing = "40px";
        nameJaStartPos = 120;
    }
    else if(inputNameLength >= 6){
        canvas.width = 1400;
        context.font = "160px 'Kosugi Maru'";
        context.letterSpacing = "40px";
        nameJaStartPos = 120;
    }

    // 末尾の文字の追加
    switch(tailSelectValue){
        default:
            break;
        case "pref":
            inputNameEn += " Pref.";
            break;
        case "met":
            inputNameEn += " Met.";
            break;
        case "city":
            inputNameEn += " City";
            break;
        case "ward":
            inputNameEn += " Ward";
            break;
        case "town":
            inputNameEn += " Town";
            break;
        case "vil":
            inputNameEn += " Vil.";
            break;
        case "sta":
            inputNameEn += " Sta.";
    }

    // canvasのリセット
    context.clearRect(0, 0, canvas.width, canvas.height);

    // 背景の描画
    context.fillStyle = "#fff";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // 枠線の描画
    context.lineWidth = 10;
    context.strokeStyle = "#2269b0";
    strokeRoundRect(context, 20, 20, canvas.width - 40, canvas.height - 40, 2);

    // 市町村名の描画
    context.fillStyle = "#2269b0";
    context.textBaseline = "top";
    context.textAlign = "left";
    context.fillText(inputNameJa, nameJaStartPos, 80);

    // ローマ字の描画
    context.font = "bold 100px Arial";
    context.textAlign = "center";
    context.letterSpacing = "0px";
    context.fillText(inputNameEn, canvas.width / 2, 320);
}