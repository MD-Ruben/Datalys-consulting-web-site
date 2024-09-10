"use client";
import { RxArrowTopRight } from "react-icons/rx";
import React from "react";
import SectionTitle from "../Common/SectionTitle";
import { Accordion, AccordionItem } from "@nextui-org/react";

const DomainFormations = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-full" data-wow-delay=".15s">
              <div className="mx-auto mb-14 max-w-full text-start">
                <h2 className="font-Title mb-4 text-start text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                  Formations
                </h2>
              </div>
              <Accordion>
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="Formations"
                  className="font-Title mb-4 rounded-lg border-2 border-[#29547A] p-3 text-left text-sm font-thin leading-loose tracking-wide text-black dark:text-white md:text-lg"
                >
                  <p>
                    En plus des offres d’Audit et d’Intégration de solutions,
                    l’une des offres que nous portons est la Formation. Dans
                    cette offre nous proposons des formations sur mesure dans
                    nos domaines couverts (Cloud, Infra Système, Energie &
                    Datacenter et Réseau & Sécurité). Nos formations sont
                    proposées à distance et en présentiel selon le type
                    formation et les exigences de mobilités de nos clients.
                  </p>
                  <p className="mt-2">
                    En plus des offres d’Audit et d’Intégration de solutions,
                    l’une des offres que nous portons est la Formation. Dans
                    cette offre nous proposons des formations sur mesure dans
                    nos domaines couverts (Cloud, Infra Système, Energie &
                    Datacenter et Réseau & Sécurité). Nos formations sont
                    proposées à distance et en présentiel selon le type
                    formation et les exigences de mobilités de nos clients.
                  </p>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-full" data-wow-delay=".15s">
              <div className="mx-auto mb-14 max-w-full text-start">
                <h2 className="font-Title mb-4 text-start text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                  Pourquoi apprendre avec vous ?
                </h2>
              </div>

              <Accordion defaultExpandedKeys={["1"]}>
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="Pourquoi apprendre avec vous ?"
                  className="font-Title mb-4 rounded-lg border-2 border-[#29547A] p-3 text-left text-sm font-thin leading-loose tracking-wide text-black dark:text-white md:text-lg"
                >
                  <p className="group flex items-center">
                    <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                    Formation en ligne ou en présentiel
                  </p>
                  <p className="group flex items-center">
                    <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                    Contenu accessible en tout instant et n’importe où
                  </p>
                  <p className="group flex items-center">
                    <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                    Des formateurs certifiés et qualifiés
                  </p>
                  <p className="group flex items-center">
                    <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                    Des modules adaptés, enrichis, transverses et diversifiés
                  </p>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainFormations;
