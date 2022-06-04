import Page from '../../core/templates/page';

class ErrorPage extends Page {
  protected textObject = {
    title: 'Page 404'
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

export default ErrorPage;