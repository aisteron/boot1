import { useEffect,useRef, useState} from 'react';
import { ListItem } from './ListItem';
import { Popup } from './Popup';
import { add_chars } from '../store/slice';
import { useSelector, useDispatch } from "react-redux"

import './App.sass'

function App() {

	const dispatch = useDispatch()
	//const data = useSelector(store => store.default.chars)
	const ref = useRef(null);
	const [data, setData] = useState([])


	
	useEffect(()=>{

		(async function(){
		
			const response = await fetch('https://rickandmortyapi.com/api/character')
			const data = await response.json()
			//dispatch(add_chars(data))
			
			setData(data.results)
			//obs(setData,data,ref)
			

		}())
	
	},[ref]);



	return (
		<>
			<header>header</header>
			<Popup />
			<ul className="list" ref={ref}>
				{data && data.map(item => <ListItem item={item} key={item.id}/> )}
			</ul>
		</>
	);
}

export default App;


function obs(setData, data,ref){
	if(!ref.current) return
	

	
	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.5
	}

	const callback = entries =>{
		const [entry] = entries
		console.log(entry.isIntersecting)

		entry.isIntersecting && setData(data.results)
	}
	
	const observer = new IntersectionObserver(callback, options)
	observer.observe(ref.current)

}

// https://stackoverflow.com/questions/65806186/intersectionobserver-inside-useeffect-works-only-once

