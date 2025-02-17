import {
  Footer,
  Header,
  KeyProblems,
  TeamSection,
  CertificationSteps,
  AboutUs,
  Hero,
  Form,
  DocumentSection,
  RegistersClassifiers,
} from "@/widgets"

const Landing = () => {
  return (
    <div>
      <Header />
      <Hero />
      <KeyProblems />
      <CertificationSteps />
      <DocumentSection />
      <RegistersClassifiers />
      <AboutUs />
      <TeamSection />
      <Form />
      <Footer />
    </div>
  )
}

export { Landing }
