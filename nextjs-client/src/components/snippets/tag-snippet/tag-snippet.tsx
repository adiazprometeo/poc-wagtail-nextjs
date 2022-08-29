import type { NextPage } from 'next'
import { Badge } from "react-bootstrap";
import Link from "next/link";

const TagSnippet: NextPage = (props: any) => {
    const {tagsList} = props;
        
    return (
        <div className="card mb-4">
            <h5 className="card-header">Tags</h5>
            <div className="card-body">
                {
                    tagsList.map((tag: any) => (
                        <Link href={`${tag.url}`} key={tag.slug}>
                            <a>
                                <Badge bg="secondary">{tag.name}</Badge>{" "}
                            </a>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export { TagSnippet };
