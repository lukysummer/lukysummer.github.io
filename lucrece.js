function open_def(){
	document.getElementById('word').className = 'open-def';
}

function close_def(){
	document.getElementById('word').className = '';
}

var play = false;
function playsound(){
	play = !play;
	if(play){
		document.getElementById('audio').play();
	}
	else{
		document.getElementById('audio').pause();
	}	
}

function pausesound(){
	document.getElementById('audio').pause();
}

var loopCount = 0;
document.getElementById('myaudio').addEventListener('timeupdate', function() {
    if (this.currentTime == 0)
        ++loopCount;
    
});

function playvid(vid){
	var vid_id = ["edu_vid", "work_vid", "model_vid", "cont_vid", "all_vid"];
	for(var i=0; i<5; i++){
		document.getElementById(vid_id[i]).style.display = "none";
	}
	for(var i=0; i<5; i++){
		if(vid  === vid_id[i]){
			var video = document.getElementById(vid_id[i]);
			video.style.display = "block";
			video.play();
			break;
		}
	}
}
var name = 1;
function revealInfo(inf){
	var info_id = ["edu", "work", "model", "cont", "all"];
	var delay = 0;
	
	for(var j=0; j<5; j++){
			document.getElementById(info_id[j]).style.display = 'none';	
	}

	for(var i=0; i<5; i++){
		if(inf  === info_id[i]){
			if((i == 0)||(i == 4)){
				delay = 2000;
				
				if(i == 4){
					setTimeout(function() {
						document.getElementById("name").style.display = 'none';
					}, delay);
					name = 0;
				}
			}
			else if(i == 1){
				delay = 1000;
			}
			else if(i == 2){
				delay = 1600;
			}
			else {
				delay = 1500;
			}
			
			if(name){
					document.getElementById("name").style.display = 'block';
					name = 1;
			}
			 
			setTimeout(function() {
				document.getElementById(info_id[i]).style.display = 'block';
			}, delay);
			
			break;
		}
	}
}

function showImg(img){
	var big_id = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10", "b11", "b12", "b13", "b14", "b15", "b16", "b17", "b18", "b19", "b20", "b21", "b22", "b23", "b24", "b25"]; 
	
	for(var j=0; j<big_id.length; j++){
			document.getElementById(big_id[j]).style.display = 'none';	
	}
	
	for(var i=0; i<big_id.length; i++){
		if(img === big_id[i]){
			document.getElementById(big_id[i]).style.display = 'block';
			break;
		}
	}
}
