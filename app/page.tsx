"use client";

import Header      from "@/components/Header";
import Hero        from "@/components/Hero";
import KPIStats    from "@/components/KPIStats";
import Problem     from "@/components/Problem";
import Insight     from "@/components/Insight";
import Solution    from "@/components/Solution";
import Value       from "@/components/Value";
import Model       from "@/components/Model";
import Onboarding  from "@/components/Onboarding";
import Grant       from "@/components/Grant";
import FAQ         from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer      from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <KPIStats />
        <Problem />
        <Insight />
        <Solution />
        <Value />
        <Model />
        <Onboarding />
        <Grant />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
