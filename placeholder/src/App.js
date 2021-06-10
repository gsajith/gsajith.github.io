import BlockHover from "./components/BlockHover";
import { ReactComponent as Figma } from "./assets/figma.svg";
import { ReactComponent as Twitter } from "./assets/twitter.svg";
import { ReactComponent as Github } from "./assets/github.svg";
import { ReactComponent as Download } from "./assets/download.svg";
import { ReactComponent as Polywork } from "./assets/polywork.svg";

const App = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
      <BlockHover>
        <div
          style={{
            fontSize: 32,
            fontWeight: "bold",
            fontFamily: "'Krona One', sans-serif",
            paddingLeft: 12,
            paddingRight: 14,
          }}>
          Gautham Sajith
        </div>
      </BlockHover>
      <div
        style={{
          display: "flex",
          marginTop: 8,
        }}>
        <BlockHover
          padding={12}
          time={600}
          href="https://twitter.com/GuamHat"
          target="_blank">
          <Twitter style={{ width: 32, height: 32 }} />
        </BlockHover>

        <BlockHover
          padding={12}
          time={600}
          href="https://github.com/gsajith"
          target="_blank">
          <Github style={{ width: 32, height: 32 }} />
        </BlockHover>

        <BlockHover
          padding={12}
          time={600}
          href="https://www.figma.com/@gautham"
          target="_blank">
          <Figma style={{ width: 32, height: 32 }} />
        </BlockHover>

        <BlockHover
          padding={14}
          time={600}
          href="https://www.polywork.com/gautham"
          target="_blank">
          <Polywork style={{ width: 26, height: 26 }} />
        </BlockHover>
      </div>

      <BlockHover
        time={600}
        padding={0}
        href="https://gsajith.com/resume.pdf"
        target="_blank"
        style={{
          marginTop: 4,
        }}>
        <div
          style={{
            padding: 12,
            paddingLeft: 26,
            paddingRight: 30,
            fontSize: 13,
            textTransform: "uppercase",
            fontWeight: "bold",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}>
          <Download style={{ width: 24, height: 24, marginRight: 8 }} />
          Resume (pdf)
        </div>
      </BlockHover>
    </div>
  );
};

export default App;
