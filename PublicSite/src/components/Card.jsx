import { Link } from "react-router-dom"
import formatToRupiah from "../helpers/FormatRupiah"

const Card = (props) => {

    const { product } = props

    return (
        <div>
            <div className="rounded-xl cursor-pointer hover:scale-[1.02] transition-all relative overflow-hidden">

                <div>
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl xl:aspect-h-8 xl:aspect-w-7">
                        <img 
                        src={product.imgUrl}
                        alt="Product 1" 
                        className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>

                <div className="text-center bg-white p-6">
                    <h3 className="text-sm font-bold text-gray-800">{product.name}</h3>
                    <h4 className="text-sm text-gray-800 font-medium mt-6">{formatToRupiah(product.price)} </h4>

                    <Link to={`/${product.id}`}
                        className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-gray-100 text-sm text-gray-800 font-semibold rounded-full hover:bg-gray-300">
                        Details</Link>
                </div>
            </div>
        </div>
    )
}

export default Card