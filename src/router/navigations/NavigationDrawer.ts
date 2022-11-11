import { RouteMeta, RouteConfig } from "vue-router";
import { PureAbility } from "@casl/ability";

export interface NavigationItem {
  name: string | null | undefined;
  path: string;
  meta: RouteMeta | undefined;
  children?: NavigationItem[] | undefined;
}

interface NavigationDrawerConfig {
  items: RouteConfig[];
}

export class NavigationDrawer {
  public items: RouteConfig[] = [];

  constructor(options?: NavigationDrawerConfig) {
    if (options?.items) {
      this.items = options.items;
    }
  }

  /**
   * Add a route
   * @param route
   */
  public addRoute(route: RouteConfig) {
    this.items.push(route);
  }

  /**
   * Add a collection of routes
   * @param routes
   */
  public addRoutes(routes: RouteConfig[] = []) {
    routes.forEach((route) => this.addRoute(route));
  }

  /**
   * Build final route collection
   * @param $can
   * @returns
   */
  public build($can: PureAbility["can"]) {
    return this.builder($can, this.items);
  }

  private builder(
    $can: PureAbility["can"],
    routes: RouteConfig[]
  ): NavigationItem[] {
    const items = routes.reduce<NavigationItem[]>((acc, route) => {
      const item: NavigationItem = {
        name: route.name,
        path: route.path,
        meta: route.meta,
      };
      if (route.children) {
        const children = this.builder($can, route.children);

        if (!children.length) return acc;
        item.children = children;
      }

      if (this.isRouteRequiredAbility($can, route)) {
        acc.push(item);
      }
      return acc;
    }, []);
    return items;
  }

  /**
   * Check if route required ability check
   * @param core
   * @param to
   * @returns boolean
   */
  private isRouteRequiredAbility(can: PureAbility["can"], to: RouteConfig) {
    if (!to.meta) {
      return true;
    }

    const $can = (action: string, subject: string) => can(action, subject);
    const ability = to.meta.ability;

    if (typeof ability === "function") {
      return ability($can);
    } else if (typeof ability === "object") {
      return $can(ability.action, ability.subject);
    }

    return true;
  }
}
