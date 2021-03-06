import PropTypes from "prop-types";
import Link from "next/link";
import React, { Component } from "react";
import {
  Button,
  Container,
  Menu,
  Responsive,
  Icon,
  Sidebar
} from "semantic-ui-react";

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children, getWidth } = this.props;
    const { sidebarOpened } = this.state;
    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Link href="/">
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
          </Link>

          <Link href="/products">
            <Menu.Item as="a">Products</Menu.Item>
          </Link>
          <Link href="/locations">
            <Menu.Item as="a">Locations</Menu.Item>
          </Link>
          <Link href="/about">
            <Menu.Item as="a">About Us</Menu.Item>
          </Link>
          <Menu.Item as="a">Log in</Menu.Item>
          <Menu.Item as="a">Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Container>
            <Menu inverted pointing secondary size="large">
              <Menu.Item onClick={this.handleToggle}>
                <Icon name="sidebar" />
              </Menu.Item>
              <Menu.Item position="right">
                <Button as="a" inverted>
                  Log in
                </Button>
                <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                  Sign Up
                </Button>
              </Menu.Item>
            </Menu>
          </Container>
          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

export default MobileContainer;
