import Component from "./Component";

export default class extends Component {
  constructor(params) {
    super(params);
    this.setTitle("Viewing Settings");
  }

  setup() {
    this.HTML = this.setHTML(`
            <h1>Flappy Bird</h1>
            <p>You are viewing post </p>
        `);
  }
}
