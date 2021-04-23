import Footer from "components/Footer";
import ScrollIcon from "components/ScrollIcon";
/**
 * Default layout component
 */
const DefaultLayout = ({ children }) => (
  <div>
    <main>{children}</main>
    <ScrollIcon />
    <Footer />
  </div>
);

export default DefaultLayout;
