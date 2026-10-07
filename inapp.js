// Leave in-app browsers (Facebook, Instagram, LinkedIn, ...)
//
// Links shared in these apps open in their own webview instead of the real
// browser. On Android we hand the page to Chrome through an intent:// link.
// iOS doesn't allow that automatically, so there we show a bar with a button
// that asks Safari to open the page (works on recent iOS versions) and a hint
// for the ⋯ menu as a fallback.
(function () {
  const ua = navigator.userAgent || "";
  const inApp = /FBAN|FBAV|FB_IAB|FBIOS|Instagram|LinkedInApp|Messenger|Snapchat|TikTok|musical_ly|Line\//i.test(ua);
  if (!inApp) return;

  const url = location.href;
  const isAndroid = /Android/i.test(ua);
  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  const tried = "inapp-redirected";

  if (isAndroid) {
    let alreadyTried = false;
    try {
      alreadyTried = sessionStorage.getItem(tried) === "1";
      sessionStorage.setItem(tried, "1");
    } catch (e) {}
    if (!alreadyTried) {
      location.href =
        "intent://" + url.replace(/^https?:\/\//, "") +
        "#Intent;scheme=https;package=com.android.chrome;S.browser_fallback_url=" +
        encodeURIComponent(url) + ";end";
    }
  }

  const texts = {
    nl: { msg: "Je bekijkt dit in een app. Open in je browser voor de beste ervaring.", btn: "Openen", hint: "Werkt het niet? Tik op ⋯ en kies ‘Openen in browser’." },
    en: { msg: "You're viewing this inside an app. Open it in your browser for the best experience.", btn: "Open", hint: "Doesn't work? Tap ⋯ and choose ‘Open in browser’." },
    fr: { msg: "Vous consultez ce site dans une application. Ouvrez-le dans votre navigateur pour une meilleure expérience.", btn: "Ouvrir", hint: "Ça ne marche pas ? Touchez ⋯ et choisissez ‘Ouvrir dans le navigateur’." },
  };

  function lang() {
    let saved = null;
    try { saved = localStorage.getItem("portfolio-lang"); } catch (e) {}
    const l = saved || (navigator.language || "nl").slice(0, 2);
    return texts[l] ? l : "nl";
  }

  function showBar() {
    const t = texts[lang()];
    const href = isIOS
      ? url.replace(/^https:\/\//, "x-safari-https://")
      : "intent://" + url.replace(/^https?:\/\//, "") +
        "#Intent;scheme=https;S.browser_fallback_url=" + encodeURIComponent(url) + ";end";

    const bar = document.createElement("div");
    bar.setAttribute("role", "region");
    bar.setAttribute("aria-label", t.btn);
    bar.style.cssText =
      "position:fixed;left:12px;right:12px;bottom:12px;z-index:10000;" +
      "background:#0a0a0a;color:#fff;border-radius:14px;padding:14px 16px;" +
      "box-shadow:0 8px 30px rgba(0,0,0,.3);font:14px/1.4 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;";
    bar.innerHTML =
      '<div style="display:flex;align-items:center;gap:12px">' +
      '<p style="margin:0;flex:1">' + t.msg + "</p>" +
      '<a href="' + href + '" style="background:#ff6b00;color:#fff;text-decoration:none;font-weight:600;padding:9px 16px;border-radius:999px;white-space:nowrap">' + t.btn + "</a>" +
      '<button type="button" aria-label="Sluiten" style="background:none;border:0;color:#fff;font-size:20px;line-height:1;padding:4px;cursor:pointer">×</button>' +
      "</div>" +
      '<p style="margin:8px 0 0;font-size:12px;opacity:.7">' + t.hint + "</p>";
    bar.querySelector("button").addEventListener("click", () => bar.remove());
    document.body.appendChild(bar);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showBar);
  } else {
    showBar();
  }
})();
