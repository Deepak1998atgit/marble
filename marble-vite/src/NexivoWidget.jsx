import { useEffect } from "react";

export default function NexivoWidget() {
  useEffect(() => {
    if (document.getElementById("nexivo-script")) return;

    const script = document.createElement("script");
    script.id = "nexivo-script";
    script.src =
      "https://widget.nexivo.corecognitics.com/scripts/marblemedicals/f91bf1e7-04f4-48d0-9e0d-c0c4b3adfe3e.js";
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

    return () => clearInterval(checkWidget);
  }, []);

  return null;
}
