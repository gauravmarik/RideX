import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../../data/carList";
console.log("line4 RideSelector");

const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) => {
	console.log("inside rideSelector line 7");
	const [rideDuration, setRideDuration] = useState(0);
	// get ride duration from MapBox API
	// 1. pickupCoordinates
	// 2. dropoffCoordinates

	useEffect(() => {
		rideDuration = fetch(
			`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiZ21hcmlrIiwiYSI6ImNsMXo0c3h1czBkOHgzY3BldTU2aHM3cWgifQ.yJWY_PXMt6ARgitBtBs_7g`
		)
			.then((res) => res.json())
			.then((data) => {
				setRideDuration(data.routes[0]?.duration / 100);
				// console.log(data, "inside useEfect line 20");

				// if (rideDuration === 0) {
				// 	setRideDuration(data.routes[0]?.duration / 100);
				// 	console.log(data, "inside useEfect line 20");
				// }
			});
	}, [pickupCoordinates, dropoffCoordinates]);
	return (
		<Wrapper>
			<Title>Choose a ride, or swipe up for more</Title>
			<CarList>
				{carList.map((car, index) => (
					<Car key={index}>
						<CarImage src={car.imgUrl} />
						<CarDetails>
							<Service>{car.service}</Service>
							<Time>5 min away</Time>
						</CarDetails>
						<Price>{"$" + (rideDuration * car.multiplier).toFixed(2)}</Price>
					</Car>
				))}
			</CarList>
		</Wrapper>
	);
};

export default RideSelector;

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col`;

const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b`;

const CarList = tw.div`
overflow-y-scroll
`;

const Car = tw.div`
flex p-4 items-center`;

const CarImage = tw.img`
h-14 mr-4
`;

const CarDetails = tw.div`
flex-1`;

const Service = tw.div`
font-medium `;

const Time = tw.div`
text-xs text-blue-500`;

const Price = tw.div`
text-sm`;
