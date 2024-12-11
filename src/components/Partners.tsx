import Image from 'next/image';

const partners = [
  { name: 'Abanca', logo: '/partners/logo-abanca.png' },
  { name: 'BancoCTT', logo: '/partners/logo-bancoctt.png' },
  { name: 'Bankinter', logo: '/partners/logo-bankinter.png' },
  { name: 'Unicre', logo: '/partners/logo-unicre.png' },
  { name: 'Novobanco', logo: '/partners/logo-novobanco.png' },
  { name: 'UCI', logo: '/partners/logo-uci.png' },
  { name: 'Credibom', logo: '/partners/logo-credibom.png' },
  { name: 'Santander', logo: '/partners/logo-santander.png' },
  { name: 'BPI', logo: '/partners/logo-bpi.png' },
  { name: 'Cofidis', logo: '/partners/logo-cofidis.png' },
  { name: 'EuroBic', logo: '/partners/logo-eurobic_abanca.png' },
  { name: '4Finance', logo: '/partners/logo-4finance.png' },
];

export default function Partners() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
      {partners.map((partner) => 
        partner.name === 'Unicre' ||
        partner.name === 'Credibom' ||
        partner.name === 'Cofidis' ||
        partner.name === '4Finance' ? (
          <div key={partner.name} className="flex items-center justify-center p-2">
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              width={160}
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
