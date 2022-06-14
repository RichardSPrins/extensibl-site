import { Link } from "remix";

export default function HomeHero() {
  return (
    <div className="flex flex-wrap min-h-[calc(100vh - 112px)] items-center flex-col-reverse lg:flex-row container mx-auto px-6 md:px-0 mt-12 md:mt-0">
      <div className="w-full lg:w-3/5 xl:w-1/2 px-4 md:p-0">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold">
          <span className="w-full text-transparent bg-clip-text bg-gradient-to-br from-pink-400 via-purple-400 to-red-600 m-0 p-0">
            I develop products
          </span>
          <br />
          that delight and inspire people.
        </h1>
        <p className="text-xl mt-4">
          Hi, I'm Scott. I am a U.S. based software developer, that builds
          exquisite products and applications for emerging startups and
          companies.
        </p>
        <Link to="/contact">
          <button className="mt-10 mr-4 h-16 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Book A Call
          </button>
        </Link>
        <a
          href="https://res.cloudinary.com/dpoanqywm/image/upload/v1641191855/Richard_s_Resume_kse7xh.pdf"
          target="_blank"
        >
          <button className="mt-4 h-16 bg-black text-white hover:bg-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            See My Resume
          </button>
        </a>
      </div>
      <div className="w-full lg:w-2/5 xl:w-1/2 px-4 md:p-0">
        <img src="/me-hero.jpeg" className="h-full w-full" />
      </div>
    </div>
  );
}
