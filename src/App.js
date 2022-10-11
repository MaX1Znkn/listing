import "./App.css";
import Listing from "./components/Listing/Listing";
import items from "./data";

function App() {
	return (
		<div className="App">
			<Listing items={items} />
		</div>
	);
}

export default App;
