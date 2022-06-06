abstract class Page {
  protected container: HTMLElement;
  protected textObject = {};

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
    this.container.className = 'page';
  }

  protected createHeader(text: string): HTMLElement {
    const headerTitle = document.createElement('h1');
    headerTitle.textContent = text;
    return headerTitle;
  }

  render(): HTMLElement {
    return this.container;
  }
}

export default Page;