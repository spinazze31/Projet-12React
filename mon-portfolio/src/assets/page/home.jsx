import Header from "../layout/header";
import Presentation from "../composants/presentation";
import Formation from "../composants/formation";
import Projects from "../composants/projects";
import Skills from "../composants/skills";
import Footer from "../layout/footer";

function Home() {
  return (
    <>
      <Header />
      <Presentation />
      <Formation />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}

export default Home;
