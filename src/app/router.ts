export type Route = {
  path: string;
  render: () => void;
};

export class Router {
  private readonly routes: Route[];

  public constructor(routes: Route[]) {
    this.routes = routes;

    window.addEventListener('popstate', (): void => {
      this.handleRoute();
    });

    document.addEventListener('click', (event: MouseEvent): void => {
      const target: HTMLElement | null = event.target as HTMLElement | null;

      const link: HTMLAnchorElement | null = target.closest<HTMLAnchorElement>('[data-link]');

      if (link === null) {
        return;
      }

      event.preventDefault();

      this.navigate(link.pathname);
    });
  }

  public navigate(path: string): void {
    window.history.pushState({}, '', path);
    this.handleRoute();
  }

  public handleRoute(): void {
    const currentPath: string = window.location.pathname;

    const route: Route | undefined = this.routes.find(
      (item: Route): boolean => item.path === currentPath,
    );

    if (route === undefined) {
      this.renderNotFound();
      return;
    }

    route.render();
  }

  private renderNotFound(): void {
    const app: HTMLDivElement | null = document.querySelector<HTMLDivElement>('#app');

    if (app === null) {
      return;
    }

    app.innerHTML = `
      <main>
        <h1>404</h1>
        <p>Page not found.</p>
      </main>
    `;
  }
}
