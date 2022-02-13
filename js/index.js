function clicked() {
    alert("clicked");
}

for (var i = 0; i < 7; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        animation(this.innerHTML);
        makeSound(this.innerHTML);
    });

}

document.addEventListener("keypress", function(pressed) { //so here we can check for the key that is presses
    //and .key is the value of the key which will be sen tot makeSound().
    animation(pressed.key);
    makeSound(pressed.key);
});

function animation(key) {
    var current = document.querySelector('.' + key);
    current.classList.add('pressed');

    setTimeout(function() {
        current.classList.remove('pressed');
    }, 100);
}

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
    }
}
