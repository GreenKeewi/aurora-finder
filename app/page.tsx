import Link from "next/link";

const Page = () => {
  return (
    <main className="flex flex-col items-center justify-center p-10 space-y-4">
      <h1 className="text-7xl text-[#fe841d] font-bold mt-20 text-center">
        Active Auroras
      </h1>
      <p className="text-[#fe841d] text-base text-center max-w-md leading-relaxed">
        Active Auroras tracks real-time aurora sightings worldwide, helping you
        catch the beauty of the Northern and Southern Lights as they happen.
      </p>
      <Link href="">
        <button className="btn-ghost group relative h-12 rounded-full border border-neutral-200 bg-transparent px-4 sm:h-10 sm:px-3">
          <span className="relative inline-flex overflow-hidden">
            <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[120%] group-hover:skew-y-12">
              Find Auroras
            </div>
            <div className="absolute translate-y-[120%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
              Find Auroras
            </div>
          </span>
        </button>
      </Link>
      <section className="w-full max-w-2xl p-4 mt-80 rounded-lg shadow-lg sm:p-2 sm:mt-5">
        <h2 className="text-2xl font-bold text-center text-[#fe841d] mb-4 sm:text-xl">
          Latest Sightings
        </h2>
      </section>
    </main>
  );
};

export default Page;
