export function renderHomePage(root: HTMLElement): void {
  root.innerHTML = `
    <main class="home-page">
      <h1>MiniGames</h1>
      <p>Welcome to MiniGames!</p>

      <a href="/library" data-link>
        Open Library
      </a>
    </main>
  `;
}
