import ScenariosAtHighRiskDescComponent from "../Components/ScenariosAtHighRiskDescComponent";
import TitleAndButton from "../Components/TitleAndButton";
import DropdownSelectorComponent from "./DropdownSelectorComponent";
import HeaderComponent from "./HeaderComponent";

import bubblesChart from '../assets/bubbledGraph.png'
import piechart from '../assets/piechart.png'
import analyticImage from "../assets/analyticImage.png";
import TitleTableAndGraphImageComponent from "../Components/TitleTableAndGraphImageComponent";
import SubTrioComponent from "../Components/SubTrioComponent";

function Mainbody() {
  return (
    <div className="mainbody">
      <HeaderComponent />
      <DropdownSelectorComponent />
      <div className="mainComponent">
        <div className="subComponent">
          <TitleAndButton title="Scenarios at high Risk" />
          <div className=" sub-subcomponent">
            <ScenariosAtHighRiskDescComponent
              grade="F"
              img={analyticImage}
              title="(22) - On-Prem Risk | Workstation > DC"
            />
            <ScenariosAtHighRiskDescComponent
              grade="F"
              img={analyticImage}
              title="(24) - AWS - Public EC2 to Sensitive Data S3"
            />
            <ScenariosAtHighRiskDescComponent
              grade="F"
              img={analyticImage}
              title="(24) - Azure external users > Azure Customer..."
            />
          </div>
        </div>
        <div className="subComponent">
          <TitleAndButton title="Top Choke points" />
          <div className="sub-subcomponent">
            <TitleTableAndGraphImageComponent
              heading="Critical assets compromised by attack vectors with the lowest average complexity."
              columnTitles={[
                "Critical Asset name",
                "Avg- Complexity",
                "Trends",
              ]}
              dataArray={[
                ["Raymond Butcher", 2, "100%"],
                ["Testing", 2, "100%"],
                ["ATM - Jump server", 2.13, "100%"],
              ]}
              img={piechart}
            />
          </div>
        </div>
        <div className="subComponent">
          <TitleAndButton title="Critical assets at Risk" />
          <div className="sub-subcomponent">
            <TitleTableAndGraphImageComponent
              heading="Top 3 entities which are part of the most attack vectors to critical asset that effect 43.1% of critical assets (267/619)."
              columnTitles={["Entity Name", "Critical aspect", "Trends"]}
              dataArray={[
                ["Hezi Nagar", 233, "100%"],
                ["Compute engine default service account", 141, "100%"],
                ["gcppocsa", 64, "100%"],
              ]}
              img={bubblesChart}
            />
          </div>
        </div>
        <div className="subComponent">
          <TitleAndButton title="Top impacting attack techniques" />
          <div className="sub-trio-componentHolder">
            <SubTrioComponent
              title="Local Credentials"
              severityType={"Medium"}
              complexityType={"Low"}
              affectedAsset={10}
              criticalAssets={45}
            />
            <SubTrioComponent
              title="PrintNightmare - window.."
              severityType={"High"}
              complexityType={"Low"}
              affectedAsset={31}
              criticalAssets={39}
            />
            <SubTrioComponent
              title="Local Credentials"
              severityType={"High"}
              complexityType={"Low"}
              affectedAsset={9}
              criticalAssets={29}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainbody;
