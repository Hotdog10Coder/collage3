var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


    setTimeout(function()
    {

        imge_id = "selfie-1";
        take_snapshot();
        speak_data = "Taking Selfie in 10 Seconds.";
        utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

    }
    ,5000)

    setTimeout(function()
    {

        imge_id = "selfie-2";
        take_snapshot();
        speak_data = "Taking Selfie in 15 Seconds.";
        utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

    }
    ,10000)

    setTimeout(function()
    {

        imge_id = "selfie-3";
        take_snapshot();
       
    }
    ,15000)
}

function take_snapshot()
{
console.log(imge_id);

Webcam.snap(function(data_uri) {

if(imge_id =="selfie-1")
{
document.getElementById("result1").innerHTML = '<img id = "selfie1" src="'+data_uri+'"/>';
}

if(imge_id =="selfie-2")
{
document.getElementById("result2").innerHTML = '<img id = "selfie2" src="'+data_uri+'"/>';
}

if(imge_id =="selfie-3")
{
document.getElementById("result3").innerHTML = '<img id = "selfie3" src="'+data_uri+'"/>';
}

}
);}
