import dynamic from 'next/dynamic';

const LazyPages: Record<string, any> = {
  PostPage: dynamic(async () => {
    const mod = await import('../post-page/post-page');
    return mod.PostPage;
  }),
  BlogPage: dynamic(async () => {
    const mod = await import('../blog-page/blog-page');
    return mod.BlogPage;
  }),
};

export { LazyPages };
