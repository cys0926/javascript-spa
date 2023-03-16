import PageComponent from "../classes/pageComponent";

export default class extends PageComponent {
  constructor(params) {
    super(params);
    this.setTitle("Viewing Settings");
  }

  getHtml() {
    return `
            <h1>Settings</h1>
            <p>You are viewing post #$</p>
        `;
  }
}
