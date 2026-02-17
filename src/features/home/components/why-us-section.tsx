import React from "react";
import Image from "next/image";
import featuresData from "../../../data/features.json";
import { Link } from "lucide-react";

interface WhyUsCard {
  id: number;
  image: string;
  title: string;
}

interface FeaturesData {
  whyUsCards: WhyUsCard[];
}

const WhyUsSection: React.FC = () => {
  if (!featuresData) {
    return null;
  }

  const cards = (featuresData as FeaturesData).whyUsCards;

  return (
    <section className="pt-20 pb-24 bg-blue-50">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          {/* Added <br /> to put "EXECUTED" on the second line */}
          <h2 className="font-heading mb-6 text-4xl lg:text-5xl text-blue-900 tracking-8xl md:max-w-xl mx-auto">
            TRACK RECORD & PROJECT <br /> EXECUTED
          </h2>

          {/* Added <br /> to split the text into exactly 2 lines */}
          <p className="mb-20 text-gray-800 text-2xl lg:text-2xl md:max-w-2xl mx-auto">
            TINACON has successfully carried out several projects <br />
            and services across Nigeria.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {cards.map((card) => (
            <div key={card.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="relative mb-8 overflow-hidden rounded-5xl">
                <Image
                  className="w-full transform hover:scale-125 transition duration-1000"
                  src={card.image}
                  alt=""
                  width={400}
                  height={300}
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-card p-8">
                  <Link
                    className="group inline-block max-w-sm"
                    href="/projects"
                  >
                    <span className="mb-4 text-3xl text-white tracking-3xl hover:underline">
                      {card.title}
                    </span>
                  </Link>
                  <Link
                    className="group inline-flex items-center"
                    href="/projects"
                  >
                    <span className="mr-3.5 text-white font-medium">
                      Learn more
                    </span>
                    <svg
                      className="transform group-hover:rotate-90 transition duration-300"
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5 0.75L1 11.25"
                        stroke="white"
                        strokeWidth="1.43182"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M11.5 10.3781V0.75H1.87187"
                        stroke="white"
                        strokeWidth="1.43182"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
