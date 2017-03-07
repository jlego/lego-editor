'use babel';
import HeaderPanel from './headerPanel';
import RightPanel from './rightPanel';
import BottomPanel from './bottomPanel';
import NewPanel from './newPanel';
import { Emitter, CompositeDisposable } from 'atom';

class LegoEditor {
    constructor(opts = {}) {
        this.emitter = new Emitter();
    }
    activate(state) {
        // console.warn(state);
        let that = this,
          newPanelView = Lego.create(NewPanel, {});
        this.HeaderPanelView = Lego.create(HeaderPanel, {});
        this.BottomPanelView = Lego.create(BottomPanel, {});
        this.RightPanelView = Lego.create(RightPanel, state); //state.testpackageViewState
        this.subscriptions = new CompositeDisposable();
        this.AtomHeaderPanel = atom.workspace.addHeaderPanel({ item: this.HeaderPanelView.el, visible: false });
        this.AtomRightPanel = atom.workspace.addRightPanel({ item: this.RightPanelView.el, visible: false });
        this.AtomBottomPanel = atom.workspace.addBottomPanel({ item: this.BottomPanelView.el, visible: false });
        this.subscriptions.add(atom.commands.add('atom-workspace', {
            'lego-editor:toggle': () => this.toggle()
        }));
        // this.element.addEventListener('click', (event) => {
        //
        // });
        this.subscriptions.add(atom.commands.add('button.icon-file-add', 'click', (event) => {
            // alert('dddddd');
            let thePane = atom.workspace.getPanes()[0];
            if(thePane){
              thePane.addItem(newPanelView);
            }
            // console.warn(atom.workspace.getPanes())
        }));
    }
    deactivate() {
        console.warn('oooooooo');
        this.HeaderPanelView.remove();
        this.RightPanelView.remove();
        this.subscriptions.dispose();
    }
    serialize(){
        // testpackageViewState = this.View.serialize();
    }
    toggle() {
        console.log('Sourcefetch was toggled!');
        this.AtomHeaderPanel.isVisible() ? this.AtomHeaderPanel.hide() : this.AtomHeaderPanel.show();
        this.AtomRightPanel.isVisible() ? this.AtomRightPanel.hide() : this.AtomRightPanel.show();
        this.AtomBottomPanel.isVisible() ? this.AtomBottomPanel.hide() : this.AtomBottomPanel.show();
    }
}
export default new LegoEditor();
