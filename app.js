// Text slide sensor below 

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');

        }else {
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.home-info');
hiddenElements.forEach((el) => observer.observe(el));

// Text slide in sensor ^^


//Music for songs page 

// Here with me 
function play() {
    const song = document.getElementById('audio');
    song.play();
}

function stop() {
    const audio = document.getElementById('audio');
    audio.pause();
    audio.currentTime = 0;
}

// Sleep well 

function play1() {
    const song1 = document.getElementById('audio1');
    song1.play();
}

function stop1() {
    const audio1 = document.getElementById('audio1');
    audio1.pause();
    audio1.currentTime = 0;
}

// Past 

function play2() {
    const song2 = document.getElementById('audio2');
    song2.play()
}

function stop2() {
    const audio2 = document.getElementById('audio2');
    audio2.pause();
    audio2.currentTime = 0;
}

// romantic homicide 

function play3() {
    const song2 = document.getElementById('audio3');
    song2.play()
}

function stop3() {
    const audio2 = document.getElementById('audio3');
    audio2.pause();
    audio2.currentTime = 0;
}

// Hydrocodone 

function play4() {
    const song2 = document.getElementById('audio4');
    song2.play()
}

function stop4() {
    const audio2 = document.getElementById('audio4');
    audio2.pause();
    audio2.currentTime = 0;
}

// Freaks

function play5() {
    const song2 = document.getElementById('audio5');
    song2.play()
}

function stop5() {
    const audio2 = document.getElementById('audio5');
    audio2.pause();
    audio2.currentTime = 0;
}

// change image function

function change() {
    const image = document.getElementById('fade-image');
    image.src = "Images/here.png"
    {
        intervalID=setInterval(show,20);
    }
}

function unchange() {
    const gone = document.getElementById('fade-image');
    gone.src = "Images/e8e6961c2c21d68db26220cf431cd392.gif";
}

