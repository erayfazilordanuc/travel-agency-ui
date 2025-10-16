"use client";

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

export default function ToursPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-8">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>All Tours</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Find your dream destination and embark on an adventure.
        </h2>
      </div>

      {/* <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl"> */}
      <div className="gap-8 grid grid-cols-[repeat(auto-fit,minmax(325px,1fr))] max-w-7xl">
        {toursData.map((tour) => (
          <Card
            shadow="md"
            key={tour.id}
            isPressable
            className="hover:brightness-110 hover:scale-104 delay-100 duration-300"
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
              <Chip color="primary" variant="flat" size="sm" className="px-1.5">
                {tour.location}
              </Chip>
              <h4 className="font-bold text-large mt-2">{tour.title}</h4>
              <div className="w-full flex justify-between items-center mt-2">
                <p className="text-default-500">{tour.duration}</p>
                <p className="text-lg font-semibold">{tour.price}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
