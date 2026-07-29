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
    "name": "Domů",
    "href": "#"
  },
  {
    "name": "Makronky",
    "href": "#macarons"
  },
  {
    "name": "Dorty a Sweet bary",
    "href": "#cakes"
  },
  {
    "name": "O nás",
    "href": "#about"
  },
  {
    "name": "Kontakt",
    "href": "#contact"
  }
];

  return (
    <StyleProvider buttonVariant="stagger" siteBackground="noise" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarDropdown
      logo="Makronky od holky"
      ctaButton={{
        text: "Nezávazně poptat",
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
      copyright="Ručně a s láskou vyráběné v Kutné Hoře."
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
