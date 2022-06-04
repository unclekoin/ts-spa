import MainPage from "../main";
import Page from "../../core/templates/page";
import SettingsPage from "../settings";
import StatisticsPage from "../statistics";
import ErrorPage from "../error";
import Header from "../../core/components/header";

export const enum PagePaths {
  Main = "main-page",
  Settings = "settings-page",
  Statistics = "statistics-page",
}

class App {
  private static container: HTMLElement = document.body;
  private header: Header;

  constructor() {
    this.header = new Header("header", "header");
  }

  static renderCurrentPage(path: string): void {
    let page: Page | null = null;

    switch (path) {
      case PagePaths.Main:
      case "":
        page = new MainPage(PagePaths.Main);
        break;
      case PagePaths.Settings:
        page = new SettingsPage(path);
        break;
      case PagePaths.Statistics:
        page = new StatisticsPage(path);
        break;
      default:
        page = new ErrorPage("error-page");
    }

    if (page) {
      const pageHTML = page.render();
      App.container.append(pageHTML);
    }
  }

  private routeChange() {
    window.addEventListener("load", () => {
      const path = window.location.pathname.slice(1);
      App.renderCurrentPage(path);
    });
  }

  run(): void {
    App.container.append(this.header.render());
    this.routeChange();
  }
}

export default App;
