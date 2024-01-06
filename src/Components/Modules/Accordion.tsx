import { FC, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion: FC<AccordionProps> = ({ answer, question }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="max-w-7xl mx-auto mb-8">
      <div
        className="bg-white rounded-lg shadow-lg text-slate-500 text-2xl cursor-pointer flex items-center justify-between p-8"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <p className="font-bold">سوال: {question}</p>
        {!isExpanded ? (
          <FaPlus className="text-3xl" />
        ) : (
          <FaMinus className="text-3xl" />
        )}
      </div>
      <div
        className={`bg-gray-100 text-gray-400 p-4 overflow-hidden transition-opacity transition-height duration-300 ease-in-out ${
          isExpanded ? "opacity-100 h-auto" : "opacity-0 h-0"
        }`}
        style={{ maxHeight: isExpanded ? "1000px" : "0" }}
      >
        {answer}
      </div>
    </div>
  );
};
export default Accordion;
