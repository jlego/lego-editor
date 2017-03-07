'use babel';
import Lego from 'lego-core';

class RightPanel extends Lego.View {
    constructor(opts) {
        super(opts);
    }
    render(){
        let htmlContent = hx`
        <div class="lego-editor-right">
            <div class="titlebar">
               <div class='btn-group'>
                   <button class='btn selected'>属性</button>
                   <button class='btn'>结构树</button>
                   <button class='btn'>样式</button>
                   <button class='btn'>数据源</button>
               </div>
             </div>
             <atom-panel>
                 <div class='block half'>
                    <label>宽度</label>
                    <input class='input-number' type='number' min='1' max='10' placeholder='1'>
                 </div>
                 <div class='block half'>
                    <label>高度</label>
                    <input class='input-number' type='number' min='1' max='10' placeholder='1'>
                 </div>
                 <div class='block'>
                    <label>显示</label>
                    <input class='input-radio' type='radio' name='radio'>
                    <input class='input-radio' type='radio' name='radio' checked='checked'>
                 </div>
                 <div class='block'>
                    <label>选中</label>
                    <input class='input-checkbox' type='checkbox' checked='checked'>
                 </div>
                 <div class='block'>
                    <label>启用</label>
                    <input class='input-toggle' type='checkbox' checked='checked'>
                 </div>
                 <div class='block'>
                    <label>图标大小</label>
                    <div><input class='input-range' type='range'></div>
                 </div>
                 <div class='block'>
                    <label>别称</label>
                    <div><input class='input-text' type='text'></div>
                 </div>
                 <div class='block'>
                    <label>描述</label>
                    <div><textarea class='input-textarea' placeholder='50字内'></textarea></div>
                 </div>
             </atom-panel>
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
