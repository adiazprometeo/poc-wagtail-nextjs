import { StreamField } from "@components/stream-fields";
import { BaseImage } from "@components/base-image";

function PostDetail(props: any) {
    const { pageContent } = props;
    
    return (
        <div className="col-md-8">
            <BaseImage img={pageContent.headerImage} />
            <hr />
            <h1>{pageContent.title}</h1>
            <hr />
            <StreamField value={pageContent.body} />
        </div> 
    );
}

export { PostDetail };
