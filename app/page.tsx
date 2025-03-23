export default function Home() {
  return (
    <div>
      {/* Using utility classes */}
      <h1 className="font-avant">This is Avant Garde</h1>
      <p className="font-sans-regular">This is Sans Regular</p>

      {/* These will automatically use the correct fonts based on the base layer */}
      <h2>This heading automatically uses Avant Garde</h2>
      <p>This paragraph automatically uses Sans Regular</p>
    </div>
  );
}
