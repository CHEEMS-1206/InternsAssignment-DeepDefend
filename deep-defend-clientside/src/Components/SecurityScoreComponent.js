function SecurityScoreComponent({title, score, analytics}){
    return (
        <div className="securityScoreContainer">
            <p className="title">{title}</p>
            <p className="grade">C</p>
            <p className="score">{score}</p>
            <p className="analytics">{analytics}</p>
        </div>
    )
}
export default SecurityScoreComponent;