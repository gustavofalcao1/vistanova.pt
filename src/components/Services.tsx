import Image from 'next/image';

const services = [
  {
    icon: '/icons/home-icon.svg',
    title: 'Crédito Habitação',
    description: 'Realize o sonho da casa própria'
  },
  {
    icon: '/icons/money-icon.svg',
    title: 'Crédito Pessoal',
    description: 'Para as suas necessidades pessoais'
  },
  {
    icon: '/icons/car-icon.svg',
    title: 'Crédito Automóvel',
    description: 'Financie o seu veículo'
  },
  {
    icon: '/icons/building-icon.svg',
    title: 'Crédito Empresarial',
    description: 'Soluções para o seu negócio'
  }
];

export default function Services() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service) => (
        <div key={service.title} className="text-center">
          <div className="w-16 h-16 mx-auto mb-4">
            <Image
              src={service.icon}
              alt={service.title}
              width={64}
              height={64}
              className="invert brightness-0"
            />
          </div>
          <h3 className="font-bold mb-2">{service.title}</h3>
          <p className="text-sm text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  );
}
