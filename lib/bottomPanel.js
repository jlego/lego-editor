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
                    <button class='btn icon icon-code'>代码</button>
                    <button class='btn icon icon-pencil'>设计</button>
                </div>

                <div class='btn-group' style="float:right;">
                    窗口缩放:
                    <select class='input-select'>
                        <option>100%</option>
                        <option>75%</option>
                        <option>50</option>
                    </select>
                </div>
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
