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

var loopCount = 0;
document.getElementById('myaudio').addEventListener('timeupdate', function() {
    if (this.currentTime == 0)
        ++loopCount;   
});

function revealMessage2(){
	document.getElementById("shiloh2_def1").style.display = 'block';
	
	var delay = 3200; 
	setTimeout(function() {
	  document.getElementById("shiloh2_def2").style.display = 'block';
	}, delay);
	
	var delay = 5500; 
	setTimeout(function() {
	  document.getElementById("shiloh2_def3").style.display = 'block';
	}, delay);
	
	
	var delay = 9200; 
	setTimeout(function() {
	  document.getElementById("shiloh21").style.display = 'block';
	}, delay);
	
	delay = 10300; 
	setTimeout(function() {
	  document.getElementById("shiloh22").style.display = 'block';
	}, delay);
	

	delay = 12800; 
	setTimeout(function() {
	  document.getElementById("shiloh23").style.display = 'block';
	  document.getElementById("time1").style.display = 'block';
	}, delay);
	
	delay = 15900; 
	setTimeout(function() {
	  document.getElementById("shiloh24").style.display = 'block';
	}, delay);
	
	
	delay = 18500; 
	setTimeout(function() {
	  document.getElementById("shiloh211").style.display = 'block';
	}, delay);
	
	delay = 19600; 
	setTimeout(function() {
	  document.getElementById("shiloh222").style.display = 'block';
	}, delay);
	
	delay = 22100; 
	setTimeout(function() {
	  document.getElementById("shiloh233").style.display = 'block';
	}, delay);
	
	delay = 25200; 
	setTimeout(function() {
	  document.getElementById("shiloh244").style.display = 'block';
	}, delay);
	
	
	delay = 29700; 
	setTimeout(function() {
	  document.getElementById("_planes").style.display = 'block';
	}, delay);	
	delay = 30200; 
	setTimeout(function() {
	  document.getElementById("shiloh28").style.display = 'block';
	}, delay);	
	delay = 31000; 
	setTimeout(function() {
	  document.getElementById("shiloh29").style.display = 'block';
	}, delay);	
	delay = 31800; 
	setTimeout(function() {
	  document.getElementById("shiloh30").style.display = 'block';
	}, delay);	
	delay = 32600; 
	setTimeout(function() {
	  document.getElementById("shiloh31").style.display = 'block';
	}, delay);	
	delay = 33400; 
	setTimeout(function() {
	  document.getElementById("shiloh32").style.display = 'block';
	}, delay);	
	delay = 40000; 
	setTimeout(function() {
	  document.getElementById("_planes").style.display = 'none';
	  document.getElementById("shiloh28").style.display = 'none';
	  document.getElementById("shiloh29").style.display = 'none';
	  document.getElementById("shiloh30").style.display = 'none';
	  document.getElementById("shiloh31").style.display = 'none';
	  document.getElementById("shiloh32").style.display = 'none';
	  document.getElementById("time1").style.display = 'none';
	}, delay); 		

	delay = 41800; 
	setTimeout(function() {
	  document.getElementById("time2").style.display = 'block';
	}, delay);	
	
	
	delay = 50000; 
	setTimeout(function() {
	  document.getElementById("_moon").style.display = 'block';
	}, delay);	
	delay = 50500; 
	setTimeout(function() {
	  document.getElementById("its").style.display = 'block';
	}, delay);	
	delay = 51200; 
	setTimeout(function() {
	  document.getElementById("all").style.display = 'block';
	}, delay);	
	delay = 52000; 
	setTimeout(function() {
	  document.getElementById("over").style.display = 'block';
	}, delay);	
	delay = 52800; 
	setTimeout(function() {
	  document.getElementById("now").style.display = 'block';
	}, delay);	
	delay = 58200; 
	setTimeout(function() {
	  document.getElementById("_moon").style.display = 'none';
	  document.getElementById("its").style.display = 'none';
	  document.getElementById("all").style.display = 'none';
	  document.getElementById("over").style.display = 'none';
	  document.getElementById("now").style.display = 'none';
	  document.getElementById("time2").style.display = 'none';
	}, delay); 	
	
	
	delay = 62500; 
	setTimeout(function() {
	  document.getElementById("time3").style.display = 'block';
	}, delay);	
	
	delay = 67500; 
	setTimeout(function() {
	  document.getElementById("overr").style.display = 'block';
	}, delay);	
	
	
	delay = 79000; 
	setTimeout(function() {
	  document.getElementById("dream_red").style.display = 'block';
	}, delay);	
	delay = 79400; 
	setTimeout(function() {
	  document.getElementById("youll").style.display = 'block';
	}, delay);	
	delay = 79800; 
	setTimeout(function() {
	  document.getElementById("be").style.display = 'block';
	}, delay);	
	delay = 80200; 
	setTimeout(function() {
	  document.getElementById("oright").style.display = 'block';
	}, delay);	
	delay = 80600; 
	setTimeout(function() {
	  document.getElementById("intime").style.display = 'block';
	}, delay);	
	delay = 88500; 
	setTimeout(function() {
	  document.getElementById("dream_red").style.display = 'none';
	  document.getElementById("youll").style.display = 'none';
	  document.getElementById("be").style.display = 'none';
	  document.getElementById("oright").style.display = 'none';
	  document.getElementById("intime").style.display = 'none';
	  document.getElementById("time3").style.display = 'none';
	  document.getElementById("overr").style.display = 'none';
	}, delay); 
}


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
