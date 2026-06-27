self.addEventListener('install', () => {
    console.log('Service Worker installed');
});

self.addEventListener('fetch', () => {
    // Let the browser handle everything normally.
});