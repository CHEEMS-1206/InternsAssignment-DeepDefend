import GraphScetion from "../Components/GraphSection";
import SecurityScoreComponent from "../Components/SecurityScoreComponent";

function  HeaderComponent(){
    return (
      <div className="headerComponent">
        <SecurityScoreComponent
          title="Security Score"
          score="70"
          analytics="-1 ~ From last month"
        />
        <div className="compareScenariosSection">
          <div className="title">Compare Scenarios</div>
          <div>
            <p id="dotorange"></p>Azure to AWS_2
          </div>
          <div>
            <p id="dotpurple"></p>Hybrid Risk to customer data.
          </div>
          <div>
            <p id="dotgreen"></p>Log 4 Shell</div>
          <div className="settingHolder">
            <p id="settingButton"> S </p> Select scenarios
          </div>
        </div>
        <GraphScetion />
      </div>
    );
}

export default HeaderComponent;