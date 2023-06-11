import { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Header, Icon, List } from 'semantic-ui-react';

export const AboutMe = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['red', 'green', 'blue', 'yellow', 'olive', 'teal', 'violet', 'purple', 'pink', 'brown', 'grey'];
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 2000); // Change color every 1 second

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentColor = colors[colorIndex];

  return (
    <Container className='mt-3'>
      {/* <h1 className="ui  horizontal header grey mb-5 self-align" style={{ textAlign: 'center' }} id='about'>
          About Me
        </h1> */}
      <Row className="justify-content-center mb-5" >
        <Col lg={6} className="text-center mb-5  mx-auto ml-5 mr-5">
          <div className="image-container-profile">
            <Image
              src="/portfolioPic.jpeg"
              style={{ width: '300px', height: '300px', objectFit: 'cover', objectPosition: 'center', borderRadius: '50%' }}
              alt="Avatar"
              roundedCircle
              className="image-profile"
            />
          </div>
        </Col>
        <Col lg={6} className="text-center text-lg-left mb-5">
          <span className='mb-1'>
            <h2 style={{ marginBottom: "5px" }}>Hello,</h2>
            <Header
              size='huge'
              style={{ marginTop: "5px", transition: 'color 2s linear', animation: 'fadeHeader 5s infinite', }}
              className='mb-3'
              color={currentColor} >
              I’m Kate Sundquist
            </Header>
          </span>
          <List className='mt-5 mb-5' divided relaxed>
            <List.Item content={(<><Icon name='marker' />{" "}Roseville, CA  95747</>)} />
            <List.Item
              icon=''
              content={(<><Icon name='mail' />{" "}<a href='mailto:kate.sundquist2@gmail.com'>kate.sundquist2@gmail.com</a></>)}
            />
            <List.Item
              icon=''
              content={(<><Icon name='phone' />{" "}<a href='tel:3125799294'>312-579-9294</a></>)}
            />

          </List>
          <p>
            A dedicated and versatile professional with a passion for technology and a specialization in full-stack development. With a solid foundation in JavaScript, CSS/HTML, and CRM platforms, I am committed to delivering innovative and user-friendly solutions. Whether it's crafting seamless user experiences or solving complex technical challenges, my goal is to leverage my strong communication skills, leadership abilities, and problem-solving mindset to create impactful applications. Explore my portfolio to see how my adaptability, positive attitude, and ability to work independently can contribute to your technological endeavors. Let's collaborate and bring your ideas to life!
          </p>
        </Col>
      </Row>
    </Container>
  );
}
