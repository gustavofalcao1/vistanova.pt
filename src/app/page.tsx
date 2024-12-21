import Image from "next/image";
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
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold">Ajudamos os nossos clientes a decidirem melhor…</h1>
          </div>
        </div>
      </section>

      {/* MaxFinance Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="flex flex-col max-w-6xl items-center container mx-auto px-4 md:px-24">
          <h2 className="text-2xl font-bold mb-12 text-gray-800">Analise a viabilidade do seu processo de crédito SEM CUSTOS connosco!</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xl text-gray-500">
              A Vista Nova, empresa que atua no mercado Português há 16 anos, é um Intermediário de Crédito Vinculado registado no Banco de Portugal, com o nº de registo 2543.<br/><br/>Connosco não tem apenas um intermediário de crédito, tem um parceiro para a vida. Desde o início, a sua preocupação é a nossa, pois iremos estar ao seu lado, para ajudá-lo a encontrar a melhor solução para si.
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

      {/* Services Section */}
      <section id="services" className="py-16 md:px-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">O QUE OFERECEMOS</h2>
          <Services />
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="bg-gray-50 py-16 md:px-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">PARCEIROS DE NEGÓCIO</h2>
          <Partners />
        </div>
      </section>

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
