import Navbar from '../components/navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="mt-4 text-xl">I'm a passionate tech enthusiast, exploring new ideas, building projects, and learning continuously.</p>
      </div>
    </>
  );
}

