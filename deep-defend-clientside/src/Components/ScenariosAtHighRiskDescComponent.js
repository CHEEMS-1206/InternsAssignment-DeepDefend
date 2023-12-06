function ScenariosAtHighRiskDescComponent({
  grade,
  title,
  img,
  linkToAddress,
}) {
  const clickHnadler = () => {
    window.location.href = linkToAddress;
  };
  return (
    <div className="scenariosAtHighRiskDescComponent">
      <div className="grade">{grade}</div>
      <p className="title">{title}</p>
      <img src={img} />
      <button onClic={clickHnadler} className="btm">Take Action</button>
    </div>
  );
}
export default ScenariosAtHighRiskDescComponent;