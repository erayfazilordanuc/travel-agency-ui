"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const DynamicBackground = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    document.body.classList.remove("home-page-active", "other-page-active");

    if (isHomePage) {
      document.body.classList.add("home-page-active");
    } else {
      document.body.classList.add("other-page-active");
    }

    return () => {
      document.body.classList.remove("home-page-active", "other-page-active");
    };
  }, [pathname]);

  return null;
};
