import { useParams } from "react-router-dom";

function ProductScreen(){

    const param = useParams();
    const {slug} = param;
    return <div>{slug}</div>
}

export default ProductScreen;