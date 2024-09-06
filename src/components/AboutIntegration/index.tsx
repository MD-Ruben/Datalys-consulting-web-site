"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const AboutIntegration = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Intégration"
          paragraph="Chez DATALYS, nous apportons une expertise réinventée sur notre offre d’intégration de Solutions. Notre objectif principal est de mettre un accent particulier sur la simplification de l’exploitation des services après notre prestation. Pour cela, nous intégrons avec exactitude les configurations telles que souhaitées par nos clients."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src="/images/audit-title.jpg" alt="audit image" fill />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default AboutIntegration;
