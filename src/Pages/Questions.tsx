import Accordion from "../Components/Modules/Accordion";
import BreadCrumb from "../Components/Modules/BreadCrumb";
import SectionHeader from "../Components/Modules/SectionHeader";

const Questions = () => {
  return (
    <div className="container">
      <BreadCrumb route="سوالات متداول" />
      <SectionHeader englishTitle="Questions" persianTitle="سوالات متداول" />
      <div className="my-32">
        <Accordion answer="" question="" />
        <Accordion answer="" question="" />
        <Accordion answer="" question="" />
        <Accordion answer="" question="" />
        <Accordion answer="" question="" />
        <Accordion answer="" question="" />
      </div>
    </div>
  );
};
export default Questions;
