'use babel'

class View {
    constructor(serializedState){
      this.element = document.createElement('div');
      this.element.classList.add('legoeditor');

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
