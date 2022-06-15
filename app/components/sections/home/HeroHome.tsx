import { Link } from "@remix-run/react";

export default function HomeHero() {
  return (
    <div className="min-h-[calc(100vh - 112px)] container mx-auto mt-12 flex flex-col-reverse flex-wrap items-center px-6 md:mt-0 md:px-0 lg:flex-row">
      <div className="w-full px-4 md:p-0 lg:w-3/5 xl:w-1/2">
        <h1 className="text-3xl font-semibold md:text-5xl lg:text-6xl">
          <span className="m-0 w-full bg-gradient-to-br from-pink-400 via-purple-400 to-red-600 bg-clip-text p-0 text-transparent">
            I develop products
          </span>
          <br />
          that delight and inspire people.
        </h1>
        <p className="mt-4 text-xl">
          Hi, I'm Scott. I am a U.S. based software developer, that builds
          exquisite products and applications for emerging startups and
          companies.
        </p>
        <Link to="/contact">
          <button className="mt-10 mr-4 h-16 rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-100">
            Book A Call
          </button>
        </Link>
        <a
          href="https://res.cloudinary.com/dpoanqywm/image/upload/v1641191855/Richard_s_Resume_kse7xh.pdf"
          target="_blank"
        >
          <button className="mt-4 h-16 rounded border border-gray-400 bg-black py-2 px-4 font-semibold text-white shadow hover:bg-gray-800">
            See My Resume
          </button>
        </a>
      </div>
      <div className="w-full px-4 md:p-0 lg:w-2/5 xl:w-1/2">
        <img src="/me-hero.jpeg" className="h-full w-full" />
      </div>
    </div>
  );
}
