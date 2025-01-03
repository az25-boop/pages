import "../animation.scss";
import "../App.scss";
import "./../scss/global.scss";
import Header from "./Header/Header";
import AboutMe from "./About/AboutMe";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";
import Works from "./Works/Works";
import { FC } from "react";
import ContactMe from "./Contact/ContactMe";
//2.5mb
const App: FC = () => {
  return (
    <main className="app">
      {/* Header component */}
      <Header />
      {/* About me component */}
      <AboutMe />
      {/* Skills component */}
      <Skills />
      {/* Works component */}
      <Works />
      {/* Contact me component */}
      <ContactMe />
      {/* Footer component */}
      <Footer />
    </main>
  );
};

export default App;
