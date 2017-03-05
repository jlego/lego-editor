'use babel';
import Lego from 'lego-core';

class NewPanel extends Lego.View{
    constructor(opts) {
        super(opts);
    }
    render(){
        let htmlContent = hx`
        <div class="lego-newpanel">
            <iframe src="file:///Users/zyy/Applications/works/legojs-ui/example/index.html#/navs" width="100%" height="100%"></iframe>
        </div>
        `;
        return htmlContent;
    }
    renderAfter(){
      this.find('iframe')[0].setAttribute('frameborder', 0);
    }
    getTitle () {
      return 'demo';
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
export default NewPanel;
