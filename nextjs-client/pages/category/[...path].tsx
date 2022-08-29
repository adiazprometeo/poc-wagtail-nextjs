import { getPage, getAllCategories, cleanUrlPaths } from '@helpers/wagtail';

export { default } from '../[...path]';

export async function getStaticProps({ params }) {
  let path = params.path || [];
  path = path.join('/');
  // full path
  path = `category/${path}`;

  const data = await getPage(path);
  return { props: data };
}

export async function getStaticPaths() {
  const categoryList = await getAllCategories();
  let totalUrls = [];

  for (const category of categoryList.items) {
    const data = await getPage(`category/${category.slug}`);

    let pageCount = data.paginator.numPages;
    const pageIndexArray = Array.from({ length: pageCount }, (_, i) => i + 1);

    let paginationPaths = pageIndexArray.map(
      (x) => `${category.slug}/page-${x}`
    );
    // do not forget to add the default category page
    totalUrls.push(...paginationPaths, `${category.slug}`);
  }

  totalUrls = cleanUrlPaths(totalUrls);
  const totalPaths = totalUrls.map((x) => ({ params: { path: x } }));
  return {
    paths: totalPaths,
    fallback: false,
  };
}
