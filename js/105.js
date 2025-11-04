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

}