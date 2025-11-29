import './globals.css';
import Link from 'next/link';
import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ramonage Cheminée - Votre Expert Certifié en Belgique",
  description: "Services de ramonage agréé, devis en ligne et conseils pour l'entretien de votre cheminée et poêle en Belgique.",
};

// Composant de la barre de navigation (Navbar)
function Navbar() {
  return (
    <nav style={{ 
      backgroundColor: '#333', 
      padding: '15px 40px', 
      marginBottom: '20px',
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      position: 'sticky', 
      top: 0,
      zIndex: 100 
    }}>
      {/* Logo / Titre Principal */}
      <Link href="/" style={{ 
        color: '#fff', 
        textDecoration: 'none', 
        fontSize: '1.5rem', 
        fontWeight: 'bold' 
      }}>
        Ramoneur.be
      </Link>

      {/* Liens de navigation */}
      <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>

        {/* Bouton Accueil */}
        <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>
          Accueil
        </Link>

        {/* Pages Principales */}
        <Link href="/services" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>
          Nos Services
        </Link>
        <Link href="/prix" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>
          Tarifs & Devis
        </Link>
        <Link href="/ramoneur" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>
          Ramoneur Agréé
        </Link>

        {/* Bouton d'Action (Contact) */}
        <Link href="/contact" style={{ 
          backgroundColor: '#d11e00', 
          color: 'white', 
          padding: '8px 15px', 
          borderRadius: '5px',
          textDecoration: 'none',
          fontSize: '1.1rem',
          fontWeight: 'bold'
        }}>
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
      <body className={inter.className}>
        <Navbar /> {/* Le menu est ici, donc il est global */}
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
