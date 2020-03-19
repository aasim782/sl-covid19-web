import React, { useEffect } from "react";
import { useStore } from "./Stores/RootStore";
import { observer } from "mobx-react-lite";
import DashboardTile from "./components/DashboardTile";
import styled from "styled-components";
import HospitalCard from "./components/HospitalCard";

const App = observer(() => {
	const { stores } = useStore();
	const { dataStore } = stores;

	useEffect(() => {
		dataStore.initData();
	}, []);

	const {
		update_date_time,
		local_new_cases,
		local_total_cases,
		local_deaths,
		local_new_deaths,
		local_recovered,
		hospital_data
	} = dataStore._dataRegistry;

	return (
		<DashboardStyles>
			<h1>Sri Lanka COVID-19 </h1>
			<h2>Local Cases</h2>
			<InfoContainer>
				<DashboardTile
					icon={"/icons/hospital.svg"}
					title="Cases"
					total={local_total_cases}
					newCases={local_new_cases}
				/>

				<DashboardTile
					icon={"/icons/deaths.svg"}
					title="Deaths"
					total={local_new_deaths}
					newCases={local_deaths}
				/>

				<DashboardTile
					icon={"/icons/recovered.svg"}
					title="Recovered"
					total={local_recovered}
					newCases={null}
				/>
			</InfoContainer>
			<HospitalListContainer>
				{hospital_data &&
					hospital_data.map((hospital, index) => {
						return <HospitalCard hospitalData={hospital} key={index} />;
					})}
			</HospitalListContainer>
		</DashboardStyles>
	);
});

export default App;

const DashboardStyles = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const InfoContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const HospitalListContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
`;