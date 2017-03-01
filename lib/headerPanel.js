'use babel'

class HeaderPanel {
    constructor(serializedState) {
        let htmlContent = `
        <div class='btn-toolbar'>
            <div class='btn-group'>
                <button class='btn icon icon-file-add'>One</button>
                <button class='btn icon icon-globe'>Two</button>
                <button class='btn icon icon-gear'>Three</button>
            </div>

            <div class='btn-group'>
                <button class='btn'>Four</button>
                <button class='btn'>Five</button>
            </div>

            <button class='btn'>Six</button>
            <button class='btn'>Seven</button>
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
