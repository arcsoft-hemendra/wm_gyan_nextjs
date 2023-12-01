import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("./../components/Navbar/Navbar"), {
  ssr: false,
});
const HeroSection = dynamic(() =>
  import("./../components/HeroSection/HeroSection")
);
const HomeVideoList = dynamic(
  () => import("./../components/HomeVideoList/HomeVideoList"),
  { ssr: false }
);
const CategoryList = dynamic(
  () => import("./../components/CategoryList/CategoryList"),
  { ssr: false }
);
const InsightList = dynamic(
  () => import("./../components/InsightList/InsightList"),
  { ssr: false }
);
const Footer = dynamic(() => import("./../components/common/Footer/Footer"), {
  ssr: false,
});
const SubFooter = dynamic(
  () => import("./../components/common/SubFooter/SubFooter"),
  {
    ssr: false,
  }
);
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

async function getVideosList(URL) {
  const res = await fetch(`${URL}/config/gyan-stories-top.json`, {
    cache: "no-store",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getCategoryList(URL) {
  const res = await fetch(`${URL}/config/gyan-category.json`, {
    cache: "no-store",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getInsightList() {
  const res = await fetch(
    `https://cdn.workmob.com/stories_workmob/config/gyan-insightlisting.json
  `,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const cookieGet = getCookie("YOUNGSTARS", { cookies });
  const URL = cookieGet
    ? "https://cdn.workmob.com/youngstars_workmob"
    : "https://cdn.workmob.com/stories_workmob";
  const videoData = await getVideosList(URL);
  const categoryData = await getCategoryList(URL);
  const insightData = await getInsightList();
  return (
    <main>
      <Navbar />
      <HeroSection />
      <div className="container">
        <HomeVideoList data={videoData} />
        <CategoryList data={categoryData} />
        <InsightList data={insightData} />
      </div>
      <Footer />
      <SubFooter />
    </main>
  );
}
