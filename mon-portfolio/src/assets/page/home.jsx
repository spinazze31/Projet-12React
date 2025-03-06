import Presentation from "../composants/presentation";
import Header from "../layout/header";
import Projects from "../composants/projects";
import Skills from "../composants/skills";
import Footer from "../layout/footer";

function Home() {
  return (
    <>
      <Header />
      <Presentation />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}

export default Home;
