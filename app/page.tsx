"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Insight from "@/components/Insight";
import Solution from "@/components/Solution";
import Value from "@/components/Value";
import Model from "@/components/Model";
import Grant from "@/components/Grant";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Header onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <Problem />
        <Insight />
        <Solution />
        <Value />
        <Model />
        <Grant onOpenModal={openModal} />
        <FinalCTA onOpenModal={openModal} />
      </main>
      <Footer />
      <LeadModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
