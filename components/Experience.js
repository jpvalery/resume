import Image from "next/image";

export default function Experience({ company, logo, location, roles }) {
  return (
    <section className="mb-4.5 grid break-inside-avoid grid-flow-row gap-2">
      <header className="grid grid-flow-col items-center justify-start gap-2">
        <div className="h-10 w-10">
          {logo && <Image src={logo} alt={company} width="400" height="400" objectFit="cover" className="rounded" />}
        </div>
        <div className="gap grid grid-flow-row">
          <h3 className="text-lg font-semibold leading-snugish text-stone-900">
            {company}
          </h3>
          <p className="text-base font-medium leading-snugish text-stone-700">
            {location}
          </p>
        </div>
      </header>
      <section>
        {roles.map((role) => {
          return (
            <div className="pb-2">
              <div className="inline-flex items-baseline gap-2">
                <p className="text-md leading-normal text-stone-900">
                  {role.title}
                </p>
                <p className="text-xs leading-normal text-stone-600">
                  {role.end == ""
                    ? `since ${role.start}`
                    : `${role.start} - ${role.end}`}
                </p>
              </div>

              {role.descriptionShort && (
                <p className="text-sm leading-normal text-stone-800">
                  {role.descriptionShort}
                </p>
              )}
            </div>
          );
        })}
      </section>
    </section>
  );
}
