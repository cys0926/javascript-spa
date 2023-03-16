import PageComponent from "../classes/pageComponent.js";
import { icons, navigateTo, routes } from "../utils/route";
import { html } from "../utils/utils";

export default class extends PageComponent {
  constructor(props) {
    super(props);
  }

  setup() {
    this.setTitle("HOME");
    this.HTML = this.setHTML(`
            ${icons
              .map((icon) => {
                const { path, label, iconSrc } = icon;
                return html`
                  <label
                    class="icon_wrapper"
                    for="icon_input"
                    data-href=${path}
                  >
                    <input type="checkbox" hidden />
                    <div class="icon_container">
                      <img alt="${label}_icon" src=${iconSrc} />
                    </div>
                    <div class="icon_label">${label}</div>
                  </label>
                `;
              })
              .join("")}
        `);
  }

  setEvent() {
    this.HTML.querySelectorAll(".icon_wrapper").forEach((node) => {
      node.addEventListener("dblclick", (e) => {
        e.preventDefault();
        console.log("더블클릭");
        console.log(e.currentTarget);
        navigateTo(e.currentTarget.getAttribute("data-href"));
      });
    });
  }
}
