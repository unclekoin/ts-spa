import Component from "../../templates/component";
import { PagePaths } from "../../../pages/app";

const Links = [
  { id: PagePaths.Main, text: "Main Page" },
  { id: PagePaths.Settings, text: "Settings Page" },
  { id: PagePaths.Statistics, text: "Statistics Page" },
];

class Header extends Component {
  constructor(tag: string, cls: string) {
    super(tag, cls);
  }

  renderLinks() {
    const headerLinks = document.createElement("div");
    Links.forEach((link) => {
      const linkHTML = document.createElement("a");
      linkHTML.href = `/${link.id}`;
      linkHTML.textContent = link.text;
      headerLinks.append(linkHTML);
    });

    this.container.append(headerLinks);
  }

  render() {
    this.renderLinks();
    return this.container;
  }
}

export default Header;
