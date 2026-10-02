import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  CalendarDays,
  ChevronRight,
  Factory,
  Gauge,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';

const BRAND = {
  blue: '#005677',
  red: '#E2051B',
  logo: 'https://www.pme-attractive.fr/wp-content/uploads/2023/01/Logo-PME-attractive.png',
  logoFooter: 'https://www.pme-attractive.fr/wp-content/uploads/2023/01/Logo-PME-attractive-footer.png',
  uimm: 'https://www.pme-attractive.fr/wp-content/uploads/2023/01/UIMM-Region-SaoneetLoire-big.png',
  partners: [
    {
      src: 'https://www.pme-attractive.fr/wp-content/uploads/2023/02/logo-SPRO.png',
      alt: 'SPRO Bourgogne-Franche-Comté',
    },
    {
      src: 'https://www.pme-attractive.fr/wp-content/uploads/2023/02/logo-I2-Competences-industries.png',
      alt: '2i Compétences industries',
    },
    {
      src: 'https://www.pme-attractive.fr/wp-content/uploads/2023/02/logo-AJRI-Bourgogne.png',
      alt: 'AJIR Bourgogne',
    },
  ],
} as const;

const navItems = [
  { to: '/', label: 'Accueil' },
  { to: '/les-entreprisesagreees', label: 'Entreprises agréées' },
  { to: '/devenir-pmeattractive', label: 'Devenir PME Attractive' },
  { to: '/actualites', label: 'Actualités' },
  { to: '/contact', label: 'Contact' },
];

const companies = [
  'AEROMETAL',
  'ALPM',
  'DC MOTOR',
  'ESCOFIER',
  'GROUPE SEEB',
  'HYDROPROCESS',
  'PROTOFORM',
  'PUGET PRODUCTION MÉCANIQUE',
  'SEI GROUPE',
  'SETFORGE LA CLAYETTE',
  'SICAP',
  'SIEM SERVICES',
];

const news = [
  {
    date: '09.02.2026',
    tag: 'Réseau',
    title: 'ESCOFIER & SIEM rejoignent le réseau PME Attractive',
    excerpt:
      'Deux nouvelles entreprises industrielles intègrent la démarche et viennent renforcer la dynamique du réseau.',
    href: 'https://www.pme-attractive.fr/escofier-siem-rejoignent-le-reseau-des-pme-attractive',
  },
  {
    date: '05.02.2026',
    tag: 'Événement',
    title: 'Forum Emploi & Alternance dans l’industrie',
    excerpt:
      'Un rendez-vous ouvert aux candidats, étudiants et personnes en reconversion pour découvrir les métiers industriels.',
    href: 'https://www.pme-attractive.fr/forum-emploi-alternance-dans-l-industrie',
  },
  {
    date: '02.12.2025',
    tag: 'Publication',
    title: 'Le Journal PME Attractive — édition 2025',
    excerpt:
      'Entreprises agréées, initiatives de terrain et actualités du réseau sont réunies dans le dernier numéro.',
    href: 'https://www.pme-attractive.fr/journal-pme-attractive',
  },
];

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function BrandLogo({ footer = false }: { footer?: boolean }) {
  return (
    <span className="brand-clearspace" aria-label="PME Attractive">
      <img
        className="brand-logo"
        src={footer ? BRAND.logoFooter : BRAND.logo}
        alt="PME Attractive — La Fabrique de l'Avenir"
        width="164"
        height="158"
        decoding="async"
      />
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="header-inner shell">
        <Link className="brand-link" to="/" aria-label="PME Attractive — Accueil">
          <BrandLogo />
        </Link>

        <nav className="desktop-nav" aria-label="Navigation principale">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link className="button button-small header-cta" to="/devenir-pmeattractive">
          Être agréé
          <ArrowRight size={16} />
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            aria-label="Navigation mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="shell mobile-nav-inner">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} end={item.to === '/'}>
                  {item.label}
                  <ChevronRight size={18} />
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <BrandLogo footer />
          <p className="footer-note">
            Un réseau industriel qui met en lumière les entreprises engagées pour leurs talents,
            leur organisation et leur territoire.
          </p>
        </div>

        <div>
          <p className="footer-title">PME Attractive</p>
          <p>Estelle Girardeau</p>
          <a href="tel:+33613564447">06 13 56 44 47</a>
          <a href="mailto:egirardeau@uimm-71.com">egirardeau@uimm-71.com</a>
          <p>
            75 Grande Rue Saint-Cosme
            <br />
            71100 Chalon-sur-Saône
          </p>
        </div>

        <div>
          <p className="footer-title">UIMM Saône-et-Loire</p>
          <div className="uimm-protection-zone">
            <img
              src={BRAND.uimm}
              alt="UIMM Saône-et-Loire — La Fabrique de l'Avenir"
            />
          </div>
          <a href="tel:+33385421844">03 85 42 18 44</a>
        </div>
      </div>

      <div className="footer-bottom shell">
        <span>© PME Attractive {new Date().getFullYear()}</span>
        <div>
          <a href="https://www.pme-attractive.fr/mentions-legales">Mentions légales</a>
          <a href="https://www.pme-attractive.fr/politique-de-confidentialite">
            Confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
}

function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Aller au contenu
      </a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="eyebrow">
      <span />
      {children}
    </div>
  );
}

function Reveal({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function IndustrialOrb() {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="industrial-orb"
      aria-hidden="true"
      animate={reduced ? undefined : { rotate: 360 }}
      transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
    >
      <div className="orb-ring ring-a" />
      <div className="orb-ring ring-b" />

      <div className="orb-core">
        <Factory size={42} strokeWidth={1.4} />
      </div>

      {[0, 1, 2, 3].map((index) => (
        <span key={index} className={`orb-node node-${index + 1}`} />
      ))}
    </motion.div>
  );
}

function HomePage() {
  return (
    <PageShell>
      <section className="hero grid-surface">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <Eyebrow>Industrie · Talents · Territoire</Eyebrow>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              PME Attractive
              <span>valorise vos atouts.</span>
            </motion.h1>

            <motion.p
              className="hero-lead"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.15 }}
            >
              Une démarche portée par l’écosystème industriel pour rendre visibles les PME qui
              structurent leur organisation, prennent soin de leurs équipes et construisent une
              performance durable.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
            >
              <Link className="button" to="/devenir-pmeattractive">
                Découvrir l’agrément
                <ArrowRight size={18} />
              </Link>

              <Link className="button button-ghost" to="/les-entreprisesagreees">
                Voir le réseau
              </Link>
            </motion.div>

            <div className="hero-metrics" aria-label="Points forts de la démarche">
              <span>
                <b>RH</b> marque employeur
              </span>
              <span>
                <b>QSE</b> organisation
              </span>
              <span>
                <b>RSE</b> engagement
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <IndustrialOrb />

            <div className="status-card status-card-top">
              <span className="pulse-dot" />
              <div>
                <small>RÉSEAU</small>
                <strong>Industrie en mouvement</strong>
              </div>
            </div>

            <div className="status-card status-card-bottom">
              <Gauge size={20} />
              <div>
                <small>OBJECTIF</small>
                <strong>Attractivité durable</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-rail" aria-hidden="true">
          <span>ATTRACTIVITÉ</span>
          <i />
          <span>COMPÉTENCES</span>
          <i />
          <span>PERFORMANCE</span>
          <i />
          <span>INDUSTRIE</span>
        </div>
      </section>

      <section className="section mission-section">
        <div className="shell">
          <Reveal className="section-heading split-heading">
            <div>
              <Eyebrow>La démarche</Eyebrow>
              <h2>Trois leviers pour rendre l’industrie plus attractive.</h2>
            </div>

            <p>
              PME Attractive transforme des engagements concrets en un signal lisible pour les
              collaborateurs, les candidats, les clients et les donneurs d’ordre.
            </p>
          </Reveal>

          <div className="three-grid objective-grid">
            {[
              {
                n: '01',
                icon: <Sparkles />,
                title: 'Valoriser',
                text: 'Mettre en avant les forces des PME et soutenir une marque employeur crédible, ancrée dans le réel.',
              },
              {
                n: '02',
                icon: <Users />,
                title: 'Promouvoir',
                text: 'Faire connaître les pratiques utiles à la fidélisation, à l’intégration, aux compétences et au développement durable.',
              },
              {
                n: '03',
                icon: <Network />,
                title: 'Fluidifier',
                text: 'Créer des liens plus directs entre PME, partenaires industriels et donneurs d’ordre du territoire.',
              },
            ].map((item, index) => (
              <Reveal className="objective-card" key={item.title}>
                <span className="objective-number">{item.n}</span>
                <div className="icon-chip">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div
                  className="card-line"
                  style={{ '--delay': `${index * 0.15}s` } as CSSProperties}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section network-section grid-surface-light">
        <div className="shell network-layout">
          <Reveal className="network-copy">
            <Eyebrow>Le réseau</Eyebrow>
            <h2>Des PME qui partagent la même énergie industrielle.</h2>

            <p>
              Des entreprises de tailles et de métiers différents se retrouvent autour d’une même
              exigence : faire progresser leur organisation et mieux valoriser ce qu’elles offrent.
            </p>

            <Link className="text-link" to="/les-entreprisesagreees">
              Explorer les entreprises agréées
              <ArrowRight size={18} />
            </Link>
          </Reveal>

          <Reveal className="company-cloud">
            {companies.slice(0, 8).map((company, index) => (
              <span key={company} style={{ '--i': index } as CSSProperties}>
                {company}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section process-section">
        <div className="shell">
          <Reveal className="section-heading">
            <Eyebrow>Devenir PME Attractive</Eyebrow>
            <h2>Un parcours clair, exigeant et utile.</h2>
          </Reveal>

          <div className="process-grid">
            {[
              [
                '01',
                'Candidature',
                'L’entreprise entre volontairement dans la démarche et échange sur son projet.',
              ],
              [
                '02',
                'Audit',
                'Un entretien permet d’évaluer les pratiques, les points forts et les axes de progrès.',
              ],
              [
                '03',
                'Commission',
                'Le dossier est présenté à une commission associant l’écosystème industriel.',
              ],
              [
                '04',
                'Agrément',
                'L’entreprise rejoint le réseau pour trois ans, avec un suivi annuel.',
              ],
            ].map(([step, title, text]) => (
              <Reveal className="process-card" key={step}>
                <span>{step}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="eligibility-strip">
            <div>
              <Building2 />
              <span>
                <b>PME industrielle</b>
                ou filière partenaire
              </span>
            </div>

            <div>
              <Users />
              <span>
                <b>Moins de 250 salariés</b>
              </span>
            </div>

            <div>
              <Gauge />
              <span>
                <b>Critères PME</b>
                de chiffre d’affaires / bilan
              </span>
            </div>

            <Link className="button button-small" to="/devenir-pmeattractive">
              Voir les critères
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section news-section">
        <div className="shell">
          <Reveal className="section-heading split-heading">
            <div>
              <Eyebrow>Actualités</Eyebrow>
              <h2>Le réseau en action.</h2>
            </div>

            <Link className="text-link" to="/actualites">
              Toutes les actualités
              <ArrowRight size={18} />
            </Link>
          </Reveal>

          <div className="news-grid">
            {news.map((item) => (
              <NewsCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="shell cta-panel grid-surface">
          <div>
            <Eyebrow>Votre entreprise a des atouts. Faites-les voir.</Eyebrow>
            <h2>Prêt à rejoindre la dynamique PME Attractive ?</h2>
          </div>

          <Link className="button button-light" to="/contact">
            Échanger avec l’équipe
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <PartnerStrip />
    </PageShell>
  );
}

function NewsCard({ item }: { item: (typeof news)[number] }) {
  return (
    <Reveal className="news-card">
      <div className="news-card-top">
        <span className="news-date">
          <CalendarDays size={15} />
          {item.date}
        </span>
        <span className="news-tag">{item.tag}</span>
      </div>

      <h3>{item.title}</h3>
      <p>{item.excerpt}</p>

      <a className="text-link" href={item.href} target="_blank" rel="noreferrer">
        Lire l’article
        <ArrowRight size={17} />
      </a>
    </Reveal>
  );
}

function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="page-hero grid-surface">
      <div className="shell page-hero-inner">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>

        <div className="page-hero-mark" aria-hidden="true">
          <Factory />
        </div>
      </div>
    </section>
  );
}

function CompaniesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Réseau PME Attractive"
        title="Les entreprises agréées"
        intro="Un collectif de PME industrielles engagées pour l’attractivité, les compétences et la performance durable."
      />

      <section className="section">
        <div className="shell">
          <Reveal className="section-heading split-heading">
            <div>
              <Eyebrow>Entreprises</Eyebrow>
              <h2>Des savoir-faire, un même niveau d’engagement.</h2>
            </div>

            <p>
              Le réseau rassemble des entreprises de métiers différents qui choisissent de
              structurer et de rendre visibles leurs bonnes pratiques.
            </p>
          </Reveal>

          <div className="company-directory">
            {companies.map((company, index) => (
              <Reveal className="company-card" key={company}>
                <span className="company-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <Factory size={22} />
                <h3>{company}</h3>
                <span className="company-badge">
                  <ShieldCheck size={14} />
                  PME Attractive
                </span>
              </Reveal>
            ))}
          </div>

          <Reveal className="directory-cta">
            <div>
              <h2>Votre entreprise pourrait être la prochaine.</h2>
              <p>Découvrez le parcours d’agrément et les critères d’éligibilité.</p>
            </div>

            <Link className="button" to="/devenir-pmeattractive">
              Devenir PME Attractive
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      <PartnerStrip />
    </PageShell>
  );
}

function BecomePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Candidature"
        title="Devenir PME Attractive"
        intro="Une démarche volontaire, pensée pour reconnaître les pratiques solides et accompagner la progression de l’entreprise."
      />

      <section className="section">
        <div className="shell eligibility-layout">
          <Reveal>
            <Eyebrow>Éligibilité</Eyebrow>
            <h2>À qui s’adresse la démarche ?</h2>
            <p className="large-copy">
              L’agrément s’adresse aux PME de la métallurgie adhérentes à l’UIMM ainsi qu’aux
              filières partenaires, sous réserve de respecter les critères de taille d’une PME.
            </p>
          </Reveal>

          <div className="eligibility-cards">
            <Reveal className="eligibility-card">
              <Building2 />
              <span>01</span>
              <h3>Adhésion / filière</h3>
              <p>
                Entreprise industrielle adhérente à l’UIMM et/ou relevant d’une filière
                partenaire.
              </p>
            </Reveal>

            <Reveal className="eligibility-card">
              <Users />
              <span>02</span>
              <h3>&lt; 250 salariés</h3>
              <p>Un effectif qui n’excède pas 250 personnes.</p>
            </Reveal>

            <Reveal className="eligibility-card">
              <Gauge />
              <span>03</span>
              <h3>Critères financiers PME</h3>
              <p>
                Chiffre d’affaires inférieur à 50 M€ ou total de bilan annuel inférieur à 43 M€.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section process-detail-section grid-surface-light">
        <div className="shell">
          <Reveal className="section-heading">
            <Eyebrow>Parcours</Eyebrow>
            <h2>De la prise de contact à l’agrément.</h2>
          </Reveal>

          <div className="timeline">
            {[
              [
                '01',
                'Prise de contact',
                'Un premier échange permet de vérifier l’éligibilité et de présenter la démarche.',
              ],
              [
                '02',
                'Entretien d’audit',
                'La branche professionnelle examine les pratiques et engagements de l’entreprise.',
              ],
              [
                '03',
                'Commission',
                'Le dossier est étudié avec des représentants du réseau et des donneurs d’ordre.',
              ],
              [
                '04',
                'Agrément',
                'L’agrément est attribué pour trois ans, sous condition d’une vérification annuelle.',
              ],
            ].map(([n, title, text]) => (
              <Reveal className="timeline-item" key={n}>
                <span>{n}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="contact-band">
            <div>
              <h2>Parlons de votre candidature.</h2>
              <p>
                Un échange suffit pour savoir si la démarche correspond à votre entreprise.
              </p>
            </div>

            <Link className="button" to="/contact">
              Contacter l’équipe
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

function NewsPage() {
  const extraNews = [
    {
      date: '09.10.2025',
      tag: 'Réseau',
      title: 'SEI Groupe rejoint la démarche PME Attractive',
      excerpt: 'Une nouvelle entreprise d’ingénierie industrielle intègre le réseau.',
      href: 'https://www.pme-attractive.fr/sei-groupe-rejoint-la-demarche-pme-attractive',
    },
    {
      date: '20.02.2025',
      tag: 'Réseau',
      title: 'Deux nouvelles entreprises rejoignent le réseau',
      excerpt:
        'ALPM et SETFORGE La Clayette viennent compléter le collectif PME Attractive.',
      href: 'https://www.pme-attractive.fr/deux-nouvelles-entreprises-rejoignent-le-reseau-pme-attractive',
    },
    {
      date: '20.12.2023',
      tag: 'RSE',
      title: 'HYDROPROCESS poursuit son engagement RSE',
      excerpt:
        'L’entreprise met en avant sa démarche environnementale et ses actions d’amélioration.',
      href: 'https://www.pme-attractive.fr/hydroprocess-obtient-la-charte-dengagement-rse',
    },
  ];

  return (
    <PageShell>
      <PageHero
        eyebrow="Le réseau en mouvement"
        title="Actualités"
        intro="Agrément, emploi, RSE, événements : suivez les initiatives qui font vivre l’industrie du territoire."
      />

      <section className="section">
        <div className="shell">
          <div className="news-grid news-grid-page">
            {[...news, ...extraNews].map((item) => (
              <NewsCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <PartnerStrip />
    </PageShell>
  );
}

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Échangeons sur votre entreprise"
        intro="Une question sur l’agrément, le réseau ou votre éligibilité ? L’équipe PME Attractive vous répond."
      />

      <section className="section contact-section">
        <div className="shell contact-layout">
          <Reveal className="contact-card primary-contact">
            <span className="contact-kicker">PME ATTRACTIVE</span>
            <h2>Estelle Girardeau</h2>

            <a href="tel:+33613564447">
              <Phone />
              06 13 56 44 47
            </a>

            <a href="mailto:egirardeau@uimm-71.com">
              <Mail />
              egirardeau@uimm-71.com
            </a>

            <p>
              <MapPin />
              <span>
                75 Grande Rue Saint-Cosme
                <br />
                71100 Chalon-sur-Saône
              </span>
            </p>

            <a
              className="button button-light"
              href="mailto:egirardeau@uimm-71.com?subject=PME%20Attractive%20-%20Demande%20d'information"
            >
              Écrire un e-mail
              <ArrowRight size={18} />
            </a>
          </Reveal>

          <Reveal className="contact-card uimm-contact">
            <div className="uimm-protection-zone large">
              <img
                src={BRAND.uimm}
                alt="UIMM Saône-et-Loire — La Fabrique de l'Avenir"
              />
            </div>

            <h2>UIMM Saône-et-Loire</h2>

            <a href="tel:+33385421844">
              <Phone />
              03 85 42 18 44
            </a>

            <p>
              <MapPin />
              <span>
                75 Grande Rue Saint-Cosme
                <br />
                71100 Chalon-sur-Saône
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="map-band grid-surface-light">
        <div className="shell map-band-inner">
          <div>
            <Eyebrow>Chalon-sur-Saône</Eyebrow>
            <h2>Au cœur du bassin industriel.</h2>
          </div>

          <a
            className="text-link"
            href="https://www.google.com/maps/search/?api=1&query=75+Grande+Rue+Saint-Cosme+71100+Chalon-sur-Saone"
            target="_blank"
            rel="noreferrer"
          >
            Voir l’itinéraire
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </PageShell>
  );
}

function PartnerStrip() {
  return (
    <section className="partner-section" aria-label="Partenaires">
      <div className="shell partner-inner">
        <span>Avec le soutien de</span>

        <div className="partner-logos">
          {BRAND.partners.map((partner) => (
            <img
              key={partner.src}
              src={partner.src}
              alt={partner.alt}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function NotFoundPage() {
  return (
    <PageShell>
      <section className="not-found grid-surface">
        <div className="shell">
          <Eyebrow>404</Eyebrow>
          <h1>Page introuvable</h1>
          <p>Cette page n’existe pas ou a été déplacée.</p>
          <Link className="button" to="/">
            Retour à l’accueil
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/les-entreprisesagreees" element={<CompaniesPage />} />
        <Route path="/devenir-pmeattractive" element={<BecomePage />} />
        <Route path="/actualites" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
