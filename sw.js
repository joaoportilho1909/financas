// Service worker mínimo: só existe para o navegador oferecer "Instalar app". Não guarda nada em cache
// (os dados são financeiros e sempre vêm do servidor).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
