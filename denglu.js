function loginin(thisform) {
    var mails=["111111","222222"], passwords=["123456","567890"];
    var x = document.getElementById("m").value;
    var y = document.getElementById("p").value;
    var i,num;
    for (i=0;i<mails.length;i++) {
        if (x == mails[i] && y == passwords[i]) {
            num=i+1;
            alert("欢迎用户 "+num+" !");
            window.location.href="gameprocess.html";
            break;
        } else if (x == mails[i]) {
            alert("密码错误，请重新输入。");
            window.location.href="denglu.html";
            break;
        }
    }
    if(i==mails.length){
        num=i+1;
        mails.push(x);
        passwords.push(y);
        alert("欢迎新用户 "+num+" !");
        window.location.href="gameprocess.html";
    }
    localStorage.mail=JSON.stringify(mails);
    localStorage.password=JSON.stringify(passwords);
    localStorage.index=num;
}