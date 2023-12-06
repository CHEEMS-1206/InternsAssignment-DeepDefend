function SubTrioComponent({
  title,
  severityType,
  complexityType,
  affectedAsset,
  criticalAssets,
}) {
  const styles = {};

  return (
    <div className="subTrioComponent">
      <div className="TCS-holder">
        <h4>{title}</h4>
        <p>
          Complexity : <span className="complexityType">{complexityType}</span>
        </p>
        <p>
          Severity : <span className="severityType">{severityType}</span>
        </p>
      </div>
      <div className="AA-CA-holder">
        <div>
          <span className="affectedAssets">{affectedAsset}</span>
          <p>Affected Entities</p>
        </div>
        <div>
          <span className="criticalAssets">{criticalAssets}% </span>
          <p>Critical assets at risk</p>
        </div>
      </div>
      <div className="remediation-holder">View Remediations</div>
    </div>
  );
}
export default SubTrioComponent;
