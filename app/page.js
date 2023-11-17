import CategoryList from "./components/CategoryList/CategoryList";
import HeroSection from "./components/HeroSection/HeroSection";
import HomeVideoList from "./components/HomeVideoList/HomeVideoList";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";

const URL = "https://cdn.workmob.com/stories_workmob";
async function getVideosList() {
  const res = await fetch(`${URL}/config/gyan-stories-top.json`, {
    cache: "no-store",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getCategoryList() {
  const res = await fetch(`${URL}/config/gyan-category.json`, {
    cache: "no-store",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const videoData = await getVideosList();
  const categoryData = await getCategoryList();
  return (
    <main>
      <Navbar />
      <HeroSection />
      <div className="container">
        <HomeVideoList data={videoData} />
        <CategoryList data={categoryData} />
      </div>
      <Footer />
    </main>
  );
}
