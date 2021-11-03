import Catalogue from "../components/Catalogue";
import Advantages from "../components/Advantages";
import {useParams} from "react-router-dom";


const CataloguePage = () => {

  let { category } = useParams()

  return (
    <div>
      <Catalogue category={category}/>
      <Advantages />
    </div>
  )
}

export default CataloguePage