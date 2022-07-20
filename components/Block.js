import Image from "next/image";

export default function Block({ title, subtitle, logo, start, end }) {
  return (
    <section className="mb-4.5 break-inside-avoid">
      <header className="grid grid-flow-col items-center justify-start gap-2">
        <div className="h-10 w-10">
          {logo && (
            <Image
              src={logo}
              alt={title}
              width="400"
              height="400"
              objectFit="cover"
              className="rounded"
            />
          )}
        </div>
        <div>
          <p className="text-lg font-semibold leading-snugish text-stone-800">
            {title}
          </p>
          <div className="inline-flex items-baseline gap-2">
            <p className="text-md leading-normal text-stone-700">{subtitle}</p>
            <p className="text-xs leading-normal text-stone-600">
              {end == "" ? `since ${start}` : `${start} - ${end}`}
            </p>
          </div>
        </div>
      </header>
    </section>
  );
}
