"use client";

import { title, subtitle } from "@/components/primitives";
import { toursData } from "@/lib/data";
import { Card, CardHeader, CardBody, Image, Chip } from "@nextui-org/react";
import { PopularityIcon } from "@/components/icons";
import Link from "next/link";
import { Button } from "@heroui/button";

export default function TopTenPage() {
  const topTours = toursData.filter((tour) => tour.isTopTen);

  return (
    <section className="flex flex-col items-center justify-center gap-8">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>
          <PopularityIcon className="inline-block mr-2" /> Top 10 Route
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Travelers' favorite, most preferred adventures.
        </h2>
      </div>
      <div className="flex flex-col gap-8 w-full max-w-4xl px-6">
        {topTours.map((tour, index) => (
          <Link href={`/tours/${tour.slug}`} key={tour.id} className="w-full">
            <Card
              shadow="lg"
              key={tour.id}
              isPressable
              className="hover:brightness-110 hover:scale-105 delay-100 duration-300 flex flex-col md:flex-row"
            >
              <div className="relative w-full h-64 md:h-auto">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <Chip
                    variant="shadow"
                    color="primary"
                    size="lg"
                    className="text-white font-bold text-xl"
                  >
                    #{index + 1}
                  </Chip>
                </CardHeader>

                <Image
                  removeWrapper
                  alt={tour.title}
                  className="z-0 w-full h-full object-cover"
                  src={tour.image}
                />
              </div>

              <CardBody className="w-full md:w-2/3 flex flex-col justify-between p-6">
                <div>
                  <h4 className="text-foreground font-medium text-2xl">
                    {tour.title}
                  </h4>
                  <h5 className="text-foreground font-medium text-sm my-3">
                    {tour.longDescription}
                  </h5>
                </div>

                <div className="flex flex-row items-center justify-between">
                  <Chip
                    color="primary"
                    variant="flat"
                    size="sm"
                    className="px-1.5 mt-3"
                  >
                    <p className="uppercase font-bold" style={{ fontSize: 11 }}>
                      {tour.location}
                    </p>
                  </Chip>
                  <Button
                    radius="full"
                    size="sm"
                    className="mt-4 self-start md:self-end"
                  >
                    Details
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
