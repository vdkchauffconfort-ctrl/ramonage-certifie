import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <div style={{ padding: '20px', backgroundColor: '#333', color: 'white' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>MENU DE BASE</Link>
        </div>
        {children}
        <div style={{ padding: '10px', backgroundColor: '#eee', textAlign: 'center' }}>
            Pied de page de base
        </div>
      </body>
    </html>
  );
}
