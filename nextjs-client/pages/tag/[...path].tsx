import { getPage, getAllTags, cleanUrlPaths } from "@helpers/wagtail";

export { default } from "../[...path]";

export async function getStaticProps({ params }) {
  let path = params.path || [];
  path = path.join("/");
  // full path
  path = `tag/${path}`;

  const data = await getPage(path);
  return { props: data };
}

export async function getStaticPaths() {
  const tagList = await getAllTags();
  let totalUrls = [];

  for (const tag of tagList.items) {
    const data = await getPage(`tag/${tag.slug}`);

    let pageCount = data.paginator.numPages;
    const pageIndexArray = Array.from({ length: pageCount }, (_, i) => i + 1);

    let paginationPaths = pageIndexArray.map((x) => `${tag.slug}/page-${x}`);
    // do not forget to add the default tag page
    totalUrls.push(...paginationPaths, `${tag.slug}`);
  }

  totalUrls = cleanUrlPaths(totalUrls);
  const totalPaths = totalUrls.map((x) => ({ params: { path: x } }));
  return {
    paths: totalPaths,
    fallback: false,
  };
}
