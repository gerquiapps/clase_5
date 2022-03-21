export class List {

    constructor(list) {
        this.list = list;
    }

    render(page) {
        let strList = '<ul>';
        if (this.list) {
            // solo que muestre las primeras 20
            let from = page * 20;
            let to = from + 20;
            if (to > this.list.length) {
                to = this.list.length;
            }
            for (let i = from; i < to; i++) {
                strList += this.renderItem(this.list[i]);
            }
        }
        strList += `</ul>`;
        return strList;
    }

    renderItem(item) {
        let btnText = `${item.id}- ${item.title}`;
        let btnLink = item.posterUrl;
        return `<li> ${this.renderButton(btnText, btnLink)}</li>
       `;
    }

    renderButton(text, url) {
        return `<button onClick="renderPosterImage('${url}')">${text}</button>`;
    }

    renderNextButton() {
        return `<button onClick="nextPage()">Siguiente</button>`;
    }


    renderPreviousButton() {
        return `<button onClick="prevPage()" style="margin-left: 20px;">Anterior</button>`;
    }
}


export class Image {

    renderImage(url) {
        return `<img src="${url}" height="500">`;
    }
}

export class Sound {
    renderSound(url) {
        return `<audio controls><source src="${url}" type="audio/mpeg"></audio>`
    }
}