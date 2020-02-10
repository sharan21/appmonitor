var data = []

document.getElementById("btn").addEventListener("click", function() {

  document.getElementById('instruct').style.display = "none";

	var reader = new FileReader(); 

    reader.addEventListener('load', function() { 

    splittext(this.result)

  	// document.getElementById('file').innerText = this.result;
    });

    reader.readAsText(document.querySelector('input').files[0]); 

    setInterval(refresh, 5500)
});


function refresh(){

	console.log("refreshing")

	var reader = new FileReader();

  	reader.addEventListener('load', function() {

    splittext(this.result)

    // document.getElementById('file').innerText = this.result;
  	});
  	reader.readAsText(document.querySelector('input').files[0]);

}

function splittext(txt){

  data = txt.split("\n");

  var lastdata = String(data[data.length-2])
  console.log(lastdata)

  display(lastdata)

}

function display(txt){
  var stats = txt.split(" ")
  if (stats[4] == "True"){
    console.log("FET present")
    stats[4] = "LL being used"
    document.getElementById('status').style.color = "green"
    document.getElementById('status').innerText = "speech status : " + stats[4]
  }
  else{
    console.log("FET absent")
    playsound()
    
    stats[4] = "LL absent"
    document.getElementById('status').style.color = "red"
    document.getElementById('status').innerText = "speech status : " + stats[4]
  }
  //document.getElementById('sentenceno').innerText = "sentence no. : " + stats[0]
  document.getElementById('sentenceno').innerText = "sentence no. : 9" 
  document.getElementById('wordcount').innerText = "word count : " + stats[1]
  document.getElementById('llcount').innerText = "FETcount : " + stats[2] 
  document.getElementById('llratio').innerText = "FETratio : " + (stats[3]*100) +"%"
  document.getElementById('speed').innerText = "speed : " + stats[5] + "words/min" 

  
} 

// function playsound(){
//         filename = 'notif'
//         console.log("playing an alert")
//         var mp3Source = '<source src="' + filename + '.mp3" type="audio/mpeg">';
//         var oggSource = '<source src="' + filename + '.ogg" type="audio/ogg">';
//         var embedSource = '<embed hidden="true" autostart="true" loop="false" src="' + filename +'.mp3">';
//         document.getElementById("sound").innerHTML='<audio autoplay="autoplay">' + mp3Source + oggSource + embedSource + '</audio>';
// }

function playsound(){
  
  var horn = new Audio('./notif.mp3');
  horn.play();
}


