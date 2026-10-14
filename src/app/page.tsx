import { ContactDrawer } from "@/components/contact/ContactDrawer";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CinematicCarousel } from "@/components/carousel/CinematicCarousel";
import { CompanyStory } from "@/components/sections/CompanyStory";
import { ContactFinale } from "@/components/sections/ContactFinale";
import { EditorialChapterNav } from "@/components/sections/EditorialChapterNav";
import { PeopleGallery } from "@/components/sections/PeopleGallery";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <CinematicCarousel />
        <EditorialChapterNav />
        <CompanyStory />
        <ServicesShowcase />
        <PeopleGallery />
        <ContactFinale />
      </main>
      <Footer />
      <ContactDrawer />
    </>
  );
}
