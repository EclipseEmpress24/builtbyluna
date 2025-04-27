import Navbar from './components/navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-8 text-center">
        <h1 className="text-5xl font-bold">Hi, I'm Luna</h1>
        <p className="mt-4 text-xl">Building, Learning, Sharing.</p>
      </main>
    </>
  );
}

