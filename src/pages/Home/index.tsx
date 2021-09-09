import { lazy } from "react";
import RoadmapContent from "../../content/RoadmapContent.json";
import RaratyContent from "../../content/RarityContent.json";
import FaqContent from "../../content/FaqContent.json";
import "../global.css"

const FaqBlock = lazy(() => import("../../components/FaqBlock"));
const RarityBlock = lazy(() => import("../../components/RarityBlock"));
const MachineBlock = lazy(() => import("../../components/MachineBlock"));
const SliderBlock = lazy(() => import("../../components/SliderBlock"));
const Roadmap = lazy(() => import("../../components/Roadmap"));
const Container = lazy(() => import("../../common/Container"));
const Title = lazy(() => import("../../common/Title"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
 
const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <MachineBlock
        image="machine1.png"
        id="machine"
      />
      <SliderBlock 
        type="left"
        id="slider"
      />
      <Title>Roadmap</Title>
      <Roadmap
        type="right"
        content={ RoadmapContent.roadmap1 }
        css={{left:"0%", top:"-2px", width:"7%"}}
        percent="0%"
        id="about"
      />
      <Roadmap
        type="left"
        content={ RoadmapContent.roadmap2 }
        css={{left:"22%", top:"-2px", width:"7%"}}
        percent="25%"
        id="about"
      />
      <Roadmap
        type="right"
        content={ RoadmapContent.roadmap3 }
        css={{left:"46%", top:"-2px", width:"7%"}}
        percent="50%"
        id="about"
      />
      <Roadmap
        type="left"
        content={ RoadmapContent.roadmap4 }
        css={{left:"72%", top:"-2px", width:"7%"}}
        percent="75%"
        id="about"
      />
      <Roadmap
        type="right"
        content={ RoadmapContent.roadmap5 }
        css={{left:"93%", top:"-2px", width:"7%"}}
        percent="100%"
        id="about"
      />
       <RarityBlock
        type="right"
        content={RaratyContent.content}
        id="mission"
      />
      <FaqBlock
        content={FaqContent.content}
        id="mission"
      />
    </Container>
  );
};

export default Home;
