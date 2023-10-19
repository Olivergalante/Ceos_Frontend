import { useState, useEffect } from "react";

export const CeoList = () => {
	const [ceolist, setCeoList] = useState([]);

	useEffect(() => {
		const url = "http://127.0.0.1:8000/ceos/";
		const getList = async () => {
			const data = await fetch(url).then((response) => response.json());
			setCeoList(data);
		};
		getList();
	}, []);

	return (
		<>
			<ul>
				{ceolist?.map((ceo, index) => {
					return (
						<li key={index}>
							{ceo.name} - {ceo.year_started}
						</li>
					);
				})}
			</ul>
		</>
	);
};
