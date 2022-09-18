
Webcam.set({
    height:300,
    width:300,
    image_format:"png",
    png_quality:60
})
    camera=document.getElementById("camera");
    Webcam.attach(camera);

       function takeSnapshot(){
           Webcam.snap(function (data){
               document.getElementById("result").innerHTML='<img id="apple" src="'+data+'"/>';
               console.log(data);
           });
       }
       classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/l5C-USxgt/model.json",modelLoaded);
       function modelLoaded(){
           console.log("modelLoaded");
       }
       

