'use babel'

class View {
    constructor(serializedState) {
        console.warn('pppppppppp');
        let htmlContent = '';
        for(let i = 0; i < 50; i++){
            htmlContent += '<li>列表项' + i + '</li>';
        }
        this.element = document.createElement('div');
        this.element.classList.add('lego-editor');

        let message = document.createElement('ul');
        // message.textContent = "The Legoeditor package is Alive! It's ALIVE!";
        message.innerHTML = htmlContent;
        message.classList.add('message');
        this.element.appendChild(message);
    }
    serialize() {

    }
    destroy() {
        this.element.remove();
    }
    getElement() {
        return this.element;
    }
}
export default View;
