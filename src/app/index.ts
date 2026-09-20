import '../styles/globals.scss';

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  app.innerHTML = `

    <h1>MiniGames</h1>
    <p>Vite is working!</p>
    <main>
      <h1>MiniGames</h1>
      <p>Welcome to MiniGames!</p>
    </main>
  `;
}
