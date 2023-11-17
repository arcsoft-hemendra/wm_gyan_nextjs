const homepage = "https://gyan.workmob.com";

export default async function sitemap() {
  const karmyogiVideoDataResult = await fetch(
    "https://cdn.workmob.com/stories_workmob/config/gyan-stories-top.json"
  );
  const karmyogiCategoryDataResult = await fetch(
    "https://cdn.workmob.com/stories_workmob/config/gyan-category.json"
  );
  const insightDataResult = await fetch(
    "https://cdn.workmob.com/stories_workmob/config/gyan-insightlisting.json"
  );

  const youngstarVideoDataResult = await fetch(
    "https://cdn.workmob.com/youngstars_workmob/config/gyan-stories-top.json"
  );

  const youngstarCategoryDataResult = await fetch(
    "https://cdn.workmob.com/youngstars_workmob/config/gyan-category.json"
  );

  const karmyogiVideoData = await karmyogiVideoDataResult.json();
  const karmyogiCategoryData = await karmyogiCategoryDataResult.json();
  const insightData = await insightDataResult.json();
  const youngstarVideoData = await youngstarVideoDataResult.json();
  const youngstarCategoryData = await youngstarCategoryDataResult.json();

  const karmyogiVideoDataResponse = karmyogiVideoData.map((post) => ({
    url: `${homepage}/${post.slug}`,
    // lastModified: new Date(post.date).toISOString(),
  }));

  const karmyogiCategoryDataResponse = karmyogiCategoryData.map((post) => ({
    url: `${homepage}/categories/${post.category}`,
  }));

  const insightDataResponse = insightData.map((post) => ({
    url: `${homepage}/insights/${post.slug}`,
    // lastModified: new Date(post.date).toISOString(),
  }));

  const youngstarVideoDataResponse = youngstarVideoData.map((post) => ({
    url: `${homepage}/${post.slug}`,
    // lastModified: new Date(post.date).toISOString(),
  }));

  const youngstarCategoryDataResponse = youngstarCategoryData.map((post) => ({
    url: `${homepage}/categories/${post.category}`,
  }));

  const routes = ["", "/categories", "/search", "/insights"].map((route) => ({
    url: `${homepage}${route}`,
    // lastModified: new Date().toISOString(),
  }));

  return [
    ...routes,
    ...karmyogiVideoDataResponse,
    ...karmyogiCategoryDataResponse,
    ...insightDataResponse,
    ...youngstarVideoDataResponse,
    ...youngstarCategoryDataResponse,
  ];
}
