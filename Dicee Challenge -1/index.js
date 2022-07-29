var randomno1=Math.floor(Math.random()*6+1);
var randomno2=Math.floor(Math.random()*6+1);


document.getElementsByClassName("img1")[0].src="images/dice"+randomno1+".png";

document.getElementsByClassName("img2")[0].src="images/dice"+randomno2+".png";

if(randomno1>randomno2){
    document.getElementsByTagName("h1")[0].innerHTML="🚩player 1 won";
}
else if(randomno2>randomno1){
    document.getElementsByTagName("h1")[0].innerHTML="player 2 won 🚩";
}
else{
    document.getElementsByTagName("h1")[0].innerHTML="draw!";
}
