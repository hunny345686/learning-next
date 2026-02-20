export default function ServerPage() {
  console.log("I only run on the SERVER terminal, not the browser console!");

  return (
    <main style={{ padding: '2rem' }}>
      <h1>This is an RSC (Server Component)</h1>
      <p>Check your Terminal. You'll see the log there, but NOT in the Browser's Inspect  Console.</p>
    </main>
  );
}