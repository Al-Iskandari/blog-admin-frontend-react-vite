import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const CountUpAnimation = ({
	initialValue,
	targetValue,
	text,
}) => {
	const [count, setCount] = useState(initialValue);
	const duration = 4000; // 4 seconds

	useEffect(() => {
		let startValue = initialValue;
		const interval = Math.floor(
			duration / (targetValue - initialValue));

		const counter = setInterval(() => {
			startValue += 1;
			setCount(startValue);
			if (startValue >= targetValue) {
				clearInterval(counter);
			}
		}, interval);

		return () => {
			clearInterval(counter);
		};
	}, [targetValue, initialValue]);

	return (
		<div className="col">
			<div className="inner">
			<p className="count counter">{count}</p>
			<p className="jenis">{text}</p>
			</div>
	  	</div>
	);
};

CountUpAnimation.propTypes = {
	initialValue :PropTypes.number.isRequired,
	targetValue :PropTypes.number.isRequired,
	text : PropTypes.string.isRequired
}

export default CountUpAnimation;