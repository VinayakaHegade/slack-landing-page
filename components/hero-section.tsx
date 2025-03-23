import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="px-4 py-8 md:px-8 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col justify-center md:max-w-[467px] mx-auto md:mx-0">
          <h1 className="mb-4 text-4xl font-bold leading-[1.0625] text-black md:text-5xl lg:text-[4rem] !text-wrap">
            Slack is where the future works
          </h1>
          <p className="mb-8 text-xl leading-[1.5] text-black">
            Transform the way that you work with one place for everyone and
            everything you need to get stuff done.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Link
              href="/signup"
              className="flex items-center justify-center rounded-md bg-slack-purple px-6 py-3 text-base font-medium text-white hover:bg-purple-900"
            >
              TRY FOR FREE
            </Link>
            <Link
              href="/google-signup"
              className="flex items-center justify-center gap-3 rounded-md border border-gray-300 bg-blue-500 p-1 pr-4 text-base font-medium text-white shadow-sm hover:bg-blue-600"
            >
              <div className="bg-white p-3 rounded-xs">
                <Image
                  src="/logo/google-logo.png"
                  alt="Google"
                  width={16}
                  height={16}
                />
              </div>
              SIGN UP WITH GOOGLE
            </Link>
          </div>
        </div>
        <div className="relative max-w-[600px] h-[345px]">
          <Image
            src="/images/hero.jpg"
            alt="Slack interface"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
