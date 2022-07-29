//for detecting keyboard press

document.addEventListener("keypress",function(event){
 var p=event.key;
 if(p=='w'){
   var audio=new Audio("sounds/crash.mp3");
   audio.play();
  }
 else if(p=='a'){
   var audio=new Audio("sounds/kick-bass.mp3");
   audio.play();
  }
  else if(p=='s'){
   var audio=new Audio("sounds/snare.mp3");
   audio.play();
  }
  else if(p=='d'){
   var audio=new Audio("sounds/tom-1.mp3");
   audio.play();
  }
  else if(p=='j'){
   var audio=new Audio("sounds/tom-2.mp3");
   audio.play();
  }
  else if(p=='k'){
   var audio=new Audio("sounds/tom-3.mp3");
   audio.play();
  }
  else if(p=='l'){
   var audio=new Audio("sounds/tom-4.mp3");
   audio.play();
  }
})
// for detecting the button click
document.addEventListener("click",function(event){
   var k =event.target.name;
   if(k=='w'){
    var audio=new Audio("sounds/crash.mp3");
    audio.play();
   }
  else if(k=='a'){
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
   }
   else if(k=='s'){
    var audio=new Audio("sounds/snare.mp3");
    audio.play();
   }
   else if(k=='d'){
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
   }
   else if(k=='j'){
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
   }
   else if(k=='k'){
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
   }
   else if(k=='l'){
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
   }
   
})



