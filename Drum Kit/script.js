/**document.addEventListener('keydown', (event)=>{
    const keyPressed=event.key;

    if(keyPressed=='w'){
        document.getElementById("wAudio").play();
    }
    else if(keyPressed=='a'){
        document.getElementById("aAudio").play();
    }
    else if(keyPressed=='s'){
        document.getElementById("sAudio").play();
    }
    else if(keyPressed=='d'){
        document.getElementById("dAudio").play();
    }
    else if(keyPressed=='j'){
        document.getElementById("jAudio").play();
    }
    else if(keyPressed=='k'){
        document.getElementById("kAudio").play();
    }
    else if(keyPressed=='l'){
        document.getElementById("lAudio").play();
    }
})**/


var drumButtons =document.querySelectorAll(".drum").length;

for(var i=0; i<drumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML=this.innerHTML;
        makesound(buttonInnerHTML);
        animation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(event){
    makesound(event.key);
    animation(event.key);
});

function makesound(buttonInnerHTML){
    switch(buttonInnerHTML){
        case "w":
            var audio=new Audio(["../drum_sounds/w.mp3"]);
            audio.play();
        break;
        case "a":
            var audio=new Audio(["../drum_sounds/a.mp3"]);
            audio.play();
        break;
        case "s":
            var audio=new Audio(["../drum_sounds/s.mp3"]);
            audio.play();
        break;
        case "d":
            var audio=new Audio(["../drum_sounds/d.mp3"]);
            audio.play();
        break;
        case "j":
            var audio=new Audio(["../drum_sounds/j.mp3"]);
            audio.play();
        break;
        case "k":
            var audio=new Audio(["../drum_sounds/k.mp3"]);
            audio.play();
        break;
        case "l":
            var audio=new Audio(["../drum_sounds/l.mp3"]);
            audio.play();
        break;
        default: alert("Wrong button");
    }
}

function animation(currentButton){
    var activeButton=document.querySelector("."+currentButton);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}