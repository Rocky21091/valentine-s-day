'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "26b5aa25f31e05a6731a48af6f891e00",
".git/config": "2b03dc1b137d547fba597a850636b35f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9237edcdf7c186cd7ac34dc0c665a129",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b59e10b4a5ec720368b77ffcc6755a32",
".git/logs/refs/heads/gh-pages": "2cfb93ceafe4783252579e184292de2f",
".git/logs/refs/remotes/origin/gh-pages": "682e18b029bb42773559a4d2cbbb8eba",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/15/175d16a956b69384badad96ad6b88921d7d99c": "ee16ff06abf4e30943d711ce5a30810f",
".git/objects/15/6935b400b76ec1232c4a6080e1d41e54dfce6f": "f3330cf7f9248f649739c3ab68da424d",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/40638679f805b2737bba6d6bb048e833db614a": "e8d791e6bdd0e93c287dd4d7be7bfcf0",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/43d6c30fdb0411e23a2885ec1cd47f3fc875c5": "edd7a63c78d5fdcb4b303b240ce2c490",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2d/c06431cfcd7e8e6d9e3aa9be625a44c36a2b11": "7a7b51d104ffc2d7a7bab58eaf02e1d0",
".git/objects/32/e5979ab25e2e4c2c1ee5cbf32b8a2496b7b9da": "4d91d0e4dad3757c9d5751d6092da99c",
".git/objects/38/f839a283c11ac33c863251994e99f8eb8ad2e2": "513f7a55d3319380d0aacd027a68b10c",
".git/objects/46/2eb03a04bdec643e334f2e48ec13564d1f027c": "e42932a80f077c79dba8836f1cf08355",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/c11c356dc6e719687bad12146ce9fb64ece17e": "23788f59acd700a88c82a4d3536a4d78",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/50/d332d8fee79610e7c06b2f2c6e1c625c0d2946": "77cb5ca739f4f17569f160361b39efca",
".git/objects/54/3b55e760e716ee07cf47874353648a8cf66e87": "3b9b4a3b0b13382112036eb73e10658a",
".git/objects/56/b3997a07ec28189582d9e10b47dc740d8c4ecf": "92098c877db0860db34aba0ee283fe1b",
".git/objects/57/6dfd2304883c3ded15e9e601d017b656ac60be": "ca2fc365d38231748ce9f15d89908149",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5f/5a1b7ac706e335346de28e6b83433d80ee0316": "5e71b6a079ec633dadfb5a7596e2fec1",
".git/objects/62/5a1082d45bcda211b66770d5539bb99cf52fbd": "927ec2e3d8944e88482c6d1031e64b46",
".git/objects/66/ab41afb76f82adb7117c1dad0de8a7b9613a8e": "f0455b828bf3945351221cbf03089454",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6d/8b5043f2b98b0eff3aea3a64354c1a3417b1d9": "04a2d384a15c3e41d50e8fc2e9001701",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/7f/6be4c8d480e11589588e00d04cd8251204c04b": "0906411e7de865ff72452f45ad0f2c1e",
".git/objects/82/0a5be490126003f860ae7a43f10aa2d21b1e96": "1ba1c99b44bde739913d9de1c361f71a",
".git/objects/84/524728b390f15fdc036701eff5d382220923de": "0e5867d5a3d992b742667b4e628d9d61",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/ba0796713348a15629c0343d32ad11de58e832": "f64b9a04265259b95a60e0ff6bdf7db4",
".git/objects/92/2c1c7009a4a71225df27e365e190cc16fd3c91": "920a03aaad4fef32f5f22fdf092a8e13",
".git/objects/93/85648b6ee855ad8bc25120565d1baf881a3408": "360ded2adb087089ed203b435359d3b9",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/9d/c561abf979af4ddf1a7c6669b457d7598bb1ae": "3a52a9ac417be53b06b8ffbcd2628421",
".git/objects/9e/02276f999bffd9fa879402c017debf045fb397": "cfbeb7d4236961e7a4b2778c00423e33",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/bc08704944adddc265cefe55915037a9fb7aaf": "56aff2bb719b56f3e5f3dd7ee6e27292",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/cd8367f496a537b175c4d7f590aed120b7bed1": "3aab50bf99fefb1448a7edbbf2e9296d",
".git/objects/e4/115177d54afff14cd02d1a008801d70bc6165d": "1e3432f1120615cd9f9ad3aef2b3e785",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/283fd01caae705563955a6e6f2977261ef7796": "3a0974d8c3cfef7f10ddb63d21f16a0f",
".git/objects/fb/957234a4a2bbe4dd48ee9b880bc602b09d991b": "a507725df3ad698fc72536f27d5227aa",
".git/objects/fe/cfe27077550901d8c8d4f18300c0dda1380eaa": "7a929a13e7e9fd084e02f6d800dd7950",
".git/objects/ff/6b2cd8ef6bf475cd1d698790c0b707516faf51": "4ea9f67a0854bf2523fc90c0b58b9728",
".git/refs/heads/gh-pages": "397ecc50abcd81b890e111e9e44bca98",
".git/refs/remotes/origin/gh-pages": "397ecc50abcd81b890e111e9e44bca98",
"assets/AssetManifest.bin": "7f5939b322c949245bcbbc9eaef5a5f2",
"assets/AssetManifest.bin.json": "f5b5678d087a29d4d316a5360981fcc0",
"assets/AssetManifest.json": "8c02d29292bd2874811de0c200511021",
"assets/assets/img1.jpeg": "d783fa398600d57d3ea3db92b944a32a",
"assets/assets/img11.jpeg": "408fe82176f6a05fb26fccdbe18308c8",
"assets/assets/img2.jpeg": "e0858041956ee128655729164c85ebc9",
"assets/assets/img22.jpeg": "cc009631ad62e2486b1d1d97222a28d6",
"assets/assets/img3.jpeg": "e4f20f2381630439148078aad714090d",
"assets/assets/img33.jpeg": "624f6496edf3cee709707bed834772d6",
"assets/assets/img4.jpeg": "803807dc0a9f1d42c4cb0cc4715022af",
"assets/assets/img44.jpeg": "cef96d8ed02e452fed90798efc32e1d1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9ebfc6bfa04506ca078a0099895c0174",
"assets/NOTICES": "0a8d05c8b1869580511ed2082285c3f6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "707a7c4c2717c4036580ae73545c4879",
"/": "707a7c4c2717c4036580ae73545c4879",
"main.dart.js": "94b0b748066ef24f58895e4f36d8cbbc",
"manifest.json": "99ce9cceca28202fd7f4c80c4f6e0dd2",
"version.json": "4d70a9ec6bc3829c26025fd70b9f0735"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
