import { Col } from 'react-bootstrap';
import { TagSnippet, CategorySnippet } from '@components/snippets';

function SideBar(props: any) {
  return (
    <Col md={4}>
      <h1>
        Heading New
      </h1>
      <CategorySnippet {...props} />
      <TagSnippet {...props} />
    </Col>
  );
}

export { SideBar };
