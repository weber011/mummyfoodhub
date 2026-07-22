export const metadata = {
  title: 'Admin Panel | Mummy Food Hub',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: '40px 24px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '40px', paddingBottom: '20px', borderBottom: '2px solid rgba(59,48,42,0.1)' }}>
        <h1 style={{ color: 'var(--color-tomato)' }}>Mummy Food Hub Admin</h1>
        <p style={{ color: 'var(--color-brown)' }}>Manage your menu and settings</p>
      </div>
      {children}
    </div>
  );
}
