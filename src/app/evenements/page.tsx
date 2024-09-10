import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import Events from "@/components/Events";

export const metadata: Metadata = {
  title: "Evénement | DATALYS Consulting",
  description: "La page d'événement de DATALYS Consulting",
  // other metadata
};

const Page = () => {
  return (
    <>
      <Breadcrumb
        pageName="Evénement"
        description="Infrastructure et analyse des données. Envisager de manière synergique des catalyseurs de changement ayant un impact sur les infrastructures flexibles."
      />
      <Events />
    </>
  );
};

export default Page;
