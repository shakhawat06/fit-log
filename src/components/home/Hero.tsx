import heroImage from "@/assets/banner.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-base-300 px-10">
      <div className="hero bg-base-100 h-[500] rounded-xl my-4 px-15">
        <div className="w-full flex justify-between items center">
          <div className="space-y-10">
            <p className="text-[#C2F800] font-semibold">WORKOUT LIBRARY</p>
            <h1 className="text-5xl font-bold">
              TRAIN WITH INTENT. LOG <br /> EVERY SET.
            </h1>
            <p className="py-6 text-[#9CA3AF]">
              FitLog is a da rk, no-nonsense gym companion: pick a lift, lock it{" "}
              <br />
              into today's plan, and watch the week's work add up.
            </p>
            <button className="btn bg-[#C2F800] hover:bg-[#a0cc00] text-base-300">BROWSE WORKOUTS</button>
          </div>
          <Image
            alt="Tailwind CSS hero component"
            src={heroImage}
            className="max-w-sm "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
