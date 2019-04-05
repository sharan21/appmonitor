var data = []


document.getElementById("btn").addEventListener("click", function() {

  document.getElementById('instruct').style.display = "none";



	var reader = new FileReader(); 

    reader.addEventListener('load', function() { 

    splittext(this.result)

  	//document.getElementById('file').innerText = this.result;
    });

    reader.readAsText(document.querySelector('input').files[0]); 

    setInterval(refresh, 1000)
});


function refresh(){

	console.log("refreshing")

	var reader = new FileReader();

  	reader.addEventListener('load', function() {

    splittext(this.result)

    //document.getElementById('file').innerText = this.result;
  	});
  	reader.readAsText(document.querySelector('input').files[0]);

}

function splittext(txt){



  data = txt.split("\n");

  var lastdata = String(data[data.length-1])

  display(lastdata)


}

function display(txt){
  var stats = txt.split(" ")
  document.getElementById('sentenceno').innerText = stats[0]
  document.getElementById('wordcount').innerText = stats[1]
  document.getElementById('llcount').innerText = stats[2]
  document.getElementById('llratio').innerText = stats[3]


}


// to automatically refresh the site/
// setInterval(refresh(), 3000)