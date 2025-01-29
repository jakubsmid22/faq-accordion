import { useState } from "react";
import minusIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg";

const Item = ({ title, text, defaultOpenValue }) => {
  const [isOpen, setIsOpen] = useState(defaultOpenValue);

  return (
    <div className="space-y-1 md:space-y-0">
      <div className="flex items-center">
        <strong
          className="hover:text-grayish-purple cursor-pointer w-[90%] "
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
        </strong>
        <div
          role="button"
          className="cursor-pointer transition-transform duration-300 ease-in-out w-[10%]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={isOpen ? minusIcon : plusIcon}
            alt={isOpen ? "minus-icon" : "plus-icon"}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-0" : "rotate-180"
            }`}
          />
        </div>
      </div>

      <p
        className={`text-grayish-purple overflow-hidden transition-[max-height] ease-in-out duration-300 ${
          !isOpen ? "max-h-0" : "max-h-96"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default Item;
