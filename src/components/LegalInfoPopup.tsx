import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface LegalInfoPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LegalInfoPopup({ isOpen, onClose }: LegalInfoPopupProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-bold leading-6 text-gray-900"
                >
                  Informação complementar à atividade de Intermediação de Crédito
                </Dialog.Title>

                <div className="max-h-[60vh] overflow-y-auto">
                  <div className="mt-8 space-y-4">
                    <section>
                      <h4 className="font-semibold text-gray-900">Responsável</h4>
                      <p className="text-gray-600">
                        Jorge Verissimo
                      </p>
                    </section>
                    <section>
                      <h4 className="font-semibold text-gray-900">Estabelecimento</h4>
                      <p className="text-gray-600">
                        Vista Nova, Unipessoal Lda.<br />
                        Rua da Bélgica Nr.º 3434, H<br />
                        4400-209 Sta. Marinha - Vila Nova de Gaia<br />
                        Portugal
                      </p>
                    </section>
                  </div>
                  <div className="mt-8 space-y-4">
                    <section>
                      <h4 className="font-semibold text-gray-900">Número do registo</h4>
                      <p className="text-gray-600">
                        2543 | <a className='hover:text-gray-500 underline' href="https://www.bportugal.pt/intermediariocreditofar/vista-nova-unipessoal-lda" target="_blank" rel="noopener noreferrer">Consultar</a>
                      </p>
                    </section>
                    <section>
                      <h4 className="font-semibold text-gray-900">Categoria</h4>
                      <p className="text-gray-600">
                        Intermediário de Crédito Vinculado
                      </p>
                    </section>
                    <section>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">
                        <a className="hover:text-gray-500 underline" href="mailto:nova@maxfinance.pt" target="_blank" rel="noopener noreferrer">nova@maxfinance.pt</a>
                      </p>
                    </section>
                    <section>
                      <h4 className="font-semibold text-gray-900">Telefone</h4>
                      <p className="text-gray-500">
                      <a className="text-gray-600 font-weight-400 hover:text-gray-500 underline" href="tel:+351223750602" target="_blank" rel="noopener noreferrer">+351 22 375 06 02</a> - Chamada para a rede fixa nacional
                      </p>
                    </section>
                  </div>
                  <div className="mt-8 space-y-4 mb-8">
                    <section>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Responsabilidade Civil</h4>
                      <div className="flex flex-row space-x-16">
                        <section>
                          <h4 className="font-semibold text-gray-900">Crédito Hipotecário</h4>
                          <p className="text-gray-500">
                            2511954 – Hiscox S.A. Sucursal em Portugal<br />
                            Válido de 2023-10-20 até 2024-10-19
                          </p>
                        </section>
                        <section>
                          <h4 className="font-semibold text-gray-900">Crédito Hipotecário</h4>
                          <p className="text-gray-500">
                            2511955 – Hiscox S.A. Sucursal em Portugal<br />
                            Válido de 2023-10-20 até 2024-10-19
                          </p>
                        </section>
                      </div>
                    </section>
                    <section>
                      <h4 className="font-semibold text-gray-900 mb-2">Mutuantes com contrato de vinculação</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        <li>ABANCA CORPORACIÓN BANCARIA, SA, SUCURSAL EM PORTUGAL</li>
                        <li>BANCO CTT, SA</li>
                        <li>BANKINTER, SA - SUCURSAL EM PORTUGAL</li>
                        <li>BANCO BPI, SA</li>
                        <li>CAIXA GERAL DE DEPÓSITOS, SA</li>
                        <li>BANCO CREDIBOM, SA</li>
                        <li>BANCO BIC PORTUGUÊS, SA</li>
                        <li>MDS LINK SOLUTIONS, LDA</li>
                        <li>NOVO BANCO, SA</li>
                        <li>BANCO SANTANDER TOTTA, SA<br />UNION DE CRÉDITOS INMOBILIÁRIOS, S.A., ESTABLECIMIENTO</li>
                        <li>FINANCIERO DE CRÉDITO (SOCIEDAD UNIPERSONAL) - SUCURSAL EM PORTUGAL</li>
                      </ul>
                    </section>
                    <section>
                      <h4 className="font-semibold text-gray-900 mb-2">Centros de Resolução de Conflitos</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        <li><a className="hover:text-gray-500 underline" href="https://www.cicap.pt" target="_blank" rel="noopener noreferrer">CICAP</a> (Centro Nacional de Informação e Arbitragem de Conflitos de Consumo)</li>
                        <li><a className="hover:text-gray-500 underline" href="https://www.cniacc.pt/pt/" target="_blank" rel="noopener noreferrer">CNIACC</a> (Tribunal Arbitral de Consumo)</li>
                      </ul>
                    </section>
                    <section>
                      <h4 className="font-semibold text-gray-900 mb-2">Restrição de Valores</h4>
                      <p className="text-gray-600">
                        Está vedado ao Intermediário de Crédito o recebimento ou entrega de quaisquer valores relacionados com a formação, 
                        a execução e o cumprimento antecipado dos contratos de crédito, nos termos do artigo 46° do Decreto-Lei nº 81-C/2017 
                        de 07 de Julho relativo ao Regime Jurídico dos Intermediários de Crédito.
                      </p>
                    </section>
                    <section>
                      <h4 className="font-semibold text-gray-900 mb-2">Entidade Supervisora</h4>
                      <p className="text-gray-600">
                        A atividade de Intermediação de Crédito está sujeita à supervisão do <a className="hover:text-gray-500 underline" href="http://www.bportugal.pt" target="_blank" rel="noopener noreferrer">Banco de Portugal</a>
                      </p>
                    </section>
                    <section>
                      <h4 className="font-semibold text-gray-900 mb-2">Serviços relacionados com Crédito Hipotecário e com Crédito a Consumidores</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        <li>Apresentação ou proposta de contratos de crédito a consumidores</li>
                        <li>Assistência a consumidores, mediante a realização de atos preparatórios ou de outros trabalhos de gestão pré-contratual relativamente a contratos de crédito que não tenham sido por si apresentados ou propostos</li>
                        <li>Celebração de contratos de crédito com consumidores em nome dos mutuantes</li>
                        <li>Serviços de consultoria</li>
                      </ul>
                    </section>
                    <section>
                      <h4 className="font-semibold text-gray-900 mb-2">Efetuar Reclamações</h4>
                      <p className="text-gray-600 mb-2">
                        Em caso de processo de reclamação, a mesma deverá ser apresentada das seguintes formas:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        <li>Através do preenchimento do livro de reclamações, disponível em <a className="hover:text-gray-500 underline" href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer">www.livroreclamacoes.pt</a></li>
                        <li>Diretamente ao Banco de Portugal, através de carta ou do link <a className="hover:text-gray-500 underline" href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer">www.livroreclamacoes.pt</a></li>
                        <li>As reclamações também podem ser efetuadas presencialmente na morada da empresa</li>
                      </ul>
                    </section>
                  </div>
                </div>

                <div className="mt-6 text-right">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-sm font-medium text-gray-100 hover:bg-gray-100 hover:border-gray-900 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
                    onClick={onClose}
                  >
                    Fechar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
