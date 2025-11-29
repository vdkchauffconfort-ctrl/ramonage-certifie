import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link'; 
import React from 'react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ramonage Cheminée - Votre Expert Certifié en Belgique",
  description: "Services de ramonage agréé, devis en ligne et conseils pour l'entretien de votre cheminée et poêle en Belgique.",
};

// Détermine si l'écran est mobile (simulation de media query en JS)
const isMobileScreen = () => typeof window !== 'undefined' && window.innerWidth < 768;

function Navbar() {
  // Pour l'instant, on se base sur des styles statiques pour la démo
  const isMobile = isMobileScreen();

  // Style du conteneur des liens
  const linksContainerStyle = {
    display: 'flex', 
    gap: isMobile ? '10px' : '25px', // Espace réduit sur mobile
    alignItems: 'center',
    // Sur mobile, on empile les liens
    flexDirection: isMobile ? 'column' : 'row',
    marginTop: isMobile ? '10px' : '0',
    width: isMobile ? '100%' : 'auto',
  };

  // Style de la navigation principale
  const navStyle = { 
    backgroundColor: '#333', 
    padding: isMobile ? '10px 20px' : '15px 40px', // Moins de padding sur mobile
    marginBottom: '20px',
    display: 'flex', 
    // L'alignement change sur mobile
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between', 
    alignItems: isMobile ? 'flex-start' : 'center',
    position: 'sticky', 
    top: 0,
    zIndex: 100 
  };

  // Style du bouton de contact
  const contactButtonStyle = {
    backgroundColor: '#d11e00', 
    color: 'white', 
    padding: '8px 15px', 
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    // S'assure que le bouton prend toute la largeur sur mobile
    width: isMobile ? '100%' : 'auto',
    textAlign: 'center'
  };

  return (
    <nav style={navStyle}>
      {/* Logo / Titre Principal */}
      <Link href="/" style={{ 
        color: '#fff', 
        textDecoration: 'none', 
        fontSize: isMobile ? '1.3rem' : '1.5rem', // Taille réduite sur mobile
        fontWeight: 'bold',
        marginBottom: isMobile ? '10px' : '0'
      }}>
        Ramoneur.be
      </Link>

      {/* Liens de navigation */}
      <div style={linksContainerStyle}>

        <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>
          Accueil
        </Link>
        <Link href="/services" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>
          Nos Services
        </Link>
        <Link href="/prix" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>
          Tarifs & Devis
        </Link>
        <Link href="/ramoneur" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>
          Ramoneur Agréé
        </Link>

        <Link href="/contact" style={contactButtonStyle}>
          Contact / Urgence
        </Link>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* META TAG ESSENTIEL POUR LE RESPONSIVE */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <footer style={{ 
            backgroundColor: '#eee', 
            padding: '20px', 
            textAlign: 'center', 
            fontSize: '0.8em',
            color: '#555',
            marginTop: '50px'
        }}>
            <p>&copy; {new Date().getFullYear()} Le Ramoneur Certifié Belge. Votre partenaire ramonage en Belgique. Tous droits réservés.</p>
        </footer>
      </body>
    </html>
  );
}
