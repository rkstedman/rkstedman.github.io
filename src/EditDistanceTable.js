import React from 'react';

export default class EditDistanceTable extends React.Component {
  render(props) {
    let s = this.props.word1;// 'editing';
    let t = this.props.word2; //'distance';
    let D = this.props.editDistanceTable;
    console.log(s, t, D);
    if (D) {
      console.log(t.length, s.length);
      console.log(D.length, D[0].length);
    }

    if (!D || (D.length !== (t.length + 1) && D[0].length !== (s.length + 1))) {
      return <div></div>;
    }
    // let D = [ [ 0, 1, 2, 3, 4, 5, 6, 7 ],
    //           [ 1, 1, 1, 2, 3, 4, 5, 6 ],
    //           [ 2, 2, 2, 1, 2, 3, 4, 5 ],
    //           [ 3, 3, 3, 2, 2, 3, 4, 5 ],
    //           [ 4, 4, 4, 3, 2, 3, 4, 5 ],
    //           [ 5, 5, 5, 4, 3, 3, 4, 5 ],
    //           [ 6, 6, 6, 5, 4, 4, 3, 4 ],
    //           [ 7, 7, 7, 6, 5, 5, 4, 4 ],
    //           [ 8, 7, 8, 7, 6, 6, 5, 5 ] ];

    // Generate table headers with string letters
    let headers = [<th key="0-0"></th>, <th key="0-1"></th>];
    for(let i = 0; i < s.length; i++) {
      headers.push(<th key={i + 2}>{s[i]}</th>)
    }

    let rows = [];
    for(let j = 0; j <= t.length; j++) {
      let cells = []
      cells.push(<th key={0}>{t[j - 1]}</th>);
      for(let i = 0; i <= s.length; i++) {
        if(j === t.length && i === s.length) {
          cells.push(<td key={i + 1} className="is-selected">{D[j][i]}</td>)
        } else {
          cells.push(<td key={i + 1}>{D[j][i]}</td>)
        }
      }
      rows.push(<tr key={j + 1}>{cells}</tr>)
    }

    return (
      <table className="table is-bordered is-striped">
        <thead>
          <tr>
            {headers}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}
