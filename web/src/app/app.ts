import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="app-shell">
      <header class="app-header">
        <h1>{{ title }}</h1>
        <nav class="nav">
          <button class="btn" (click)="toggleLogin()">
            {{ logged ? 'Sair' : 'Entrar' }}
          </button>
        </nav>
      </header>

      <main class="container">
        <section class="card">
          <h2>Bem-vindo ao portal</h2>
          <p *ngIf="!logged">Faça login para acessar recursos exclusivos.</p>
          <p *ngIf="logged">Você está conectado — explore o sistema!</p>

          <div class="actions">
            <button class="primary" (click)="toggleLogin()">
              {{ logged ? 'Ir para Dashboard' : 'Entrar' }}
            </button>
          </div>
        </section>
      </main>

      <footer class="app-footer">
        <small>Portal Base — simples e elegante</small>
      </footer>
    </div>
  `,
  styles: [`
    :host, .app-shell { display:flex; flex-direction:column; min-height:100vh; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial; background: linear-gradient(135deg,#f6f8ff 0%, #ffffff 60%); color:#213547; }
    .app-header { display:flex; justify-content:space-between; align-items:center; padding:1rem 1.5rem; background:transparent; }
    .app-header h1 { margin:0; font-size:1.25rem; letter-spacing:0.2px; }
    .nav .btn { background:transparent; border:1px solid rgba(33,53,71,0.12); padding:0.4rem 0.75rem; border-radius:6px; cursor:pointer; }
    .container { flex:1; display:flex; align-items:center; justify-content:center; padding:2rem; text-align:center;}
    .card { width:100%; max-width:560px; background:#fff; border-radius:12px; box-shadow: 0 10px 30px rgba(33,53,71,0.08); padding:2rem; text-align:center; }
    .card h2 { margin-top:0; color:#0f2b3a; }
    .card p { color:#5b7080; margin:1rem 0 1.5rem; }
    .actions { display:flex; justify-content:center; gap:0.5rem; }
    .primary { background: linear-gradient(90deg,#2d9bf0,#4ac5b8); color:#fff; border:none; padding:0.6rem 1rem; border-radius:8px; cursor:pointer; box-shadow: 0 6px 16px rgba(76,166,210,0.18); }
    .primary:hover { transform:translateY(-2px); transition:0.18s; }
    .app-footer { text-align:center; padding:0.75rem; color:#7b8b97; font-size:0.85rem; }
    @media (max-width:600px) {
      .card { padding:1.25rem; border-radius:10px; }
      .app-header h1 { font-size:1rem; }
    }
  `]
})
export class App {
  protected title = 'portal-base';

  logged: boolean = false;

  toggleLogin() {
    this.logged = !this.logged;
  }
}
