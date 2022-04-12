(function (img) {
  var Kargo = (window.Kargo = window.Kargo || {});
  var adTagValues = Kargo.PlatformMacros;
  var macros = {};
  if (adTagValues) {
    for (var key in adTagValues) {
      if (adTagValues.hasOwnProperty(key)) {
        macros[key] = adTagValues[key];
      }
    }
  }
  var tag = {
    anchorNode: img,
    adTagMetadata: {
      creative: macros.creative,
      format: macros.format,
      slot: macros.slot,
      source: macros.source,
      adTagVersion: macros.adTagVersion,
    },
    debug: false,
    templateId: "highrise",
    templateUrl:
      "https://storage.cloud.kargo.com/ad/network/kap/templates/highrise.min.js",
    templateMacros: {
      bannerSize: "middle_banner",
      stopAfterComplete: false,
      startPosition: 75,
      mainImage:
        "https://storage.cloud.kargo.com/ad/kailtra/Highrise/1649275308550-pmbg.jpg",
      headlineImage:
        "https://storage.cloud.kargo.com/ad/kailtra/Highrise/1649275308387-pmcopy.png",
      logoImage: "",
      ctaImage: "",
      smallTextImage: "",
      trackers: {
        clickThrough: [""],
        clickTrackers: [""],
        viewabilityTrackers: [""],
      },
    },
    clickMacros: [""],
    moat: { ids: macros.moatTag, partnerCode: "kargovideojstag" },
  };
  var AdPlatform = (Kargo.AdPlatform = Kargo.AdPlatform || {});
  var versions = (Kargo.AdPlatform.versions = Kargo.AdPlatform.versions || {});
  var templates = (AdPlatform.templates = AdPlatform.templates || {});
  var template = (templates[tag.templateId] = templates[tag.templateId] || {});
  template.queue = template.queue || [];
  template.queue.push(tag);
  if (!template.script) {
    template.script = document.createElement("script");
    template.script.type = "application/javascript";
    template.script.src = tag.templateUrl;
    img.parentNode.insertBefore(template.script, img);
  }
})(this);




!(function () {
  "use strict";
  function d(e, t) {
    return "kargo-element-".concat(e, "-").concat(t);
  }
  function p(e) {
    if (e)
      return (
        (function (e) {
          for (var t = e, i = e.top; t !== i; ) {
            var a = void 0;
            try {
              a = t.parent.location.href;
            } catch (e) {
              a = !1;
            }
            if (!a) break;
            for (
              var n,
                o = t.parent.document.getElementsByTagName("iframe"),
                r = null,
                s = 0;
              s < o.length;
              s += 1
            )
              if ((n = o[s]).contentWindow === t) {
                r = n;
                break;
              }
            if (r && -1 < r.className.split(" ").indexOf("krg-nobust")) break;
            t = t.parent;
          }
          return t;
        })(e).innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      );
  }
  var u = { origin: "top", value: 0 },
    h = { origin: "bottom", value: 0 },
    v = { origin: "center", value: 0 },
    f = { x: v, y: u },
    w = { x: v, y: h },
    y = 440,
    I = 320,
    S = "100%",
    k = "highrise";
  !(function (t, o) {
    try {
      var e = Kargo.AdPlatform.templates[t].queue;
      for (e.push = i; e.length; ) i(e.shift());
    } catch (e) {
      console.log("KAP template error loading " + t), console.log(e);
    }
    function i(t) {
      var e = t.versionOverride || "3.17.3",
        i = (Kargo.AdPlatform.versions = Kargo.AdPlatform.versions || {});
      i[e] = i[e] || {};
      var a = (i[e].queue = i[e].queue || []);
      i[e].script ||
        (((n = i[e].script = document.createElement("script")).type =
          "application/javascript"),
        t.versionOverrideUrl
          ? (n.src = t.versionOverrideUrl)
          : (n.src =
              "https://storage.cloud.kargo.com/ad/network/tag/KAP." +
              e +
              ".js"),
        document.body.appendChild(n));
      var c,
        n = -1 !== t.templateId.indexOf("aba");
      t.adTagMetadata && t.adTagMetadata.creative && n
        ? ((n = t.adTagMetadata.creative),
          (c = "https://storage.cloud.kargo.com/ad/creative-stylizer/".concat(
            n,
            ".json"
          )),
          new Promise(function (i, a) {
            var e, t, n, o, r, s, m;
            (e = c),
              window,
              (n = !1),
              (o = function (e, t) {
                t && i(t), e && a(e);
              }),
              void (t = 0) === r && (r = {}),
              e && e.length
                ? ((s = new XMLHttpRequest()),
                  (m = r.latencyTracker),
                  n && (s.withCredentials = !0),
                  t && (s.timeout = t),
                  (s.onload = function () {
                    if (
                      ((e = m) && e.stop(), 200 <= s.status && s.status < 400)
                    ) {
                      var e = (s.responseText || "").trim();
                      if (e.length) {
                        try {
                          e = JSON.parse(e);
                        } catch (e) {}
                        o(null, e);
                      } else o(new Error("Empty Response"));
                    } else
                      o(
                        new Error(
                          "GET Request Failed with Status: " +
                            s.status +
                            " - " +
                            s.statusText
                        )
                      );
                  }),
                  (s.ontimeout = function (e) {
                    o(e);
                  }),
                  (s.onerror = function (e) {
                    o(e);
                  }),
                  s.open("GET", e, !0),
                  (e = m) && e.start(),
                  s.send())
                : o(new Error("Invalid URL"));
          })
            .then(function (e) {
              t.templateMacros.visionSettings = e;
            })
            .catch(function (e) {
              console.log(e);
            })
            .finally(function () {
              (t.json = o(t.templateMacros)), a.push(t);
            }))
        : ((t.json = o(t.templateMacros)), a.push(t));
    }
  })(k, function (e) {
    e.startPosition || (e.startPosition = 10);
    var t,
      i,
      a = { width: "100%", height: "auto", maxWidth: 320 },
      n = p(window),
      o = e.mainImage,
      r = e.headlineImage,
      s = e.logoImage,
      m = e.ctaImage,
      c = e.smallTextImage,
      l = e.bannerImage;
    "responsiveSizes" in e &&
      ((a.maxWidth = y),
      (g = "large"),
      n < 360 ? (g = "small") : 360 <= n && n < 414 && (g = "medium"),
      (o = e.responsiveSizes[g].mainImage || o),
      (r = e.responsiveSizes[g].headlineImage || r),
      (s = e.responsiveSizes[g].logoImage || s),
      (m = e.responsiveSizes[g].ctaImage || m),
      (c = e.responsiveSizes[g].smallTextImage || c),
      (l = e.responsiveSizes[g].bannerImage || l));
    var g =
        "middle_banner" === e.bannerSize
          ? ((t = 250), (i = { width: "auto", height: 386 }), h)
          : ((t = 50), (i = { width: "auto", height: 460 }), u),
      o = {
        id: "main-image",
        type: "Image",
        dimensions: i,
        position: { x: v, y: g },
        imageSource: o,
      },
      r = {
        id: "main-page",
        elements: [
          {
            id: "small-text-image",
            type: "Image",
            dimensions: a,
            position: w,
            imageSource: c,
            opacity: 0,
          },
          {
            id: "banner-image",
            type: "Image",
            dimensions: { width: "auto", maxWidth: 440, height: 50 },
            position: w,
            imageSource: l,
          },
          {
            id: "cta-image",
            type: "Image",
            dimensions: a,
            position: w,
            imageSource: m,
          },
          {
            id: "logo-image",
            type: "Image",
            dimensions: a,
            position: w,
            imageSource: s,
          },
          {
            id: "headline-image",
            type: "Image",
            dimensions: a,
            position: { x: v, y: { origin: "top", value: -50 } },
            imageSource: r,
            opacity: 0,
          },
          o,
        ],
        events: [
          {
            type: "show",
            chain: [
              [
                "resize-creative",
                "fade-in-headline",
                "fade-in-small-text",
                "grow-main-image",
              ],
            ],
          },
          { type: "tap", chain: [["open-url", "track-click"]] },
        ],
      };
    return (
      !0 === e.krossbow_test &&
        ((r.elementId = d(k, "clickHotspot")),
        (o.elementId = d(k, "main-image"))),
      {
        activeView: "main-view",
        views: [
          {
            id: "main-view",
            activePage: "main-page",
            dimensions: { height: t, width: S, maxWidth: y, minWidth: I },
            pages: [r],
          },
        ],
        timeInViewTrackers: [
          { time: 1e3, urls: e.trackers.viewabilityTrackers },
        ],
        actions: [
          {
            id: "resize-creative",
            action: "animateOnScroll",
            targetId: "main-view",
            arguments: [
              {
                inViewStart: t + e.startPosition,
                animationLength: 460 - t,
                stopAfterComplete: e.stopAfterComplete,
                animationOptions: {
                  timing: "linear",
                  render: { dimensions: { height: 460 } },
                },
              },
            ],
          },
          {
            id: "fade-in-headline",
            action: "animateOnScroll",
            targetId: "headline-image",
            arguments: [
              {
                inViewStart: 360,
                animationLength: 100,
                stopAfterComplete: !1,
                animationOptions: {
                  timing: "linear",
                  render: { position: f, opacity: 1 },
                },
              },
            ],
          },
          {
            id: "fade-in-small-text",
            action: "animateOnScroll",
            targetId: "small-text-image",
            arguments: [
              {
                inViewStart: 150,
                animationLength: 100,
                stopAfterComplete: !1,
                animationOptions: { timing: "linear", render: { opacity: 1 } },
              },
            ],
          },
          {
            id: "grow-main-image",
            action: "animateOnScroll",
            targetId: "main-image",
            arguments: [
              {
                inViewStart: t + e.startPosition,
                animationLength: 460 - t,
                stopAfterComplete: e.stopAfterComplete,
                animationOptions: {
                  timing: "linear",
                  render: { dimensions: { height: 460 } },
                },
              },
            ],
          },
          {
            id: "open-url",
            action: "openUrl",
            arguments: [{ url: e.trackers.clickThrough }],
          },
          {
            id: "track-click",
            action: "track",
            arguments: [{ urls: e.trackers.clickImpression }],
          },
        ],
      }
    );
  });
})();
