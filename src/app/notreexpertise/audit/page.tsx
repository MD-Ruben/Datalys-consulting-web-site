import DomainSection from "@/components/DomainSection";
import AboutAudit from "@/components/AboutAudit";
import RayonIntervention from "@/components/RayonIntervention";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page d'audit | DATALYS Consulting",
  description: "La page d'audit de DATALYS Consulting",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="La page d'audit"
        description="Infrastructure et analyse des données. Envisager de manière synergique des catalyseurs de changement ayant un impact sur les infrastructures flexibles."
      />
      <AboutAudit />
      <DomainSection />
      <RayonIntervention />
    </>
  );
};

export default AboutPage;
