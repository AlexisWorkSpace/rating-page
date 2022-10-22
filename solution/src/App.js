import { useState } from 'react';
import star from './assets/icon-star.svg';
import thanks from './assets/illustration-thank-you.svg';


function App() {
  const [isSubmitted, setSubmitted] = useState(false);
  const [items, setItems] = useState("");

  const Button = ({ number }) => {
    return (
      <button className="btn-number text-gray-100 bg-gray-600 h-10 w-10 p-2 rounded-full focus:bg-gray-400 transition-all duration-150"
	      onClick={ () => setItems(number)}>
	{ number }
      </button>
    );
  }

  return (
    <>
      { !isSubmitted && (
      <div className="wrapper">
	<img src={ star } alt="star" className="bg-gray-700 p-2 rounded-full"/>
	<h2 className="text-gray-100 text-3xl my-7">How did we do?</h2>
	<p className="text-gray-300 mb-10">
	  Please let us know how we did with your support request. All feedback is appreciated 
	  to help us improve our offering!
	</p>

	<ul className="grid grid-cols-5 gap-3 mb-10">
	  <li><Button number={ 1 } /></li>
	  <li><Button number={ 2 } /></li>
	  <li><Button number={ 3 } /></li>
	  <li><Button number={ 4 } /></li>
	  <li><Button number={ 5 } /></li>
	</ul>

	<div>
	  <button 
	    onClick={ () => setSubmitted(true) }
	    className="btn-submit w-full text-white display rounded-full uppercase tracking-wide pt-3 pb-2">
	    Submit
	  </button>
	</div>
      </div>
      )}

      { isSubmitted && <ThankYou items={ items }/> }
    </>
  );
}

const ThankYou = ({ items }) => {
  return (
    <div className="wrapper">
      <img src={ thanks } alt="thanks" className="block mx-auto mb-10"/>
      <div className="flex items-center justify-center">
        <p className="p-rating text-center bg-gray-600 rounded-full text-sm px-4 pt-1">You selected { items } out of 5</p>
      </div>
      <h2 className="text-gray-100 text-3xl my-7 text-center">Thank you!</h2>
      <p className="text-gray-300 text-center mb-10">
	We appreciate you taking the time to give a rating. If you ever need more support, 
	don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default App;
