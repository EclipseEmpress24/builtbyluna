import Navbar from '../../components/navbar';
import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Navbar />
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold">Blog Post: {slug}</h1>
        <p className="mt-4 text-xl">This is a detailed view of the blog post for {slug}.</p>
      </div>
    </>
  );
}

