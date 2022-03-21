import { List, Image, Sound } from './components.js';

class App {

    constructor() {
        this.list = null;
        this.image = new Image();
        this.sound = new Sound();
    }

    async render() {

        let movies = await fetch('https://raw.githubusercontent.com/erik-sytnyk/movies-list/master/db.json');
        let moviesJson = await movies.json();
        let filmsList = moviesJson.movies;

        console.log(filmsList)

        if (filmsList && filmsList.length > 0) {
            this.list = new List(filmsList);

            let listContent = this.list.render(actualPage);
            let listPh = document.querySelector('.list-placeholder');
            listPh.innerHTML = listContent;

            let nxtBtn = this.list.renderNextButton();
            let prevBtn = this.list.renderPreviousButton();
            let pagePh = document.querySelector('.pagination-placeholder');
            pagePh.innerHTML = prevBtn + '<span style="margin-right: 20px;"></span>' + nxtBtn;

        }

        let soundUrl = '../assets/Ketsa - Percussive-Melodies-4.mp3';
        let soundContent = this.sound.renderSound(soundUrl);
        let soundPh = document.querySelector('.sound-placeholder');
        soundPh.innerHTML = soundContent;
    }

    nextPage() {

        let nextPage = actualPage + 1;
        actualPage = nextPage;
        let listPh = document.querySelector('.list-placeholder');

        listPh.innerHTML = '';
        listPh.innerHTML = this.list.render(nextPage);
    }

    prevPage() {
        if (actualPage >= 1) {
            let nextPage = actualPage - 1;
            actualPage = nextPage;
            let listPh = document.querySelector('.list-placeholder');

            listPh.innerHTML = '';
            listPh.innerHTML = this.list.render(nextPage);
        }

    }

}

var app = new App();
app.render();

document.addEventListener('nextPage', function (event) {
    app.nextPage();
});

document.addEventListener('prevPage', function (event) {
    app.prevPage();
})










