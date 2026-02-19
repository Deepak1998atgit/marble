import { useEffect } from "react";

export default function BusinessWidget() {
  useEffect(() => {
    if (document.getElementById("nexivo-business-script")) return;

    const script = document.createElement("script");
    script.id = "nexivo-business-script";
    script.src = "https://widget.nexivo.dev.cognitry.io/scripts/corecognitics/d87bf5e2-46f7-4d41-a2bf-38984f9d29dd.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    const checkWidget = setInterval(() => {
      const iframes = document.querySelectorAll('iframe');
      iframes.forEach(iframe => {
        iframe.style.position = 'fixed';
        iframe.style.zIndex = '999999';
      });
    }, 500);

    return () => {
      clearInterval(checkWidget);
      const scriptEl = document.getElementById("nexivo-business-script");
      if (scriptEl) scriptEl.remove();
    };
  }, []);

  return null;
}
