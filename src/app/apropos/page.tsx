import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A propos de nous | DATALYS Consulting",
  description: "La page d'apropos de nous de DATALYS Consulting",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="A propos de nous"
        description="Infrastructure et analyse des données. Envisager de manière synergique des catalyseurs de changement ayant un impact sur les infrastructures flexibles."
      />
      <AboutSectionTwo />
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
