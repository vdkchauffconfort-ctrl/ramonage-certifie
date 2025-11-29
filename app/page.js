export default function Home() {
  return (
    <main style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>

      <h1 style={{ color: 'black', textAlign: 'center' }}>
        RAMONAGE CHEMINÉE CERTIFIÉ : L'EXPERT EN BELGIQUE
      </h1>

      <p style={{ marginTop: '20px', lineHeight: '1.6' }}>
        Bienvenue sur le site de VDKchauffconfort SRL. Pour un devis ou un rendez-vous, veuillez cliquer sur le lien Contact en haut de la page.
      </p>

      <p style={{ marginTop: '30px', textAlign: 'center' }}>
        <a href="/contact" style={{ color: 'blue', textDecoration: 'underline' }}>
          Cliquez ici pour obtenir votre devis.
        </a>
      </p>

    </main>
  );
}
