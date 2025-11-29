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
    <div style={{ 
      backgroundColor: '#f8f9fa', 
      borderBottom: '1px solid #ccc', 
      padding: '10px 0',
      position: 'sticky', 
      top: '60px', 
      zIndex: 90
    }}>
      <nav style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        overflowX: 'auto', 
        justifyContent: 'flex-start', 
        gap: '15px',
        padding: '0 20px'
      }}>
        {serviceLinks.map((link, index) => (
          <Link 
            key={index} 
            href={link.href} 
            style={{ 
              color: '#007bff', 
              textDecoration: 'none', 
              padding: '5px 10px', 
              whiteSpace: 'nowrap', 
              fontSize: '0.9em',
              fontWeight: '500',
              borderRight: '1px solid #eee' 
            }}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
