import Footer from "./../../components/Footer/Footer";
import Header from "./../../components/Header/Header";
import style from "./HomeLayOut.module.scss";
function HomeLayOut(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default HomeLayOut;
