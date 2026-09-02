const CACHE_NAME = "garage-log-v1.2.1";

const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js",
  "/manifest.json",
  "/app-icons/app-icon-192.png",
  "/app-icons/app-icon-512.png"
];

self.addEventListener('install', e => {
	e.waitUntil(
		caches.open('won-v1').then(c => c.addAll(FILES_TO_CACHE))
	);
		self.skipWaiting(
		);
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', e => {
	e.respondWith(
		caches.match(e.request).then(r => r || fetch(e.request)
		)
	);
});