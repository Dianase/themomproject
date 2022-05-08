//write a program that spits out the lyrics to the song "99 bottles of beer on the wall"

//start with 99 bottles and work down to 0 bottles. 
function beerSong() {
//keep track of the number of bottles by storing the initial value in a variable called i and working our way down 
//by subtracting one until there are no more bottles left.
for (let i = 99; i >= 0; i--) {
  //if we have 0 bottles left. We print the following message:
  if(i === 0) {
    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
  }
  //if we have more than 1 bottle left. We print the following: we use i as the current number of bottles. and i-1 as the number of bottles left.
  else{
  console.log(`${i} bottles of beer on the wall, ${i} bottles of beer. "Take one down and pass it around, ${i-1} bottles of beer on the wall.`);
  } 
}
  
}
//call/execute the function
beerSong();

