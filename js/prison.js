
var open = false;
function translate_img(img) {
  var prison = document.getElementById('prison1'); 
  var id = setInterval(frame, 10);
  var pos = prison.style.left;
  var offset = pos;
  
  function frame() {
	if (!open) {
		if (pos - offset == 135) {
		  clearInterval(id);
		  open = 1;
		} 
		else {
		  prison.style.left = offset + 150 + 'px'; 
		  offset--;  
		}
	}
	else {
		if (pos - offset == -135) {
		  clearInterval(id);
		  open = 0;
		} 
		else {
		  prison.style.left = offset + 150 + 'px'; 
		  offset++;  
		}
	}
  }
}

function reveal_credit(){
	document.getElementById('poets').style.display = "block";
	document.getElementById('credit').style.display = "none";
}

function hide_credit(){
	document.getElementById('poets').style.display = "none";
	document.getElementById('credit').style.display = "block";
}