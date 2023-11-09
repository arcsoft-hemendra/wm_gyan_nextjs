import HeroSection from "./components/HeroSection/HeroSection";
import HomeVideoList from "./components/HomeVideoList/HomeVideoList";
import Navbar from "./components/Navbar/Navbar";

async function getVideosList() {
  const URL = "https://cdn.workmob.com/stories_workmob";
  const res = await fetch(`${URL}/config/gyan-stories-top.json`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const videoData = await getVideosList();

  return (
    <main>
      <Navbar />
      <HeroSection />
      <HomeVideoList data={videoData} />
    </main>
  );
}
