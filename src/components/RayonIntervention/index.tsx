"use client";
import SectionTitle from "../Common/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { RxAccessibility } from "react-icons/rx";

import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";

const RayonIntervention = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="mx-auto mb-14 max-w-[560px] text-center">
          <h2 className="font-Title mb-4 text-center text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            Notre rayon d'intervention
          </h2>
          <p className="text-center text-base !leading-relaxed text-body-color md:text-lg">
            Rechercher de manière dynamique une convergence fiable plutôt que
            d'améliorer les processus 24 heures sur 24 et 7 jours sur 7.
            Développer intrinsèquement un service à la clientèle de bout en bout
            sans disposer d'un grand nombre de données.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              700: {
                slidesPerView: 4,
                spaceBetween: 12,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="w-full"
          >
            <SwiperSlide>
              <div className="group relative mb-20 flex h-[250px] w-[215px] cursor-pointer flex-col gap-6 overflow-hidden rounded-xl px-6 py-8 text-white shadow-lg lg:h-[400px] lg:w-[350px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url("/images/audit/security-network-device-config-audit.jpg")`,
                  }}
                />
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20" />
                <div className="relative flex flex-col gap-3">
                  <RxAccessibility className="h-[32px] w-[32px] text-primary group-hover:text-blue-400" />
                  <h1 className="text-xl lg:text-2xl">AUDIT</h1>
                  <p className="lg:text-[18px]">
                    Audit de la configuration des services
                  </p>
                </div>
                <RxArrowTopRight className="absolute bottom-5 left-5 h-[35px] w-[35px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="group relative mb-20 flex h-[250px] w-[215px] cursor-pointer flex-col gap-6 overflow-hidden rounded-xl px-6 py-8 text-white shadow-lg lg:h-[400px] lg:w-[350px]">
                <Link href="/notreexpertise/audit">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url("/images/audit/SR1-scaled.jpg")`,
                    }}
                  />
                  <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20" />
                  <div className="relative flex flex-col gap-3">
                    <RxAccessibility className="h-[32px] w-[32px] text-primary group-hover:text-blue-400" />
                    <h1 className="text-xl lg:text-2xl">AUDIT </h1>
                    <p className="lg:text-[18px]">Audit des architectures </p>
                  </div>
                  <RxArrowTopRight className="absolute bottom-5 left-5 h-[35px] w-[35px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="group relative mb-20 flex h-[250px] w-[215px] cursor-pointer flex-col gap-6 overflow-hidden rounded-xl px-6 py-8 text-white shadow-lg lg:h-[400px] lg:w-[350px]">
                <Link href="/notreexpertise/audit">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url("/images/audit/consultant-informtique-architecte-reseau-card.jpg")`,
                    }}
                  />
                  <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20" />
                  <div className="relative flex flex-col gap-3">
                    <RxAccessibility className="h-[32px] w-[32px] text-primary group-hover:text-blue-400" />
                    <h1 className="text-xl lg:text-2xl">AUDIT </h1>
                    <p className="lg:text-[18px]">Audit de sécurité</p>
                  </div>
                  <RxArrowTopRight className="absolute bottom-5 left-5 h-[35px] w-[35px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="group relative mb-20 flex h-[250px] w-[215px] cursor-pointer flex-col gap-6 overflow-hidden rounded-xl px-6 py-8 text-white shadow-lg lg:h-[400px] lg:w-[350px]">
                <Link href="/notreexpertise/audit">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url("/images/audit/it_guy-1.jpg")`,
                    }}
                  />
                  <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20" />
                  <div className="relative flex flex-col gap-3">
                    <RxAccessibility className="h-[32px] w-[32px] text-primary group-hover:text-blue-400" />
                    <h1 className="text-xl lg:text-2xl">AUDIT </h1>
                    <p className="lg:text-[18px]">Analyse des procédés</p>
                  </div>
                  <RxArrowTopRight className="absolute bottom-5 left-5 h-[35px] w-[35px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default RayonIntervention;
