import React, { useContext } from 'react'
import { Container, Header, Icon, Segment } from 'semantic-ui-react'
import { ThemeContext } from '../ThemeContext';

export const Footer = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <Segment
      inverted={theme === "dark" ? true : false}
      vertical
      style={{ padding: "1em 0em", marginTop: "2em" }}
    >
      <Container textAlign="center">
        <Header>
          <a href="https://github.com/kitkatt17" rel="noopener noreferrer" target='_blank'>
            <Icon name='github' />
          </a>
          <a href="https://www.linkedin.com/in/kate-sundquist-bb54681a4/" rel="noopener noreferrer" target='_blank'>
            <Icon name='linkedin' />
          </a>
        </Header>
        <p>© {new Date().getFullYear()}. All rights reserved.</p>
      </Container>
    </Segment>
  )
}
