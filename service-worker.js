const kidsApp = "kids-app-v1"
const assets = [
  "/kids-points/",
  "/kids-points/index.html",
  "/kids-points/kids-app.css",
  "/kids-points/star.png"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(kidsApp).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
