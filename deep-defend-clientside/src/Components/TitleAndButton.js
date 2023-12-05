// This fn accepts 2 parameters one for ref link and one for title

function TitleAndButton({title, linkRefTo}){
    const handleClick = () => {
      window.location.href = linkRefTo;
    };
    return <div className="titleAndButtonContainer">
        <p>{title}</p>
        <button onClick={handleClick}>View all</button>
    </div>
}
export default TitleAndButton;