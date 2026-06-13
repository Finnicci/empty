const CACHE_NAME = "bloomhaven-static-v4";
const APP_ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=20260613-characters",
  "./app.js?v=20260613-characters",
  "./manifest.webmanifest",
  "./icons/bloomhaven-icon.svg",
  "./assets/characters/fox-female.png",
  "./assets/characters/fox-male.png",
  "./assets/characters/rabbit-female.png",
  "./assets/characters/rabbit-male.png",
  "./assets/characters/mongoose-female.png",
  "./assets/characters/mongoose-male.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const requestUrl = new URL(event.request.url);
  const isAppShellRequest =
    event.request.mode === "navigate" ||
    [".html", ".css", ".js", ".webmanifest", ".svg"].some((extension) => requestUrl.pathname.endsWith(extension));

  if (isAppShellRequest) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      });
    })
  );
});
