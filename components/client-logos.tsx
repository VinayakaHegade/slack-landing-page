import Image from "next/image";

const logos = [
  { name: "NatWest", src: "/logo/natwest.png", width: 135, height: 24 },
  { name: "GSK", src: "/logo/gsk.png", width: 141, height: 50 },
  { name: "Sky-uk", src: "/logo/sky-uk.png", width: 66, height: 40 },
  { name: "Uber", src: "/logo/uber.png", width: 75, height: 26 },
  { name: "Airbnb", src: "/logo/airbnb.png", width: 112, height: 35 },
  { name: "Deliveroo", src: "/logo/deliveroo.png", width: 131, height: 35 },
];

const ClientLogos = () => {
  return (
    <section className="px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid min-[320px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 place-items-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="relative flex items-center justify-center h-12.5 w-[185px]"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                height={logo.height}
                width={logo.width}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
