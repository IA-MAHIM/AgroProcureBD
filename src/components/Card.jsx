export function Card({ children, className = '' }) {
  return <div className={`card ${className}`}>{children}</div>
}

export function StatCard({ label, value }) {
  return (
    <div className="stat-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}
