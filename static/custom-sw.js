const CACHE_NAME = 'static-cache-v1';


self.addEventListener('fetch', (evt) => {
  console.log('[Service Worker] Fetch (data)', evt.request.url);
  evt.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return fetch(evt.request)
        .then((response) => {
          // If the response was good, clone it and store it in the cache.
          if (response.status === 200) {
            cache.put(evt.request.url, response.clone());
          }
          return response;
        }).catch((err) => {
          // Network request failed, try to get it from the cache.
          return cache.match(evt.request);
        });
    }),
  );
});
