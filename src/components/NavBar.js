import React, { useContext, useState } from 'react'
import { Checkbox, Container, Icon, Menu, Sidebar } from 'semantic-ui-react'
import { ThemeContext } from '../ThemeContext';

export const NavBar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const onThemeChange = (mode) => {
    theme === "dark" ? toggleTheme("light") : toggleTheme("dark");
  }
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // const sidebarStyle = {
  //   backgroundColor: theme === 'dark' ? '#111' : '#fff',
  // };

  return (
    <>
      <Menu inverted={theme === "dark" ? true : false} fluid fixed='top'>
        <Container>
          <Menu.Item header href="/">{"Kate Sundquist".toUpperCase()}</Menu.Item>
          <Menu.Menu position="right" className="d-none d-md-flex">
            <Menu.Item name="About Me" href="#about" />
            <Menu.Item name="Projects" href="#projects" />
            <Menu.Item name="Experience" href="#experience" />
            <Menu.Item name="Resume" href="#resume" />
            <Menu.Item name="Contact" href="#contact" />
            <Menu.Item >
              {theme === "light" ? <Icon name='sun' /> : <Icon name='moon' />}
              <Checkbox toggle fitted onChange={onThemeChange} checked={theme === "dark" ? true : false} />
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position="right" className="d-md-none">

            <Menu.Item onClick={toggleSidebar}>
              <Icon name="bars" size="large" />
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
      <Sidebar
        as={Menu}
        animation="overlay"
        direction="top"
        onHide={() => setSidebarVisible(false)}
        vertical
        visible={sidebarVisible}
        width="very wide"
        // style={sidebarStyle}
      >
        <Menu.Item name="About Me" href="#about" onClick={() => setSidebarVisible(false)} />
        <Menu.Item name="Resume" href="#resume" onClick={() => setSidebarVisible(false)} />
        <Menu.Item name="Projects" href="#projects" onClick={() => setSidebarVisible(false)} />
        <Menu.Item name="Experience" href="#experience" onClick={() => setSidebarVisible(false)} />
        <Menu.Item name="Contact" href="#contact" onClick={() => setSidebarVisible(false)} />
        <Menu.Item >
          {theme === "light" ? <Icon name='sun' /> : <Icon name='moon' />}
          <Checkbox toggle fitted onChange={onThemeChange} checked={theme === "dark" ? true : false} />
        </Menu.Item>
      </Sidebar>
    </>
  );
}
