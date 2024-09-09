import React from "react";
import Container from "../../custom/Container";
import CategoryList from "./CategoryList";
import HomeSlide from "./HomeSlide";

export default function Banner2() {
  return (
    <section>
      <Container>
        <div className="grid grid-hero">
          <CategoryList className="hidden lg:flex grid-area-categories w-[280px] me-4" />
          <HomeSlide className="grid-area-swiper" />
        </div>
      </Container>
    </section>
  );
}
