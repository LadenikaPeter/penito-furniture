import { INFO, SOCIALS } from "../constants/Footer";

export default function Footer() {
  function getYear() {
    const dateObj = new Date();
    return dateObj.getFullYear();
  }

  return (
    <section id="footer__section" className="pt-[144px] pb-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-[136px] ">
          <div className="flex flex-col gap-8 w-[285px]">
            <div className="flex gap-2 ">
              <img src="src/assets/icon.svg" alt="Logo" />
              <h2 className="text-[30px] font-semibold pl-1">Penito</h2>
            </div>

            <p className="text-[#58666B] font-medium text-[16px]">
              Sophisticated simplicity for the independent mind
            </p>
            <div className="flex gap-3">
              {SOCIALS.map((item) => {
                return (
                  <img
                    src={`src/assets/social-icons/${item}.svg`}
                    alt={`${item}-icon`}
                    className="cursor-pointer"
                  />
                );
              })}
            </div>
          </div>
          <div className="flex gap-[66px]">
            {INFO.map((item) => {
              return (
                <div className="w-[232px]">
                  <h4 className="text-2xl font-medium">{item.title}</h4>
                  <hr className="w-16 border-solid border-[1.5px] border-[#58666B] my-10" />
                  <ul className="flex flex-col gap-3">
                    {item.options.map((options) => {
                      return (
                        <li className="text-[#58666B] text-[18px] font-medium cursor-pointer">
                          {options}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <p className="mt-[85px] text-[#58666B] text-[18px]">
          `© copyright {getYear()} |{" "}
          <span className="font-bold text-black">Penito</span> by Peter`
        </p>
      </div>
    </section>
  );
}
