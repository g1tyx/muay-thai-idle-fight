if (!self.define) {
  let e,
    i = {};
  const n = (n, s) => (
    (n = new URL(n + ".js", s).href),
    i[n] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = i), document.head.appendChild(e);
        } else (e = n), importScripts(n), i();
      }).then(() => {
        let e = i[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (s, r) => {
    const o =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[o]) return;
    let t = {};
    const c = (e) => n(e, o),
      d = { module: { uri: o }, exports: t, require: c };
    i[o] = Promise.all(s.map((e) => d[e] || c(e))).then((e) => (r(...e), t));
  };
}
define(["./workbox-6e150728"], function (e) {
  "use strict";
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "assets/index--nhNjh1T.js", revision: null },
        { url: "assets/index-C6cgryMZ.css", revision: null },
        { url: "index.html", revision: "572e07cdd2f328b64df8b79521104643" },
        { url: "registerSW.js", revision: "1872c500de691dce40960bb85481de07" },
        { url: "favicon.ico", revision: "db7503cec130c4168c14e2160ba265cc" },
        { url: "version.json", revision: "d9d2a914a4f53bdbc2b081cb96eee159" },
        {
          url: "manifest.webmanifest",
          revision: "71b90b65e218f396da63404eed7c4c6e",
        },
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL("index.html"), {
        denylist: [/version\.json/],
      })
    ),
    e.registerRoute(/version\.json/, new e.NetworkOnly(), "GET");
});
