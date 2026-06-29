"use client";

import { SectionWrapper } from "@/app/components/HigherOrderComponents";
import BackgroundGlow from "./layout/BackgroundGlow";
import SectionContainer from "./layout/SectionContainer";
import ContactHeader from "./contact/ContactHeader";
import ContactForm from "./contact/ContactForm";
import DeveloperDesk from "./contact/DeveloperDesk";
import ContactSocials from "./contact/ContactSocials";

function Contact() {
  return (
    <SectionContainer id="contact" className="relative w-full">
      {/* BackgroundGlow is a sibling, spanning full width */}
      <BackgroundGlow />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <ContactHeader />

        {/* Using a standard grid with a wide gap to separate form and desk */}
        <div className="mt-20 grid items-start gap-24 lg:grid-cols-2">
          <ContactForm />
          {/* DeveloperDesk wrapper with padding to contain floating elements */}
          <div className="flex w-full justify-center px-12 lg:px-0">
            <DeveloperDesk />
          </div>
          <div className="lg:col-span-2">
  <ContactSocials />
</div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default SectionWrapper(Contact, "contact");