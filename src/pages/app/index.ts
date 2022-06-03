class App {
  private container: HTMLElement;

  constructor() {  
    this.container = document.body;
  }

  run() {
    this.container.textContent = 'Single Page Application';
  }
}

export default App;