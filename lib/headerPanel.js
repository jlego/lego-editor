'use babel';
import Lego from 'lego-core';
import { Emitter, CompositeDisposable } from 'atom';

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
                    <button class='btn icon icon-plus' title="新建">新建</button>
                    <button class='btn icon icon-plug' title="插件">插件</button>
                    <button class='btn icon icon-bug' title="调试">调试</button>
                    <button class='btn icon icon-globe' title="发布">发布</button>
                    <button class='btn icon icon-screen-full' title="全屏" onclick=${this.toggleLeft.bind(this)}>全屏</button>
                    <button class='btn icon icon-info' title="帮助">帮助</button>
                </div>
                <div class='btn-group' style="float:right">
                    <button class='btn primary'>登录</button>
                    <button class='btn error'>注册</button>
                </div>
            </div>
        </div>
        `;
        return htmlContent;
    }
    toggleLeft(event){
      let LeftPanel = atom.workspace.getLeftPanels()[0];
      if(LeftPanel){
          if(LeftPanel.isVisible()){
              LeftPanel.hide();
              this.options.title = '显示';
          }else{
              LeftPanel.show();
              this.options.title = '隐藏';
          }
      }
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
