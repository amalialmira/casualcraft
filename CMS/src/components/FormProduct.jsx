import GetProducts from "../helpers/GetProducts"
import { useEffect, useState } from "react"


const Formproduct = (props) => {
    console.log(props, "INI DI FORMM");
    const {
        name,
        description,
        price,
        stock,
        imgUrl,
        categoryId,
        setName,
        setDescription,
        setPrice,
        setStock,
        setImgUrl,
        setCategoryId,
        HandleAdd
    } = props

    const [categories, setCategories] = useState([])

    const getAllCat = async () => {
        try {
            let { data } = await GetProducts({
                url: '/categories',
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            })
            setCategories(data)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        console.log("masukkkk");
        getAllCat()
    }, [])

    return (
        <div className="font-[sans-serif] bg-white md:h-screen ml-60">
            <div className="grid md:grid-cols-2 items-center gap-8 h-full">
                <form onSubmit={HandleAdd} className="max-w-sm w-full mx-auto">
                    <div className="mb-5">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 "
                            htmlFor="email"
                        >
                            Name
                        </label>
                        <input
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            name="name"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            placeholder="product name"
                            type="text"
                        />
                    </div>

                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                        <input
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}
                            name="description"
                            rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="product description..."></input>
                    </div>

                    <div className="mb-5">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            Price
                        </label>
                        <input
                            value={price}
                            onChange={(e) => {
                                setPrice(e.target.value)
                            }}
                            name="price"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            type="number"
                            placeholder="product price"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            Stock
                        </label>
                        <input
                            value={stock}
                            onChange={(e) => {
                                setStock(e.target.value)
                            }}
                            name="stock"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            type="number"
                            placeholder="product stock"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 "
                            htmlFor="email"
                        >
                            Image URL
                        </label>
                        <input
                            value={imgUrl}
                            onChange={(e) => {
                                setImgUrl(e.target.value)
                            }}
                            name="imgUrl"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            id="imgUrl"
                            placeholder="image url"
                            type="text"
                        />
                    </div>

                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Category</label>
                        <select
                            value={categoryId}
                            name="categoryId"
                            onChange={(e) => {
                                setCategoryId(e.target.value)
                            }}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                            <option disabled>-- Select Category --</option>
                            {categories.map((el) => (
                                <option key={el.id} value={el.id}>{el.name}</option>
                            ))}
                        </select>
                    </div>



                    <button onClick={HandleAdd}
                        className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>

                <div className="max-md:order-1 p-4 bg-gray-50 h-full">
                    <img
                        alt="login-image"
                        className="lg:max-w-[90%] w-full h-full object-contain block mx-auto"
                        src="../../public/Untitled design.png"
                    />
                </div>
            </div>
        </div>
    )
}

export default Formproduct