import { useState } from "react";
import {
  GALLERY,
  SECOND__SECTION,
  SERVICES,
  SPONSORS,
  TESTIMONIALS,
} from "../constants/Home";
import Button from "../components/Button";
import ServiceBox from "../components/ServiceBox";
import Footer from "../components/Footer";

export default function Home() {
  const [menuItem, setMenuItem] = useState("All Funrnitures");

  function changeItem(item) {
    if (item !== "All Funrnitures") {
      setMenuItem(item);
    } else {
      setMenuItem("All Funrnitures");
    }
  }

  function reusable(value, src, alt, w = 30, h = 30) {
    const images = [];

    for (let i = 0; i < value; i++) {
      images.push(
        <img src={src} alt={alt} className={`w-[${w}px] h-[${h}px]`} />
      );
    }

    return images;
  }
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="Hero__section" className="pt-20">
          <div className="grid grid-cols-12">
            <div className="md:col-span-6 col-span-12 flex flex-col justify-center gap-8">
              <h1 className="text-[#122025] font-medium capitalize text-[clamp(30px,4vw,40px)]">
                Discover{" "}
                <span className="text-[#F2C229] font-bold">The Best </span>
                Furniture for <span className=" font-bold">your Interior</span>
              </h1>
              <p className="text-[#58666B] text-[clamp(16px,4vw,18px)]">
                We design pieces of furniture and objects that perfectly gap
                between Beauty and functionality
              </p>
              <div className="flex gap-16 max-[768px]:gap-6 max-[374px]:flex-wrap">
                <button className="flex bg-[#1C2A2F] text-white px-7 py-4 gap-4 items-center rounded-lg cursor-pointer text-nowrap">
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
            <div className="md:col-span-6 md:block hidden pl-2">
              <img src="src/assets/hero-image.png" />
            </div>
          </div>
        </section>

        <section id="second__section" className="pt-[120px]">
          <div className="flex items-center flex-col">
            <h1 className="font-semibold text-[#122025] text-center text-[clamp(22px,4vw,44px)] w-[75%] pb-6">
              {SECOND__SECTION.title}
            </h1>
            <p className="text-[#58666B] text-[clamp(16px,4vw,24px)] w-[83%] text-center pb-12">
              {SECOND__SECTION.subHeading}
            </p>
          </div>

          <div className="flex justify-center">
            <div className=" flex items-center  gap-6 overflow-scroll">
              {SECOND__SECTION.menu.map((item) => {
                return (
                  <div
                    className={`rounded-[72px] py-3 px-6 cursor-pointer text-nowrap  ${
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
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-[179px] object-contain"
                  />
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
          <div className="text-center flex justify-center pt-10">
            <Button text={"see more"} />
          </div>
        </section>

        <section id="third__section" className="pt-[120px]">
          <div>
            <h1 className="text-center font-semibold text-[clamp(22px,4vw,44px)] text-[#122025] mb-16">
              Our Services & Benefits
            </h1>
            <div className="grid grid-cols-12">
              <div className="xl:col-span-8 col-span-12 xl:pr-4">
                <div className="flex flex-col gap-16">
                  <div className="flex gap-[150px] max-[1279px]:justify-center max-[767px]:flex-wrap max-[767px]:gap-16">
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
                  <div className="flex gap-[150px] max-[1279px]:justify-center max-[767px]:flex-wrap max-[767px]:gap-16">
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
              <div className="xl:col-span-4 xl:block hidden ">
                <img
                  src="src/assets/confrence.png"
                  alt="confrence-image"
                  className="h-full object-contain"
                />
              </div>
            </div>
            <div className=" flex mt-16 max-[767px]:justify-center">
              <Button text={"know more"} />
            </div>
          </div>
        </section>

        <section id="fourth__section" className="pt-[160px]">
          <div className="grid grid-cols-12">
            <div className="md:col-span-7 col-span-12">
              <div className="flex flex-col gap-6">
                <h1 className="capitalize text-[clamp(22px,4vw,36px)] font-semibold text-[#122025]">
                  our customer say
                </h1>
                {TESTIMONIALS.map((item) => {
                  return (
                    <>
                      <p className="text-[#58666B]">{item.testimonial}</p>
                      <div className="flex flex-col gap-3">
                        <div className="flex">
                          {reusable(
                            4,
                            "src/assets/full-star.svg",
                            "star-icon",
                            25,
                            25
                          ).map((image) => {
                            return image;
                          })}
                          <img
                            src="src/assets/half-star.svg"
                            className="w-[25px] h-[25px]"
                          />
                        </div>
                        <h4 className="text-[#122025] font-semibold text-xl">
                          {item.name}
                        </h4>
                        <h5 className="text-[#58666B] text-lg">{item.title}</h5>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="md:col-span-5 md:flex hidden py-[50px] px-[15px]">
              <img
                src="src/assets/customer.png"
                alt="Testimonial-img"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section id="fifth__section" className="pt-[180px]">
          <h1 className="text-[#122025] font-semibold text-[clamp(22px,4vw,44px)] text-center mb-16">
            Our Partners & Sponsors
          </h1>
          <div className="flex justify-center">
            <div className="w-[86%] max-[1267px]:overflow-scroll">
              <div className="min-[1268px]:items-center grid grid-cols-[repeat(auto-fit,_minmax(175px,_1fr))] gap-10 max-[1267px]:flex">
                {SPONSORS.map((item) => {
                  if (item === "") {
                    return <div className="max-[1267px]:hidden"></div>;
                  }
                  return <img src={`src/assets/sponsors/${item}.svg`} />;
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
      <section
        id="sixth__section"
        className="mt-[100px] bg-[#FAFAFA] py-[80px]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-[#122025] font-semibold text-[clamp(22px,4vw,36px)] mb-[56px] min-[426px]:pl-16 max-[425px]:text-center">
            Visit Our Instagram Gallery
          </h1>
          <div className="min-w-full overflow-x-auto">
            <div className="flex gap-8 min-[1250px]:justify-center ">
              {GALLERY.map((item) => {
                return (
                  <div className="relative group">
                    <img
                      src={`src/assets/gallery/${item}.png`}
                      alt="image"
                      className="min-w-[210px] h-[210px]"
                    />
                    <div class="absolute inset-0 rounded-lg  opacity-0 flex items-center justify-center group-hover:opacity-60 group-hover:bg-black transition-opacity">
                      <img src="src/assets/instagram-outlined.svg" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
