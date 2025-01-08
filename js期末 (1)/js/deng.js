window.onload=function(){
    var rt = document.getElementsByClassName("rt");
    var it=rt[0].getElementsByTagName("div");
    var content= document.getElementsByClassName("content");
    var con = content[0].getElementsByTagName("div");
    for(let i= 0;i<it.length;i++){
        it[i].onclick=function(){
            for(let j=0;j<it.length;j++){
                it[j].className='';
                con[j].style.display='none';
            }
            this.className='active';
            it[i].index=i;
            con[i].style.display='block'
        }
    }
}
var user =new Map([["123","123"]])
function login(){
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    if (user.get(username)==password){
        window.location.href="index1.html"
    }else{
        alert("用户名或密码错误")
    }
}

document.getElementById('login-button').onclick = function() {
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;
    
    fetch('login.php', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json())
    .then(data => {
    if (data.success) {
    alert('登录成功');
    } else {
    alert('登录失败: ' + data.message);
    }
    });
    };

