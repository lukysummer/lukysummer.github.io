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

function revealMessage(){
	document.getElementById("i_know_u_so_well").style.display = 'block';

	var delay = 2800; 
	setTimeout(function() {
	  document.getElementById("so_well").style.display = 'block';
	}, delay);
	
	delay = 6800; 
	setTimeout(function() {
	  document.getElementById("i_can_do").style.display = 'block';
	}, delay);
	
	delay = 8800; 
	setTimeout(function() {
	  document.getElementById("anything").style.display = 'block';
	}, delay);
	
	delay = 12200; 
	setTimeout(function() {
	  document.getElementById("he_can").style.display = 'block';
	}, delay);
	
	delay = 14000; 
	setTimeout(function() {
	  document.getElementById("been1").style.display = 'block';
	}, delay);
	
	delay = 15000; 
	setTimeout(function() {
	  document.getElementById("patient").style.display = 'block';
	}, delay);
	
	delay = 16800; 
	setTimeout(function() {
	  document.getElementById("been2").style.display = 'block';
	}, delay);
	
	delay = 17700; 
	setTimeout(function() {
	  document.getElementById("baby").style.display = 'block';
	}, delay);
	
	delay = 18700; 
	setTimeout(function() {
	  document.getElementById("ohhh").style.display = 'block';
	}, delay);
	
	delay = 22000; 
	setTimeout(function() {
	  document.getElementById("been1_repeat").style.display = 'block';
	}, delay);
	
	delay = 23000; 
	setTimeout(function() {
	  document.getElementById("patient_repeat").style.display = 'block';
	}, delay);
}

function revealPoem(){
	var delay = 500; 
	document.getElementById("plane_1").style.display = 'block';

	delay = 1500; 
	setTimeout(function() {
	  document.getElementById("plane_2").style.display = 'block';
	}, delay);
	
	delay = 2500; 
	setTimeout(function() {
	  document.getElementById("plane_3").style.display = 'block';
	}, delay);
	
	delay = 3500; 
	setTimeout(function() {
	  document.getElementById("plane_4").style.display = 'block';
	}, delay);
	
	delay = 4500; 
	setTimeout(function() {
	  document.getElementById("plane_5").style.display = 'block';
	}, delay);
}

function play_vid() {
	var video = document.getElementById("plane_video")
	if(video.paused) {
		video.play();
	}
	else{
		video.pause();
	}
}


var terms = ["ｉ　", "ｋｎｏｗ　", "ｙｏｕ　", "ｓｏ　", "ｗｅｌｌ", "ｓｏ　", "ｗｅｌｌ"]; //array of terms to rotate
function rotateTerm() {
  var ct = $("#rotate").data("term") || 0;
  $("#rotate").data("term", ct == terms.length -1 ? 0 : ct + 1).text(terms[ct]).fadeIn().delay(2000).fadeOut(200, rotateTerm);
}
$(rotateTerm);        

$('#shiloh_audio_button').on('click', function () {
    $('#hidden_lyrics').fadeOut(2000, function () {
        $('#hidden_lyrics1').fadeIn(2000);
    });
});