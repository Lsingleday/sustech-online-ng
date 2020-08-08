/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a30929b066415e25cb8166fca7898df5"
  },
  {
    "url": "about.html",
    "revision": "1a2212384e3ed5122a23063d76e09b72"
  },
  {
    "url": "assets/css/0.styles.371f13c7.css",
    "revision": "24e87c99f0a2cb91bcc51552b36a1f75"
  },
  {
    "url": "assets/img/1.021fd2f0.svg",
    "revision": "021fd2f0cd05c98a6ad02bbb0cbd9afa"
  },
  {
    "url": "assets/img/1.9714328b.png",
    "revision": "9714328b3234822c5a180bcd5bbc146a"
  },
  {
    "url": "assets/img/11.305727db.svg",
    "revision": "305727db985a6489f9bf59183c378b58"
  },
  {
    "url": "assets/img/2.18965506.svg",
    "revision": "189655060548dbc26cf40ee26e2e3c5d"
  },
  {
    "url": "assets/img/2.5a493adb.jpeg",
    "revision": "5a493adbad990c4cb35d110cbbb9149c"
  },
  {
    "url": "assets/img/2.84bdf8e6.jpeg",
    "revision": "84bdf8e691bd403e0c0fe84868a79f5b"
  },
  {
    "url": "assets/img/3.0fd92ccf.svg",
    "revision": "0fd92ccf4088a7c439c83cbce99a1f19"
  },
  {
    "url": "assets/img/3.eaed9d1e.jpeg",
    "revision": "eaed9d1e262741e211ece970181ed20d"
  },
  {
    "url": "assets/img/4.4c996b17.jpeg",
    "revision": "4c996b17bdef99e089b5bdbad31d963a"
  },
  {
    "url": "assets/img/4.6f30c900.svg",
    "revision": "6f30c90046b6e08d77eaf72b1e99d310"
  },
  {
    "url": "assets/img/5.0b71b7a7.svg",
    "revision": "0b71b7a7bf94e5921d83903f3a2ba906"
  },
  {
    "url": "assets/img/5.ec3af9d6.jpeg",
    "revision": "ec3af9d6714bce3057fe6b0d71d1efd2"
  },
  {
    "url": "assets/img/6.a49b1da1.jpeg",
    "revision": "a49b1da11c1d62f651b5b54181184ba4"
  },
  {
    "url": "assets/img/7.55a23f0b.svg",
    "revision": "55a23f0ba589def11d722a76b4672052"
  },
  {
    "url": "assets/img/7.666a0b6c.jpeg",
    "revision": "666a0b6c4ef82d8a3d2e3d5119c64d71"
  },
  {
    "url": "assets/img/8.f9490d9b.jpeg",
    "revision": "f9490d9bcea796c88df7d8846de8338b"
  },
  {
    "url": "assets/img/9.689d1811.svg",
    "revision": "689d1811ccce36a5a25636190c9b6c86"
  },
  {
    "url": "assets/img/add1.3b0eb6fd.png",
    "revision": "3b0eb6fd1e19998ae07b2fdda0d18b47"
  },
  {
    "url": "assets/img/add2.48f229d5.png",
    "revision": "48f229d5b0bd038dfbece7976c43dedd"
  },
  {
    "url": "assets/img/add3.16924c71.png",
    "revision": "16924c71bf4b945a9112a3ba55f30f99"
  },
  {
    "url": "assets/img/apply.28a537cd.png",
    "revision": "28a537cd708e65a5d834b9e37c4747ec"
  },
  {
    "url": "assets/img/bb-due-gcal.e5c077e0.png",
    "revision": "e5c077e040e029439b4683b77e1f269c"
  },
  {
    "url": "assets/img/bb-due-macos.1528a39b.png",
    "revision": "1528a39b7e152972bd7d6efcb733fa91"
  },
  {
    "url": "assets/img/cas-login.dfbae961.png",
    "revision": "dfbae961438fb4f789ee70f463722b1e"
  },
  {
    "url": "assets/img/CC-BY-SA_icon.af17d52a.svg",
    "revision": "af17d52ad72e6d1015d183d060e68046"
  },
  {
    "url": "assets/img/chrome-browser-desktop.e1f4ef5c.png",
    "revision": "e1f4ef5cf06ca958ec117aca49c74b98"
  },
  {
    "url": "assets/img/copy-1.d1179d13.jpeg",
    "revision": "d1179d13dadd129e538969f331d12c19"
  },
  {
    "url": "assets/img/copy-2.93c70e3c.jpeg",
    "revision": "93c70e3ce5a88a41be3bc48fbb8fd1a8"
  },
  {
    "url": "assets/img/copy-3.f2a2463b.jpeg",
    "revision": "f2a2463b987942bb98f2c494193d7662"
  },
  {
    "url": "assets/img/copy-4.75679705.jpeg",
    "revision": "75679705724e0880efb6619a40b5e799"
  },
  {
    "url": "assets/img/copy-5.d09dcb21.jpeg",
    "revision": "d09dcb21d3fb931a2835def7933d4a28"
  },
  {
    "url": "assets/img/database.ff3c4edf.png",
    "revision": "ff3c4edfbf324af9136e6ea8d0df7ed2"
  },
  {
    "url": "assets/img/discount.8bc3f011.png",
    "revision": "8bc3f0114babaeb594603c8d41908a76"
  },
  {
    "url": "assets/img/english-vocabulary-daka.be106d43.png",
    "revision": "be106d43bcc04ec57a0c2a30f2d3d96f"
  },
  {
    "url": "assets/img/get-link.1b5d1f7e.png",
    "revision": "1b5d1f7ebe1db58a46500502648b0b38"
  },
  {
    "url": "assets/img/ics-url.d32d371c.png",
    "revision": "d32d371c2de86a4f5d528421cb2cb09a"
  },
  {
    "url": "assets/img/interior.e8186b41.jpg",
    "revision": "e8186b41f73e27f8554f9988ead92470"
  },
  {
    "url": "assets/img/ios.6e324d40.png",
    "revision": "6e324d4040e2d29fcc549444a2add317"
  },
  {
    "url": "assets/img/major-overview.69f3f2bd.png",
    "revision": "69f3f2bd127892b13703668e936b73aa"
  },
  {
    "url": "assets/img/matlab.6a9a3ca4.png",
    "revision": "6a9a3ca471ac2e10c6f3d350d1bd8e8d"
  },
  {
    "url": "assets/img/matlab1.018a0124.png",
    "revision": "018a0124c9d67f0fe8c543dda354a7f7"
  },
  {
    "url": "assets/img/matlab2.85b35081.png",
    "revision": "85b350811cd6417c96ee3d74c78998fa"
  },
  {
    "url": "assets/img/print-1.8902bf97.jpeg",
    "revision": "8902bf97cbc83b9f2a3158d11b1eda0e"
  },
  {
    "url": "assets/img/print-2.e9461c36.jpeg",
    "revision": "e9461c36834331858f4b0a2ad3c4a700"
  },
  {
    "url": "assets/img/print-3.9838ff94.jpeg",
    "revision": "9838ff941e662f46b79806025aa25b7b"
  },
  {
    "url": "assets/img/print-4.5c5882e8.jpeg",
    "revision": "5c5882e8656470e0dbd8d53f638a964b"
  },
  {
    "url": "assets/img/print-5.b5a75bea.jpeg",
    "revision": "b5a75bea7870bd0f6aec19c11de265f0"
  },
  {
    "url": "assets/img/print.ed9d4bc4.png",
    "revision": "ed9d4bc42a8226325e3849a683d8a984"
  },
  {
    "url": "assets/img/reader-service.0c0368aa.png",
    "revision": "0c0368aaf3a1423f0441e1f2728d0d9d"
  },
  {
    "url": "assets/img/sakai-1.9434888c.png",
    "revision": "9434888c9903637674a80eb1acd56248"
  },
  {
    "url": "assets/img/sakai-2.b1ee0463.png",
    "revision": "b1ee04633413694907cfd5ddd1b8061a"
  },
  {
    "url": "assets/img/sakai-3.675e389c.png",
    "revision": "675e389c8d6a658aca6f0e363ce88557"
  },
  {
    "url": "assets/img/sakai-4.000dd574.png",
    "revision": "000dd5749f386829df97c37217d9ce86"
  },
  {
    "url": "assets/img/sakai-5.f244a3a4.png",
    "revision": "f244a3a419620ac52ea8a1e63e14ff8f"
  },
  {
    "url": "assets/img/scan-2-0.1bf9e6b7.jpeg",
    "revision": "1bf9e6b7f13351ecb87300c17f04ced5"
  },
  {
    "url": "assets/img/scan-2-1.303453b4.jpeg",
    "revision": "303453b48a1feb7e2d35ed91e191d23e"
  },
  {
    "url": "assets/img/scan-2-2.bf12b859.jpeg",
    "revision": "bf12b8599e3e0d18b56878b2891c067d"
  },
  {
    "url": "assets/img/scan-2-3.e9ebc852.jpeg",
    "revision": "e9ebc852daaaac202876b7e0d86c1941"
  },
  {
    "url": "assets/img/scan-2-4.712fafef.jpeg",
    "revision": "712fafef765953fb853a0cbd450576a5"
  },
  {
    "url": "assets/img/schedule.abad98f6.png",
    "revision": "abad98f699a0ee9a82c7c5eff0d3ac6f"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/img/szmc-system-map-2020.baa0800d.png",
    "revision": "baa0800d66d21cad0c6185f5c196a35c"
  },
  {
    "url": "assets/img/unifound-1.4fc26bc0.jpeg",
    "revision": "4fc26bc067ff1b178e7c9f6d0e9fd22f"
  },
  {
    "url": "assets/img/unifound-10.06ec06f8.png",
    "revision": "06ec06f80c28ba2c7a086c3bb9d56b01"
  },
  {
    "url": "assets/img/unifound-2.f8330e27.jpeg",
    "revision": "f8330e2761ddaa20d77c26dec687c213"
  },
  {
    "url": "assets/img/unifound-3.e57013fa.jpeg",
    "revision": "e57013fa465673457e84fd49f63b9b9d"
  },
  {
    "url": "assets/img/unifound-4.d7973763.png",
    "revision": "d79737638f38b299730b23da98c57a1b"
  },
  {
    "url": "assets/img/unifound-5.aae7e2e8.jpeg",
    "revision": "aae7e2e80661c5e94c074a86a74994bb"
  },
  {
    "url": "assets/img/unifound-6.ef5f24ab.jpeg",
    "revision": "ef5f24ab859fb25b31843238882bb53d"
  },
  {
    "url": "assets/img/unifound-7.22b69a1f.jpeg",
    "revision": "22b69a1fae5b8174bcd3da791b61ba4f"
  },
  {
    "url": "assets/img/unifound-8.3855edb9.jpeg",
    "revision": "3855edb91e2079cc340263fdbfeeebc5"
  },
  {
    "url": "assets/img/unifound-home.0e1673b8.png",
    "revision": "0e1673b82b15322a2296223af80247f4"
  },
  {
    "url": "assets/js/10.ce228c1a.js",
    "revision": "51b843f0e1eb9cade1634e4b583f4b3c"
  },
  {
    "url": "assets/js/11.7d8d1bea.js",
    "revision": "5399f0d3ffd16f9f048471fc62b92a4b"
  },
  {
    "url": "assets/js/12.b0ce6b2c.js",
    "revision": "eb342d9da103b8871e76224d45a2da91"
  },
  {
    "url": "assets/js/13.ce8603ae.js",
    "revision": "dfefe6942a43e8971c19b0bfb7a59877"
  },
  {
    "url": "assets/js/14.727a91b8.js",
    "revision": "0813a2c3471274018354bbb85e96f93e"
  },
  {
    "url": "assets/js/15.e0b28862.js",
    "revision": "dd3e1882a79c4e682aac39a9665d4565"
  },
  {
    "url": "assets/js/16.6c6977e3.js",
    "revision": "e0d726e307bca735272db32f323d5dde"
  },
  {
    "url": "assets/js/17.7371ab64.js",
    "revision": "99ae03c0d226b6d39e047d23614febd5"
  },
  {
    "url": "assets/js/18.3a3aeb60.js",
    "revision": "06de1f1b4fa57b77d9cda64d797e71fe"
  },
  {
    "url": "assets/js/19.37d10a28.js",
    "revision": "94dafffebe0280f40a0167476471c485"
  },
  {
    "url": "assets/js/2.ff3154b1.js",
    "revision": "69ac92faaa11b422420c31ab0afb1d4c"
  },
  {
    "url": "assets/js/20.62c30498.js",
    "revision": "9884fa46b0a8c72b81a95bd2b7393c00"
  },
  {
    "url": "assets/js/21.1ed425f9.js",
    "revision": "d5674f0996bd9f5970f558f07f4a5efc"
  },
  {
    "url": "assets/js/22.78b38b84.js",
    "revision": "43015c6f0a2d06357d76e6d7725ccee7"
  },
  {
    "url": "assets/js/23.17ef3c9b.js",
    "revision": "bf4b184ce10b6d2a9793f7d284842680"
  },
  {
    "url": "assets/js/24.4af1be6b.js",
    "revision": "f489dd4789581445fe14b6af279faf5b"
  },
  {
    "url": "assets/js/25.fb3b6660.js",
    "revision": "ec08091a42739caf30996b90055a681b"
  },
  {
    "url": "assets/js/26.58489f97.js",
    "revision": "380250177ef5c6694ec80fba3f33b4c0"
  },
  {
    "url": "assets/js/27.9e85eb1e.js",
    "revision": "9fb205a85e9a54be08b7f5263495f42d"
  },
  {
    "url": "assets/js/28.7716566a.js",
    "revision": "c236093342bee5bbedec1404a74f1976"
  },
  {
    "url": "assets/js/29.908df2b1.js",
    "revision": "23eb5214344096903f778abdf9782bcc"
  },
  {
    "url": "assets/js/3.46ef1f13.js",
    "revision": "da406956073cfc9c2f0374093134e13c"
  },
  {
    "url": "assets/js/30.e495550f.js",
    "revision": "e90b55d231c7186ede3106ffe21b611a"
  },
  {
    "url": "assets/js/31.a637c253.js",
    "revision": "aad06f4166f1005469939b00b6c1635f"
  },
  {
    "url": "assets/js/32.9b4ad5c5.js",
    "revision": "7c75c5225abe3dd975f3e35e8568ce95"
  },
  {
    "url": "assets/js/33.dc221631.js",
    "revision": "87cb6220addb933315c858ababc55506"
  },
  {
    "url": "assets/js/34.6352d8a5.js",
    "revision": "20e44f018c2774ca4bd2c5d6b58365aa"
  },
  {
    "url": "assets/js/35.6076764e.js",
    "revision": "82db5220f663d5b74cac336edda36075"
  },
  {
    "url": "assets/js/36.fe27bc6c.js",
    "revision": "063dbae9c768c71a6fbf71bdd9eabb82"
  },
  {
    "url": "assets/js/37.6e93c257.js",
    "revision": "02d5e3952f5c05896a95699aabf4f284"
  },
  {
    "url": "assets/js/38.6f6b08b9.js",
    "revision": "b98977e2a414da67ab45e0b0a74ea46f"
  },
  {
    "url": "assets/js/39.89eafee2.js",
    "revision": "38f279aa6cdda4a1366418ad199fd7c6"
  },
  {
    "url": "assets/js/4.f093cf2c.js",
    "revision": "6214d9976ab8f9d268d4a5348ecc40a4"
  },
  {
    "url": "assets/js/40.94945dc4.js",
    "revision": "b609b52773483bbf5e690b8e67f44f12"
  },
  {
    "url": "assets/js/41.b5a31ebb.js",
    "revision": "fa17a2a39ce1bc35b4d5d694a172c2eb"
  },
  {
    "url": "assets/js/42.89647df8.js",
    "revision": "e0074c91790ea827e2f50efaa768908f"
  },
  {
    "url": "assets/js/43.b3ec7bfa.js",
    "revision": "2675bc2f229c73dc8bd611af491ad198"
  },
  {
    "url": "assets/js/44.8bd04eeb.js",
    "revision": "e246812b94f2b3732c392e5cf232e2e8"
  },
  {
    "url": "assets/js/45.dfa69e7d.js",
    "revision": "e63eac6470541ec5e3b4eeeb924a5818"
  },
  {
    "url": "assets/js/46.17af681d.js",
    "revision": "195f837964178ea5096c10f89492a6d4"
  },
  {
    "url": "assets/js/47.f0b796b0.js",
    "revision": "b19c26468a9ddad4dec3d690300d599f"
  },
  {
    "url": "assets/js/48.95421f37.js",
    "revision": "350fc652f544e9beb2a872c76f5ec7b1"
  },
  {
    "url": "assets/js/49.9012ac6c.js",
    "revision": "88617fde9dd29a704461ee6d7e98bcdf"
  },
  {
    "url": "assets/js/5.6530a732.js",
    "revision": "439dd8b3f768cce0cc540e6f0ce9716e"
  },
  {
    "url": "assets/js/50.5ce2ea0e.js",
    "revision": "f5a1a8daf42f7b5544a494756470d701"
  },
  {
    "url": "assets/js/6.aa8a9a21.js",
    "revision": "73436c41bc3b7bd7c1138becb543d745"
  },
  {
    "url": "assets/js/7.e54eb6b1.js",
    "revision": "1f1710e2a54c4acf94e6a3a706d57c43"
  },
  {
    "url": "assets/js/8.25ed17b8.js",
    "revision": "8cc37f9688285033a4f40624d2bb7aff"
  },
  {
    "url": "assets/js/9.118a6466.js",
    "revision": "cfa02fc232a95b42477c9acfbcd4a287"
  },
  {
    "url": "assets/js/app.119bb63b.js",
    "revision": "17368000d58e0caf4b70ba3036563cd9"
  },
  {
    "url": "baidu_verify_yQSeRkHJla.html",
    "revision": "e34a6f863c56b8f0ccc227edb4e462b0"
  },
  {
    "url": "calendar/2018-2019.html",
    "revision": "7f893627872e42a44022d854c7f5945c"
  },
  {
    "url": "calendar/2019-2020.html",
    "revision": "973aec4f579f24976efc6abe95f4c5bb"
  },
  {
    "url": "calendar/2020-2021.html",
    "revision": "11eafc748b127b8c0b9904593201516b"
  },
  {
    "url": "calendar/index.html",
    "revision": "58e6cc43f3b9e9819923bc7de242513d"
  },
  {
    "url": "catering/index.html",
    "revision": "708ef29518bbd743dd90a45c03e90f1d"
  },
  {
    "url": "contact/index.html",
    "revision": "fd1008e2accf65be450d4ad3545c20ce"
  },
  {
    "url": "facility/index.html",
    "revision": "190d1953afc966a10767cb26e7812d30"
  },
  {
    "url": "facility/panolens.html",
    "revision": "93a55f19ebd1afc8e9323c5110b0c173"
  },
  {
    "url": "if-you-are-a-freshman.html",
    "revision": "e641e9e6db3dac3ea9bb3a5f887c4a38"
  },
  {
    "url": "index.html",
    "revision": "7caa6857b7122e3cd592e1ab2a2967ae"
  },
  {
    "url": "life/dormitory/index.html",
    "revision": "872eb6036f9da213be095447b5a1a4bc"
  },
  {
    "url": "life/freshman-register/index.html",
    "revision": "dc6961d7fd5159d47ee8197e5cbb1f0f"
  },
  {
    "url": "life/index.html",
    "revision": "c13404a79d39f983ecd333772247731f"
  },
  {
    "url": "life/sports-facility/index.html",
    "revision": "04b103d075ef5e3ee5740a7a46bd431d"
  },
  {
    "url": "logo-assets/touch/homescreen144.png",
    "revision": "51742628b96a4d2c587eab560373962b"
  },
  {
    "url": "logo-assets/touch/homescreen168.png",
    "revision": "741edd656b98963d2ef2881ff00a7610"
  },
  {
    "url": "logo-assets/touch/homescreen192.png",
    "revision": "7182aab7d4c78e800943f2c59e57e5a0"
  },
  {
    "url": "logo-assets/touch/homescreen48.png",
    "revision": "34bcad7cabc11efd8a6859f4cc6d2526"
  },
  {
    "url": "logo-assets/touch/homescreen512.png",
    "revision": "0206c3548fcda8dd59055f45eb2f3f35"
  },
  {
    "url": "logo-assets/touch/homescreen72.png",
    "revision": "e93cd5bbf2dc0ad83e2e37938d0120ee"
  },
  {
    "url": "logo-assets/touch/homescreen96.png",
    "revision": "cd04040f900f20c8a4e2e204218a1c57"
  },
  {
    "url": "media/index.html",
    "revision": "132715a0688ddfb2682849f02c3998f9"
  },
  {
    "url": "organizations/index.html",
    "revision": "9f75540a9196c6cc803a5fb82e63eb92"
  },
  {
    "url": "organizations/registered-organization.html",
    "revision": "8c4acf56e772a283212fa9fe2258e104"
  },
  {
    "url": "service/blackboard/retrive-ics-url/index.html",
    "revision": "bc296bd29ddab0b8b2616bbe95862c62"
  },
  {
    "url": "service/campus-card/index.html",
    "revision": "7290f44fec487f9cc074b30db77ea1ec"
  },
  {
    "url": "service/email/index.html",
    "revision": "3ba13036daf563948b3e6883375c0697"
  },
  {
    "url": "service/index.html",
    "revision": "794b50e8b0ae67f079a4fe3dcc15d131"
  },
  {
    "url": "service/mail-and-express/index.html",
    "revision": "5ba087cb83d84802dfc2ef9b402bbecf"
  },
  {
    "url": "service/matlab/index.html",
    "revision": "f74c7dbd331cda2fb2c86b04c0363e6c"
  },
  {
    "url": "service/medical-treatment/index.html",
    "revision": "b2658789df1746551cf261855d280108"
  },
  {
    "url": "service/network/apply-for-vpn/index.html",
    "revision": "ffd522b4ded3916a45023b80bd99beb7"
  },
  {
    "url": "service/network/choose-a-pad/index.html",
    "revision": "e9009eca3615f05ee196e5b25e360415"
  },
  {
    "url": "service/network/choose-a-router/index.html",
    "revision": "c0c1c14d97c79fe6f98ec2adaec3e155"
  },
  {
    "url": "service/network/index.html",
    "revision": "80d989a7748f3357788f4fafde9c7984"
  },
  {
    "url": "service/sakai/index.html",
    "revision": "de59e0efa16b08288d7dbb5c2c0ab87a"
  },
  {
    "url": "service/sid/index.html",
    "revision": "610926946b723e2942f4ae120a55cc1a"
  },
  {
    "url": "service/ssc/index.html",
    "revision": "a116c2e48618a43b5ad84e74af646900"
  },
  {
    "url": "service/unifound/index.html",
    "revision": "b371b11ac0828a2f519e949e8ef6eb33"
  },
  {
    "url": "service/work-wechat/index.html",
    "revision": "de73a6421c0e7aeb71fa936d462aeee5"
  },
  {
    "url": "site-help/index.html",
    "revision": "b6079f8740c4b6543a3e27768d0b3022"
  },
  {
    "url": "study/book-list-by-prof-yuan/2018/index.html",
    "revision": "2f1c991d73bddb36fe93346f54f563a9"
  },
  {
    "url": "study/borrow-books/index.html",
    "revision": "7ab177c4be3a478d3d824321e05f7128"
  },
  {
    "url": "study/by-shude-college/advice-on-study.html",
    "revision": "e32d179928c8b5b77b285ed2aa60b0f9"
  },
  {
    "url": "study/by-shude-college/info-on-study.html",
    "revision": "b666c4196b17275cddd3216089347101"
  },
  {
    "url": "study/index.html",
    "revision": "d3c7fc5f3f14aff82eb3270692b23686"
  },
  {
    "url": "surroundings/index.html",
    "revision": "360989aa46c6e4f691d01bab9df48ccd"
  },
  {
    "url": "transport/holiday.html",
    "revision": "dd94b63a93ba6e6ad76d9f088043512e"
  },
  {
    "url": "transport/index.html",
    "revision": "c61c23d87e72d490e24e49c3f7d98361"
  },
  {
    "url": "transport/workday.html",
    "revision": "af0f4fff315131aa2f31497dd10ac7a3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
