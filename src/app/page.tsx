import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Navigation from "@/components/Navigation";
import Map from "@/components/Map";

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
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Partners Section */}
      <Partners />

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-16 md:px-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Fale conosco</h2>
              <div className="space-y-1 mt-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-2">
                  <p>+351 22 375 06 02</p>
                  <p className="hidden lg:block text-gray-400 text-sm">-</p>
                  <p className="text-gray-400 text-sm">Chamada para a rede fixa nacional</p>
                </div>
                <p>jverissimo@vistanova.pt</p>
                <p>Rua da Bélgica, 3434–H</p>
                <p>4400-209 Vila Nova de Gaia</p>
              </div>
              <div className="space-y-1 mt-8">
                <p className="font-bold text-xl">Jorge Veríssimo - Diretor Geral</p>
                <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-2">
                  <p>+351 96 509 18 53</p>
                  <p className="hidden lg:block text-gray-400 text-sm">-</p>
                  <p className="text-gray-400 text-sm">Chamada para a rede fixa nacional</p>
                </div>
                <p>jverissimo@maxfinance.pt</p>
              </div>
              <div className="space-y-1 mt-8">
                <p className="font-bold text-lg">Ágatha Santos - Gestora de Crédito</p>
                <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-2">
                  <p>+351 92 496 71 48</p>
                  <p className="hidden lg:block text-gray-400 text-sm">-</p>
                  <p className="text-gray-400 text-sm">Chamada para a rede fixa nacional</p>
                </div>
                <p>agathabatista@maxfinance.pt</p>
              </div>
            </div>
            <div className="w-full h-full min-h-[450px]">
              <Map />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
