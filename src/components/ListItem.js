import { show_popup } from "../store/slice"
import { useDispatch } from "react-redux"

export const ListItem = ({item}) => {
	const dispatch = useDispatch()
	
	const show = (item) =>{
		let obj = {
			show: true,
			item: item
		}
		dispatch(show_popup(obj))
	}

	return(
		<li onClick={()=>show(item)}>
			<figure>
				<img src={item.image} alt={item.name}/>
				<figcaption>{item.name}</figcaption>
			</figure>
		</li>
	)

}