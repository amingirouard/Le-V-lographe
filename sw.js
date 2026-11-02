// Service worker : en ligne -> dernière version ; hors ligne -> copie mémorisée.
// Après une modification de l'app, change le numéro de version ci-dessous pour forcer la mise à jour.
const V='compographe-v1';
const ASSETS=["./", "index.html", "manifest.webmanifest", "fonts/fonts.css", "lib/html2canvas.min.js", "lib/jspdf.umd.min.js", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png", "fonts/geist-mono-latin-400-normal.woff2", "fonts/geist-mono-latin-500-normal.woff2", "fonts/inter-latin-400-normal.woff2", "fonts/inter-latin-600-normal.woff2", "fonts/playfair-display-latin-400-normal.woff2", "fonts/space-mono-latin-400-normal.woff2", "fonts/caveat-latin-400-normal.woff2", "fonts/oswald-latin-700-normal.woff2"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
 e.respondWith((async()=>{try{const ctl=new AbortController(),to=setTimeout(()=>ctl.abort(),4000),res=await fetch(r,{signal:ctl.signal});clearTimeout(to);
   if(res.ok){const c=await caches.open(V);c.put(r,res.clone())}return res}
  catch(err){return (await caches.match(r,{ignoreSearch:true}))||(await caches.match('index.html'))}})())});
