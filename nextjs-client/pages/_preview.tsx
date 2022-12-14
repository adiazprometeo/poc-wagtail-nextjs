import { getPagePreview } from "@helpers/wagtail";
export { default } from "./[...path]";

export async function getStaticProps({ preview, previewData }: any) {
    if (!preview) {
        return { props: {} }; 
    }
    
    const { contentType, token } = previewData;
    const pagePreviewData = await getPagePreview(contentType, token, {});
    
    return {
        props: pagePreviewData,
    }; 
}
