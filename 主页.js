function beforeBegin(){
    var user=localStorage.index;
    var userid=document.getElementById("user");
    userid.innerHTML="玩家"+user;
}
//规则弹窗js（close函数有点问题，关不掉，其他正常）
function close(){
    document.getElementById('rule').style.opacity=0;
}
function back(){

    document.getElementById('rule2').style.animation="zyrule3 1s 1 linear";
    document.getElementById('rule2').style.animation="zyrule1 1s infinite linear";
    document.getElementById('rule').style.animation="trule2 1s 1 linear";
}
function zhuangyuan(){
    document.getElementById('rule').style.animation="trule3 1s 1 linear";
    document.getElementById('rule').style.animation="trule1 1s infinite linear";
    document.getElementById('rule2').style.animation="zyrule2 1s 1 linear";
}
function show(){
    document.getElementById('rule').style.animation="trule2 1s 1 linear";
}
function gameBegin(){
    window.location.href="房间.html";
}