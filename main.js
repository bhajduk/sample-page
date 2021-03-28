// function next() {
//     document.getElementsByClassName('mainPhoto')[0].src='img/2.jpg';
// }

// function prev() {
//     document.getElementsByClassName('mainPhoto')[0].src='img/1.jpg';
// }

var slideId = 0;

function next(i) {
    showSlide((slideId += i));
}

function currentSlide(i) {
    showSlide((slideId = i));
}

function showSlide(n) {
    var photos = document.getElementsByClassName('mainPhoto');

    if (n > photos.length) slideId = 1;

    if (n < 1) slideId = photos.length;

    for (let i = 0; i < photos.length; i++) {
        var current;
        current = photos[i];
        current.style.display = 'none';
    }

    photos[slideId - 1].style.display = 'block';
}

document.onload = next(1);
