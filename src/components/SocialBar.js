"use client"

import { useEffect } from "react";

export default function SocialBar() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//pl25970916.effectiveratecpm.com/cc/6a/f8/cc6af81f6c9b6db6dff0546b0bbec8f7.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up on unmount
    };
  }, []);

  return null; // No UI needed, as the Social Bar overlays on the page
}
