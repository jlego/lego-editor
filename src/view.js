'use babel'

class View {
    constructor(serializedState){
        console.warn('pppppppppp');
      this.element = document.createElement('div');
      this.element.classList.add('legoEditor');

      let message = document.createElement('div');
      message.textContent = "The Legoeditor package is Alive! It's ALIVE!";
      message.classList.add('message');
      this.element.appendChild(message);
    }
    serialize(){

    }
    destroy(){
        this.element.remove();
    }
    getElement(){
        return this.element;
    }
}
export default View;
