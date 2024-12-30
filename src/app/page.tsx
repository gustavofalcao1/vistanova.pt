'use client';
import { useState } from 'react';
import Image from "next/image";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Navigation from "@/components/Navigation";
import Map from "@/components/Map";
import LegalInfoPopup from "@/components/LegalInfoPopup";

export default function Home() {
  const [termsOpen, setTermsOpen] = useState(false);
  const [legalInfoOpen, setLegalInfoOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="min-h-screen pt-16">
      <Navigation scrollToSection={scrollToSection} />
      
      {/* Hero Section */}
      <section id="hero" className="relative bg-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Ajudamos os nossos clientes a decidirem melhor…</h1>
            <p className="text-lg mb-2">Intermediário de Crédito Vinculado - Registado no Banco de Portugal nº 2543</p>
          </div>
        </div>
      </section>

      {/* MaxFinance Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="flex flex-col max-w-6xl items-center container mx-auto px-4 md:px-24">
          <h2 className="text-2xl font-bold mb-12 text-gray-800">Analise a viabilidade do seu processo de crédito SEM CUSTOS connosco!</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xl text-gray-500 mb-6">
                A Vista Nova, empresa que atua no mercado português há 16 anos, é um Intermediário de Crédito Vinculado registado no Banco de Portugal. Os nossos serviços de intermediação de crédito não têm custos diretos para o cliente.
              </p>
              <p className="text-xl text-gray-500">
                Connosco não tem apenas um intermediário de crédito, tem um parceiro para a vida. Desde o início, a sua preocupação é a nossa, pois estaremos ao seu lado para ajudá-lo a encontrar a melhor solução para si.
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
          <h2 className="text-2xl font-bold text-center mb-12">OS NOSSOS SERVIÇOS</h2>
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
              <h2 className="text-2xl font-bold mb-6">Fale connosco</h2>
              <div className="space-y-1 lg:mt-24 mt-8 lg:space-y-4 space-y-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-2 lg:mb-8 mb-4">
                  <p className="font-bold text-lg">VISTA NOVA - Unipessoal, Lda.</p>
                </div>
                <div className="flex flex-col lg:flex-row lg:flex-row lg:items-center space-y-2 lg:space-x-2 mb-6">
                  <div className="flex items-center">
                    <Image
                      src="/icons/email-icon.svg"
                      alt="Email"
                      width={20}
                      height={20}
                      className="invert mr-2"
                    />
                    <a href="mailto:nova@maxfinance.pt" className='mr-4 hover:text-gray-300'>nova@maxfinance.pt</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/icons/email-icon.svg"
                      alt="Email"
                      width={20}
                      height={20}
                      className="invert"
                    />
                    <a href="mailto:jverissimo@vistanova.pt" className='hover:text-gray-300'>jverissimo@vistanova.pt</a>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/icons/phone-icon.svg"
                      alt="Telefone"
                      width={20}
                      height={20}
                      className="invert"
                    />
                    <a href="tel:+351223750602" className='hover:text-gray-300'>+351 22 375 06 02</a>
                  </div>
                  <p className="hidden lg:block text-gray-400 text-sm">-</p>
                  <p className="text-gray-400 text-sm ml-7 lg:ml-0">Chamada para a rede fixa nacional</p>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/icons/mobile-icon.svg"
                      alt="Telemóvel"
                      width={20}
                      height={20}
                      className="invert"
                    />
                    <a href="tel:+351965091853" className='hover:text-gray-300'>+351 96 509 18 53</a>
                  </div>
                  <p className="hidden lg:block text-gray-400 text-sm">-</p>
                  <p className="text-gray-400 text-sm ml-7 lg:ml-0">Chamada para rede móvel nacional</p>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-2">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/icons/mobile-icon.svg"
                      alt="Telemóvel"
                      width={20}
                      height={20}
                      className="invert"
                    />
                    <a href="tel:+351924967148" className='hover:text-gray-300'>+351 92 496 71 48</a>
                  </div>
                  <p className="hidden lg:block text-gray-400 text-sm">-</p>
                  <p className="text-gray-400 text-sm ml-7 lg:ml-0">Chamada para rede móvel nacional</p>
                </div>
              </div>
              <div className="mt-8 text-md text-gray-400">
                <p>Horário de Atendimento: Segunda a Sexta-feira, das 9h30 às 13h00 | 14h00 às 18h30</p>
              </div>
            </div>
            <div className="w-full h-full min-h-[450px]">
              <h2 className="text-2xl font-bold">Onde estamos</h2>
              <div className="space-y-1 mt-8 mb-4">
                <p>Rua da Bélgica, 3434–H, 4400-209 - Vila Nova de Gaia</p>
              </div>
              <Map />
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Regulatory Information */}
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Sobre Nós</h4>
              <p className="text-sm">
                Vista Nova - Intermediário de Crédito Vinculado<br />
                Registado no Banco de Portugal nº 2543
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Documentos</h4>
              <div className="space-y-2 text-sm">
                <p>
                  <button onClick={() => setLegalInfoOpen(true)} className="text-gray-400 hover:text-gray-300">
                    Informação Complementar
                  </button>
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Links Úteis</h4>
              <div className="space-y-2 text-sm">
                <p>
                  <a href="https://clientebancario.bportugal.pt" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                    Portal do Cliente Bancário
                  </a>
                </p>
                <p>
                  <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                    Livro de Reclamações
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="text-center text-xs border-t border-gray-700 pt-4">
            <p>&copy; {new Date().getFullYear()} Vista Nova. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <LegalInfoPopup isOpen={legalInfoOpen} onClose={() => setLegalInfoOpen(false)} />
    </div>
  );
}
