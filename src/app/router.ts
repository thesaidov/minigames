export type Route = {
  path: string;
  render: () => void;
};

export class Router {
  private readonly routes: Route[];

  public constructor(routes: Route[]) {
    this.routes = routes;

    addEventListener('popstate', (): void => {
      this.handleRoute();
    });

    document.addEventListener('click', (event: MouseEvent): void => {
      const target: HTMLElement | undefined =
        event.target instanceof HTMLElement ? event.target : undefined;

      const link: HTMLAnchorElement | undefined =
        target?.closest<HTMLAnchorElement>('[data-link]') ?? undefined;

      if (link === undefined) {
        return;
      }

      event.preventDefault();

      this.navigate(link.pathname);
    });
  }

  private renderNotFound(): void {
    const app: HTMLDivElement | undefined =
      document.querySelector<HTMLDivElement>('#app') ?? undefined;

    if (app === undefined) {
      return;
    }

    app.innerHTML = `
      <main>
        <h1>404</h1>
        <p>Page not found.</p>
      </main>
    `;
  }

  public navigate(path: string): void {
    history.pushState({}, '', path);
    this.handleRoute();
  }

  public handleRoute(): void {
    const currentPath: string = location.pathname;

    const route: Route | undefined = this.routes.find(
      (item: Route): boolean => item.path === currentPath,
    );

    if (route === undefined) {
      this.renderNotFound();
      return;
    }

    route.render();
  }
}
