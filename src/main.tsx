import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './presentation/App';
import './index.css';

class ReactMicroFrontend extends HTMLElement {
  private root: any;

  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.appendChild(mountPoint);
    
    const someConfig = this.getAttribute('config') || '{}';

    this.root = createRoot(mountPoint);
    this.root.render(
      <React.StrictMode>
        <App initialConfig={JSON.parse(someConfig)} />
      </React.StrictMode>
    );
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
    }
  }
}

if (!customElements.get('react-mfe-app')) {
  customElements.define('react-mfe-app', ReactMicroFrontend);
}
