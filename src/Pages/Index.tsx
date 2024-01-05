import { FC } from "react";
import Header from "../Components/Templates/Index/Header";
import SectionHeader from "../Components/Modules/SectionHeader";
import Services from "../Components/Templates/Index/Services";

const Index: FC = () => {
  return (
    <div>
      <Header />
      <SectionHeader englishTitle="Services" persianTitle="خدمات لارین" />
      <Services />
    </div>
  );
};
export default Index;
