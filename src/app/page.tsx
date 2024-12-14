import Image from "next/image";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div id="home" className="min-h-screen pt-16">
      <Navigation />
      {/* Hero Section */}
      <section id="hero" className="relative bg-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Realize todos os seus sonhos connosco</h1>
            <p className="mb-8">Faça a simulação do seu crédito sem custos e obtenha crédito para si!</p>
            
            <ContactForm 
              fields={[
                { name: 'name', type: 'text', placeholder: 'Nome', required: true },
                { name: 'email', type: 'email', placeholder: 'Email', required: true },
                { name: 'phone', type: 'tel', placeholder: 'Telemóvel', required: true }
              ]}
              className="bg-white p-6 rounded-lg shadow-lg"
            />
            
          </div>
        </div>
      </section>

      {/* MaxFinance Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4 md:px-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">MAXFINANCE VISTA NOVA</h2>
              <p className="text-lg text-gray-500">
                O Crédito Maxfinance Vista Nova é a solução para si! Ajudamos a realizar os seus sonhos com as melhores condições do mercado.
              </p>
            </div>
            <div className="relative h-64 md:h-96">
              <Image
                src="/business-meeting.jpg"
                alt="Business Meeting"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="bg-gray-50 py-16 md:px-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-black">PARCEIROS DE NEGÓCIO</h2>
          <Partners />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:px-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">O QUE OFERECEMOS</h2>
          <Services />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-16 md:px-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Fale conosco</h2>
              <div className="space-y-1 mt-8">
                <div className="flex flex-row items-center space-x-1">
                  <p>+351 22 375 06 02</p>
                  <p className="text-gray-400 text-sm">– Chamada para a rede fixa nacional</p>
                </div>
                <p>jverissimo@vistanova.pt</p>
                <p>Rua da Bélgica, 3434–H</p>
                <p>4400-209 Vila Nova de Gaia</p>
              </div>
              <div className="space-y-1 mt-8">
                <p className="font-bold text-xl">Jorge Veríssimo - Diretor Geral</p>
                <div className="flex flex-row items-center space-x-1">
                  <p>+351 96 509 18 53</p>
                  <p className="text-gray-400 text-sm">– Chamada para a rede fixa nacional</p>
                </div>
                <p>jverissimo@maxfinance.pt</p>
              </div>
              <div className="space-y-1 mt-8">
                <p className="font-bold text-lg">Ágatha Santos - Gestora de crédito</p>
                <div className="flex flex-row items-center space-x-1">
                  <p>+351 92 496 71 48</p>
                  <p className="text-gray-400 text-sm">– Chamada para a rede fixa nacional</p>
                </div>
                <p>agathabatista@maxfinance.pt</p>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Entre em Contacto</h2>
              <p className="text-gray-600 mb-6">
                Estamos aqui para ajudar. Entre em contacto connosco!
              </p>
              <ContactForm 
                fields={[
                  { name: 'name', type: 'text', placeholder: 'Nome', required: true },
                  { name: 'email', type: 'email', placeholder: 'Email', required: true },
                  { name: 'message', type: 'textarea', placeholder: 'Mensagem', required: true, rows: 4 }
                ]}
                className="space-y-4 mt-16"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
