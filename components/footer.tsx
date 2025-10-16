import React from "react";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import { GithubIcon, LinkedinIcon } from "@/components/icons"; // Github ikonu zaten import edilmişti

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center py-2 px-6 mt-auto border-t border-divider">
      <div className="w-full max-w-5xl flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
        {/* Sol Taraf: Marka ve Telif Hakkı */}
        <div className="flex flex-row items-center justify-center sm:justify-start gap-2">
          <NextLink href="/" className="font-bold text-sm">
            {siteConfig.name}
          </NextLink>
          <p
            className="text-xs text-default-500"
            style={{ marginTop: 2, marginLeft: 1 }}
          >
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        <div className="flex gap-4">
          <NextLink
            href="/tours"
            className="text-xs text-default-600 hover:text-primary transition-colors"
          >
            Tours
          </NextLink>
          <NextLink
            href="/top-10"
            className="text-xs text-default-600 hover:text-primary transition-colors"
          >
            Top 10
          </NextLink>
          <NextLink
            href="/about"
            className="text-xs text-default-600 hover:text-primary transition-colors"
          >
            About Us
          </NextLink>
        </div>

        <div className="flex flex-row items-center justify-center gap-2">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <LinkedinIcon className="text-default-500 hover:text-primary transition-colors" />
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon className="text-default-500 hover:text-primary transition-colors" />
          </a>
          <span className="text-default-600 text-xs">Made by</span>
          <p className="text-primary text-xs">Eray Fazıl Ordanuç</p>
        </div>
      </div>
    </footer>
  );
};
