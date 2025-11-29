import Link from 'next/link';
import React from 'react';

const serviceLinks = [
  { name: "Ramonage Bois", href: "/services/ramonage-bois" },
  { name: "Débistrage (Sécurité)", href: "/services/debistrage" },
  { name: "Inspection Caméra", href: "/services/inspection-camera" },
  { name: "Poêle à Pellets", href: "/services/poele-pellets" },
  { name: "Conduit Gaz/Fioul", href: "/services/conduit-gaz" },
  { name: "Tubage & Gainage", href: "/services/tubage-gainage" },
  { name: "Dépôt/Nid d'Oiseau", href: "/services/nid-oiseau" },
  { name: "Entretien Chaudière", href: "/services/entretien-chaudiere" },
  { name: "Abonnements", href: "/services/abonnements" },
  { name: "Urgence Fumée", href: "/contact" },
];

export default function SubMenuServices() {
  return (
    // Position Fixe à Droite pour tous les écrans (nous gérons le mobile dans un fichier séparé)
    <div style={{ 
      position: 'fixed', 
      top: '80px', 
      right: '20px', 
      width: '250px', 
      backgroundColor: '#f8f9fa', 
      border: '1px solid #ddd',
      padding: '10px',
      borderRadius: '5px',
      zIndex: 90 
    }}>
      <h3 style={{ 
          fontSize: '1.2rem', 
          color: '#d11e00', 
          marginBottom: '10px',
          paddingBottom: '5px',
          borderBottom: '1px solid #ccc' 
      }}>
          Explorer les Services
      </h3>
      <nav style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '5px' 
      }}>
        {serviceLinks.map((link, index) => (
          <Link 
            key={index} 
            href={link.href} 
            style={{ 
              color: '#007bff', 
              textDecoration: 'none', 
              padding: '5px 10px', 
              fontSize: '0.9em',
              borderLeft: '3px solid transparent'
            }}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
