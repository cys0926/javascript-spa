import PageComponent from "../classes/pageComponent";

export default class extends PageComponent {
  constructor(params) {
    super(params);
    this.setTitle("Posts");
  }

  getHtml() {
    return `
            <h1>Posts</h1>
            <p>You are viewing the posts!</p>
        `;
  }
}
