import './globals.css';

export const metadata = {
  title: 'Abeer Nasim Salon | DHA Phase 2 Islamabad',
  description: 'Preview website for Abeer Nasim Salon in Sector G, DHA Phase 2 Islamabad with makeup, hair, spa, deals and WhatsApp booking.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
