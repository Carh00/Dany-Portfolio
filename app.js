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