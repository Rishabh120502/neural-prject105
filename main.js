Webcam.set({
    width: 315,
    height: 235,
    image_format: 'jpeg',
jpeg_quality: 90
});
 camera=document.getElementById("camera")
Webcam.attach("#camera")


function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="imgSave" src="'+data_uri+'"/>'
    });
}

console.log("ml5version",ml5.version);

function modelLoaded(){
    console.log("modelLoaded");
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/gtLoaTPVJ/model.json',modelLoaded);

function check(){
    Img = document.getElementById("imgSave");
classifier.classify(Img,gotResult);
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }

    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
}
}
