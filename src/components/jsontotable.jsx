import React from 'react';
import './CSS/table.css'
import IITNameImagesData from './Assests/Data/IITNameImages.json'

function JsonToTable({ jsonData,visiblity,table }) {
  function getImageByTitle(title) {
    const item = IITNameImagesData.find((item) => item.title === title);

    if (item) {
        return item.image;
    } else {
        return null; 
    }
  }
  if (!jsonData) {
    return <div>Match is yet to happen</div>;
  }

  const data = Array.isArray(jsonData) ? jsonData : [jsonData];


  const columns = Object.keys(data[0]);

  return (
    <div>
      <table className={visiblity === "not-visible" ? "excel-like-table not-visible" : "excel-like-table"} id={table==="resultTable"?"result-table":"normal-table"} >
        <thead>
          <tr>
          {columns.map((column, index) => (
            <th key={index} style={{ textAlign: column === 'IIT' ? 'unset' : 'center' }}>
              {column}
            </th>
          ))}
          </tr>
        </thead>
        <tbody>
        {
          table !== "resultTable" ? (
            jsonData.map((item, index) => (
              <tr key={index}>
                <td >{index + 1}</td>
                <td>{item["Athlete"]}</td>
                <td><img src={require(`${getImageByTitle(item["IIT"])}`)} className='IIT-icon' alt={item["IIT"]}/>{item["IIT"]}</td>
                <td className='timing'>{item["Timing"]}</td>
              </tr>
            ))
          ) : (
            jsonData.map((item, index) => (
              <tr key={index}>
                <td className='medaltype'>{index + 1}</td>
                {/* <td>{item["Rank"]}</td> */}
                <td ><img src={require(`${getImageByTitle(item["IIT"])}`)} className='IIT-icon' alt={item["IIT"]}/>{item["IIT"]}</td>
                <td className='medaltype'>{item["Gold"]}</td>
                <td className='medaltype'>{item["Silver"]}</td>
                <td className='medaltype'>{item["Bronze"]}</td>
              </tr>
            ))
          )
        }   
        </tbody>
      </table>
    </div>
  );
}

export default JsonToTable;
