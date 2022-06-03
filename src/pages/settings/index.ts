import Page from '../../core/templates/page';

class SettingsPage extends Page {
  protected textObject = {
    title: 'Settings Page'
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

export default SettingsPage;