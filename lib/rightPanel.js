'use babel';
import Lego from 'lego-core';

class RightPanel extends Lego.View {
    constructor(opts) {
        super(opts);
    }
    render(){
        let htmlContent = hx`
        <div class="lego-editor-right">

            <div class='block'>
                <div class='btn-group'>
                    <button class='btn selected'>属性</button>
                    <button class='btn'>样式</button>
                    <button class='btn'>数据源</button>
                </div>
                <atom-panel class='padded'>
                    <div class="panel-heading">An inset-panel heading</div>
                    <div class="panel-body padded">Some Content</div>
                </atom-panel>
            </div>
            <div class='block'>
                <label>宽度</label>
                <input class='input-number' type='number' min='1' max='10' placeholder='1-10'>
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
