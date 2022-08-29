import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";

function TopNav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-2">
      <Container>
        <Link href="/">
          <a className="navbar-brand">Next.js Wagtail Demo</a>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
); }
export { TopNav };
