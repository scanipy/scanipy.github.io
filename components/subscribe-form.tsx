'use client'

export function SubscribeForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: '10px', marginTop: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
      <input
        type="email"
        placeholder="you@team.com"
        style={{ fontFamily: 'var(--font-body)', padding: '11px 16px', borderRadius: '9999px', border: '1px solid rgba(29,13,62,0.16)', fontSize: '15px', outline: 'none', width: '260px', background: 'var(--scan-white)' }}
      />
      <button type="submit" className="btn btn-primary">Subscribe</button>
    </form>
  )
}
