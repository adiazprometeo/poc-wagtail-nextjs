import { Col } from "react-bootstrap";
import { TagSnippet, CategorySnippet } from "@components/snippets";
import { Badge } from "react-bootstrap";

function SideBar(props: any) { 
    return (
        <Col md={4}>
            <h1>Heading <Badge bg="secondary">New</Badge></h1>
            <CategorySnippet {...props} />
            <TagSnippet {...props} />
        </Col>
    );
}

export { SideBar };
