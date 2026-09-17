import Header        from "@/components/Header";
import SplashScreen  from "@/components/SplashScreen";
import Hero          from "@/components/Hero";
import KPIStats      from "@/components/KPIStats";
import Problem       from "@/components/Problem";
import Insight       from "@/components/Insight";
import Solution      from "@/components/Solution";
import Courses       from "@/components/Courses";
import FreePlan      from "@/components/FreePlan";
import Value         from "@/components/Value";
import Support       from "@/components/Support";
import Industries    from "@/components/Industries";
import Credibility   from "@/components/Credibility";
import Model         from "@/components/Model";
import Onboarding    from "@/components/Onboarding";
import Survey        from "@/components/Survey";
import FAQ           from "@/components/FAQ";
import ContactForm   from "@/components/ContactForm";
import Footer        from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Header />
      <main>
        {/* Hero has its own stagger — no wrapper needed */}
        <Hero />
        <KPIStats />
        <FadeInSection><Problem /></FadeInSection>
        <FadeInSection><Insight /></FadeInSection>
        <FadeInSection><Solution /></FadeInSection>
        <FadeInSection><Courses /></FadeInSection>
        <FadeInSection><FreePlan /></FadeInSection>
        <FadeInSection><Value /></FadeInSection>
        <FadeInSection><Support /></FadeInSection>
        <FadeInSection><Industries /></FadeInSection>
        <FadeInSection><Credibility /></FadeInSection>
        <FadeInSection><Model /></FadeInSection>
        <FadeInSection><Onboarding /></FadeInSection>
        <FadeInSection><Survey /></FadeInSection>
        <FadeInSection><FAQ /></FadeInSection>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
