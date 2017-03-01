'use babel'

class RightPanel {
    constructor(serializedState) {
        let htmlContent = `<div class='btn-toolbar'>
            <div class='btn-group'>
                <button class='btn'>One</button>
                <button class='btn'>Two</button>
                <button class='btn'>Three</button>
            </div>
        </div>
        <div class='block'>
            <label>You might want to type something here.</label>
            <atom-text-editor mini>Something you typed...</atom-text-editor>
        </div>
        <div class='block'>
            <label class='icon icon-file-directory'>Another field with an icon</label>
            <atom-text-editor mini>Something else you typed...</atom-text-editor>
        </div>
        <div class='block'>
            <button class='btn'>Do it</button>
        </div>
        `;
        this.element = document.createElement('div');
        this.element.classList.add('lego-editor-right');

        let message = document.createElement('div');
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
export default RightPanel;
