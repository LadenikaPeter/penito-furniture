import { useState } from "react";
import { SECOND__SECTION, SERVICES } from "../constants/Home";
import Button from "../components/Button";
import ServiceBox from "../components/ServiceBox";

export default function Home() {
  const [menuItem, setMenuItem] = useState("All Funrnitures");

  function changeItem(item) {
    if (item !== "All Funrnitures") {
      setMenuItem(item);
    } else {
      setMenuItem("All Funrnitures");
    }
  }

  function reusable(value, src, alt) {
    const images = [];

    for (let i = 0; i < value; i++) {
      images.push(<img src={src} alt={alt} />);
    }

    return images;
  }
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="Hero__section" className="pt-20">
          <div className="grid grid-cols-12">
            <div className="col-span-6 flex flex-col justify-center gap-8">
              <h1 className="text-[#122025] font-medium capitalize text-[40px]">
                Discover{" "}
                <span className="text-[#F2C229] font-bold">The Best </span>
                Furniture for <span className=" font-bold">your Interior</span>
              </h1>
              <p className="text-[#58666B] text-[21px]">
                We design pieces of furniture and objects that perfectly gap
                between Beauty and functionality
              </p>
              <div className="flex gap-16">
                <button className="flex bg-[#1C2A2F] text-white px-7 py-4 gap-4 items-center rounded-lg cursor-pointer">
                  Shop Now <img src="src/assets/right.svg" />
                </button>
                <button>
                  <img
                    src="src/assets/video Button.svg"
                    className="w-[185px]"
                  />
                </button>
              </div>
            </div>
            <div className="col-span-6">
              <img src="src/assets/hero-image.png" />
            </div>
          </div>
        </section>

        <section id="second__section" className="pt-[120px]">
          <div className="flex items-center flex-col">
            <h1 className="font-semibold text-[#122025] text-center text-[44px] w-[75%] pb-6">
              {SECOND__SECTION.title}
            </h1>
            <p className="text-[#58666B] text-2xl w-[83%] text-center pb-12">
              {SECOND__SECTION.subHeading}
            </p>
          </div>

          <div className="flex justify-center">
            <div className=" flex items-center  gap-6">
              {SECOND__SECTION.menu.map((item) => {
                return (
                  <div
                    className={`rounded-[72px] py-3 px-6 cursor-pointer  ${
                      item === menuItem
                        ? "bg-[#1FB890]  text-white"
                        : "bg-[#F8FBFB] text-black"
                    }`}
                    onClick={() => changeItem(item)}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,_minmax(210px,_1fr))] gap-[36px] pt-12">
            {SECOND__SECTION.menu_items.map((item) => {
              return (
                <div className="flex flex-col p-4 gap-[25px] bg-[#F8FBFB] rounded-lg hover:bg-white hover:shadow-[0_4px_16px_0_rgba(14,191,221,0.20)]">
                  <img src={item.src} alt={item.alt} className="h-[179px]" />
                  <div>
                    <div className="flex flex-col gap-2">
                      <h5 className="font-semibold capitalize text-[14px]">
                        {item.title}
                      </h5>
                      <div className="flex gap-4">
                        <span>$250.00</span>
                        <span className="text-[#1FB890] font">$210.00</span>
                      </div>
                      <div className="flex gap-[49px]">
                        <div className="flex">
                          <img src="src/assets/filled.svg" className="-mb-1" />
                          {reusable(3, "src/assets/empty.svg", "icon").map(
                            (image) => {
                              return image;
                            }
                          )}
                        </div>
                        <div className="flex">
                          {reusable(
                            4,
                            "src/assets/full-star.svg",
                            "star-icon"
                          ).map((image) => {
                            return image;
                          })}
                          <img src="src/assets/half-star.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center flex justify-center pt-10 cursor-pointer">
            <Button text={"see more"} />
          </div>
        </section>

        <section id="third__section" className="pt-[120px]">
          <div>
            <h1 className="text-center font-semibold text-[44px] text-[#122025] mb-16">
              Our Services & Benefits
            </h1>
            <div className="grid grid-cols-12">
              {/* <div> */}
              <div className="col-span-8 pr-4">
                <div className="flex flex-col gap-16">
                  <div className="flex gap-[150px]">
                    {SERVICES[0].first_set.map((item) => {
                      return (
                        <ServiceBox
                          image={item.Image}
                          title={item.title}
                          subHeading={item.subHeading}
                        />
                      );
                    })}
                  </div>
                  <div className="flex gap-[150px]">
                    {SERVICES[1].second_set.map((item) => {
                      return (
                        <ServiceBox
                          image={item.Image}
                          title={item.title}
                          subHeading={item.subHeading}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-span-4">
                <img
                  src="src/assets/confrence.png"
                  alt="confrence-image"
                  className="h-full"
                />
              </div>
            </div>
            <div className="cursor-pointer mt-16">
              <Button text={"know more"} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
// rounded-[72px] py-3 px-6
// bg-[#1FB890]  text-white
// grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]
