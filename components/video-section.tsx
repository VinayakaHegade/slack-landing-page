import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icons";

const VideoSection = () => {
  return (
    <section className="px-4 py-4 md:px-8 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-20 gap-y-6 justify-between md:grid-cols-2">
        <div className="relative h-[335px] w-full overflow-hidden rounded-lg">
          <Link href="https://youtu.be/dZCfVhoC_z8">
            <div className="absolute inset-0">
              <Image
                src="/images/video-thumbnail.png"
                alt="Video thumbnail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Icons.Play />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="mt-7 !text-[2rem] leading-[1.0625] font-bold text-black md:text-4xl !text-wrap">
            Now is your moment to build a better tomorrow
          </h2>
          <p className="text-lg text-black">
            We've seen what the future can be. Now it's time to decide what it
            will be.
          </p>
            <Link
              href="https://youtu.be/dZCfVhoC_z8"
              className="rounded-md border border-slack-purple px-10 py-5 hover:py-[19px] hover:px-[39px] font-bold text-nowrap w-fit text-sm text-slack-purple hover:border-2"
            >
              WATCH VIDEO
            </Link>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
