//全局类型

import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    title: string;
    description: string;
    keywords: string;
  }
}
