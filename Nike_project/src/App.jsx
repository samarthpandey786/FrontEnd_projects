import { CustomerReview, Hero, Footer,PopularPorducts, Services, SpecialOffer, Subscribe, SuperQuality } from "./sections";
import Nav from "../src/components/Nav"

const App = () => (
    <main  className="relative">
      <Nav/> 
      <section className="xl:padding-l wide:padding-r padding-b ">
        <Hero/>
      </section>

      <section className="padding">
        <PopularPorducts/> 
      </section>

      <section className="padding">
        <SuperQuality/>
      </section>

      <section className="padding-x py-10">
        <Services/> 
      </section>

      <section className="padding">
        <SpecialOffer/> 
      </section>

      <section className="padding bg-pale-blue">
        <CustomerReview/>
      </section>

      <section className="padding-x sm:py-32 py-16 w-full">
       <Subscribe/> 
      </section>

      <section className="padding-x bg-black padding-t pb-8 text-white">
        <Footer/> 
      </section>
    </main>
)

export default App;