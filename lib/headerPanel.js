'use babel';
import Lego from 'lego-core';

class HeaderPanel extends Lego.View {
    constructor(opts = {}) {
        let options = {
            title: '隐藏'
        };
        Object.assign(options, opts);
        super(options);
    }
    render(){
        let htmlContent = hx`
        <div class="lego-editor-header">
            <div class='btn-toolbar'>
                <div class='btn-group'>
                    <button class='btn icon icon-file-add'>${this.options.title}</button>
                    <button class='btn icon icon-globe' onclick=${this.testfun.bind(this)}>Two</button>
                    <button class='btn icon icon-gear'>Three</button>
                </div>

                <div class='btn-group'>
                    <button class='btn'>Four</button>
                    <button class='btn'>Five</button>
                </div>

                <button class='btn'>Six</button>
                <button class='btn'>Seven</button>
            </div>
        </div>
        `;
        return htmlContent;
    }
    testfun(event){
      console.warn('ddddddddd');
    }
    serialize() {

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
export default HeaderPanel;
