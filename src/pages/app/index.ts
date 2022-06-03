import MainPage from "../main";
import SettingsPage from "../settings";

class App {
  private container: HTMLElement;
  private initialPage: MainPage;
  private settingsPage: SettingsPage;

  constructor() {  
    this.container = document.body;
    this.initialPage = new MainPage('main-page');
    this.settingsPage = new SettingsPage('settings-page');
  }

  run() {
    const mainPageHTML = this.initialPage.render();
    const settingsPageHTML = this.settingsPage.render();
    this.container.append(mainPageHTML, settingsPageHTML);
  }
}

export default App;