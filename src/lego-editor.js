'use babel'
import View from './view';
import {Emitter, CompositeDisposable} from 'atom';

class LegoEditor {
    constructor(opts = {}){
        console.warn('8888888888');
        this.emitter = new Emitter();
        this.subscriptions = new CompositeDisposable();
    }
    activate (state) {
        this.view = new View();
        this.subscriptions.add(atom.commands.add('atom-workspace', {
          'lego-editor:toggle': () => this.toggle()
        }));
    }
    deactivate () {
      console.warn('oooooooo');
        // this.modalPanel.destroy();
        this.subscriptions.dispose();
        // this.view.destroy();
    }
    toggle() {
         console.log('Sourcefetch was toggled!');
         if(!this.modalPanel){
           this.modalPanel = atom.workspace.addRightPanel({item: this.view.getElement(), visible: false});
         }else{
           this.modalPanel.isVisible() ? this.modalPanel.hide() : this.modalPanel.show();
         }
    }
}
export default new LegoEditor();
