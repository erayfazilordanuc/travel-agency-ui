import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import Image from "next/image";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import {
  AboutUsIcon,
  GithubIcon,
  InfoIcon,
  PopularityIcon,
} from "@/components/icons";
import { Footer } from "@/components/footer";
import styles from "@/styles/home.module.css";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-3xl text-center justify-center">
        <span className={title()}>Turn your holiday into an&nbsp;</span>
        <span className={title({ color: "blue" })}>unforgettable&nbsp;</span>
        <span className={title()}>journey of&nbsp;</span>
        <span className={title({ color: "blue" })}> discovery.</span>
        <br />
        <div className={subtitle({ class: "mt-4" })}>
          {siteConfig.description}
        </div>
      </div>

      <div className="flex gap-3">
        <NextLink
          className={`${buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })} hover:opacity-85 transition-colors transition delay-50 duration-300 ease-in-out`}
          href="/tours"
        >
          Explore Tours
        </NextLink>
        <NextLink
          className={`${buttonStyles({ variant: "bordered", radius: "full" })} hover:opacity-70 transition-colors transition delay-50 duration-300 ease-in-out`}
          href="/top-10"
        >
          <PopularityIcon size={16} />
          Top 10
        </NextLink>
      </div>

      {/* <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by exploring&nbsp;&nbsp;
            <Code color="primary"> Top 10 Tours</Code>
          </span>
        </Snippet>
      </div> */}
    </section>
  );
}
