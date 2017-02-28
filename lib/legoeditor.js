'use babel'
import View form './view';
import {Emitter, CompositeDisposable} from 'atom';

class Legoeditor {
    constructor(opts = {}){
        this.emitter = new Emitter();
    }
    activate (state) {
        this.view = new View();
        this.modalPanel = atom.workspace.addModalPanel(item: this.view.getElement(), visible: false);
        this.subscriptions = new CompositeDisposable();
    }
    deactivate () {
        this.modalPanel.destroy();
        this.subscriptions.dispose();
        this.view.destroy();
    }
    toggle() {
         console.log('Sourcefetch was toggled!');
         return (
           this.modalPanel.isVisible() ?
           this.modalPanel.hide() :
           this.modalPanel.show()
         );
    }
}
export default Legoeditor;
