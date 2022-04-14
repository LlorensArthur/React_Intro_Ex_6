import React from "react";
import Square from "./Square";

class MyApp extends React.Component {
	constructor(props) {
		super(props);
		this.numbersLeft = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, null, null, null, null, null, null];
		this.state = {
			nbr: 2,
			size: 100,
			value: "",
			numbersValue: this.generateCodeNumbers()
		};
	}


	randomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}


	generateCodeNumbers(){
		let numbers = [];
		for (let i = 0; i < 16; i++) {
			let tmpNumber = this.getCodeNumber();
			numbers.push(tmpNumber);
		}
		return numbers
	}

	getCodeNumber(){
		let randomIndex = this.randomNumber(0, this.numbersLeft.length - 1);
		let selectedNumber = this.numbersLeft[randomIndex];
		if(selectedNumber === undefined){
			return null;
		}
		this.numbersLeft.splice(randomIndex, 1);
		return selectedNumber
	}

	render() {
		return (
			<div style={{ textAlign: "center" }}>
				<h1>Mon code de banque</h1>
				<div
					style={{
						width: 100 * 4 + 25,
						margin: "auto",
						display: "flex",
						flexWrap: "wrap",
					}}
				>
					{/* {[...Array(this.state.nbr * this.state.nbr).keys()].map( */}
					{Array.from({length: 16},(num, index) => {
                            // console.log('num --->', index);
							return (
								<Square
									key={index}
									size={this.state.size}
									color="blue"
									number={this.state.numbersValue[index]}
								/>
							);
						}
					)}
				</div>
			</div>
		);
	}
}

export default MyApp;