export default function ConseilsPage() {
  return (
    <main style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
      
      <h1 style={{ 
        fontSize: '2.5rem', 
        color: '#007bff', 
        textAlign: 'center', 
        marginBottom: '1.5rem' 
      }}>
        Ramoneur Agréé : Conseils Pratiques pour un Entretien Réussi de Votre Cheminée
      </h1>
      
      <p style={{ marginTop: '2rem', lineHeight: '1.6' }}>
        L’entretien d’une cheminée ne se limite pas à une simple opération de nettoyage. Un ramonage soigné réalisé par un professionnel agréé protège la sécurité du foyer, préserve le bon fonctionnement des installations et répond à des obligations légales bien précises. Confier cette tâche à un expert reconnu s’avère donc essentiel, tant pour la prévention des risques que pour la conformité vis-à-vis des assurances et de la législation.
      </p>
      
      {/* SECTION 1: POURQUOI CHOISIR UN RAMONEUR AGRÉÉ ? */}
      <h2 style={{ fontSize: '1.8rem', color: '#333', marginTop: '2.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
        Pourquoi choisir un ramoneur agréé ?
      </h2>
      
      <p style={{ lineHeight: '1.6' }}>
        Faire appel à un ramoneur agréé procure de nombreux avantages concrets. De nombreux propriétaires l’ignorent mais, selon le type d’appareil de chauffage, l’intervention régulière d’un spécialiste certifié peut même être imposée par la réglementation locale ou nationale.
      </p>
      <p style={{ lineHeight: '1.6' }}>
        Au-delà des contraintes administratives, ce choix garantit une approche méthodique et conforme aux standards de sécurité. Seul un professionnel habilité pourra délivrer une **attestation de ramonage officielle**, pièce souvent exigée par les compagnies d’assurance en cas de sinistre.
      </p>

      {/* SECTION 2: BÉNÉFICES DE L'ENTRETIEN */}
      <h2 style={{ fontSize: '1.8rem', color: '#333', marginTop: '2.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
        Les bénéfices d’un entretien régulier
      </h2>
      
      <p style={{ lineHeight: '1.6' }}>
        Un entretien annuel planifié a un impact direct sur l’efficacité des installations. Un conduit propre limite l’accumulation de suie et de résidus inflammables, et diminue considérablement les risques d’incendie domestique. Ramonage régulier contribue aussi à optimiser les performances de chauffe, assurant un rendement optimal quel que soit le mode de chauffage utilisé.
      </p>

      {/* SECTION 3: QUAND ET COMMENT PROCÉDER ? */}
      <h2 style={{ fontSize: '1.8rem', color: '#333', marginTop: '2.5rem', paddingBottom: '0.5rem' }}>
        Quand et comment procéder à un ramonage ?
      </h2>

      <h3 style={{ fontSize: '1.4rem', color: '#d11e00', marginTop: '1.5rem' }}>
        Fréquence recommandée et obligations légales
      </h3>
      <p style={{ lineHeight: '1.6' }}>
        La fréquence idéale dépend du type d'installation. Pour les cheminées raccordées à un chauffage central (bois, gaz, mazout), un ramonage annuel est généralement requis. Il est conseillé de ne pas dépasser douze mois entre deux interventions afin de garantir la sécurité et l’efficacité du système. Les contrats d’entretien apportent une tranquillité supplémentaire grâce à un suivi automatique des échéances.
      </p>

      <h3 style={{ fontSize: '1.4rem', color: '#d11e00', marginTop: '1.5rem' }}>
        Méthodes employées par les professionnels
      </h3>
      <p style={{ lineHeight: '1.6' }}>
        Selon la configuration, le ramonage peut s’effectuer du haut vers le bas (par la toiture) ou de bas en haut (à l’aide d’une canne flexible). Chaque technique vise à détacher et à extraire les particules incrustées. Dans les cas complexes (nid d’oiseau, obstructions), l’intervention exige des outils supplémentaires et une expertise accrue.
      </p>

      {/* SECTION 4: COÛT */}
      <h2 style={{ fontSize: '1.8rem', color: '#333', marginTop: '2.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
        Coût d’un ramonage par un professionnel agréé
      </h2>
      
      <p style={{ lineHeight: '1.6' }}>
        Le tarif d’un ramonage varie en fonction du nombre de conduits à traiter, de leur accessibilité et de l’état général de propreté. Un conduit fortement obstrué engendre logiquement une prestation plus onéreuse qu’un simple entretien saisonnier.
      </p>

      <ul style={{ listStyle: 'disc', marginLeft: '20px', lineHeight: '1.6' }}>
        <li>Prix moyen d’un ramonage standard : de 50 à 100 euros par conduit</li>
        <li>Dépôt ou nid d’oiseaux nécessitant un supplément : entre 30 et 70 euros additionnels</li>
        <li>Contrat d’entretien annuel : dégressif selon le nombre de passages et la complexité</li>
      </ul>

      {/* SECTION 5: CERTIFICAT */}
      <h2 style={{ fontSize: '1.8rem', color: '#333', marginTop: '2.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
        Attestation et démarches à ne pas négliger
      </h2>
      
      <p style={{ lineHeight: '1.6' }}>
        À l’issue de l’intervention, le ramoneur fournit systématiquement une **attestation** mentionnant la date, le professionnel et la méthode. Ce document sert de preuve auprès de l’assureur et de justificatif vis-à-vis des autorités. Ne pas présenter ce certificat pourrait compromettre la reconnaissance du préjudice.
      </p>

      {/* APPEL À L'ACTION */}
      <div style={{ textAlign: 'center', margin: '50px 0' }}>
          <a href="/contact" style={{ 
            backgroundColor: '#007bff', 
            color: 'white', 
            padding: '15px 30px', 
            textDecoration: 'none', 
            borderRadius: '5px', 
            fontWeight: 'bold',
            display: 'inline-block' 
          }}>
            Prendre Rendez-vous avec un Ramoneur Certifié
          </a>
      </div>

    </main>
  );
}
