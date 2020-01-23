import PropTypes from "prop-types";
import React, { Component } from "react";
import Link from "next/link";

import {
  Button,
  Container,
  Menu,
  Responsive,
  Visibility
} from "semantic-ui-react";

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children, getWidth } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Menu
            fixed={fixed ? "top" : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
            <Container>
              <Link href="/">
                <Menu.Item as="a" className="header">
                  Our Company
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

              <Menu.Item position="right">
                <Button as="a" inverted={!fixed}>
                  Log in
                </Button>
                <Button
                  as="a"
                  inverted={!fixed}
                  primary={fixed}
                  style={{ marginLeft: "0.5em" }}
                >
                  Sign Up
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

export default DesktopContainer;
