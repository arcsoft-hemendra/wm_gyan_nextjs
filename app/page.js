import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import { getServerSideProps } from "next";
import VideoCard from "./components/common/VideoCard/VideoCard";
import MainHeading from "./components/common/MainHeading/MainHeading";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <VideoCard
        index="1"
        // video_landscape_thumb={
        //   "https://cdn.workmob.com/stories_workmob/images/stories/videos-thumb-gyan-landscape/kiran-soni-learn-about-career-in-yoga-landscape-thumb.jpg"
        // }
        storyHeading={"Heading of the story"}
      />
      <MainHeading title={"GYAN VIDEOS"}/>
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
