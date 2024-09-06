import PageNotFound from "@/components/PageNotFound";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page 404 | DATALYS Consulting",
  description: "La page 404 de DATALYS Consulting",
  // other metadata
};

const Page = () => {
  return (
    <>
      <Breadcrumb
        pageName="La page 404"
        description="Infrastructure et analyse des données. Envisager de manière synergique des catalyseurs de changement ayant un impact sur les infrastructures flexibles."
      />
      <PageNotFound />
    </>
  );
};

export default Page;
