/** @format */

import Image from "next/image";
import Navbar from "./components/Navbar";
import desktopImge from "@/assets/images/image-web-3-desktop.jpg";

import retropcImg from "@/assets/images/image-retro-pcs.jpg";
import laptopsImage from "@/assets/images/image-top-laptops.jpg";
import gamingImg from "@/assets/images/image-gaming-growth.jpg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
export default function Home() {
  return (
    <div className=" min-h-screen w-full ">
      <main className="max-w-6xl flex flex-col gap-4  mx-auto px-3 pb-28">
        <Navbar />
        {/* main */}
        <div className="w-full flex gap-4 flex-col sm:flex-row ">
          {/* left side */}
          <section className="sm:w-[60%] flex flex-col gap-4">
            <Image src={desktopImge} alt="destop-img" />
            <div className="flex gap-4 flex-col sm:flex-row     ">
              {/* left  */}
              <h2 className="sm:w-1/2 text-5xl font-bold">
                The Bright Future of Web 3.0 ?
              </h2>
              {/* right */}
              <div className="sm:w-1/2 flex h-full flex-col  gap-5 items-start">
                <p className="text-gray-400 text-sm">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className=" px-4 py-2 bg-orange-600 text-white text-sm">
                  READ MORE
                </button>
              </div>
            </div>
          </section>
          {/* right side */}

          <div className="sm:w-[40%] bg-slate-900 text-white px-4 pt-4 pb-5 flex flex-col gap-6">
            <h1 className="text-yellow-400 text-3xl font-bold">New</h1>

            <div className="flex flex-col  gap-4">
              <section className="flex gap-2 flex-col">
                <h2 className="text-lg font-bold">Hydrogen VS Electric Cars</h2>
                <p className="text-gray-400 ">
                  Will hydrogen-fueled cars ever catch up to EVs?
                </p>
              </section>
              <div className="w-full h-[1px] bg-gray-500" />
              <section className="flex gap-2 flex-col">
                <h2 className="text-lg font-bold">
                  {" "}
                  The Downsides of AI Artistry
                </h2>
                <p className="text-gray-400 ">
                  What are the possible adverse effects of on-demand AI image
                  generation?
                </p>
              </section>
              <div className="w-full h-[1px] bg-gray-500" />
              <section className="flex gap-2 flex-col">
                <h2 className="text-lg font-bold"> Is VC Funding Drying Up?</h2>
                <p className="text-gray-400 ">
                  Private funding by VC firms is down 50% YOY. We take a look at
                  what that means.
                </p>
              </section>
            </div>
          </div>
        </div>

        {/* cards */}
        <section className=" flex flex-col sm:flex-row justify-between gap-3 ">
          <Card
            imgSrc={retropcImg}
            nubmerText="01"
            para=" Private funding by VC firms is down 50% YOY. We take a look at what that means."
            title="  Reviving Retro PCs"
          />
          <Card
            imgSrc={laptopsImage}
            nubmerText="02"
            para=" Our best picks for various needs and budgets. "
            title="Top 10 Laptops of 2022"
          />
          <Card
            imgSrc={gamingImg}
            nubmerText="03"
            para="  How the pandemic has sparked fresh opportunities. "
            title="The Growth of Gaming"
          />
        </section>
      </main>
    </div>
  );
}

type CardType = {
  imgSrc: string | StaticImport;
  nubmerText: string;
  title: string;
  para: string;
};

function Card({ imgSrc, nubmerText, title, para }: CardType) {
  return (
    <div className="flex gap-4 h-[150px] ">
      <Image className=" w-[120px]" src={imgSrc} alt="card-img" />
      {/* right div */}
      <div className="flex flex-col  gap-2 w-[250px] justify-between">
        <h2 className="text-3xl font-bold text-gray-300"> {nubmerText} </h2>
        <h3 className=" font-bold text-xl"> {title}</h3>
        <p className="text-gray-400"> {para}</p>
      </div>
    </div>
  );
}
