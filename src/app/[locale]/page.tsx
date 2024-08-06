
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricingdemo";
import BaseLayout from "@/components/modules/BaseLayout"
import getIntl from '@/app/intl';

async function Home({ params: { locale } }: any) {
  const intl = await getIntl(locale, 'home');
  return (
    <BaseLayout intl={intl}>
      <div className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <LogoTicker />

        <Features />

        <ProductShowcase />
        <FAQs />
        <Pricing />

        <CallToAction />
      </div>
      <Footer />
    </BaseLayout>
  );
}
export default Home