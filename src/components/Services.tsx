import Image from 'next/image';

const services = [
  {
    title: 'Crédito Habitação',
    description: 'Soluções de crédito à medida da casa dos seus sonhos.',
    icon: '/icons/home-icon.svg'
  },
  {
    title: 'Crédito Pessoal',
    description: 'Concretize os seus projetos pessoais ou familiares.',
    icon: '/icons/money-icon.svg'
  },
  {
    title: 'Crédito Consolidado',
    description: 'Reduza a mensalidade e proporcione mais folga no final do mês.',
    icon: '/icons/money-icon.svg'
  },
  {
    title: 'Crédito para Obras',
    description: 'Renove ou melhore seu imóvel.',
    icon: '/icons/tools-icon.svg'
  },
  {
    title: 'Autoconstrução',
    description: 'Crédito para construção da casa dos seus sonhos em terreno próprio.',
    icon: '/icons/construction-icon.svg'
  },
  {
    title: 'Aquisição de Terreno',
    description: 'Crédito para compra de terreno para construção de habitação.',
    icon: '/icons/land-icon.svg'
  },
  {
    title: 'Crédito Automóvel',
    description: 'Crédito para aquisição de viaturas novas ou usadas.',
    icon: '/icons/car-icon.svg'
  },
  {
    title: 'Cartões de Crédito',
    description: 'Soluções flexíveis de pagamento com vantagens exclusivos.',
    icon: '/icons/credit-card-icon.svg'
  }
];

export default function Services() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="[&>path]:stroke-current"
                  style={{
                    filter: 'invert(0%) sepia(2%) saturate(0%) hue-rotate(250deg) brightness(103%) contrast(108%)'
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-6 bg-white rounded-lg shadow-lg text-center">
        <p className="text-gray-700">
          Está vedado ao Intermediário de Crédito o recebimento ou entrega de quaisquer valores relacionados com a formação, 
          a execução e o cumprimento antecipado dos contratos de crédito, nos termos do artigo 46° do Decreto-Lei nº 81-C/2017 
          de 07 de Julho relativo ao Regime Jurídico dos Intermediários de Crédito.
        </p>
      </div>
    </div>
  );
}
