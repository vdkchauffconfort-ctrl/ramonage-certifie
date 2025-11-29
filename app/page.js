import Link from 'next/link';

export default function HomePage() {
  // Styles généraux pour le contenu principal
  const mainStyle = {
    padding: '20px', 
    maxWidth: '1000px', 
    margin: '0 auto' 
  };

  // Style de la section d'appel à l'action (Hero)
  const heroStyle = {
    backgroundColor: '#fffbe6', // Couleur claire pour le fond
    padding: '50px 20px',
    textAlign: 'center',
    marginBottom: '40px',
    border: '1px solid #ffcc00',
    borderRadius: '8px'
  };

  // Style pour le bouton d'appel à l'action
  const ctaButtonStyle = {
    backgroundColor: '#d11e00', 
    color: 'white', 
    padding: '15px 30px', 
    textDecoration: 'none', 
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    display: 'inline-block',
    marginTop: '20px'
  };

  return (
    <main style={mainStyle}>

      {/* SECTION HERO (APPEL À L'ACTION PRINCIPAL) */}
      <section style={heroStyle}>
        <h1 style={{ 
          fontSize: '1.8rem', // TAILLE OPTIMALE POUR MOBILE
          color: '#d11e00', 
          marginBottom: '10px' 
        }}>
          Ramonage de Cheminée et Poêle en Belgique : Service 7j/7 Certifié
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#333', marginBottom: '30px' }}>
          Sécurité, conformité et performance énergétique garanties. Obtenez votre attestation officielle immédiatement.
        </p>
        <Link href="/contact" style={ctaButtonStyle}>
          Demander un Devis Gratuit
        </Link>
      </section>

      {/* SECTION SERVICES RAPIDES */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#333', borderBottom: '2px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>
          Nos Interventions Spécialisées
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '20px' 
        }}>
          {/* Carte 1 */}
          <Link href="/services/ramonage-bois" style={{ 
            border: '1px solid #ccc', 
            padding: '15px', 
            borderRadius: '5px', 
            textDecoration: 'none', 
            color: '#333', 
            backgroundColor: '#f9f9f9'
          }}>
            <h3 style={{ fontSize: '1.2rem', color: '#007bff', marginBottom: '5px' }}>Ramonage Bois & Pellets</h3>
            <p style={{ fontSize: '0.9rem' }}>Nettoyage professionnel de tous conduits (poêles, inserts, foyers ouverts).</p>
          </Link>

          {/* Carte 2 */}
          <Link href="/services/debistrage" style={{ 
            border: '1px solid #ccc', 
            padding: '15px', 
            borderRadius: '5px', 
            textDecoration: 'none', 
            color: '#333', 
            backgroundColor: '#f9f9f9'
          }}>
            <h3 style={{ fontSize: '1.2rem', color: '#007bff', marginBottom: '5px' }}>Débistrage (Sécurité)</h3>
            <p style={{ fontSize: '0.9rem' }}>Élimination du bistre et goudron pour prévenir les incendies de cheminée.</p>
          </Link>

          {/* Carte 3 */}
          <Link href="/services/inspection-camera" style={{ 
            border: '1px solid #ccc', 
            padding: '15px', 
            borderRadius: '5px', 
            textDecoration: 'none', 
            color: '#333', 
            backgroundColor: '#f9f9f9'
          }}>
            <h3 style={{ fontSize: '1.2rem', color: '#007bff', marginBottom: '5px' }}>Inspection Caméra</h3>
            <p style={{ fontSize: '0.9rem' }}>Diagnostic précis des fissures, obstructions et dégradations internes.</p>
          </Link>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Link href="/services" style={{ 
                color: '#007bff', 
                textDecoration: 'none', 
                fontWeight: 'bold' 
            }}>
                Voir tous nos services →
            </Link>
        </div>
      </section>

      {/* SECTION ARGUMENTS DE VENTE (USP) */}
      <section style={{ backgroundColor: '#f0f0f0', padding: '30px 20px', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#333', textAlign: 'center', marginBottom: '25px' }}>
          Pourquoi nous choisir pour votre ramonage ?
        </h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ padding: '10px 0', borderBottom: '1px dashed #ccc', display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#d11e00', fontSize: '1.5rem', marginRight: '10px' }}>✓</span> 
            **Attestation Agréée** : Document officiel reconnu par toutes les assurances.
          </li>
          <li style={{ padding: '10px 0', borderBottom: '1px dashed #ccc', display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#d11e00', fontSize: '1.5rem', marginRight: '10px' }}>✓</span> 
            **Intervention Rapide** : Disponibilité d'urgence 7 jours sur 7.
          </li>
          <li style={{ padding: '10px 0', display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#d11e00', fontSize: '1.5rem', marginRight: '10px' }}>✓</span> 
            **Tarifs Transparents** : Devis gratuit sans surprise.
          </li>
        </ul>
      </section>

      {/* APPEL À L'ACTION FINAL */}
      <div style={{ textAlign: 'center', margin: '50px 0' }}>
        <Link href="/contact" style={ctaButtonStyle}>
          Contactez-nous pour une intervention sécurisée
        </Link>
      </div>

    </main>
  );
}
