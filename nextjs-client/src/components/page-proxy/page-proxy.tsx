import { Fragment } from 'react';
import {LazyPages} from '@components/lazy-pages';

function PageProxy(props: any) {
    const {pageType} = props;
    const PageComponent = LazyPages[pageType];
        
    if (PageComponent) { 
        return (
            <Fragment>
                <PageComponent {...props} />
            </Fragment>
        ); 
    } else {
        return <div>Error when loading {pageType}</div>;
    }
}

export { PageProxy };
