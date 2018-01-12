
window.onload = function() {
   playSong(1);


}

////////

class Playlist{
    constructor(playlist){
       this.playlist = playlist;
    }
}


var songsArr = [];

class Song{
    constructor(title, src){
        this.title = title;
        this.src = src;


    }

}

var links = []

var song1 = document.getElementById("song1");
var song2 = document.getElementById("song2");
var song3 = document.getElementById("song3");
var song4 = document.getElementById("song4");
var song5 = document.getElementById("song5");
var song6 = document.getElementById("song6");

links.push(song1);
links.push(song2);
links.push(song3);
links.push(song4);
links.push(song5);
links.push(song6);

var songTitle = document.getElementsByTagName("li");



 for (var i = 0; i < links.length; i++){
     var song = new Song(songTitle[i], links[i]);
     songsArr.push(song);


 }



var playL = new Playlist(songsArr);


console.log(links);

///////////array of image/////////

//var images = { "http://www.animatedimages.org/data/media/107/animated-dancing-image-0243.gif", "https://i.pinimg.com/originals/b3/94/69/b394692f0f68b3feee5809b72723323f.gif",
// "https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000181/23262905-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white-background-Stock-Vector.jpg",
//"http://moziru.com/images/rock-clipart-rock-paper-scissors-5.jpg",
//"https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000180/23262904-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white--Stock-Photo.jpg", "https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000180/23262904-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white--Stock-Photo.jpg", "https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000180/23262904-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white--Stock-Photo.jpg"};




// function myFunction() {
//     var x = document.getElementsByTagName("LI");
//     document.getElementById("demo").innerHTML = x[1].innerHTML;
// }


////Update title of current song
function updateSong(currentSong){
console.log(currentSong);
document.getElementById("current").innerHTML = currentSong;


}

function updateImage(index){
    document.getElementById("image").scr = images[index];
    console.log(images[index]);

}

 function playSong(index){ // an array with total number of ids

  for(var i=0; i<links.length; i++){
    links[i].pause();
    links[i].currentTime = 0;
    document.getElementById(i.toString()).className = "fa fa-play fa-lg";
    // songs[i].
    // Pause all ids before playing next file.
  // Set the time back to zero, else it will replay from the pause point.
  }

// links[index].play();

     playL.playlist[index].src.play();
      document.getElementById(index.toString()).className = "fa fa-pause fa-lg";
  // removeClass();
  var current = songTitle[index].innerText;

  updateSong(current);

  updateImage(images[index]);
}


//Remove the play button when it's clicked
// function removeClass(){
//   var element = document.getElementById("i");
//    element.classList.remove("fa-play");
// }
//
//
// //add the pause button when music isplaying
// function addClass(index){
//   var element = document.getElementById("i");
//    element.classList.add("fa-pause");
//
// }



//
//function pauseSong(){
//    song.pause();
//
//}
