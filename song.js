var myFavoriteSong={
    title: "One",
    Artist:"Metallica",
    Album: "... And justice for all",
    Author: "James hetfield",
    compositer: "Lars ulrich",
    Directed : "Bill pope "+ " and" + " Micheal salomon",
    Filmed: "December " + 1988 + " in long Beach,Ca",
    VideoPremiumDate: "january " + 22 + 1988,
    DoILoveMetallica: true,
    AnotherFavoriteSong:false,
    rate:9.5,
  
    showYourRateForThisSong: function(){
        console.log("rate: " + this.rate + "/10");
    },
  
  }
  
  if(myFavoriteSong.AnotherFavoriteSong===false){
    console.log("I think there are alot of songs for metallica ?!");
  }else{
    console.log("say to me if you have another music song");
  }
  
  console.log(typeof(myFavoriteSong.AnotherFavoriteSong));
  
  
  myFavoriteSong.showYourRateForThisSong();
  
  var myFavoriteSongArray=[myFavoriteSong.title , myFavoriteSong.Artist , myFavoriteSong.Album, "And you can read the rest of my object to more know about my song"];
  
  
  console.log(myFavoriteSongArray);
  console.log(myFavoriteSongArray.length);