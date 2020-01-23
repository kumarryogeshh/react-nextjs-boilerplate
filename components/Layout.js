import { Segment, Container, Responsive } from "semantic-ui-react";

import Head from "../components/Head";
import DesktopContainer from "../layout/DesktopContainer";
import MobileContainer from "../layout/MobileContainer";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const Layout = props => {
  return (
    <div>
      <Segment inverted style={{ minHeight: 700, padding: "1em 0em" }} vertical>
        <Head />
        <DesktopContainer getWidth={getWidth}>
          <Container>{props.children}</Container>
        </DesktopContainer>
        <MobileContainer getWidth={getWidth}>
          <Container>{props.children}</Container>
        </MobileContainer>
      </Segment>
    </div>
  );
};

export default Layout;
