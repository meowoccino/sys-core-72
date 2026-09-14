// Minimal service worker — exists only to satisfy PWA installability requirements.
// It does not cache anything or intercept requests beyond a pass-through.

self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
