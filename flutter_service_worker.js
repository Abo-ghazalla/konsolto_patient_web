'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "57022078cc0e870220e95ffd6e9fa5e8",
"assets/assets/fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/assets/fonts/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/assets/fonts/Tajawal-Bold.ttf": "79bb19e04937c19974260fcb4128270e",
"assets/assets/fonts/Tajawal-Medium.ttf": "2bfe3ee2145f6755e4b5960310daee03",
"assets/assets/fonts/Tajawal-Regular.ttf": "6b10b55e4df612910047b7e5d596a9d5",
"assets/assets/icons/AppIcon.ttf": "28bff3990d892b7f5992cae94180f695",
"assets/assets/images/2.0x/arabic_logo.png": "b2e870ed9a9e0c40ced431dae4c49e97",
"assets/assets/images/2.0x/boarding1.png": "a59b9fcc250c369465ef2435323153b7",
"assets/assets/images/2.0x/boarding2.png": "ed7a2d2f4207de78708263bb59e90430",
"assets/assets/images/2.0x/boarding3.png": "b61f180a54955232d17497935a265fc2",
"assets/assets/images/2.0x/boarding4.png": "b96c254c919388204f5dcfa594461163",
"assets/assets/images/2.0x/Catafast.png": "33037847e7dedb4b6a1bb8a5c276f212",
"assets/assets/images/2.0x/chat.png": "ab99a6b05affc5fba1915d6bf320028d",
"assets/assets/images/2.0x/doc_card.png": "44407b35952b924bb3fd9be54ef7f417",
"assets/assets/images/2.0x/edit_medical.png": "efb7a1e0ccbaca323b93b0b61a3fd275",
"assets/assets/images/2.0x/gift-box.png": "07cc4d00a401b5c300e8d1a5835341ab",
"assets/assets/images/2.0x/group.png": "8b8981db50bbe7edd1a3040acce552f4",
"assets/assets/images/2.0x/logo.png": "2e1a6fad4d33921f7ff1282123ad74a1",
"assets/assets/images/2.0x/redeem_success.png": "06ab83a902e120ee602eb70d52ece2bc",
"assets/assets/images/2.0x/sad.png": "ca36cf2eac8ce46482ca7acc53780ff0",
"assets/assets/images/2.0x/update_file.png": "665f0a62811fe3e09540a2b8bc9b3929",
"assets/assets/images/3.0x/arabic_logo.png": "de18800a3163d9b2cbd11f35bdd34eac",
"assets/assets/images/3.0x/boarding1.png": "195e22ac3d759a79755a3f44e156a5c4",
"assets/assets/images/3.0x/boarding2.png": "1bab9a370ae40befe3465db81616ec98",
"assets/assets/images/3.0x/boarding3.png": "ce3c0274c984b5c0940d7626c7020df8",
"assets/assets/images/3.0x/boarding4.png": "87141df01bd2fa0511e0ee1bb449cdcd",
"assets/assets/images/3.0x/Catafast.png": "b141b1a150e4542c9a49d4aa5c457d48",
"assets/assets/images/3.0x/chat.png": "347351404e2f45e4839f666244db88d1",
"assets/assets/images/3.0x/doc_card.png": "8c748581eab577bc13f578c6ea35c6d0",
"assets/assets/images/3.0x/edit_medical.png": "09675696f501bf7f7801ae1bb5563faa",
"assets/assets/images/3.0x/gift-box.png": "09d888d84220f61060cc7dc9f5ed92fa",
"assets/assets/images/3.0x/group.png": "30680cb463daf1edc1f55693b7efcf81",
"assets/assets/images/3.0x/home_search.png": "67fc591b9ea8cbe01accfeb1fb5a9196",
"assets/assets/images/3.0x/logo.png": "7c5a4622f15fb7651ffa28ed61e3d749",
"assets/assets/images/3.0x/redeem_success.png": "fec395071f01f5c8d0d5e6ef82515b3b",
"assets/assets/images/3.0x/sad.png": "06a05adf4d60b58f0c749d87e8efe5b8",
"assets/assets/images/3.0x/update_file.png": "ed282c3278073f97cc3f1b701282f150",
"assets/assets/images/address.svg": "26b5c0aba2f4f6d5a5048248d39183e7",
"assets/assets/images/arabic_logo.png": "6b0bf51175c5b79717e7ddafa9166b63",
"assets/assets/images/boarding1.png": "f0f47701af22030b3b5647c0028c8184",
"assets/assets/images/boarding2.png": "b65f35e46ee57e1c6c4e8a3bd131002f",
"assets/assets/images/boarding3.png": "d64fb359c3b0c857d0c6a239bb7c12ce",
"assets/assets/images/boarding4.png": "becccb788b6171a4134b72ca6e95fc18",
"assets/assets/images/cart.svg": "9aef844994e243ddce39502064ab3905",
"assets/assets/images/Catafast.png": "315ed5626f18423cc1633cfd40e03f15",
"assets/assets/images/chat.png": "616987db5531f896d5a21c33a70e3ad1",
"assets/assets/images/comments_icon.svg": "fc8d19c9b4152054a5574446bfcb5540",
"assets/assets/images/credit.svg": "5bc89feb1c21f67b3b2c20375dfeefa4",
"assets/assets/images/direction.png": "9f5808ce21bc539f7480fc72d67d8f00",
"assets/assets/images/doc_card.png": "c549cc9cc1fcb103dbea67a68c4b5328",
"assets/assets/images/edit_medical.png": "8ebf450694600249b68dc650e404b510",
"assets/assets/images/filter_icon.svg": "f2b6cfe6149064f4301fb7041fa347f9",
"assets/assets/images/gift-box.png": "d129fb9ce467d92093df590b89db298a",
"assets/assets/images/gift-box.svg": "282805a9c47707178b00d0fa0fdda960",
"assets/assets/images/group.png": "64ae2653af6c8a93ac1f6c210fbfb7e8",
"assets/assets/images/home.svg": "6554fd9dc1ec4f3228239894c96ebfbc",
"assets/assets/images/home_search.png": "101423d93bd27c5295f385bd845d8264",
"assets/assets/images/logo.png": "57bcff64d182b48f191cd83c6c60a988",
"assets/assets/images/money_icon.svg": "f3f9a1f06e3894fc625adc4b2af40e78",
"assets/assets/images/more.svg": "b82f7c77bfe7c90f95b59e9202304c97",
"assets/assets/images/pharma.png": "ce05317b28973edc2044887691bf0935",
"assets/assets/images/pharmacist.svg": "d7ae3d3d445943d1ad9219c27d51e533",
"assets/assets/images/points.svg": "c9343934116d421a2767447fbfcaff90",
"assets/assets/images/prev_order_icon.svg": "7f0974426b0ca94d8753ef496e8eaab6",
"assets/assets/images/redeem_success.png": "16bd7194974c411ed773643276676c8d",
"assets/assets/images/sad.png": "4a0a59f5f7f81e7b2547f746d534ad32",
"assets/assets/images/scan.svg": "bc33368a297a855da91d8df8d9f0ef98",
"assets/assets/images/share.svg": "561051d212719630a60fc407fe3d1093",
"assets/assets/images/timeline.svg": "e4ec050ada247c87016c6ae0b65cf6de",
"assets/assets/images/update_file.png": "f686cc5f720768085eeaf5cb8dbe877b",
"assets/assets/images/vector_like.png": "dd267a2c45c1e8d3da2a44ed7e9c1337",
"assets/FontManifest.json": "0048ef2b780b0335bc7946cc176506fd",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/lang/ar.json": "309ac00955f784c5b645e11fa15969f3",
"assets/lang/en.json": "d4f72c072545335dd7f4c5dde62f58cb",
"assets/NOTICES": "a0fe1d588c0e6a84ea68618c9a352d91",
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
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"favicon.ico": "ea210be2c3e998186265dfef9430dab3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f30575895ea246fd2daefa6843be2909",
"/": "f30575895ea246fd2daefa6843be2909",
"main.dart.js": "25bb9df0f419a032638c19f671ddde89",
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
