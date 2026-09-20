export function renderLibraryPage(root: HTMLElement): void {
  root.innerHTML = `
    <main class="library-page">
      <h1>Game Library</h1>
      <p>Choose a game to play.</p>

      <a href="/" data-link>
        Back to Home
      </a>
    </main>
  `;
}
