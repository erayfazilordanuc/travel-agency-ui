import { title, subtitle } from "@/components/primitives";
import Image from "next/image";
import {
  TargetIcon,
  EyeIcon,
  HeartIcon,
  ShieldCheckIcon,
  InfoIcon,
  PopularityIcon,
} from "@/components/icons";
import React from "react";

type TeamMember = {
  name: string;
  title: string;
  imageUrl: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Elif Yılmaz",
    title: "Founder & CEO",
    imageUrl: "/images/team/elif-yilmaz.jpg",
  },
  {
    name: "Ahmet Kaya",
    title: "Director of Operations",
    imageUrl: "/images/team/ahmet-kaya.jpg",
  },
  {
    name: "Zeynep Demir",
    title: "Head Tour Guide",
    imageUrl: "/images/team/zeynep-demir.jpg",
  },
];

export default function AboutUsPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-12">
      <div className="inline-block max-w-4xl text-center justify-center">
        <h1 className={title()}>Our Story</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          A brand born from a passion for exploring the world: GlobeTrotters.
        </h2>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
        <div className="flex flex-col gap-4 text-lg text-default-700">
          <p>
            GlobeTrotters is more than just a travel agency; for us, it's a
            story of passion for discovery. It all began with our founders'
            endless curiosity about the hidden corners of the world.
          </p>
          <p>
            The desire to share the experiences they gained, the unique
            landscapes they saw, and the inspiring cultures they met on their
            backpacking journeys brought GlobeTrotters to life in 2020. Our goal
            was clear from the start: to get off the beaten path and offer
            people not just "tours," but life-changing "experiences."
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/images/about-inspiration.jpg"
            alt="Inspirational travel visual"
            width={600}
            height={400}
            className="object-cover w-full h-full aspect-video"
          />
        </div>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-6 mt-8">
        <div className="bg-default-100 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <TargetIcon className="text-primary" size={24} />
            <h3 className="text-2xl font-semibold">Our Mission</h3>
          </div>
          <p className="text-default-700">
            To break away from the ordinary holiday concept, turning every
            journey into a personal adventure of discovery. To ensure our
            customers not only see new places but also feel their spirit, live
            their culture, and create unforgettable memories.
          </p>
        </div>
        <div className="bg-default-100 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <EyeIcon className="text-primary" size={24} />
            <h3 className="text-2xl font-semibold">Our Vision</h3>
          </div>
          <p className="text-default-700">
            To be the world's most preferred and inspiring travel brand as a
            pioneer of experience-focused travel. To make a difference in the
            travel industry by offering sustainable and authentic experiences.
          </p>
        </div>
      </div>

      <div className="max-w-7xl w-full px-6 mt-8">
        <h2 className={title({ size: "md", class: "text-center mb-6" })}>
          The Values That Guide Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ValueCard
            icon={<HeartIcon className="text-danger" />}
            title="Passion"
            description="Travel isn't just a job for us; it's a way of life. We pour our passion for exploring the world into every tour."
          />
          <ValueCard
            icon={<ShieldCheckIcon className="text-success" />}
            title="Trust & Quality"
            description="From your safety to your comfort, we plan every detail to the highest standards and provide transparent service."
          />
          <ValueCard
            icon={<InfoIcon className="text-primary" />}
            title="Authenticity"
            description="Instead of copy-paste tours, we create unique, authentic experiences meticulously designed for you."
          />
          <ValueCard
            icon={<PopularityIcon className="text-warning" />}
            title="Sustainability"
            description="We respect the natural and cultural heritage of the places we visit and actively support responsible tourism."
          />
        </div>
      </div>

      <div className="max-w-7xl w-full px-6 mt-12 text-center">
        <h2 className={title({ size: "md" })}>Meet Our Team</h2>
        <p className={subtitle({ class: "mt-2 mb-8" })}>
          The wonderful people who will guide you on this journey.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center bg-white dark:bg-default-100 rounded-lg shadow-lg p-6 transition-transform transform hover:-translate-y-2"
            >
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={128}
                height={128}
                className="rounded-full w-32 h-32 object-cover mb-4 border-4 border-primary/20"
              />
              <h4 className="text-xl font-semibold text-primary">
                {member.name}
              </h4>
              <p className="text-default-600">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ValueCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-default-50 dark:bg-default-100 p-6 rounded-xl shadow-md text-center">
    <div className="flex justify-center mb-3">
      {React.cloneElement(icon as React.ReactElement, { size: 36 })}
    </div>
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p className="text-default-600 text-sm">{description}</p>
  </div>
);
