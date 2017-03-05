'use babel';
import Lego from 'lego-core';

class NewPanel extends Lego.View{
    constructor(opts) {
        super(opts);
    }
    render(){
        let htmlContent = hx`
        <div class="lego-newpanel">
            <input class='input-text' type='text' placeholder='Text'>
            <input class='input-search' type='search' placeholder='Search'>
            <textarea class='input-textarea' placeholder='Text Area'></textarea>
        </div>
        `;
        return htmlContent;
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
