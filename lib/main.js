'use babel'
import HeaderPanel from './headerPanel';
import RightPanel from './rightPanel';
import { Emitter, CompositeDisposable } from 'atom';

class LegoEditor {
    constructor(opts = {}) {
        console.warn('8888888888');
        this.emitter = new Emitter();
    }
    activate(state) {
        console.warn(state);
        this.HeaderPanelView = new HeaderPanel();
        this.RightPanelView = new RightPanel(state.testpackageViewState);
        this.subscriptions = new CompositeDisposable();
        this.AtomHeaderPanel = atom.workspace.addTopPanel({ item: this.HeaderPanelView.getElement(), visible: false });
        this.AtomRightPanel = atom.workspace.addRightPanel({ item: this.RightPanelView.getElement(), visible: false });
        this.subscriptions.add(atom.commands.add('atom-workspace', {
            'lego-editor:toggle': () => this.toggle()
        }));
    }
    deactivate() {
        console.warn('oooooooo');
        this.HeaderPanelView.destroy();
        this.RightPanelView.destroy();
        this.subscriptions.dispose();
    }
    serialize(){
        // testpackageViewState = this.View.serialize();
    }
    toggle() {
        console.log('Sourcefetch was toggled!');
        this.AtomHeaderPanel.isVisible() ? this.AtomHeaderPanel.hide() : this.AtomHeaderPanel.show();
        this.AtomRightPanel.isVisible() ? this.AtomRightPanel.hide() : this.AtomRightPanel.show();
    }
}
export default new LegoEditor();
