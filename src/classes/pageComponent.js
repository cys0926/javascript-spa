export default class {
  HTML;
  constructor(props) {
    this.props = props;
    this.setup();
    this.setEvent();
  }

  setup() {
    //  Title과 HTML을 세팅합니다.
  }

  setEvent() {
    //  Event를 세팅합니다.
  }

  setTitle(title) {
    document.title = title;
  }

  setHTML(htmlString) {
    return document.createRange().createContextualFragment(htmlString);
  }

  getHtml() {
    return this.HTML;
  }
}
