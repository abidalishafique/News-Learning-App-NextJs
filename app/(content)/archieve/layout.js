export default function ArchieveLayout({ archieve, latest }) {
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archieve}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
