export default function SectionTitle({ title }) {
  return (
    <h2 className="first:pt-0 pb-4 pt-4 text-lg font-bold uppercase tracking-widest text-stone-600 print:font-normal">
      {title}
    </h2>
  );
}
