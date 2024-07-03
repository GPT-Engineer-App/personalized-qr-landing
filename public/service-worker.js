self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('bee-path-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/logo.png',
        '/manifest.json',
        // Add other assets that need to be cached
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});