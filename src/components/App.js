import { useEffect,useRef} from 'react';
import { ListItem } from './ListItem';
import { Popup } from './Popup';
import { add_chars } from '../store/slice';
import { useSelector, useDispatch } from "react-redux"

import './App.sass'

function App() {

	const data = useSelector(store => store.default.chars)
	const page = useSelector(store => store.default.page)
  const bottomRef = useRef(null)
  const headerRef = useRef(null)
	const dispatch = useDispatch()

	
	
	const cb = async (entries) => {
    if (entries[0].isIntersecting) {
			const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
			const data = await response.json()
			dispatch(add_chars(data))
    }
  }; 
  
  useEffect(() => {
		const { current } = bottomRef;
		const options = {
			root: null,
      threshold: 1,
		}
    const observer = new IntersectionObserver(cb, options);
    observer.observe(current);
		
		return () => observer.disconnect(current);
  });

	return (
		<>
			<header ref={headerRef}>
					<span className="ttop"
						onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})}>
						↑ to top
					</span>
			</header>

			<Popup />

			<ul className="list">
				{data && data.map(item => <ListItem item={item} key={item.id}/> )}
			</ul>
			<div ref={bottomRef} />
		</>
	);
}

export default App;
