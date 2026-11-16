// Simple service worker: app install ke liye. Kuch cache nahi karta,
// isliye login/data hamesha live rehta hai.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  e.respondWith(fetch(e.request));
});