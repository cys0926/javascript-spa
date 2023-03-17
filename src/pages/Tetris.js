import Component from "./Component";

export default class extends Component {
  constructor(params) {
    super(params);
    this.setTitle("Posts");
  }

  setup() {
    this.HTML = this.setHTML(`
            <h1>Tetris</h1>
            <p>You are viewing the posts!</p>
        `);
  }
}
