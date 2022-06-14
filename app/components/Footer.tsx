import {
  TiSocialFacebookCircular,
  TiSocialInstagramCircular,
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";

export default function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto py-8">
        <p className="text-3xl font-bold lg:text-5xl">
          Ready to create something awesome?
        </p>
        <p className=" mt-4 text-2xl font-bold lg:text-4xl">
          Schedule a call today!
        </p>
        <div className="mt-12 flex flex-wrap justify-between">
          <div className="w-full lg:w-1/2">
            <p className="text-2xl">Scott Prins</p>
            <p>Freelance Software Engineer</p>
            <p className="mt-4">Follow me on social media!</p>
            <div className="flex text-4xl">
              <a href="https://twitter.com/scott_prins" target="_blank">
                <TiSocialTwitterCircular className="cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/richard-prins-jr/"
                target="_blank"
              >
                <TiSocialLinkedinCircular className="cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/scottprins.dev/"
                target="_blank"
              >
                <TiSocialInstagramCircular className="cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex">
              <div className="mr-24">
                <p className="underline">Helpful Links</p>
              </div>
              <div>
                <p className="underline">Content</p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4">
          All rights reserved © Extensibl Media {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
