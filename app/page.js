import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <main style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>

      <h1 style={{ 
        fontSize: '2em', // Taille PC
        color: '#d11e00', 
        textAlign: 'center', 
        marginBottom: '1.5rem' 
      }}>
        RAMONAGE CHEMINÉE EN BELGIQUE : L'EXPERT CERTIFIÉ
      </h1>

      <p style={{ marginTop: '2rem', lineHeight: '1.6' }}>
        L’entretien d’une cheminée ne se limite pas à une simple opération de nettoyage. Un ramonage soigné réalisé par un professionnel agréé protège la sécurité du foyer, préserve le bon fonctionnement des installations et répond à des obligations légales bien précises. Confier cette tâche à un expert reconnu s’avère donc essentiel, tant pour la prévention des risques que pour la conformité vis-à-vis des assurances et de la législation.
      </p>

      {/* SECTION 1: POURQUOI CHOISIR UN RAMONEUR AGRÉÉ ? */}
      <h2 style={{ fontSize: '1.4em', color: '#333', marginTop: '2.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
        Pourquoi choisir un ramoneur agréé ?
      </h2>

      <p style={{ lineHeight: '1.6' }}>
        Faire appel à un ramoneur agréé procure de nombreux avantages concrets. Ce choix garantit une approche méthodique et conforme aux standards de sécurité. Seul un professionnel habilité pourra délivrer une **attestation de ramonage officielle**, pièce souvent exigée par les compagnies d’assurance en cas de sinistre.
      </p>

      {/* SECTION 2: BÉNÉFICES DE L'ENTRETIEN */}
      <h2 style={{ fontSize: '1.4em', color: '#333', marginTop: '2.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
        Les bénéfices d’un entretien régulier
      </h2>

      <p style={{ lineHeight: '1.6' }}>
        Un entretien annuel planifié a un impact direct sur l’efficacité des installations. Un conduit propre limite l’accumulation de suie et diminue considérablement les risques d’incendie domestique. Ramonage régulier contribue aussi à optimiser les performances de chauffe.
      </p>

      {/* APPEL À L'ACTION */}
      <div style={{ textAlign: 'center', margin: '50px 0' }}>
          <Link href="/contact" style={{ 
            backgroundColor: '#007bff', 
            color: 'white', 
            padding: '15px 30px', 
            textDecoration: 'none', 
            borderRadius: '5px',
            fontWeight: 'bold',
            display: 'inline-block' 
          }}>
            Demander un Rendez-vous avec un Ramoneur Certifié
          </Link>
      </div>

    </main>
  );
}
