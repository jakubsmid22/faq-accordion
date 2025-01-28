import accordions from "../data";
import starIcon from "../assets/images/icon-star.svg";
import Item from "./Item";
const Container = () => {
  return (
    <div className="font-work-sans w-[90%] md:w-[700px] h-fit bg-white z-20 p-7 rounded-xl flex flex-col gap-5">
      <div className="flex items-center gap-5">
        <img src={starIcon} alt="star-icon" />
        <h1 className="font-bold text-5xl">FAQs</h1>
      </div>
      <div className="space-y-7 md:space-y-4">
        {accordions.map((item, index) => (
          <Item
            title={item.title}
            text={item.text}
            key={index}
            defaultOpenValue={!index}
          />
        ))}
      </div>
    </div>
  );
};

export default Container;
