import heroImage from "@/assets/banner.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-base-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        <div className="hero my-4 min-h-[650] rounded-xl bg-base-100 px-6 py-10 sm:min-h-[600] sm:px-10 lg:min-h-[500] lg:px-14">
          <div className="flex w-full flex-col items-center gap-10 overflow-hidden lg:flex-row lg:items-center lg:justify-between lg:gap-6">
            <div className="w-full space-y-5 text-center lg:w-1/2 lg:space-y-8 lg:text-left">
              <p className="font-semibold text-[#C2F800]">WORKOUT LIBRARY</p>

              <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                TRAIN WITH INTENT. LOG
                <br className="hidden sm:block" />
                EVERY SET.
              </h1>

              <p className="mx-auto max-w-xl text-sm leading-6 text-[#9CA3AF] sm:text-base lg:mx-0">
                FitLog is a dark, no-nonsense gym companion: pick a lift, lock
                it into today&apos;s plan, and watch the week&apos;s work add
                up.
              </p>

              <div>
                <Link
                  href="#library"
                  className="btn border-none bg-[#ccff00] px-6 text-base-300 transition hover:bg-[#a0cc00]"
                >
                  BROWSE WORKOUTS
                </Link>
              </div>
            </div>

            <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
              <Image
                alt="Workout illustration"
                src={heroImage}
                width={500}
                height={400}
                priority
                className="h-auto w-[220] object-contain sm:w-[280] md:w-[350] lg:w-[430]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
