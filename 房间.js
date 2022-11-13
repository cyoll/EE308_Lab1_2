// 要操作的元素
const invitebox=document.querySelector('.invitebox');
const invite=document.querySelector('.invite');
const player2=document.querySelector('.player2');
const player3=document.querySelector('.player3');
const player4=document.querySelector('.player4');
const check=document.querySelector('.check');
// 初始化
let user=localStorage.index;
let mails=localStorage.mail;
let len=mails.length;
var players=[];
players.push(user);
function begin(){
    var player1=document.getElementById("user1");
    player1.innerHTML="玩家"+user;
}
// 为按钮绑定点击事件
var user2 = console;
player2.addEventListener('click',function(){
    invitebox.classList.toggle('active1');
})
player3.addEventListener('click',function(){
    invitebox.classList.toggle('active1');
})
player4.addEventListener('click',function(){
    invitebox.classList.toggle('active1');
})
// check.addEventListener('click',function(){
//     invitebox.classList.toggle('active');
// })
//1
var temp=0;
function inv2(){
    temp=2;
}
function add2(){
    let id2=document.getElementById('id').value;
    var user2=document.getElementById("user2");
    determine(user2,id2);
}

function inv3(){
    temp=3;
}
function add3(){
    let id3=document.getElementById('id').value;
    var user3=document.getElementById("user3");
    determine(user3,id3);
}
function inv4(){
    temp=4;
}
function add4(){
    let id4=document.getElementById('id').value;
    var user4=document.getElementById("user4");
    determine(user4,id4);
}
function yes2(){
    if(temp===2){
        add2();
        document.getElementById('id').value='';
        invitebox.classList.toggle('active1');
        invitebox.classList.toggle('active2');
}
    if(temp===3){
        add3();
        document.getElementById('id').value='';
        invitebox.classList.toggle('active1');
        invitebox.classList.toggle('active3');
    }
    if(temp===4){
        add4();
        document.getElementById('id').value='';
        invitebox.classList.toggle('active1');
        invitebox.classList.toggle('active4');
        localStorage.player1=players[0];
        localStorage.player2=players[1];
        localStorage.player3=players[2];
        localStorage.player4=players[3];
    }
}
function load(id){
    var toast = document.getElementById("tosspot")
    var omit =document.getElementById("canal")
    if(id==="add"){
        toast.style.visibility="visible"
    }
    else{
        omit.style.visibility="visible"
    }
}
// id判断
function determine(user,id){
    if(id>len&&id<=0){alert("该玩家id不存在，请重新输入");}
    else{
        players.push(id);
        user.innerHTML="玩家"+id;
    }
}