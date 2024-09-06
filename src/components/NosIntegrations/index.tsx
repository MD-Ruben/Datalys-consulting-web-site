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

const NosIntegrations = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container">
        <SectionTitle
          title="Ce que nous intégrons"
          paragraph="Rechercher de manière dynamique une convergence fiable plutôt que d'améliorer les processus 24 heures sur 24 et 7 jours sur 7. Développer intrinsèquement un service à la clientèle de bout en bout sans disposer d'un grand nombre de données.

"
          center
        />
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
                    backgroundImage: `url("/images/integration/cloud.png")`,
                  }}
                />
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20" />
                <div className="relative flex flex-col gap-3">
                  <RxAccessibility className="h-[32px] w-[32px] text-primary group-hover:text-blue-400" />
                  <h1 className="text-xl lg:text-2xl">Intégration</h1>
                  <p className="lg:text-[18px]">Cloud</p>
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
                      backgroundImage: `url("/images/integration/DataCenter.jpg")`,
                    }}
                  />
                  <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20" />
                  <div className="relative flex flex-col gap-3">
                    <RxAccessibility className="h-[32px] w-[32px] text-primary group-hover:text-blue-400" />
                    <h1 className="text-xl lg:text-2xl">Intégration</h1>
                    <p className="lg:text-[18px]">Data center</p>
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
                      backgroundImage: `url("/images/integration/reseau.jpg")`,
                    }}
                  />
                  <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20" />
                  <div className="relative flex flex-col gap-3">
                    <RxAccessibility className="h-[32px] w-[32px] text-primary group-hover:text-blue-400" />
                    <h1 className="text-xl lg:text-2xl">Intégration</h1>
                    <p className="lg:text-[18px]">Réseau</p>
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
                      backgroundImage: `url("/images/integration/sauvegarde.jpg")`,
                    }}
                  />
                  <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20" />
                  <div className="relative flex flex-col gap-3">
                    <RxAccessibility className="h-[32px] w-[32px] text-primary group-hover:text-blue-400" />
                    <h1 className="text-xl lg:text-2xl">Intégration</h1>
                    <p className="lg:text-[18px]">Sauvegarde</p>
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
                      backgroundImage: `url("/images/integration/supervision.jpg")`,
                    }}
                  />
                  <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20" />
                  <div className="relative flex flex-col gap-3">
                    <RxAccessibility className="h-[32px] w-[32px] text-primary group-hover:text-blue-400" />
                    <h1 className="text-xl lg:text-2xl">Intégration</h1>
                    <p className="lg:text-[18px]">Supervision</p>
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
                      backgroundImage: `url("/images/integration/security.jpg")`,
                    }}
                  />
                  <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20" />
                  <div className="relative flex flex-col gap-3">
                    <RxAccessibility className="h-[32px] w-[32px] text-primary group-hover:text-blue-400" />
                    <h1 className="text-xl lg:text-2xl">Intégration</h1>
                    <p className="lg:text-[18px]">Sécurité</p>
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
                      backgroundImage: `url("/images/integration/Virtualization.jpg")`,
                    }}
                  />
                  <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20" />
                  <div className="relative flex flex-col gap-3">
                    <RxAccessibility className="h-[32px] w-[32px] text-primary group-hover:text-blue-400" />
                    <h1 className="text-xl lg:text-2xl">Intégration</h1>
                    <p className="lg:text-[18px]">Virtualisation</p>
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
                      backgroundImage: `url("/images/integration/serveur-stockage.jpg")`,
                    }}
                  />
                  <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20" />
                  <div className="relative flex flex-col gap-3">
                    <RxAccessibility className="h-[32px] w-[32px] text-primary group-hover:text-blue-400" />
                    <h1 className="text-xl lg:text-2xl">Intégration</h1>
                    <p className="lg:text-[18px]">Serveurs et stockage</p>
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

export default NosIntegrations;
