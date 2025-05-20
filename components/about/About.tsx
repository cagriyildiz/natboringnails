"use client";

import Image from "next/image";

const InstagramSvg = () => {
  return (
    <svg
      className="h-[26px] w-[26px] mr-4"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
  )
}

function About() {

  return (
    <div id="about" className="bg-linear-to-b from-[#6326BA] to-[#C4B0F6]">
      <section className="max-w-7xl m-auto h-full!">
        <div className="max-w-full mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-20">
          <div className="flex flex-col md:flex-row gap-10 md:gap-20 md:items-stretch">
            <div className="md:flex-1/2">
              <Image
                src="/nathal.png"
                alt="Nathalja Nebbeling"
                width={900}
                height={900}
                draggable={false}
                className="rounded-3xl object-cover object-center min-h-100 max-h-100 md:min-h-148 md:max-h-148"
              ></Image>
            </div>

            <div className="m-auto py-4 md:flex-1/2">
              <div className="text flex flex-col gap-6 md:gap-12">
                <h2 className="font-fancy text-4xl text-secondary font-bold">About Me</h2>
                <h3 className="font-fancy text-7xl text-secondary font-bold">Nathalja Nebbeling</h3>
                <p>
                  Hey there, I&#39;m Nathalja, and let me share a bit of my journey with you. Nails have been my passion
                  since I was knee-high! After graduating from <b className="font-bold">Lakwerk Nailschool</b>, I dove straight into the world of
                  nail
                  artistry by joining their team. For a solid 1.5 years, I honed my skills and soaked up every bit of
                  knowledge and experience I could.
                  Then came a change of scenery—I spent half a year at <b className="font-bold">Happy Toko</b>, where I continued to refine my craft
                  and explore new techniques. But the call of independence and creativity beckoned, leading me to make
                  the
                  bold move to <b className="font-bold">Haarlem</b>, where I opened up my own salon right in the comfort of my home.
                  Here, surrounded by the things I love and the music that fuels my creativity, I&#39;ve found my true
                  niche. So, step into my world, where years of experience meet boundless creativity. Let&#39;s make
                  your
                  nails shine!
                </p>
                <div className="font-fancy">
                  <div className="item">
                    <a href="https://www.instagram.com/natboringnails" className="font-semibold">
                      <InstagramSvg/>
                      <span className="text-3xl font-bold text-primary">natboringnails</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About