import FooterMinimal from '@/components/sections/footer/FooterMinimal';
import NavbarDropdown from '@/components/ui/NavbarDropdown';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Facebook, Instagram } from "lucide-react";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#"
  },
  {
    "name": "Macarons",
    "href": "#macarons"
  },
  {
    "name": "Cakes & Sweet Bars",
    "href": "#cakes"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  }
];

  return (
    <StyleProvider buttonVariant="stagger" siteBackground="noise" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarDropdown
      logo="Makronky od holky"
      ctaButton={{
        text: "Request Quote",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterMinimal
      brand="Makronky od holky © 2024"
      copyright="Handcrafted with passion in Kutná Hora."
      socialLinks={[
        {
          icon: Instagram,
          href: "https://instagram.com",
        },
        {
          icon: Facebook,
          href: "https://facebook.com",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
