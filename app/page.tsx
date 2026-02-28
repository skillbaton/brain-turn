"use client";

import { useState } from "react";
import Header    from "@/components/Header";
import Hero      from "@/components/Hero";
import LogoWall  from "@/components/LogoWall";
import Problem   from "@/components/Problem";
import Insight   from "@/components/Insight";
import Solution  from "@/components/Solution";
import Value     from "@/components/Value";
import Model     from "@/components/Model";
import Onboarding from "@/components/Onboarding";
import Grant     from "@/components/Grant";
import FAQ       from "@/components/FAQ";
import FinalCTA  from "@/components/FinalCTA";
import Footer    from "@/components/Footer";
import LeadModal from "@/components/LeadModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const open  = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  return (
    <>
      <Header    onOpenModal={open} />
      <main>
        <Hero       onOpenModal={open} />
        <LogoWall />
        <Problem />
        <Insight />
        <Solution />
        <Value />
        <Model />
        <Onboarding />
        <Grant      onOpenModal={open} />
        <FAQ />
        <FinalCTA   onOpenModal={open} />
      </main>
      <Footer />
      <LeadModal isOpen={modalOpen} onClose={close} />
    </>
  );
}
