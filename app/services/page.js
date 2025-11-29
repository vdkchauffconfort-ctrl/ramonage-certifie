import SubMenuServices from '../components/SubMenuServices'; // L'IMPORT CORRECT
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main style={{ padding: '0 0 40px 0', maxWidth: '1000px', margin: '0 auto' }}>

      <SubMenuServices /> {/* L'APPEL CORRECT DU MENU SECONDAIRE */}

      <div style={{ padding: '0 20px' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          color: '#d11e00', 
          textAlign: 'center', 
          marginBottom: '1.5rem',
          marginTop: '30px' 
        }}>
          Nos Services de Ramonage : Obligations, Avantages et Conseils pour une Cheminée Sûre
        </h1>

        {/* -------------------- RESTE DE VOTRE CONTENU SEO DÉTAILLÉ -------------------- */}
        <p style={{ marginTop: '2rem', lineHeight: '1.6' }}>
          Entretenir sa cheminée ne se limite pas à préserver un bon tirage ou à prolonger la durée de vie de l’installation. Le ramonage joue un rôle essentiel en matière de sécurité, d’économies d’énergie et de respect des obligations légales. Pourtant, il n’est pas toujours évident de s’y retrouver entre les exigences réglementaires et les bonnes pratiques recommandées. Ce guide propose un tour d’horizon complet sur le sujet, tout en donnant un aperçu des services professionnels de ramonage disponibles actuellement.
        </p>

        {/* SECTION 1: POURQUOI RAMONER ? */}
        <h2 style={{ fontSize: '1.8rem', color: '#333', marginTop: '2.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
          Pourquoi faire ramoner sa cheminée régulièrement ?
        </h2>

        <p style={{ lineHeight: '1.6' }}>
          Laisser s’accumuler suie, débris ou même des résidus de nid d’oiseau dans le conduit de fumée revient à multiplier les risques pour toute l’habitation. Un entretien régulier est la première barrière contre les accidents domestiques liés à un chauffage au bois, au mazout ou encore au charbon.
        </p>
        <p style={{ lineHeight: '1.6' }}>
          En retirant toutes les impuretés de la cheminée, on favorise non seulement une combustion plus efficace, mais on réduit aussi la consommation des combustibles. Cela se traduit généralement par une facture de chauffage allégée – un avantage rarement négligeable lors des saisons froides.
        </p>

        {/* SECTION 2: OBLIGATIONS LÉGALES */}
        <h2 style={{ fontSize: '1.8rem', color: '#333', marginTop: '2.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
          Quelles sont les obligations légales concernant le ramonage ?
        </h2>

        <p style={{ lineHeight: '1.6' }}>
          Le caractère obligatoire du ramonage dépend principalement du type d'installation et de la région. Lorsqu’il s’agit d’un système fonctionnant avec des combustibles solides ou liquides (bois, mazout), la loi impose un ramonage annuel du conduit raccordé à votre équipement central.
        </p>

        <h3 style={{ fontSize: '1.4rem', color: '#d11e00', marginTop: '1.5rem' }}>
          Obligations spécifiques à certains combustibles
        </h3>
        <p style={{ lineHeight: '1.6' }}>
          Les installations utilisant des combustibles solides nécessitent une vigilance accrue du fait de la quantité de résidus générés. À l’inverse, les chaudières alimentées au gaz génèrent moins de dépôts, c'est pourquoi leur entretien ne suit pas la même fréquence.
        </p>

        <h3 style={{ fontSize: '1.4rem', color: '#d11e00', marginTop: '1.5rem' }}>
          Justificatifs et assurances : ce qu'il faut savoir
        </h3>
        <p style={{ lineHeight: '1.6' }}>
          En cas d’incendie, fournir rapidement une attestation de ramonage peut faciliter les démarches auprès de l’assurance habitation. Ce document prouve que toutes les mesures ont été prises pour limiter les risques. Souscrire à un contrat annuel avec un professionnel permet non seulement de répondre aux attentes légales, mais offre parfois un tarif préférentiel sur la cotisation d’assurance.
        </p>

        {/* SECTION 3: BÉNÉFICES PROFESSIONNELS */}
        <h2 style={{ fontSize: '1.8rem', color: '#333', marginTop: '2.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
          Quels bénéfices apporte un ramonage effectué par des professionnels ?
        </h2>

        <p style={{ lineHeight: '1.6' }}>
          Opter pour des experts du ramonage, c’est s’assurer un service rigoureux et adapté à chaque situation. Les intervenants disposent d’outils spécifiques, capables de nettoyer minutieusement le conduit. D’ailleurs, lors d’une prestation complète, le diagnostic va bien souvent au-delà du simple nettoyage mécanique.
        </p>

        <ul style={{ listStyle: 'disc', marginLeft: '20px', lineHeight: '1.6' }}>
          <li>Nettoyage approfondi, quelles que soient la forme et la taille du conduit.</li>
          <li>Conseils personnalisés selon le type de combustible utilisé.</li>
          <li>Rapport d’intervention détaillé avec recommandations éventuelles.</li>
          <li>Possibilité de programmer des visites d’entretien à intervalles réguliers.</li>
        </ul>

        {/* SECTION 4: COÛT ET OPTIMISATION */}
        <h2 style={{ fontSize: '1.8rem', color: '#333', marginTop: '2.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
          Combien coûte une intervention de ramonage et comment optimiser ses dépenses ?
        </h2>

        <p style={{ lineHeight: '1.6' }}>
          Le coût d’un ramonage varie selon plusieurs critères, principalement la nature du conduit et la localisation du logement. En règle générale, le prix demandé pour un entretien classique se situe entre **60 et 100 euros** par cheminée. Si plusieurs conduits sont traités en une seule visite, le tarif unitaire baisse généralement. Des facteurs additionnels peuvent influencer la facture finale : frais de déplacement, inspection vidéo optionnelle, enlèvement de gros débris, etc.
        </p>

        <h3 style={{ fontSize: '1.4rem', color: '#d11e00', marginTop: '1.5rem' }}>
          Optimisation fiscale et bons plans
        </h3>
        <p style={{ lineHeight: '1.6' }}>
          Dans les logements de plus de dix ans, un taux de TVA réduit s’applique généralement à ce type de travaux. Cet avantage fiscal permet d’abaisser sensiblement le coût du service pour le consommateur final.
        </p>

        {/* SECTION 5: QUAND PROGRAMMER */}
        <h2 style={{ fontSize: '1.8rem', color: '#333', marginTop: '2.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
          Quand programmer le ramonage pour un résultat optimal ?
        </h2>

        <p style={{ lineHeight: '1.6' }}>
          L’idéal reste d’effectuer l’intervention juste avant l’hiver, période de forte utilisation des appareils de chauffage. Un usage intensif, impliquant plusieurs heures de chauffe quotidienne, requiert parfois deux passages annuels afin de maintenir la sécurité au sommet.
        </p>

        {/* SECTION 6: NOS SERVICES */}
        <h2 style={{ fontSize: '1.8rem', color: '#333', marginTop: '2.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
          Nos services de ramonage : expertise et accompagnement personnalisé
        </h2>

        <p style={{ lineHeight: '1.6' }}>
          Proposer un service de ramonage, c’est avant tout offrir tranquillité d’esprit et sécurité à chaque client. Grâce à une intervention soignée et ponctuelle, il devient possible de profiter pleinement de son installation. Outre l’aspect purement opérationnel, un vrai suivi est assuré après chaque passage : conseils pratiques, alerte sur les signes à surveiller et solutions sur-mesure adaptées à chacun.
        </p>

        {/* Bouton d'Action Final */}
        <div style={{ textAlign: 'center', margin: '50px 0' }}>
          <Link href="/contact" style={{ 
            backgroundColor: '#d11e00', 
            color: 'white', 
            padding: '15px 30px', 
            textDecoration: 'none', 
            borderRadius: '5px',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            display: 'inline-block' 
          }}>
            Demander un Rendez-vous ou un Devis
          </Link>
        </div>
      </div>

    </main>
  );
}
