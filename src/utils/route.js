import Home from "../pages/Home";
import Tetris from "../pages/Tetris";
import FlappyBird from "../pages/FlappyBird";

export const routes = [
  { path: "/", component: Home, label: "Home", iconSrc: null },
  {
    path: "/tetris",
    component: Tetris,
    label: "Tetris",
    iconSrc: "/tetris.png",
  },
  {
    path: "/flappybird",
    component: FlappyBird,
    label: "Flappy Bird",
    iconSrc: "/flappyBird.png",
  },
];

export const icons = routes.reduce((prev, router, i) => {
  const { path, label, iconSrc } = router;
  if (router.path === "/") return prev;
  return [...prev, { path, label, iconSrc }];
}, []);

export const render = () => {
  const pageName = routes.find(
    (route) => route.path === window.location.pathname
  )?.component;

  if (!pageName) {
    return replaceTo("/");
  }
  // Test each route for potential match
  const page = new pageName();

  document.querySelector("#app").replaceChildren(page.getHtml());
};

export const navigateTo = (url) => {
  history.pushState(null, null, url);
  render();
};

export const replaceTo = (url) => {
  history.replaceState(null, null, url);
  render();
};
