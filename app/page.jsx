const phoneDisplay = '0329-6999777';
const whatsappUrl = 'https://wa.me/923296999777?text=Hi%20Abeer%20Nasim%20Salon%2C%20I%20would%20like%20to%20book%20an%20appointment.';
const instagramUrl = 'https://www.instagram.com/abeer_nasimsalon/';

const images = [
  {
    src: 'https://instagram.fmfg1-1.fna.fbcdn.net/v/t51.82787-15/673793548_17948114322140786_1920416476529970462_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=111&ig_cache_key=Mzg3OTU1MjAwMjY5OTQxMDcxOTE3OTQ4MTE0MzE5MTQwNzg2.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjU0MC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=9wmv-bqVI9YQ7kNvwG3cznb&_nc_oc=AdrhGwPPcXOiGf-ab-gw41d1JICzSGdjJlb-0A94rBiEeiNfStftHKqMVoArL4-KMg4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmfg1-1.fna&_nc_gid=oeq1HBBmEXpJxDsG9OMpVw&_nc_ss=7a22e&oh=00_Af9zPRbYLsK8qkceFXZR3VKSbHtdje0Z2v36qr0yGE40Gg&oe=6A3EE3FD',
    alt: 'Soft glam makeup client at Abeer Nasim Salon',
  },
  {
    src: 'https://instagram.fmfg1-1.fna.fbcdn.net/v/t51.82787-15/721441044_17955813909140786_1821106793354314347_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzkxNzA0MDg1MDgyNjUzNzIzMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTE1Mi5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=6DEuXSRCAfQQ7kNvwFTFudn&_nc_oc=AdrBc2tAC-jvE2IKqdFu0dpo0RUpx43EvEDOETTMlNQQe5gVuzGLcVbDEKMm4KNyX7w&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmfg1-1.fna&_nc_gid=oeq1HBBmEXpJxDsG9OMpVw&_nc_ss=7a22e&oh=00_Af8UQOCd1QeUyGjUGP33Ju0yQbe9cPEH0MWgYOjZ9UmhTw&oe=6A3EDAF6',
    alt: 'Hair and skin services promotion by Abeer Nasim Salon',
  },
  {
    src: 'https://instagram.fmfg1-1.fna.fbcdn.net/v/t51.82787-15/723041352_17956000005140786_5688003346799531000_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=106&ig_cache_key=MzkxNzk4MDg3Nzg1MzEwMDA5MjE3OTU2MDAwMDAyMTQwNzg2.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjcyMC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=pc09RiKKotIQ7kNvwFXcyWO&_nc_oc=Adr2O7YulD3wVedZaPRwH78UkAl_WonNPvVHE16rMQ4Q0fRwInYq9Ofe9r5gANJ7wR8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmfg1-1.fna&_nc_gid=oeq1HBBmEXpJxDsG9OMpVw&_nc_ss=7a22e&oh=00_Af_LUBjmDM6oGE5YcynPjq3gGFYCrpFJiMi63iSj75swPw&oe=6A3EF95D',
    alt: 'Hair highlights transformation at Abeer Nasim Salon',
  },
  {
    src: 'https://instagram.fmfg1-1.fna.fbcdn.net/v/t51.82787-15/720291384_17955877800140786_2857084285987093495_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=110&ig_cache_key=MzkxNzMzNTg5ODk0ODM4NTE1MDE3OTU1ODc3Nzk0MTQwNzg2.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjcyMC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=WRoh4miKFNYQ7kNvwGdvKvj&_nc_oc=AdpwL4fsaFuwu9jrvcCDy6MvPD-5UCw6WXtLKin0YUjz_r53-x8IWBi1WziOmAidW2Y&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmfg1-1.fna&_nc_gid=oeq1HBBmEXpJxDsG9OMpVw&_nc_ss=7a22e&oh=00_Af_c_SlTsHl62Hx3C8cj0Idv8naIq-xiNosCLrtbumULKw&oe=6A3EF201',
    alt: 'Dye and highlights service at Abeer Nasim Salon',
  },
];

const services = [
  'Bridal and party makeup',
  'Hair color, highlights and balayage',
  'Keratin and protein treatments',
  'Haircuts and styling',
  'Facials, skin care and spa services',
  'Manicure, pedicure and henna',
];

const highlights = [
  { label: '357', text: 'public posts' },
  { label: '4.3K+', text: 'Instagram followers' },
  { label: '11 AM - 8 PM', text: 'daily salon hours' },
];

export default function Home() {
  return (
    <main>
      <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(22, 38, 34, 0.92), rgba(22, 38, 34, 0.58), rgba(22, 38, 34, 0.1)), url(${images[0].src})` }}>
        <nav className="nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#deals">Deals</a>
          <a href="#visit">Visit</a>
        </nav>
        <div className="heroInner">
          <p className="eyebrow">Sector G, DHA Phase 2 Islamabad</p>
          <h1>Abeer Nasim Salon</h1>
          <p className="lead">Bridal glam, party makeup, hair color, spa care and everyday salon appointments from one WhatsApp booking point.</p>
          <div className="heroActions">
            <a className="primary" href={whatsappUrl}>Book on WhatsApp</a>
            <a className="secondary" href={`tel:+923296999777`}>Call {phoneDisplay}</a>
          </div>
        </div>
      </section>

      <section className="stats" aria-label="Salon profile highlights">
        {highlights.map((item) => (
          <div className="stat" key={item.text}>
            <strong>{item.label}</strong>
            <span>{item.text}</span>
          </div>
        ))}
      </section>

      <section id="services" className="section servicesSection">
        <div className="sectionHeader">
          <p className="eyebrow dark">Services</p>
          <h2>Salon treatments grouped for faster booking.</h2>
        </div>
        <div className="serviceGrid">
          {services.map((service) => (
            <div className="service" key={service}>{service}</div>
          ))}
        </div>
      </section>

      <section id="deals" className="section splitBand">
        <div>
          <p className="eyebrow dark">Current focus</p>
          <h2>Hair, skin and glam offers can be kept current without reposting flyers.</h2>
          <p>Use this page for searchable service menus, seasonal deals, bridal inquiry routing, location details and one-tap booking from Google, Instagram or WhatsApp.</p>
          <a className="textLink" href={instagramUrl} target="_blank" rel="noreferrer">View Instagram profile</a>
        </div>
        <div className="dealPanel">
          <span>Featured deal layout</span>
          <strong>Hair services, skin services and appointment slots</strong>
          <p>Replace temporary post captions with clean service pages, price ranges and direct WhatsApp prompts.</p>
        </div>
      </section>

      <section className="gallery" aria-label="Abeer Nasim Salon work samples">
        {images.slice(1).map((image) => (
          <figure key={image.src}>
            <img src={image.src} alt={image.alt} />
          </figure>
        ))}
      </section>

      <section id="visit" className="section visitSection">
        <div>
          <p className="eyebrow dark">Visit</p>
          <h2>Block G, Sector G, DHA Phase 2 Islamabad</h2>
          <p>Open 11:00 AM - 8:00 PM. DM or WhatsApp for makeup, hair, skin, henna and manicure appointments.</p>
        </div>
        <a className="primary compact" href={whatsappUrl}>Reserve appointment</a>
      </section>
    </main>
  );
}
