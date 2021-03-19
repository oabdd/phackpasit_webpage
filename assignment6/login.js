window.onload = loginLoad;

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);
const username = urlParams.get('username')
console.log(username);

const password = urlParams.get('password')
console.log(password);

function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;

	var clickButton = document.getElementById("login");
	clickButton.onclick = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	var x = document.getElementById('username').value;
	var y = document.getElementById('password').value;
	
	if(x != username){
		alert("wrong username or password")
		return false;
	}
	else if (y != password){
		alert("wrong password")
		return false;
	}
	
	if (x == username && y == password){
		alert("Login Seccessful")
	}
}
			