'use babel'
import View from './view';
import {Emitter, CompositeDisposable} from 'atom';

class LegoEditor {
    constructor(opts = {}){
        console.warn('dddddddddddddd');
        this.emitter = new Emitter();
    }
    activate (state) {
        this.view = new View();
        this.modalPanel = atom.workspace.addModalPanel({item: this.view.getElement(), visible: false});
        this.subscriptions = new CompositeDisposable();
        this.toggle();
    }
    deactivate () {
        this.modalPanel.destroy();
        this.subscriptions.dispose();
        this.view.destroy();
    }
    toggle() {
         console.log('Sourcefetch was toggled!');
         return (
           this.modalPanel.isVisible() ? this.modalPanel.hide() : this.modalPanel.show()
         );
    }
}
export default new LegoEditor();