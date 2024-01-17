import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="mx-auto">
          <Nav.Link href="/">Accounts</Nav.Link>
          <Nav.Link href="/profiles">Profiles</Nav.Link>
          <Nav.Link href="/campaigns">Campaigns</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
