import Presentation from "../composants/presentation";
import Header from "../layout/header";
import Projects from "../composants/projects";
import Skills from "../composants/skills";

function Home() {
  return (
    <>
      <Header />
      <Presentation />
      <Projects />
      <Skills />
    </>
  );
}

export default Home;
