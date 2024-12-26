// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers

const cacheVersion = "v1";

const coreAssets = [
  "/fonts/GrusskartenGotisch.woff",
  "/fonts/GrusskartenGotisch.woff2",
  "/fonts/LevTypeHryvnia-Regular.woff",
  "/fonts/LevTypeHryvnia-Regular.woff2",
  "/fonts/Lissain.woff",
  "/fonts/Lissain.woff2",
  "/fonts/OstrovskyBold.woff",
  "/fonts/OstrovskyBold.woff2",
  "/fonts/Showboat.woff",
  "/fonts/Showboat.woff2",
  "/fonts/Tinos-Bold.woff",
  "/fonts/Tinos-Bold.woff2",
  "/fonts/Tinos-BoldItalic.woff",
  "/fonts/Tinos-BoldItalic.woff2",
  "/fonts/Tinos-Italic.woff",
  "/fonts/Tinos-Italic.woff2",
  "/fonts/Tinos-Regular.woff",
  "/fonts/Tinos-Regular.woff2",
  // "/favicon.ico",
  "/favicon.svg",
  // "/android-chrome-192x192.png",
  // "/android-chrome-512x512.png",
  // "/apple-touch-icon.png",
  // "/favicon-16x16.png",
  // "/favicon-32x32.png"
];

// Cache assets on install
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(cacheVersion).then((cache) => {
    return cache.addAll(coreAssets);
  }));
});

// Served cached assets from the cache
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const cachedRequest = coreAssets.includes(url.pathname);

  if (cachedRequest) {
    // Grab the pre-cached asset from the cache
    event.respondWith(caches.open(cacheVersion).then((cache) => {
      return cache.match(event.request.url);
    }));
  } else {
    // Go to the network
    return;
  }
});