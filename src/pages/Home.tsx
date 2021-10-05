import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { SectionAboutUs } from "../components/SectionAboutUs"
import { SectionBanner } from "../components/SectionBanner"
import { SectionContact } from "../components/SectionContact"
import { SectionMainStores } from "../components/SectionMainStores"
import { SectionNewsletter } from "../components/SectionNewsletter"
import { SectionOurSolutions } from "../components/SectionOurSolutions"

import dataBanner from '../data/dataBanner';
import dataMainStores from '../data/dataMainStores';
import dataOurSolutions from '../data/dataOurSolutions';
import dataAboutUs from '../data/dataAboutUs';
import dataContact from '../data/dataContact';

export const Home = () => {
  return (
    <>
      <Header />
      <SectionBanner {...dataBanner} />
      <SectionMainStores {...dataMainStores} />
      <SectionOurSolutions {...dataOurSolutions} />
      <SectionAboutUs {...dataAboutUs} />
      <SectionContact {...dataContact} />
      <SectionNewsletter />
      <Footer />

    </>
  )
}