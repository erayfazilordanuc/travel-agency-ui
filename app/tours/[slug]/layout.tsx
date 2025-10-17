export default function TourSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 pb-10">
      <div className="inline-block text-center justify-center">
        {children}
      </div>
    </section>
  );
}
