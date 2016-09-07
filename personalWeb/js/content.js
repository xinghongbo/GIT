var img = document.querySelector("#content img");
img.onmouseover =  function () {
	img.style.transform = "scale(1.5)";
}
img.onmouseout = function () {
	img.style.transform = "scale(1)";
}