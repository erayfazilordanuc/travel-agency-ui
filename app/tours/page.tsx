"use client";

import { TourIcon } from "@/components/icons";
import { title, subtitle } from "@/components/primitives";
import { toursData } from "@/lib/data"; // Make sure this data is also in English
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Chip,
} from "@nextui-org/react";
import Link from "next/link";

export default function ToursPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-8">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>
          <TourIcon className="inline-block mr-4 mb-2" size={30} />
          All Tours
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Find your dream destination and embark on an adventure.
        </h2>
      </div>

      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl w-full px-12 items-center justify-center">
        {toursData.map((tour) => (
          <Link href={`/tours/${tour.slug}`} key={tour.id} className="w-full">
            <Card
              shadow="md"
              key={tour.id}
              isPressable
              className="hover:brightness-110 hover:scale-103 delay-150 duration-300"
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  isZoomed
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={tour.title}
                  className="w-full object-cover h-[240px]"
                  src={tour.image}
                />
              </CardBody>
              <CardFooter className="text-left flex-col items-start">
                <Chip
                  color="primary"
                  variant="flat"
                  size="sm"
                  className="px-1.5"
                >
                  {tour.location}
                </Chip>
                <h4 className="font-bold text-large mt-2">{tour.title}</h4>
                <div className="w-full flex justify-between items-center mt-2">
                  <p className="text-default-500">{tour.duration}</p>
                  <p className="text-lg font-semibold">{tour.price}</p>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
