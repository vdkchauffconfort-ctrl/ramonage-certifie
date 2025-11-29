import Link from 'next/link';

export default function ContactPage() {
  return (
    <main style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      
      <h1 style={{ 
        fontSize: '2.5rem', 
        color: '#333', 
        textAlign: 'center', 
        marginBottom: '40px' 
      }}>
        Contactez VDKchauffconfort SRL (Ramoneur Agréé)
      </h1>
      
      {/* BOUTON D'ACTION PRINCIPAL POUR RENDEZ-VOUS EN LIGNE */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#28a745', marginBottom: '15px' }}>
          Prise de Rendez-vous en Ligne (Recommandé)
        </h2>
        <Link 
          href="https://vdk-chauffconfort.gazoleen.com/rdv" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            backgroundColor: '#28a745', // Bouton Vert
            color: 'white', 
            padding: '15px 40px', 
            textDecoration: 'none', 
            borderRadius: '5px', 
            fontWeight: 'bold',
            fontSize: '1.2rem',
            display: 'inline-block',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
        >
          Rendez-vous Immédiat
        </Link>
        <p style={{ marginTop: '10px', fontSize: '0.9em', color: '#555' }}>
          (Vous serez redirigé vers l'application sécurisée Gazoleen)
        </p>
      </div>

      {/* SECTION CONTACTS RAPIDES */}
      <section style={{ marginBottom: '50px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#333', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
          Informations de Contact Direct
        </h2>
        <ul style={{ listStyle: 'none', padding: '0', fontSize: '1.1em' }}>
          <li style={{ padding: '8px 0' }}><strong>Téléphone :</strong> 0471 72 49 60</li>
          <li style={{ padding: '8px 0' }}><strong>Email :</strong> <a href="mailto:vdkchauffconfort@vdkchauffconfort.be">vdkchauffconfort@vdkchauffconfort.be</a></li>
          <li style={{ padding: '8px 0' }}><strong>Entreprise :</strong> VDKchauffconfort SRL</li>
        </ul>
      </section>

      {/* SECTION FORMULAIRE SIMPLIFIÉ (Inspiré de ramonage-belgique) */}
      <section style={{ backgroundColor: '#f4f4f4', padding: '30px', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#d11e00', textAlign: 'center', marginBottom: '20px' }}>
          Demande de Devis par Formulaire
        </h2>
        <form style={{ display: 'grid', gap: '20px' }}>
          
          <label htmlFor="nom">Nom et Prénom :</label>
          <input type="text" id="nom" name="nom" required style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
          
          <label htmlFor="telephone">Téléphone :</label>
          <input type="tel" id="telephone" name="telephone" required style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />

          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" required style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />

          <label htmlFor="code_postal">Code Postal et Ville :</label>
          <input type="text" id="code_postal" name="code_postal" required style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
          
          <label htmlFor="message">Votre demande (Type de cheminée, date souhaitée) :</label>
          <textarea id="message" name="message" rows="4" required style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', resize: 'vertical' }}></textarea>

          <button type="submit" style={{ 
            backgroundColor: '#007bff', 
            color: 'white', 
            padding: '15px', 
            borderRadius: '4px', 
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer'
          }}>
            Envoyer ma Demande de Devis
          </button>
        </form>
        <p style={{ fontSize: '0.8em', color: '#555', marginTop: '15px', textAlign: 'center' }}>
          Note : Ce formulaire n'est pas encore fonctionnel. Il nécessite une configuration côté serveur.
        </p>
      </section>

    </main>
  );
}
