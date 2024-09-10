"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const AboutIntegration = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-14 max-w-[560px] text-center">
          <h2 className="font-Title mb-4 text-center text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            Intégration
          </h2>
          <p className="text-center text-base !leading-relaxed text-body-color md:text-lg">
            Chez DATALYS, nous apportons une expertise réinventée sur notre
            offre d’intégration de Solutions. Notre objectif principal est de
            mettre un accent particulier sur la simplification de l’exploitation
            des services après notre prestation. Pour cela, nous intégrons avec
            exactitude les configurations telles que souhaitées par nos clients
          </p>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <img
                  src="/images/audit-title.jpg"
                  className="h-full w-full object-cover object-center"
                  alt="audit image"
                />
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
