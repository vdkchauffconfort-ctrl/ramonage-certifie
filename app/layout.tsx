import './globals.css';
import HeaderMenu from '@/components/HeaderMenu'; // Import du menu principal
import FooterMenu from '@/components/FooterMenu'; // Import du pied de page

export const metadata = {
  title: 'Ramonage 7j/7 - Certifié - Devis Gratuit',
  description: 'Expert en ramonage de cheminée, poêle à bois, et conduit gaz. Service rapide, agréé, et attestation fournie. Contactez-nous pour un devis gratuit!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <HeaderMenu /> 
        {children} {/* C'EST ICI QUE TOUTES VOS PAGES SONT INJECTÉES */}
        <FooterMenu />
      </body>
    </html>
  );
}
