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

async function getVideosListStories() {
  const URL = "https://cdn.workmob.com/stories_workmob";
  const res = await fetch(`${URL}/config/gyan-stories-top.json`, {
    cache: "no-store",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getVideosListYoungstar() {
  const URL = "https://cdn.workmob.com/youngstars_workmob";
  const res = await fetch(`${URL}/config/gyan-stories-top.json`, {
    cache: "no-store",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getCategoryListStories() {
  const URL = "https://cdn.workmob.com/stories_workmob";
  const res = await fetch(`${URL}/config/gyan-category.json`, {
    cache: "no-store",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getCategoryListYoungstar() {
  const URL = "https://cdn.workmob.com/youngstars_workmob";
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
  const videoDataStories = await getVideosListStories();
  const videoDataYoung = await getVideosListYoungstar();
  const categoryDataStories = await getCategoryListStories();
  const categoryDataYoung = await getCategoryListYoungstar();
  const insightData = await getInsightList();

  return (
    <main>
      <Navbar />
      <HeroSection />
      <div className="container">
        <HomeVideoList
          videoDataStories={videoDataStories}
          videoDataYoung={videoDataYoung}
        />
        <CategoryList
          categoryDataStories={categoryDataStories}
          categoryDataYoung={categoryDataYoung}
        />
        <InsightList data={insightData} />
      </div>
      <Footer />
      <SubFooter />
    </main>
  );
}
