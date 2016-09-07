var con = document.querySelector("#myCanvas").getContext("2d");
var gradient = con.createLinearGradient(0,0,0,200);
gradient.addColorStop(0,"#AFD25E");
gradient.addColorStop(0.3,"#EAFFC7");
gradient.addColorStop(0.9,"#EAFFC7");
gradient.addColorStop(1,"#AFD25E");
con.fillStyle = gradient;
con.fillRect(0,0,1200,200);
con.beginPath();
con.strokeStyle = "#2C6F04";
con.lineWidth = 30;
con.moveTo(0,150);
con.lineTo(450,100);
con.lineTo(1200,200);
con.stroke();
con.beginPath();
con.fillStyle = "#BAE282";
con.moveTo(0,150);
con.lineTo(450,100);
con.lineTo(1200,200);
con.lineTo(1200,700);
con.lineTo(0,700);
con.closePath();
con.fill();

var img1 = document.querySelectorAll("img")[0];
img1.onmouseover = function () {
	img1.style.transform = "scale(1.1)";
}
img1.onmouseout = function () {
	img1.style.transform = "scale(1)";
}
var img2 = document.querySelectorAll("img")[1];
img2.onmouseover = function () {
	img2.style.transform = "scale(1.1)";
}
img2.onmouseout = function () {
	img2.style.transform = "scale(1)";
}
var img3 = document.querySelectorAll("img")[2];
img3.onmouseover = function () {
	img3.style.transform = "scale(1.1)";
}
img3.onmouseout = function () {
	img3.style.transform = "scale(1)";
}
var a1 = document.querySelectorAll("#aboutMe a")[0];
a1.onmouseover = function () {
	img1.style.transform = "scale(1.1)";
}
a1.onmouseout = function () {
	img1.style.transform = "scale(1)";
}
var a2 = document.querySelectorAll("#aboutMe a")[1];
a2.onmouseover = function () {
	img2.style.transform = "scale(1.1)";
}
a2.onmouseout = function () {
	img2.style.transform = "scale(1)";
}
var a3 = document.querySelectorAll("#aboutMe a")[2];
a3.onmouseover = function () {
	img3.style.transform = "scale(1.1)";
}
a3.onmouseout = function () {
	img3.style.transform = "scale(1)";
}