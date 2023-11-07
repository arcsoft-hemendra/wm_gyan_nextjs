import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import { getServerSideProps } from 'next';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
    </main>
  );
}

// Define the getServerSideProps function
// export async function getServerSideProps(context) {
//   // Fetch data from an API, database, or any other data source
//   const res = await fetch('https://api.example.com/data');
//   const data = await res.json();

//   // Pass the fetched data as props to your page component
//   return {
//     props: { data },
//   };
// }
