


//var image = new Image(50, 50);
//image.src = "ipad.jpg";

//ar canvas = document.getElementById("myCanvas"),
//context2 = canvas.getContext('2d');

//context2.drawImage(image, 25, 25, 150, 150);

////////////Noranyi/////////?//



//  function playlist(songObj){
//      var song = [];
//      son.push(songObj);
//
//  }
//
//
// function song(title, artist,src){
//     this.title = title;
//     this.artist = artist;
//     this.src=src;
// }


// var Songs = [];
// var audio=new Audio("Bruno_Mars_-_Finesse_Remix_Feat_Cardi_B.mp3");
// var song = document.getElementById("song1");
// Songs.push(song);



// var song = document.getElementsByTagName('source');
var songs =[]
var song1 = document.getElementById("song1");
var song2 = document.getElementById("song2");
var song3 = document.getElementById("song3");
var song4 = document.getElementById("song4");
var song5 = document.getElementById("song5");
var song5 = document.getElementById("song6");


songs.push(song1)
songs.push(song2)
songs.push(song3)
songs.push(song4)
songs.push(song5)
songs.push(song6)

var songTitle = document.getElementsByTagName("li");



// function myFunction() {
//     var x = document.getElementsByTagName("LI");
//     document.getElementById("demo").innerHTML = x[1].innerHTML;
// }


////Update title of current song
function updateSong(currentSong){
console.log(currentSong);
document.getElementById("current").innerHTML = currentSong;


}


 function playSong(index){ // an array with total number of ids

  for(var i=0; i<songs.length; i++){
    songs[i].pause();
    songs[i].currentTime = 0;
    songs[i]. // Pause all ids before playing next file.
  // Set the time back to zero, else it will replay from the pause point.
  }

  songs[index].play();
  removeClass();
  var current = songTitle[index].innerText;

  updateSong(current);
}


//Remove the play button when it's clicked
function removeClass(){
  var element = document.getElementById("i");
   element.classList.remove("fa-play");
}


//add the pause button when music isplaying
function addClass(index){
  var element = document.getElementById("i");
   element.classList.add("fa-pause");

}




function pauseSong(){
    song.pause();

}
