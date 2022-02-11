/*
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called 
 */
class Beat {
    constructor(audioSrc) {                     //this.audio is the way to initialize a variable, furthermore "this" makes our variable class level access
        this.audio = new Audio(audioSrc);       //class beat, here we initialize an audio variable and set it to take the url of our audio file
    }

    play = () => {
        this.audio.currentTime = 0;            //this method called plays the music, this particular statement is to make sure that you can play multiple keys at once 
        this.audio.play();                     //by resetting the current time of each key to zero upon a press 
    }
}



/*
 * Button class that keeps track of the button color based on a press
 */
class Button {
    constructor(color, keyCode){              //button class that takes color n keyCode, keyCode is basically the ASCII for each key, in order to detect the actual key we press  
        this.color = color;
        this.keyCode = keyCode;

        this.element = document.getElementById(keyCode);    //we set the element to each div 
        this.setButtonColorInHTML();
        this.setTransitionEndListener();                    //we call these two methods upon button creation itself, as to color it and listen for transitionending to remove the color
    }

    /*
     * Set the button color based on color specified
     */
    setButtonColorInHTML = () => this.element.style.borderColor = this.color;   //this function is called initially for each button

    /*
     * Select function to set the background color and boxShadow
     */
    select = () => {    
        this.element.style.backgroundColor = this.color;                //this is called upon button trigger
        this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
    }

    /* 
     * Deselect function to reset background color and boxShadow
     */
    deselect = () => {
        this.element.style.backgroundColor = "transparent";         //this is called upon transition end
        this.element.style.boxShadow = "none";
    }

    /* 
    *Solution 1 - remove style on keyup
    *Solution 2 - wait a certain amount of time, then remove
    *Solution 3 - remove after transitionEnd event - BEST
     */
    setTransitionEndListener = () => this.element.addEventListener('transitionend', this.deselect);
}