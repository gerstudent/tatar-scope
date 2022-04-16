import {
  Col,
  Container,
  Row,
  Breadcrumb,
  Image,
  Carousel,
  Nav,
  Alert,
  Card,
  Button,
  Pagination,
  Table,
  Form,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

function App() {
  return (
    <>
      {/*------Navbar------*/}
      <Navbar
        mb="10px"
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Tatarscope
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/*------Navbar------*/}
      
      <Container>
        <Alert variant="info">Example link</Alert>

        {/*------Carousel------*/}
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://soliloquywp.com/wp-content/uploads/2018/11/nb_ist_cover.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://soliloquywp.com/wp-content/uploads/2019/04/nb_esc_cover.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://soliloquywp.com/wp-content/uploads/2019/01/nb_eca_cover.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/*------Carousel------*/}

        <div className="my-5">
          {/*------Cads------*/}
          <Row className="md-4">
            {[0, 1, 2, 3].map((item) => (
              <Col md="3" xs="6">
                <Card style={{ width: "auto" }}>
                  <Card.Img
                    variant="top"
                    src="https://media.sproutsocial.com/uploads/2019/09/how-to-write-a-blog-post.svg"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          {/*------Cards------*/}

          
        </div>
      </Container>
    </>
  );
}

export default App;
