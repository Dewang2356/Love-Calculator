const btn = document.querySelector(".btn");
var num;
const percent = document.querySelector(".percent");
const fill = document.querySelector(".fill");
const calc = document.querySelectorAll(".calc");
const box = document.querySelector(".img-box");
const love = document.querySelector(".love");
const plag = document.querySelector(".plag");
var a = 0;
const atn = document.querySelector(".atn");
btn.addEventListener('click',()=>{

	num=Math.floor(Math.random() * (100 - 6) + 6);
	if (calc[0].value !== "" && calc[1].value !== "") {
		box.style.transform = 'scale(1)';
		love.style.transform = 'scale(0)';
		
		calc[0].value="";
				calc[1].value="";
		const start = setInterval(function () {
	a++;
	fill.style.height = a+"%";

	percent.innerHTML = `${a}%`;
	if (a===num) {
		clearInterval(start);
		a=0;
		plag.style.transform = 'scale(1)';
	}
},70);
	}
	else{
		
	
		alert("Please Enter Names")
	}
})
atn.addEventListener("click",()=>{
	box.style.transform = 'scale(0)';
		love.style.transform = 'scale(1)';
		plag.style.transform = 'scale(0)';
})