const root = document.getElementById('root');




class Group {
    constructor(class_name) {
        this.class_name = class_name;
        this.element = document.createElement('div');
        this.element.classList.add("group");
        this.element.classList.add(this.class_name);
    }
}




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



class TextField {
    constructor(class_name, placeholder) {
        this.class_name = class_name;

        this.element = document.createElement('input');
        this.element.type = "text";
        this.element.placeholder = placeholder;
        this.element.classList.add("text-field");
        this.element.classList.add(this.class_name);
    }
}



let group_1 = new Group('group');
let img = new Image('img', 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png');
let title = new Text('text', 'Shoes');
let description = new Text('text', 'Best shoes in the world!');
let price = new Text('text', '$100');
let order_button = new Button('buy-button', 'Order Now', () => { console.log('Buy') });

group_1.element.appendChild(img.element);
group_1.element.appendChild(title.element);
group_1.element.appendChild(description.element);
group_1.element.appendChild(price.element);
group_1.element.appendChild(order_button.element);




let group_2 = new Group('group');
let email_field = new TextField('text-field', 'Enter your email');
let number_field = new TextField('text-field', 'Enter your number');
let name_field = new TextField('text-field', 'Enter your name');
let address_field = new TextField('text-field', 'Enter your name');
let submit_info_button = new Button('submit-button', 'Submit', () => { console.log('Submit Info') });


group_2.element.appendChild(email_field.element);
group_2.element.appendChild(number_field.element);
group_2.element.appendChild(name_field.element);
group_2.element.appendChild(address_field.element);
group_2.element.appendChild(submit_info_button.element);


root.appendChild(group_1.element);
root.appendChild(group_2.element);
