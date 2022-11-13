userindex=JSON.parse(localStorage.players);
// alert(userindex[0]+" "+userindex[1]+" "+userindex[2]+" "+userindex[3]);
function gamebegin(){
    //初始设置，设定排位和顺序
    document.getElementById("player1").innerHTML="玩家"+userindex[0];
    document.getElementById("player2").innerHTML="玩家"+userindex[1];
    document.getElementById("player3").innerHTML="玩家"+userindex[2];
    document.getElementById("player4").innerHTML="玩家"+userindex[3];
    //房主（用户）先手
    document.getElementById("player1").style.backgroundImage="url(gameprocess/玩家id背景（高亮）.png)";
}
//取随机数
let arr=["点数1.svg","点数2.svg","点数3.svg","点数4.svg","点数5.svg","点数6.svg"];
function getrandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min
}
// 读取所有id
let btn=document.querySelector('#btn')
let pic1=document.querySelector('#img1')
let pic2=document.querySelector('#img2')
let pic3=document.querySelector('#img3')
let pic4=document.querySelector('#img4')
let pic5=document.querySelector('#img5')
let pic6=document.querySelector('#img6')
let tit=document.querySelector('div')
var a1,a2,a3,a4,a5,a6;
// 图片对应
function clock(){
    let random1=getrandom(0,arr.length-1)
    a1=random1;
    pic1.src=arr[random1]
    let random2=getrandom(0,arr.length-1)
    a2=random2;
    pic2.src=arr[random2]
    let random3=getrandom(0,arr.length-1)
    a3=random3;
    pic3.src=arr[random3]
    let random4=getrandom(0,arr.length-1)
    a4=random4;
    pic4.src=arr[random4]
    let random5=getrandom(0,arr.length-1)
    a5=random5;
    pic5.src=arr[random5]
    let random6=getrandom(0,arr.length-1)
    a6=random6;
    pic6.src=arr[random6]
}
//用户处，按钮
//按钮按过后，其他玩家也会按顺序博饼
var counter=0;
var scores=[0,0,0,0],l=0;
var timesRun = 0;
timer();
function button(){
    counter++;
    if(counter<3){
        simpleProcess();
        if (counter===2){
            document.getElementById("player1").style.backgroundImage=("url(gameprocess/玩家id背景（普通）.png)");
            document.getElementById("player2").style.backgroundImage=("url(gameprocess/玩家id背景（高亮）.png)");
            // 执行2次后结束
            var interval= window.setInterval(function(){
                timesRun += 1;
                if(timesRun === 2){
                    document.getElementById("player2").style.backgroundImage=("url(gameprocess/玩家id背景（普通）.png)");
                    document.getElementById("player3").style.backgroundImage=("url(gameprocess/玩家id背景（高亮）.png)");
                }
                else if(timesRun === 4){
                    document.getElementById("player3").style.backgroundImage=("url(gameprocess/玩家id背景（普通）.png)");
                    document.getElementById("player4").style.backgroundImage=("url(gameprocess/玩家id背景（高亮）.png)");
                }
                else if(timesRun === 7){
                    clearInterval(interval);
                    document.getElementById("player4").style.backgroundImage=("url(gameprocess/玩家id背景（普通）.png)");
                    window.location.href="结算页.html";
                    store();
                }
                //do whatever here..
                simpleProcess1();
                }, 5000);
        }
    }
}
// 每个用户的游戏过程（本机）
var show;
let time;
let flag=true;
var price=63;
var resultshow=document.getElementById("result");
function simpleProcess(){
    if(flag===false){
        document.getElementById("img11").style.animation="d10 1s 5 linear";
        document.getElementById("img22").style.animation="d20 1s 5 linear";
        document.getElementById("img33").style.animation="d30 1s 5 linear";
        document.getElementById("img44").style.animation="d40 1s 5 linear";
        document.getElementById("img55").style.animation="d50 1s 5 linear";
        document.getElementById("img66").style.animation="d60 1s 5 linear";
        time=window.clearInterval(time);
        document.getElementById("btn").style.backgroundImage="url(gameprocess/摇（默认）.png)";
        show=rewardDetermine(a1,a2,a3,a4,a5,a6);
        scoreDetermine(show);
        resultshow.innerHTML=show;
        resultshow.style.animation="open 1s  ease-out";
        if(show!=='谢谢参与'){
            price--;
            document.getElementById("price").innerHTML="剩"+price+"奖";
        }
        flag=true;
    }
    else{
        document.getElementById("img11").style.animation="d11 1s 5 linear";
        document.getElementById("img22").style.animation="d22 1s 5 linear";
        document.getElementById("img33").style.animation="d33 1s 5 linear";
        document.getElementById("img44").style.animation="d44 1s 5 linear";
        document.getElementById("img55").style.animation="d55 1s 5 linear";
        document.getElementById("img66").style.animation="d66 1s 5 linear";
        time=self.setInterval("clock()",30);
        document.getElementById("btn").style.backgroundImage="url(gameprocess/停（默认）.png)";
        resultshow.style.opacity=0;
        flag=false;
    }
}
// 每个用户的游戏过程（其他）
function simpleProcess1(){
    if(flag===false){
        document.getElementById("img11").style.animation="d10 1s 5 linear";
        document.getElementById("img22").style.animation="d20 1s 5 linear";
        document.getElementById("img33").style.animation="d30 1s 5 linear";
        document.getElementById("img44").style.animation="d40 1s 5 linear";
        document.getElementById("img55").style.animation="d50 1s 5 linear";
        document.getElementById("img66").style.animation="d60 1s 5 linear";
        time=window.clearInterval(time);
        show=rewardDetermine(a1,a2,a3,a4,a5,a6);
        scoreDetermine(show);
        resultshow.innerHTML=show;
        resultshow.style.opacity=1;
        resultshow.style.animation="open 1s  ease-out";
        if(show!=='谢谢参与'){
            price--;
            document.getElementById("price").innerHTML="剩"+price+"奖";
        }
        flag=true;
    }
    else{
        document.getElementById("img11").style.animation="d11 1s 5 linear";
        document.getElementById("img22").style.animation="d22 1s 5 linear";
        document.getElementById("img33").style.animation="d33 1s 5 linear";
        document.getElementById("img44").style.animation="d44 1s 5 linear";
        document.getElementById("img55").style.animation="d55 1s 5 linear";
        document.getElementById("img66").style.animation="d66 1s 5 linear";
        time=self.setInterval("clock()",30);
        resultshow.style.animation="close 1s  ease-out";
        resultshow.style.opacity=0;
        flag=false;
    }
}
// 分数结算
function rewardDetermine(a1,a2,a3,a4,a5,a6){
    var show='谢谢参与';
    var result=[a1,a2,a3,a4,a5,a6];
    var count4=0;
    var count1=0,count2=0,count3=0,count5=0,count6=0;
    if(result===[0,1,2,3,4,5]||result===[5,4,3,2,1,0]){
        show='对堂';
    }
    else {
        for (let i = 0; i < 6; i++) {
            if (result[i] === 3) {
                count4++;
            }
            if (result[i] === 0) {
                count1++;
            }
            if (result[i] === 1) {
                count2++;
            }
            if (result[i] === 2) {
                count3++;
            }
            if (result[i] === 4) {
                count5++;
            }
            if (result[i] === 5) {
                count6++;
            }
        }
        if(count4===1){
            show='一秀';
        }
        if(count4===2){
            show='二举';
        }
        if(count4===3){
            show='三红';
        }
        if(count4===4){
            if(coun1===2){
                show='状元插金花';
            }
            else{
                show='红四';
            }
        }
        if(count4===5){
            show='红五';
        }
        if(count4===6){
            show='六勃红';
        }
        if(count1===4||count2===4||count3===4||count5===4||count6===4){
            show='四进';
        }
        if(count1===5||count2===5||count3===5||count5===5||count6===5){
            show='五子';
        }
        if(count1===6||count2===6||count3===6||count5===6||count6===6){
            show='六勃黑';
        }
    }

    return show;
}

//分数计算
function scoreDetermine(show){
    if(show==='一秀'){
        scores.push(5);
    }
    else if(show==='二举'){
        scores.push(10);
    }
    else if(show==='四进'){
        scores.push(15);
    }
    else if(show==='三红'){
        scores.push(20);
    }
    else if(show==='对堂'){
        scores.push(25);
    }
    else if(show==='红四'){
        scores.push(30);
    }
    else if(show==='五子'){
        scores.push(35);
    }
    else if(show==='红五'){
        scores.push(40);
    }
    else if(show==='六勃黑'){
        scores.push(45);
    }
    else if(show==='六勃红'){
        scores.push(50);
    }
    else if(show==='状元插金花'){
        scores.push(55);
    }
    else {scores.push(0)}
}
// 排名后进行数据本地存储
function store(){
    var l=scores.length;
    for (i=0;i<l-1;i++){
        for (j=i+1;j<l;j++){
            if(scores[i]<scores[j]){
                var m=userindex[i];
                userindex[i]=userindex[j];
                userindex[j]=m;
                var k=scores[i];
                scores[i]=scores[j];
                scores[j]=k;
            }
        }
    }
    alert(userindex[0]+" "+userindex[1]+" "+userindex[2]+" "+userindex[3]);
    alert(scores[0]+" "+scores[1]+" "+scores[2]+" "+scores[3]);
    var scores1=[];
    for (i=0;i<l;i++){
        scores1.push(scores[i].toString());
    }
    localStorage.scorestr=JSON.stringify(scores1);
    var userindex1=[];
    for (i=0;i<l;i++){
        userindex1.push(userindex[i].toString());
    }
    localStorage.users=JSON.stringify(userindex1);
}
//逃跑按键
function run(){
    window.location.href="主页.html";
}
//倒计时js
var t=5;
function timer()
{
    setInterval(function(){
        if(t>0){document.getElementById("num").value=t;
            t--;}else{t+=5}
    },800);
}
