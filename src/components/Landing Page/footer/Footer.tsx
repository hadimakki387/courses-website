import React from "react";
import "./Footer.css";
import Github from "./svgs/Github";
import Twitter from "./svgs/Twitter";
import Youtube from "./svgs/Youtube";
import Learn from "./ULs/Learn";
import Discuss from "./ULs/Discuss";
import Extras from "./ULs/Extras";
import Image from "next/image";

function Footer() {
  return (
    <div className="footer-wrap mobile:text-lg snipcss-sxLRM w-full max-[1023px]:px-4 ">
      <Image
        className="lazy pointer-events-none absolute right-0 bottom-0 hidden mix-blend-luminosity lg:inline-block lazyloaded style-QlC34"
        width={1000}
        height={1000}
        src={"/laracasts-gang.png"}
        alt="Laracasts robot mascots"
        id="style-QlC34"
      />
      <Image
        className="lazy pointer-events-none absolute left-0 bottom-0 lazyloaded style-vVxCC"
        src={"/laravel-footer-logo.png"}
        height={1000}
        width={1000}
        alt=""
        id="style-vVxCC"
      />
      <section className="footer-section top pt-0  ">
        <div className="container m-auto">
          <div className="mx-auto text-center md:w-4/5 lg:w-1/2">
            <div>
              <h2 className="mb-8 text-2xl tracking-tight text-white md:text-3xl">
                Want us to email you occasionally with Laracasts news?
              </h2>
            </div>
            <div>
              <form
                id="newsletter-form"
                method="POST"
                action="/newsletters/subscribe"
              >
                <div className="mx-auto mb-6 flex max-w-sm flex-col justify-center md:flex-row lg:mx-0 lg:mb-0 lg:max-w-full gap-4">
                  <input
                    className=" rounded-xl px-4 py-4 text-center text-base text-black placeholder-grey-800  md:w-1/2 md:py-3 md:text-left md:text-sm"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                  />
                  <button
                    className="btn flex-center btn-blue  md:w-32"
                    type="submit"
                  >
                    <span className="text-wrap inline-block flex-shrink-0">
                      Subscribe
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-section bottom py-0 text-center lg:text-left">
        <footer className="container m-auto">
          <div className="lg:mb-3 lg:flex">
            <div className="mb-10 lg:mr-auto lg:mb-0 lg:w-2/5">
              <div className="mb-3 flex justify-center lg:block text-white text-3xl">
               BRAND
              </div>
              <p className="mx-auto mb-8 max-w-sm font-medium leading-loose text-white lg:mx-0 lg:max-w-full">
                Nine out of ten doctors recommend Brand over competing
                brands. Come inside, see for yourself, and massively level up
                your development skills in the process.
              </p>
              <div className="mx-auto mb-8 flex w-42 items-center justify-start max-[1023px]:justify-center gap-x-2">
                <Youtube/>
                <Twitter/>
                <Github/>
              </div>
            </div>
            <div className="mobile:mb-6 lg:w-1/6">
              <h5 className="mb-2 font-bold uppercase text-white lg:mb-6 lg:font-semibold">
                Learn
              </h5>
              <Learn/>
            </div>
            <div className="mobile:mb-6 lg:w-1/6">
              <h5 className="mb-2 font-bold uppercase text-white lg:mb-6 lg:font-semibold">
                Discuss
              </h5>
              <Discuss/>
            </div>
            <div className="mobile:mb-8 lg:w-1/6">
              <h5 className="mb-2 font-bold uppercase text-white lg:mb-6 lg:font-semibold">
                Extras
              </h5>
              <Extras/>
            </div>
          </div>
          <div className="border-t border-solid border-grey-600/10 py-4 mobile:text-lg lg:mt-8">
            <div className="text-center text-base text-grey-600/50 lg:text-xs">
              <p className="tracking-normal lg:mb-2">
                © Brand 2023. All rights reserved.
                
              </p>
              
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Footer;
