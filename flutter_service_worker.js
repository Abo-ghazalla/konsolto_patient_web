'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "97b260ef96ed9c292abf9664ffd7b154",
"assets/assets/fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/assets/fonts/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/assets/images/2.0x/boarding1.png": "a59b9fcc250c369465ef2435323153b7",
"assets/assets/images/2.0x/boarding2.png": "ed7a2d2f4207de78708263bb59e90430",
"assets/assets/images/2.0x/boarding3.png": "b61f180a54955232d17497935a265fc2",
"assets/assets/images/2.0x/boarding4.png": "b96c254c919388204f5dcfa594461163",
"assets/assets/images/2.0x/doc_card.png": "44407b35952b924bb3fd9be54ef7f417",
"assets/assets/images/2.0x/home_search.png": "7805f4a36e7a16ae6dd047ca26d02510",
"assets/assets/images/2.0x/logo.png": "2e1a6fad4d33921f7ff1282123ad74a1",
"assets/assets/images/2.0x/pharmacy.png": "ab99a6b05affc5fba1915d6bf320028d",
"assets/assets/images/2.0x/redeem_success.png": "06ab83a902e120ee602eb70d52ece2bc",
"assets/assets/images/3.0x/boarding1.png": "195e22ac3d759a79755a3f44e156a5c4",
"assets/assets/images/3.0x/boarding2.png": "1bab9a370ae40befe3465db81616ec98",
"assets/assets/images/3.0x/boarding3.png": "ce3c0274c984b5c0940d7626c7020df8",
"assets/assets/images/3.0x/boarding4.png": "87141df01bd2fa0511e0ee1bb449cdcd",
"assets/assets/images/3.0x/doc_card.png": "8c748581eab577bc13f578c6ea35c6d0",
"assets/assets/images/3.0x/home_search.png": "67fc591b9ea8cbe01accfeb1fb5a9196",
"assets/assets/images/3.0x/logo.png": "7c5a4622f15fb7651ffa28ed61e3d749",
"assets/assets/images/3.0x/pharmacy.png": "347351404e2f45e4839f666244db88d1",
"assets/assets/images/3.0x/redeem_success.png": "fec395071f01f5c8d0d5e6ef82515b3b",
"assets/assets/images/address.svg": "26b5c0aba2f4f6d5a5048248d39183e7",
"assets/assets/images/boarding1.png": "f0f47701af22030b3b5647c0028c8184",
"assets/assets/images/boarding2.png": "b65f35e46ee57e1c6c4e8a3bd131002f",
"assets/assets/images/boarding3.png": "d64fb359c3b0c857d0c6a239bb7c12ce",
"assets/assets/images/boarding4.png": "becccb788b6171a4134b72ca6e95fc18",
"assets/assets/images/comments_icon.svg": "fc8d19c9b4152054a5574446bfcb5540",
"assets/assets/images/credit.svg": "5bc89feb1c21f67b3b2c20375dfeefa4",
"assets/assets/images/doc_card.png": "c549cc9cc1fcb103dbea67a68c4b5328",
"assets/assets/images/filter_icon.svg": "f2b6cfe6149064f4301fb7041fa347f9",
"assets/assets/images/gift-box.svg": "282805a9c47707178b00d0fa0fdda960",
"assets/assets/images/home.svg": "ba912f7fc666823b38fdc5fa64e701b5",
"assets/assets/images/home_search.png": "92e0103fd19a717c551208478fce8b6c",
"assets/assets/images/logo.png": "57bcff64d182b48f191cd83c6c60a988",
"assets/assets/images/money_icon.svg": "f3f9a1f06e3894fc625adc4b2af40e78",
"assets/assets/images/more.svg": "b82f7c77bfe7c90f95b59e9202304c97",
"assets/assets/images/pharmacist.svg": "d7ae3d3d445943d1ad9219c27d51e533",
"assets/assets/images/pharmacy.png": "616987db5531f896d5a21c33a70e3ad1",
"assets/assets/images/points.svg": "c9343934116d421a2767447fbfcaff90",
"assets/assets/images/prev_order_icon.svg": "7f0974426b0ca94d8753ef496e8eaab6",
"assets/assets/images/redeem_success.png": "16bd7194974c411ed773643276676c8d",
"assets/assets/images/share.svg": "561051d212719630a60fc407fe3d1093",
"assets/assets/images/timeline.svg": "e4ec050ada247c87016c6ae0b65cf6de",
"assets/FontManifest.json": "4f98c153db1e7acf8e51da5cda1effc0",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/lang/ar.json": "717ab7a8977b54c8af1246a4a8f110d2",
"assets/lang/en.json": "63a818345b6ec715768ee845b99e5afd",
"assets/NOTICES": "018ae20b8eb2da9a71d821860160389e",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "746a5da4f9cf722b44c387cbc7ebec5c",
"/": "746a5da4f9cf722b44c387cbc7ebec5c",
"main.dart.js": "386f454d17a48cccad75632a5a02347c",
"manifest.json": "c61be6c71392f19918d685ce24471255",
"version.json": "e9d60ee4fcbe2bc2c45e987d9bee87c1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
