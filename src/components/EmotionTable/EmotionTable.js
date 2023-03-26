import React from 'react';
import '../../index.css';

const EmotionTable = ({ emotions }) => {
    //Returns the emotions as an HTML table
      return (
        <table className="table table-bordered">
          <tbody>
            {Object.entries(emotions).map(([emotion, value]) => (
              <tr>
                <td>{emotion}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    };
    
    export default EmotionTable;
