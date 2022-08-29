import Link from "next/link";
import { useRouter } from "next/router";

import { Col, Pagination, Alert } from "react-bootstrap";

import { PostPageCard } from "@components/post-page-card";

function getPageItems(props: any, router: any) {
    const {paginator} = props;
    const {currentPage, numPages} = paginator;
    let items = [];
    const curPath = router.asPath;
    let prePageUrl, nextPageUrl;
    
    if (curPath.match(/\/page-[0-9]+/)) {
        prePageUrl = curPath.replace(/\/page-[0-9]+/, `/page-${currentPage - 1}`);
        nextPageUrl = curPath.replace(/\/page-[0-9]+/, `/page-${currentPage + 1}`); 
    } else {
        prePageUrl = `${curPath}/page-${currentPage - 1}`.replace("//", "/");
        nextPageUrl = `${curPath}/page-${currentPage + 1}`.replace("//", "/"); 
    }
    
    items.push(
        <li key={prePageUrl} className={`page-item ${currentPage > 1 ? "" : "disabled"}`}>
            <Link href={prePageUrl}>
                <a className="page-link">Previous</a>
            </Link>
        </li> 
    );
    
    items.push(
        <li 
            key={nextPageUrl}
            className={`page-item ${currentPage >= numPages ? "disabled" : ""}`}>
            <Link href={nextPageUrl}>
                <a className="page-link">Next</a>
            </Link>
        </li>
    );

    return items;
}

function getFilterMsg(props: any) {
    const { filterMeta } = props;
    let filterMsg = "";

    if (filterMeta.filterType) {
        filterMsg = (
            <Alert variant="primary">
                Results for{" "}
                <span>
                    {filterMeta.filterType}: {filterMeta.filterTerm}
                </span>
            </Alert> 
        );
    }
    
    return filterMsg;
}

function PostPageCardContainer(props: any) {
    const router = useRouter();
    const {childrenPages} = props;
    const pageItems = getPageItems(props, router);
    const filterMsg = getFilterMsg(props);

    return (
        <Col md={8}>
            {filterMsg}
            
            {
                childrenPages && childrenPages.map((post: any) => (
                    <PostPageCard post={post} key={post.pageContent.id}/>
                ))
            }
            <Pagination>{pageItems}</Pagination>
        </Col>
    ); 
}

export { PostPageCardContainer };
