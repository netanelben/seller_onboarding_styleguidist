import React from 'react';
import AddNewBtn from '../Buttons/AddNew';
import './style.scss';

function TableHeader({ headerTitles, addNewHandler = null }) {
    return (
      <thead>
        <tr>
          {headerTitles.map(title => <th>{title}</th>)}
          <th><AddNewBtn onClickHandler={addNewHandler}/></th>
        </tr>
      </thead>
    );
}
  
function TableContent({ rows }) {
    return (
      <tbody>
        {rows.map(row => {
          return (
            <tr>
              <th>{row.name}</th>
              <th>{row.level}</th>
              <th>
                controls
              </th>
            </tr>
          );
        })}
      </tbody>
    );
}

export default function Table({ headerTitles, data }) {
    return (
        <table>
            <TableHeader headerTitles={headerTitles}/>
            <TableContent rows={data}/>
        </table>
    );
}