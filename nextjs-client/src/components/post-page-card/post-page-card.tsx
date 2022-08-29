import Link from "next/link";
import { BaseImage } from "@components/base-image";


function PostPageCard(props: any) {
    const {post} = props;
    const {pageContent} = post;
    const dateStr = new Date(pageContent.lastPublishedAt).toUTCString();
  
    return (
    <div className="card mb-4">
      <Link href={pageContent.url}>
        <a>
          <BaseImage img={pageContent.headerImage}/>
        </a>
      </Link>
      <div className="card-body">
        <h2 className="card-title">
          <a className="text-decoration-none" href={pageContent.url}>{pageContent.title}</a>
          </h2>
        <Link href={pageContent.url}>
            <a className="btn btn-primary">Read More →</a> 
        </Link>
        </div>
      <div className="card-footer text-muted">Posted on {dateStr}</div>
    </div>
    );
}

export { PostPageCard };
