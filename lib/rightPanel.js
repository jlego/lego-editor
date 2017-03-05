'use babel';
import Lego from 'lego-core';

class RightPanel extends Lego.View {
    constructor(opts) {
        super(opts);
    }
    render(){
        let htmlContent = hx`
        <div class="lego-editor-right">
            <div class='btn-toolbar'>
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
        </div>
        `;
        return htmlContent;
    }
    serialize() {

    }
    destroy() {
        this.remove();
    }
    getElement(){
      return this.el;
    }
}
export default RightPanel;
