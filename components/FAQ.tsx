export default function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq bg-white border border-[var(--color-line)] rounded-[12px] overflow-hidden">
      {items.map((f, i) => (
        <details key={i}>
          <summary>{f.q}</summary>
          <div className="ans" dangerouslySetInnerHTML={{ __html: f.a }} />
        </details>
      ))}
    </div>
  );
}
