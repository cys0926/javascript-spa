import Component from "./Component.js";
import { icons, navigateTo, routes } from "../utils/route";
import { html } from "../utils/utils";
import Settings from "./FlappyBird";
import Icon from "../components/Icon";

export default class extends Component {
  constructor(props) {
    super(props);
  }

  setup() {
    this.setTitle("HOME");
    this.HTML = this.setHTML(html`
      <div class="home">
        <div id="icons" />
      </div>
    `);

    this.HTML.getElementById("icons").replaceWith(
      ...icons.map((icon) => {
        const { label, iconSrc, path } = icon;
        return new Icon({ label, iconSrc, path }).getHtml();
      })
    );
  }

  setEvent() {
    const checkboxes = this.HTML.querySelectorAll('input[type="checkbox"]');

    this.HTML.querySelector(".home").addEventListener("click", (e) => {
      if (e.target === e.currentTarget) {
        checkboxes.forEach((checkbox) => {
          checkbox.checked = false;
        });
      }
    });

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("click", () => {
        checkboxes.forEach((otherCheckbox) => {
          if (otherCheckbox !== checkbox) otherCheckbox.checked = false;
        });
      });
    });
  }
}
