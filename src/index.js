import React, { Component } from 'react';

export default class ReactAdvancedTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchAll: ''
		};
	}

	render() {
		let {
			colunms, // Array de strings, nomes das colunas
			rows = [], // Array de objetos, dados da linha
			grupo, // String, nome da coluna para agrupamento
			colOrder // String, nome da coluna para ordenação
		} = this.props;

		const { searchAll } = this.state;

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
		}

		// Ordenar
		if (colOrder) {
			rows = rows.sort(sortAlphabeticallyByChild(colOrder));
		}

		return (
			<div style={{ width: '100%' }}>
				<input onChange={e => this.setState({ searchAll: e.target.value })} />
				<table style={{ width: '100%' }}>
					<thead>
						<tr>
							{colunms.map((item, index) => (
								<th key={index}>{item}</th>
							))}
						</tr>
					</thead>

					{grupos ? (
						<tbody>
							{Object.keys(grupos).map((key, index) => (
								<tr key={index}>
									<td>
										<div>{key}</div>
										{grupos[key].map((item, index) => (
											<div key={index}>
												{keys
													.map(k => item[k])
													.map((cel, id) => (
														<span key={id}>{cel}</span>
													))}
											</div>
										))}
									</td>
								</tr>
							))}
						</tbody>
					) : (
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
				</table>
			</div>
		);
	}
}

function sortAlphabeticallyByChild(k) {
	return function (a, b) {
		var textA = a[k];
		var textB = b[k];
		if (typeof textA === 'string') textA = textA.toUpperCase().trim();
		if (typeof textB === 'string') textB = textB.toUpperCase().trim();
		return textA < textB ? -1 : textA > textB ? 1 : 0;
	};
}
