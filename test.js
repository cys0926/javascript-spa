function createHTMLElementFromString(str) {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = str.trim();
  const childNodes = tempElement.childNodes;
  const parentElement = document.createElement("div");
  for (let i = 0; i < childNodes.length; i++) {
    const childNode = childNodes[i];
    if (childNode.nodeType === Node.ELEMENT_NODE) {
      parentElement.appendChild(childNode.cloneNode(true));
    }
  }
  return parentElement;
}

const str = "<h1>Settings</h1><p>You are viewing post #</p>";
const htmlElement = createHTMLElementFromString(str);
console.log(htmlElement);
