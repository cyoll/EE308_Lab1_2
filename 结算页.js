function begin(){
    var scores0=[];
    scores0=JSON.parse(localStorage.scorestr);
    var userindex=[];
    userindex=JSON.parse(localStorage.users);
    document.getElementById("score1").innerHTML=scores0[0];
    document.getElementById("score2").innerHTML=scores0[1];
    document.getElementById("score3").innerHTML=scores0[2];
    document.getElementById("score4").innerHTML=scores0[3];
    document.getElementById("first").innerHTML="玩家"+userindex[0];
    document.getElementById("second").innerHTML="玩家"+userindex[1];
    document.getElementById("third").innerHTML="玩家"+userindex[2];
    document.getElementById("fourth").innerHTML="玩家"+userindex[3];
    alert(userindex[0]+" "+scores0[0]+" "+userindex[1]+" "+scores0[1]+" "+userindex[2]+" "+scores0[2]+" "+userindex[3]+" "+scores0[3]);
}
function tohome(){
    window.location.href="主页.html";
}