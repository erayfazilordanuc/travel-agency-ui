"use client";

import { toursData } from "@/lib/data";
import { notFound } from "next/navigation";
import { title, subtitle } from "@/components/primitives";
import {
  Image,
  Card,
  CardBody,
  CardHeader,
  Button,
  Chip,
  Divider,
} from "@nextui-org/react";

type Props = {
  params: {
    slug: string;
  };
};

export default function TourDetailPage({ params }: Props) {
  const slug = params.slug;

  const tour = toursData.find((t) => t.slug === slug);

  if (!tour) {
    notFound();
  }

  return (
    <section>
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-start gap-4 mb-8">
          <Chip color="primary" size="lg">
            {tour.location}
          </Chip>
          <h1 className={title()}>{tour.title}</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <Image
              removeWrapper
              src={tour.image}
              alt={tour.title}
              className="w-full h-auto object-cover rounded-xl shadow-lg"
            />

            {/* {tour.image2 && (
              <Image
                removeWrapper
                src={tour.image2}
                alt={`${tour.title} (ek görünüm)`}
                className="w-full h-auto object-cover rounded-xl shadow-lg mt-8"
              />
            )} */}

            <div className="mt-7">
              {/* <h2 className={subtitle()}>Tour Description</h2> */}
              <p className="mt-4 text-lg text-default-700 leading-relaxed">
                {tour.longDescription ||
                  "Bu tur için detaylı bir açıklama henüz eklenmemiş..."}
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card shadow="lg" className="sticky top-24">
              <CardHeader>
                <h3 className="text-xl font-bold text-foreground">
                  Tour Information
                </h3>
              </CardHeader>
              <Divider />
              <CardBody className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-default-600 font-medium">Cost</span>
                  <span className="text-primary text-2xl font-bold">
                    {tour.price || "N/A"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-default-600 font-medium">Duration</span>
                  <span className="font-semibold text-foreground">
                    {tour.duration || "Bilinmiyor"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-default-600 font-medium">Location</span>
                  <span className="font-semibold text-foreground">
                    {tour.location}
                  </span>
                </div>

                <Button
                  color="primary"
                  size="lg"
                  className="w-full mt-4 font-bold cursor-pointer"
                >
                  Book Now
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
