import { Header, Responsive } from "semantic-ui-react";
import { isMobile } from "react-device-detect";
import Layout from "../components/Layout";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const Index = props => {
  return (
    <Layout getWidth={getWidth}>
      <Header
        as="h3"
        inverted
        style={{
          fontSize: isMobile ? "2em" : "4em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: "1.5em"
        }}
      >
        React{" "}
        <span>
          <img
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-32.png"
            width="32"
          />
        </span>{" "}
        + Next{" "}
        <span>
          <img
            src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/9114856761551941711-256.png"
            width="32"
          />
        </span>
        = Awesomeness ! 🎉
      </Header>
    </Layout>
  );
};

export default Index;
