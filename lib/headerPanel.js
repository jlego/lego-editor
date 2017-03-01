'use babel'

class HeaderPanel {
    constructor(serializedState) {
        let htmlContent = '';
        htmlContent += `<div class='btn-toolbar'>
            <div class='btn-group'>
                <button class='btn'>One</button>
                <button class='btn'>Two</button>
                <button class='btn'>Three</button>
            </div>
        </div>
        `;
        this.element = document.createElement('div');
        this.element.classList.add('lego-editor-header');
        this.element.innerHTML = htmlContent;
        // this.element.appendChild(message);
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
export default HeaderPanel;
