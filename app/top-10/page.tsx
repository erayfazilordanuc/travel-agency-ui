// app/top-10/page.tsx

"use client";

import { title, subtitle } from "@/components/primitives";
import { toursData } from "@/lib/data"; // Aynı sahte veriyi kullanıyoruz
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Chip,
} from "@nextui-org/react";
import { PopularityIcon } from "@/components/icons"; // Ana sayfadaki ikonu kullanalım

export default function TopTenPage() {
  // Sadece isTopTen true olanları filtreleyip alıyoruz.
  const topTours = toursData.filter((tour) => tour.isTopTen);

  return (
    <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>
          <PopularityIcon className="inline-block mr-2" /> Top 10 Rota
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Gezginlerin favorisi, en çok tercih edilen maceralar.
        </h2>
      </div>

      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 max-w-5xl px-6">
        {topTours.map((tour, index) => (
          <Card
            shadow="lg"
            key={tour.id}
            isPressable
            className="hover:brightness-110 hover:scale-105 delay-100 duration-300"
          >
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
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-col">
                <p className="text-tiny text-white/80 uppercase font-bold">
                  {tour.location}
                </p>
                <h4 className="text-white font-medium text-2xl">
                  {tour.title}
                </h4>
              </div>
              <Button radius="full" size="sm" className="ml-auto">
                Detaylar
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
