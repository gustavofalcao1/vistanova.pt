import Image from 'next/image';

const partners = [
  { name: 'Abanca', logo: '/partners/logo-abanca.png' },
  { name: 'BancoCTT', logo: '/partners/logo-bancoctt.png' },
  { name: 'Bankinter', logo: '/partners/logo-bankinter.png' },
  { name: 'BPI', logo: '/partners/logo-bpi.png' },
  { name: 'CGD', logo: '/partners/logo-cgd.png' },
  { name: 'Credibom', logo: '/partners/logo-credibom.png' },
  { name: 'EuroBic', logo: '/partners/logo-eurobic_abanca.png' },
  { name: 'Cofidis', logo: '/partners/logo-cofidis.png' },
  { name: 'Novobanco', logo: '/partners/logo-novobanco.png' },
  { name: 'Santander', logo: '/partners/logo-santander.png' },
  { name: 'UCI', logo: '/partners/logo-uci.png' },
];

export default function Partners() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
      {partners.map((partner) => 
        partner.name === 'Credibom' ||
        partner.name === 'Cofidis' ? (
          <div key={partner.name} className="flex items-center justify-center p-2">
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              width={140}
              height={60}
              className="object-contain"
            />
          </div>
        ) : partner.name === 'BP' ? (
          <div key={partner.name} className="flex items-center justify-center p-2">
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
        ) : partner.name === 'UCI' ? (
          <div key={partner.name} className="flex items-center justify-center p-2">
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              width={180}
              height={60}
              className="object-contain"
            />
          </div>
        ) : (
        <div key={partner.name} className="flex items-center justify-center p-2">
          <Image
            src={partner.logo}
            alt={`${partner.name} logo`}
            width={240}
            height={60}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}
