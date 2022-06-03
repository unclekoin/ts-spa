import Page from '../../core/templates/page';

class MainPage extends Page {
  protected textObject = {
    title: 'Main Page'
  }

  constructor(id: string) {
    super(id);
  }

  render(): HTMLElement {
    const title = this.createHeader(this.textObject.title);
    this.container.append(title);
    return this.container;
  }
}

export default MainPage;