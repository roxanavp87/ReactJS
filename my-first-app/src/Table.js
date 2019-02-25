import React from 'react';

const Table = ({ characterData}) => {
    const rows = characterData.map( (row, index) => {
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        );
    })
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                </tr>
            </thead>
            <tbody>
                {rows }
            </tbody>
        </table>
    );
}

export default Table;