import Component from "../pages/Component";
import { html } from "../utils/utils";
import { icons, navigateTo } from "../utils/route";

export default class extends Component {
  constructor(props) {
    super(props);
  }

  setup() {
    const { label, iconSrc, path } = this.props;

    this.setTitle("HOME");
    this.HTML = this.setHTML(html`
      <div class="icon_wrapper">
        <input id="${label}_checkbox" type="checkbox" hidden />
        <label for="${label}_checkbox" data-href=${path}>
          <div class="icon_container">
            <img alt="${label}_icon" src=${iconSrc} />
          </div>
          <div class="icon_name">${label}</div>
        </label>
      </div>
    `);
  }

  setEvent() {
    const $label = this.HTML.querySelector("label");
    $label.addEventListener("dblclick", (e) => {
      navigateTo(e.currentTarget.getAttribute("data-href"));
    });
    // $label.addEventListener("click", (e) => {
    //   console.log(e.target.closest(".icon_wrapper"));
    // });
  }
}
