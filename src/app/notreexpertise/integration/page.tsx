import AboutIntegration from "@/components/AboutIntegration";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import DomainIntegration from "@/components/DomainIntegration";
import NosIntegrations from "@/components/NosIntegrations";

export const metadata: Metadata = {
  title: "Intégration | DATALYS Consulting",
  description: "La page d'intégration de DATALYS Consulting",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Intégration"
        description="Infrastructure et analyse des données. Envisager de manière synergique des catalyseurs de changement ayant un impact sur les infrastructures flexibles."
      />
      <AboutIntegration />
      <DomainIntegration />
      <NosIntegrations />
    </>
  );
};

export default AboutPage;
