import { FC } from "react";

interface SectionHeaderProps {
  persianTitle: string;
  englishTitle: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({
  englishTitle,
  persianTitle,
}) => {
  return (
    <div className="flex justify-center relative mb-14">
      <h2 className="font-IRANSans_Black text-3xl">{persianTitle}</h2>
      <div className="absolute -top-6">
        <span className="font-IRANSans_Black text-6xl text-opacity-10 text-stone-900">
          {englishTitle}
        </span>
      </div>
      <div className="bg-orange-200 w-20 h-1.5 rounded-full absolute top-10"></div>
    </div>
  );
};
export default SectionHeader;
