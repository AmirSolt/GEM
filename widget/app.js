const root = document.getElementById('root');

class Button {
    constructor(class_name, text, task) {
        this.class_name = class_name;
        this.text = text;
        this.task = task;

        this.element = document.createElement('button');
        this.element.classList.add("btn");
        this.element.classList.add(this.class_name);
        this.element.innerHTML = this.text;
        this.element.addEventListener('click', this.task);

    }
}

class Text {
    constructor(class_name, text) {
        this.class_name = class_name;
        this.text = text;

        this.element = document.createElement('p');
        this.element.classList.add("text");
        this.element.classList.add(this.class_name);
        this.element.innerHTML = this.text;
    }
}


class Image {
    constructor(class_name, src) {
        this.class_name = class_name;
        this.src = src;

        this.element = document.createElement('img');
        this.element.classList.add("img");
        this.element.classList.add(this.class_name);
        this.element.src = this.src;
    }
}



let img = new Image('img', 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png');
let text = new Text('text', 'Hello World');
let button = new Button('buy-button', 'Buy', () => { console.log('Buy') });

root.appendChild(img.element);
root.appendChild(text.element);
root.appendChild(button.element);