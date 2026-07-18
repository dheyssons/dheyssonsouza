"use client";

import { useEffect } from "react";

export default function LocomotiveScrollProvider({ children }) {
  useEffect(() => {
    let locomotiveScroll;

    // Asynchronously import to safely access window/document objects
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      locomotiveScroll = new LocomotiveScroll();
    })();

    // Cleanup when component unmounts
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return <>{children}</>;
}
