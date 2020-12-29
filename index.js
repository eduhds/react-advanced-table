import React, { useState } from 'react';

export default function Table({ colunms, rows = [] }) {
    const [searchAll, setSearchAll] = useState('');
    const keys = Object.keys(rows[0]);
    colunms = colunms || keys;

    // Pesquisa todas
    if (searchAll) {
        rows = rows.filter(r => {
            let has = Object.keys(r)
                .map(k => r[k])
                .filter(c => (c + '').toLowerCase().indexOf(searchAll.toLowerCase()) !== -1);

            return has.length > 0;
        });
    }

    // agrupar
    let grupo = 'idade';
    let grupos = null;
    if (grupo) {
        grupos = {};
        let diferentes = [];
        rows.map(r => r[grupo]).map(g => {
            if (!diferentes.includes(g)) {
                diferentes.push(g);
            }
        });

        diferentes.forEach(dif => {
            grupos[dif] = rows.filter(r => r[grupo] === dif);
        });

        console.log('grupos', grupos);
    }

    return (
        <div>
            <input onChange={e => setSearchAll(e.target.value)} />
            <table>
                <thead>
                    <tr>
                        {colunms.map((item, index) => (
                            <th key={index}>{item}</th>
                        ))}
                    </tr>
                </thead>
                {!grupos && (
                    <tbody>
                        {rows.map((item, index) => (
                            <tr key={index}>
                                {keys
                                    .map(k => item[k])
                                    .map((cel, id) => (
                                        <td key={id}>{cel}</td>
                                    ))}
                            </tr>
                        ))}
                    </tbody>
                )}

                {grupos && (
                    <tbody>
                        {Object.keys(grupos).map((key, index) => (
                            <React.Fragment key={index}>
                                <tr>
                                    <td>{key}</td>
                                </tr>
                                {grupos[key].map((item, index) => (
                                    <tr key={index}>
                                        {keys
                                            .map(k => item[k])
                                            .map((cel, id) => (
                                                <td key={id}>{cel}</td>
                                            ))}
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}
                    </tbody>
                )}
            </table>
        </div>
    );
}