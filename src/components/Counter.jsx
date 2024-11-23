import { useState } from "react";


export default function CounterWidget(){
	let [count, setCount] = useState(0);

	return(
		<section>
			<h1>{count}</h1>
			<p>Press the button to make the number go up!</p>
			<button onClick={() => setCount(previousCount => previousCount + 1)}>
				Press me!
			</button>
		</section>
	)
}