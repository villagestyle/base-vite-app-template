import { type RouterScrollBehavior } from "vue-router";

export const scrollBehaviorFn: RouterScrollBehavior = (
  to,
  // from,
  // savedPosition
) => {
  // savedPosition仅当 popstate导航(通过浏览器的前进/后退按钮/router导航)时才可用

  const meta = to.meta;

  if (meta.keepAlive) {
    return { left: 0, behavior: "smooth", top: meta.top, el: "" };
  }

  return { left: 0, top: 0, behavior: "smooth", el: "" };
};
