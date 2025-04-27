import Navbar from '../components/navbar';

export default function Resume() {
  return (
    <>
      <Navbar />
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold">My Resume</h1>
        <p className="mt-4 text-xl">Check out my journey and skills below.</p>
      </div>
    </>
  );
}

