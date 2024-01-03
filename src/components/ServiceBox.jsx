export default function ServiceBox({ image, title, subHeading }) {
  return (
    <div className="flex flex-col gap-6 w-[373px]">
      <img src={image} className="w-[43px] h-[50px]" />
      <h4 className="text-[28px] font-semibold text-[#122025] w-[76%]">
        {title}
      </h4>
      <p className="text-[20px] text-[#58666B]">{subHeading}</p>
    </div>
  );
}
