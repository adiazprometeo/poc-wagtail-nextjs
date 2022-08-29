import { getPage, getAllPages, cleanUrlPaths } from '@helpers/wagtail';
import { PageProxy } from '@components/page-proxy';

export default PageProxy;

async function getAllPaths() {
  const data = await getAllPages();

  let htmlUrls = data.items.map((x) => x.relativeUrl);
  htmlUrls = cleanUrlPaths(htmlUrls);

  return htmlUrls.map((x) => ({ params: { path: x } }));
}

async function getPaginationPaths() {
  const data = await getPage('/');
  let pageCount = data.paginator.numPages;
  const pageIndexArray = Array.from({ length: pageCount }, (_, i) => i + 1);
  let pageUrls = pageIndexArray.map((x) => `/page-${x}`);
  pageUrls = cleanUrlPaths(pageUrls);
  return pageUrls.map((x) => ({ params: { path: x } }));
}

export async function getStaticProps({ params }) {
  params = params || {};
  let path = params.path || [];
  path = path.join('/');

  const data = await getPage(path);
  return { props: data };
}

export async function getStaticPaths() {
  const postPaths = await getAllPaths();
  const paginationPaths = await getPaginationPaths();
  return {
    paths: [...postPaths, ...paginationPaths],
    fallback: false,
  };
}
