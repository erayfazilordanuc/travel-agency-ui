"use client";

import { toursData } from "@/lib/data";
import { title, subtitle } from "@/components/primitives";
import { Card, CardBody, Image, Chip } from "@nextui-org/react";
import NextLink from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@heroui/button";

export const dynamic = "force-dynamic";

type Props = {
  searchParams: {
    q?: string;
  };
};

export default function SearchPage() {
  // { searchParams }: Props
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  const filteredTours = toursData.filter((tour) => {
    const query = searchQuery.toLowerCase();
    return (
      tour.title.toLowerCase().includes(query) ||
      tour.location.toLowerCase().includes(query) ||
      (tour.longDescription &&
        tour.longDescription.toLowerCase().includes(query))
    );
  });

  return (
    <section className="flex flex-col items-center justify-center gap-8">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Search Results</h1>

        <h2 className={subtitle({ class: "mt-4" })}>
          Found {filteredTours.length} results for "{searchQuery}"
        </h2>
      </div>

      <div className="flex flex-col gap-8 w-full max-w-7xl px-6">
        {filteredTours.length > 0 ? (
          filteredTours.map((tour, index) => (
            <NextLink href={`/tours/${tour.slug}`} key={tour.id}>
              <Card
                shadow="lg"
                isPressable
                className="hover:brightness-110 hover:scale-105 delay-100 duration-300 flex flex-col md:flex-row"
              >
                <div className="relative w-full md:w-1/3 h-64 md:h-auto">
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
                    <p className="text-xs text-default-600 uppercase font-bold mt-3">
                      {tour.location}
                    </p>
                  </div>

                  <Button
                    radius="full"
                    size="sm"
                    className="mt-4 self-start md:self-end"
                  >
                    Details
                  </Button>
                </CardBody>
              </Card>
            </NextLink>
          ))
        ) : (
          <p className="text-center text-default-500">
            No tours found matching your search.
          </p>
        )}
      </div>
    </section>
  );
}
