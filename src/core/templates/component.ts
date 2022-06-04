abstract class Component {
  protected container: HTMLElement;

  constructor(tag: string, cls: string) {
    this.container = document.createElement(tag);
    this.container.className = cls;
  }

  render() {
    return this.container;
  }
}

export default Component; 