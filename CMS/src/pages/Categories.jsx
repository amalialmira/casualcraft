import GetProducts from "../helpers/GetProducts"
import { useEffect, useState } from "react"

const Categories = () => {
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
        getAllCat()
    }, [])

    return(

    <div>

            <div className="bg-white ml-60 p-8">
                <h1 className="text-2xl font-semibold mb-5">Category List</h1>
                <div className="font-sans overflow-x-auto rounded-xl">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-100 whitespace-nowrap">
                            <tr>
                                <th className="p-4 text-left text-sm font-semibold text-gray-800">
                                    Category id
                                </th>
                                <th className="p-4 text-left text-sm font-semibold text-gray-800">
                                    Name
                                </th>
                            </tr>
                        </thead>

                        <tbody className="whitespace-wrap divide-y divide-gray-200">
                            {categories.map((el, i) => (
                                <tr className="hover:bg-gray-50" key={el.id}>
                                    <td className="p-4 text-xs text-gray-800">
                                        {el.id}
                                    </td>
                                    <td className="p-4 text-xs text-gray-800">
                                        {el.name}
                                    </td>
                                </tr>

                            ))}

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Categories