import Navbar from '../../components/navbar';

export default function Blogs() {
  return (
    <>
      <Navbar />
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="mt-4 text-xl">Welcome to my blog, where I share my thoughts on tech, development, and more!</p>
      </div>
    </>
  );
}

