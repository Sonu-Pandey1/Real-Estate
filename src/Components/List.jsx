import './list.scss'
import ListingCard from "./ListingCard"
import {PropertyData} from "../../lib/propertyData.js"

function List(){
  return (
    <div className='list'>
      {PropertyData.map(item=>(
        <ListingCard key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default List