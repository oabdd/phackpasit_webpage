window.onload = pageLoad;

function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = submitToLogin;
    
    var clickButton = document.getElementById("clickSubmit");
    clickButton.onclick = submitToLogin;
}

function submitToLogin(){
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย

    var username = document.getElementById("password").value;
    var password = document.getElementById("rePassword").value;

    if( username != password){
        alert("incorrect password");
        return this.form == false;
    }
}

const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
const username = urlParams.get('username')
console.log(username);

const password = urlParams.get('password')
console.log(password);