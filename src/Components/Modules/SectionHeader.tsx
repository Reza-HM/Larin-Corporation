import { FC } from "react";
import { useLocation } from "react-router-dom";

interface SectionHeaderProps {
  persianTitle: string;
  englishTitle: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({
  englishTitle,
  persianTitle,
}) => {
  
  const location = useLocation();

  return (
    <div
      className={`flex justify-center relative ${
        location.pathname !== "/" ? "mt-20" : "mt-60"
      }`}
    >
      <h2 className="font-IRANSans_Black text-5xl">{persianTitle}</h2>
      <div className="absolute -top-8">
        <span className="font-IRANSans_Black text-7xl text-opacity-10 text-stone-900">
          {englishTitle}
        </span>
      </div>
      <div className="bg-orange-200 w-40 h-3 rounded-full absolute top-20"></div>
    </div>
  );
};
export default SectionHeader;
