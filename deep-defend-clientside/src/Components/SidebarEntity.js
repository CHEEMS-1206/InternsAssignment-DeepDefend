import {Link} from 'react-router-dom'

function SidebarEntity({ linkToAddress, content }) {

  // redirection
  const handleClick = () => {
    window.location.href = linkToAddress;
  };

  return (
    <div className="sidebarEntity" onClick={handleClick} >
      {content}
    </div>
    // alternatively we can use react-router-dom link component
    // <Link to={linkToAddress} className="sidebarEntity">
    //   {content}
    // </Link>
  );
}

export default SidebarEntity;