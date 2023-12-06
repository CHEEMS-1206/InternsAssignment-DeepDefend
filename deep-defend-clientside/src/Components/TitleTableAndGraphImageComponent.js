import React from "react";

function TitleTableAndGraphImageComponent({
  heading,
  columnTitles,
  dataArray,
  img,
}) {
  return (
    <div className="titleTableAndGraphImageComponent">
      <div className="titleContainerDiv">
        <p className="title">{heading}</p>
        <table>
          <thead>
            <th>
              {columnTitles.map((title, index) => (
                <td key={index}>{title}</td>
              ))}
            </th>
          </thead>
          <tbody>
            {dataArray.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td key={colIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="graphContainer">
        <img src={img} alt="Graph" />
      </div>
    </div>
  );
}

export default TitleTableAndGraphImageComponent;
