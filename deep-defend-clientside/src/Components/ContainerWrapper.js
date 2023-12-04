// Accepts follow things :
// stylings : height width bgColor padding shadows
// content : content to be published inside the container 

function ContainerWrapper({stylingFromParent,content}) {
  const style = {
    height: stylingFromParent.height,
    width: stylingFromParent.width,
    backgroundColor: stylingFromParent.backgroundColor,
    color: stylingFromParent.color,
    padding: stylingFromParent.padding,
    boxShadow: stylingFromParent.boxShadow,
  };
  return <div style={style}>{content}</div>;
}

export default ContainerWrapper;