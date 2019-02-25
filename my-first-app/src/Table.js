import React from 'react';

const Table = ({ characterData, removeCharacter}) => {
    const rows = characterData.map( (row, index) => {
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick={() => removeCharacter(index)}>Delete</button></td>
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