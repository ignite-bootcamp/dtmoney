import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

createServer({
  models: {
    transaction: Model
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Curso',
          value: 800,
          category: 'Educação',
          created_at: new Date().toISOString(),
          type: 'outcome'
        },
        {
          id: 2,
          title: 'Salário',
          value: 3600,
          category: 'Trabalho',
          created_at: new Date().toISOString(),
          type: 'income'
        }
      ]
    });
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
