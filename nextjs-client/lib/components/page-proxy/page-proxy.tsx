import { Fragment } from 'react';
import { LazyPages } from '@components/lazy-pages';
import { HeadMeta } from '@components/head-meta';

function PageProxy(props: any) {
  const { pageType } = props;
  const PageComponent = LazyPages[pageType];

  if (PageComponent) {
    return (
      <Fragment>
        <HeadMeta {...props} />
        <PageComponent {...props} />
      </Fragment>
    );
  } else {
    return <div>Error when loading {pageType}</div>;
  }
}

export { PageProxy };
