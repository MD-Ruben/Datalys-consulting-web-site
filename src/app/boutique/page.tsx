import PageNotFound from "@/components/PageNotFound";
import Breadcrumb from "@/components/Common/Breadcrumb";

import BestSellersProducts from "@/components/modules/website/home/BestSellersProducts";
import BrandList from "@/components/modules/website/home/BrandList";
import Cta from "@/components/modules/website/home/Cta";
import FeaturesProducts from "@/components/modules/website/home/FeaturesProducts";
import Newletter from "@/components/modules/website/home/Newletter";
import Payments from "@/components/modules/website/home/Payments";
import TopCategories from "@/components/modules/website/home/TopCategories";
//import * as React from "react";
//import { mergeOpenGraph } from "../../../../lib/mergeOpenGraph";

import { Metadata } from "next";
import Banner2 from "@/components/modules/website/home/Banner2";

export const metadata: Metadata = {
  title: "Boutique | DATALYS Consulting",
  description: "La page boutique de DATALYS Consulting",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Banner2 />
      <Payments />
      <TopCategories />
      <FeaturesProducts />
      <Cta />
      <BestSellersProducts />
      <BrandList />
      <Newletter />
    </>
  );
}

const Page = () => {
  return (
    <>
      <Breadcrumb
        pageName="Boutique"
        description="Infrastructure et analyse des données. Envisager de manière synergique des catalyseurs de changement ayant un impact sur les infrastructures flexibles."
      />
      
    </>
  );
};

;
