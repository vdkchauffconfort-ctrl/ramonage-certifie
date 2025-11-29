import Link from 'next/link';
import React from 'react';

// Liste des liens pour les 10 pages de services
const serviceLinks = [
  { name: "Ramonage Bois", href: "/services/ramonage-bois" },
  { name: "Inspection Caméra", href: "/services/inspection-camera" },
  { name: "Poêle à Pellets", href: "/services/poele-pellets" },
  { name: "Conduit Gaz/Fioul", href: "/services/conduit-gaz" },
  { name: "Dépôt/Nid d'Oiseau", href: "/services/nid-oiseau" },
  { name: "chapeau cheminée", href: "/services/chapeau-cheminée" },
  { name: "Tubage & Gainage", href: "/services/tubage-gainage" },
  { name: "Débistrage (Sécurité)", href: "/services/debistrage" },
  { name: "contrat", href: "/services/contrat" },
  { name: "Urgence Fumée", href: "/contact" },
];

export default function SubMenuServices() {
  return (
    <div style={{ 
      backgroundColor: '#f8f9fa', // Arrière-plan gris clair
      borderBottom: '1px solid #ccc', 
      padding: '10px 0',
      position: 'sticky', // Fait coller le menu en haut
      top: '60px', // Se positionne sous le menu principal
      zIndex: 90
    }}>
      <nav style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        overflowX: 'auto', // Permet de défiler le menu sur mobile
        justifyContent: 'flex-start', // Centre les liens
        gap: '15px',
        padding: '0 20px'
      }}>
        {serviceLinks.map((link, index) => (
          <Link 
            key={index} 
            href={link.href} 
            style={{ 
              color: '#007bff', // Couleur bleue pour les liens
              textDecoration: 'none', 
              padding: '5px 10px', 
              whiteSpace: 'nowrap', // Empêche le retour à la ligne
              fontSize: '0.9em',
              fontWeight: '500',
              borderRight: '1px solid #eee' // Séparateur
            }}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
