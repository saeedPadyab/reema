import React from "react";
import { NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import Layout from "@Shared/components/Layout";
import Content from "./../pagesComponents/Home";

type Props = {};

const Home: NextPage<Props, any> = () => {
  return (
    <Layout metaTags={defaultMetaTags}>
      <Content />
    </Layout>
  );
};

// export async function getStaticProps() {
//   const contentfulService = new ContentfulService();
//   try {
//     const data = await contentfulService.getBlogPostEntries();
//     // TODO: need to move outside
//     const { tags } = await contentfulService.getAllTags();
//     return {
//       props: {
//         tags,
//         entries: data && data.entries ? data.entries : [],
//       },
//       revalidate: 5,
//     };
//   } catch (error) {
//     return {
//       props: {
//         isError: true,
//       },
//     };
//   }
// }

export default Home;
