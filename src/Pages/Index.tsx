import { FC } from "react";
import Header from "../Components/Templates/Index/Header";
import SectionHeader from "../Components/Modules/SectionHeader";
import Services from "../Components/Templates/Index/Services";
import Projects from "../Components/Templates/Index/Projects";
import Customers from "../Components/Templates/Index/Customers";

const Index: FC = () => {
  return (
    <div>
      <Header />
      <SectionHeader englishTitle="Services" persianTitle="خدمات لارین" />
      <Services />
      <SectionHeader englishTitle="Projects" persianTitle="پروژه‌های لارین" />
      <Projects />
      <SectionHeader englishTitle="Customers" persianTitle="نظرات مشتریان" />
      <Customers />
    </div>
  );
};
export default Index;
