import { useSelector, useDispatch } from "react-redux"
import { show_popup } from "../store/slice"

export const Popup = () => {
	const dispatch = useDispatch()
	const state = useSelector(state => state.default)
	console.log(state)
	
	if(!state.popup_is_open) return ""
	let {image, name,species,gender} = {...state.popup_content}
	
	return (

		<div id="popup">
			<img src={image} alt={name} width="300" height="300"/>
			<ul className="dsc">
				<li>
					<span>Name:</span>
					<span>{name}</span>
				</li>
				<li>
					<span>Species:</span>
					<span>{species}</span>
				</li>
				<li>
					<span>Gender: </span>
					<span>{gender}</span>
				</li>
			</ul>
			<span className="close" 
						onClick={
							()=>dispatch(show_popup({show:false, item:null}))
							}>close</span>
		</div>
		
	)
}