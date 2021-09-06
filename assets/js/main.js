//define an Array with the Images Source
let srcArr = [
    "assets/img/aquaman.jpg",
    "assets/img/batman.jpg",
    "assets/img/captain-america.jpg",
    "assets/img/fantastic-four.jpg",
    "assets/img/flash.jpg",
    "assets/img/green-arrow.jpg",
    "assets/img/green-lantern.jpg",
    "assets/img/ironman.jpg",
    "assets/img/spiderman.jpg",
    "assets/img/superman.jpg",
    "assets/img/the-avengers.jpg",
    "assets/img/thor.jpg",
    "assets/img/aquaman.jpg",
    "assets/img/batman.jpg",
    "assets/img/captain-america.jpg",
    "assets/img/fantastic-four.jpg",
    "assets/img/flash.jpg",
    "assets/img/green-arrow.jpg",
    "assets/img/green-lantern.jpg",
    "assets/img/ironman.jpg",
    "assets/img/spiderman.jpg",
    "assets/img/superman.jpg",
    "assets/img/the-avengers.jpg",
    "assets/img/thor.jpg"
]
//shuffling the Array
srcArr.sort(() => .8 - Math.random() )
///call all the img tags and save them in Array
let images = document.querySelectorAll('img')
//loop the array and giving the img source attribute and give them a class
for ( i = 0 ; i < images.length ; i ++ ){
    images[i].setAttribute('src',srcArr[i]);
    images[i].classList.add('disabled')
  
}
//define some usable variables
let counter = 0;
let compareArray = []
let clicked = 0;
let guessed = 0;
// looping the images array to add event and make the comparing
images.forEach(elt => {
    elt.addEventListener('click',ev => {
        //starting the Game
        //click and turn the img as long the counter 
        //smaller then 2 and as long the img disabled
        if (ev.target.className == "disabled" && counter <= 2){
            counter += 1;
            ev.target.classList.add('turn')
            ev.target.classList.remove('disabled')
            //push the clicked icons into a new arr to compare the clicked items
            compareArray.push(ev.target.src)
            //start comparing the clicked items
            //if the choises are equal
            if(counter == 2 && compareArray[0] == compareArray[1]){
              for(j = 0 ; j < images.length ; j++ ){
                  
                if(compareArray[0] == images[j].src || compareArray[1] == images[j].src){
                    images[j].setAttribute('id','turn')
                    images[j].removeEventListener('click',ev)
                }
              } 
                guessed +=1;
                //reset the counter to 0 to repeat comparing again and again
                counter = 0;
                //reset the compare Array
                compareArray = [];
               
              //or if the choises not equal  
            }else if (counter == 2 &&  compareArray[0] !== compareArray[1]){
                clicked +=1;
                images.forEach(elt => {
                    setTimeout(() => {
                        elt.classList.remove('turn')
                        elt.classList.add('disabled')
                    },700)
                    //reset
                    counter = 0;
                    compareArray = [];
                })
          
            }
            //show results
            document.getElementById('pair-c').innerHTML = clicked;
            document.getElementById('pair-g').innerHTML = guessed;
        }
       
    })
})

