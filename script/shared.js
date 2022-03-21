var actualPage = 0;

function renderPosterImage(url) {
    let imagePh = document.querySelector('.image-placeholder');
    imagePh.innerHTML = '';
    imagePh.innerHTML = `<img src="${url}" height="400">`;
}

function nextPage() {
    let ev = new CustomEvent('nextPage');
    document.dispatchEvent(ev);
}

function prevPage() {
    let ev = new CustomEvent('prevPage');
    document.dispatchEvent(ev);
}

