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


// The moon song 

function play6() {
    const song2 = document.getElementById('audio6');
    song2.play()
}

function stop6() {
    const audio2 = document.getElementById('audio6');
    audio2.pause();
    audio2.currentTime = 0;
}

// Gimmi love

function play7() {
    const song2 = document.getElementById('audio7');
    song2.play()
}

function stop7() {
    const audio2 = document.getElementById('audio7');
    audio2.pause();
    audio2.currentTime = 0;
}

// Like you do 

function play8() {
    const song2 = document.getElementById('audio8');
    song2.play()
}

function stop8() {
    const audio2 = document.getElementById('audio8');
    audio2.pause();
    audio2.currentTime = 0;
}

// Golden Hour

function play9() {
    const song2 = document.getElementById('audio9');
    song2.play()
}

function stop9() {
    const audio2 = document.getElementById('audio9');
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

// projects page bellow

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel' ).mount();
  } );

  new Splide( '#image-carousel' ).mount();

  function load(url) {
    // display loading image here...
    document.getElementById('loadingImg').visible = true;
    // request your data...
    var req = new XMLHttpRequest();
    req.open("POST", url, true);

    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            // content is loaded...hide the gif and display the content...
            if (req.responseText) {
                document.getElementById('content').innerHTML = req.responseText;
                document.getElementById('loadingImg').visible = false;
            }
        }
    };
    request.send(vars);
}

function refresh() {
    const loading = document.getElementsByClassName('.loader-wrapper')
    loading.addEventListener("load", (hello) => {
        loading.classList.add('fresh')
    })
}


// const loaderContainer = document.querySelector('.loader-wrapper');

// window.addEventListener('load', () => {
//     loaderContainer.style.display = 'none';
// });

// window.addEventListener('load', () => {
//     loaderContainer.classList.add('loader-wrapper-hidden');
// });

// window.addEventListener('load', () => {
//     loaderContainer.parentElement.removeChild(loaderContainer);
// });

// const displayLoading = () => {
//     loaderContainer.style.display = 'block';
// };

// const hideLoading = () => {
//     loaderContainer.style.display = 'none';
// };

// getQuoteBtn.addEventListener('click', () => {
//     displayLoading();
//     fetch('https://api.quotable.io/random')
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             hideLoading();
//             const quote = document.querySelector('.quote');
//             const author = document.querySelector('.author');
//             quote.innerHTML = data.content;
//             author.innerHTML = data.author;
//         });
// });

// const getQuoteBtn = document.querySelector('.get-quote');