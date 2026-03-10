import Hero from "../../sections/Hero/index.tsx";
import About from "../../sections/About/index.tsx";
import Mission from "../../sections/Mission/index.tsx";
import Help from "../../sections/Help/index.tsx";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Mission />
      <Help />
    </>
  );
};

export default Home;
