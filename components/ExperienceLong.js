import Image from "next/legacy/image";

export default function Experience({ company, logo, location, roles }) {
  return (
    <section className="grid grid-flow-row gap-2 break-inside-avoid">
      <header className="grid grid-flow-col items-center justify-start gap-2">
        <div className="h-10 w-10">
          {logo && (
            <Image
              src={logo}
              alt={company}
              width="400"
              height="400"
              objectFit="cover"
              className="rounded"
            />
          )}
        </div>
        <div className="gap grid grid-flow-row">
          <h3 className="text-lg font-semibold leading-snugish text-zinc-800">
            {company}
          </h3>
          <p className="text-sm leading-snugish text-zinc-700">{location}</p>
        </div>
      </header>
      <section>
        {roles.map((role) => {
          return (
            <div className="pb-2" key={role.title}>
              <div className="inline-flex items-baseline gap-2">
                <p className="text-md font-medium leading-normal text-zinc-950">
                  {role.title}
                </p>
                <p className="text-xs leading-normal text-zinc-600">
                  {role.end == ""
                    ? `since ${role.start}`
                    : `${role.start} - ${role.end}`}
                </p>
              </div>

              {role.descriptionShort && (
                <p
                  className="text-sm leading-normal text-zinc-800"
                  dangerouslySetInnerHTML={{
                    __html:
                      role.descriptionLong != ""
                        ? role.descriptionLong
                        : role.descriptionShort,
                  }}
                />
              )}
            </div>
          );
        })}
      </section>
    </section>
  );
}
