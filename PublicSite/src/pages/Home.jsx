
import { useEffect, useState } from "react"
import Card from "../components/Card"
import GetProducts from "../helpers/GetProducts"
import Pagination from "../components/Pagination"
import Search from "../components/Search"
import FilterButton from "../components/FilterButton"
import SortButton from "../components/SortButton"
import fotohome from "../assets/Untitled design.png"



const Home = () => {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState()
    const [searchProduct, setSearchProduct] = useState("")
    const [selectCategory, setSelectCategory] = useState();
    const [sort, setSort] = useState("name")


    const getAllProducts = async () => {
        try {
            let { data } = await GetProducts({
                url: `/pub/products`,
                method: 'GET',
                params: {
                    page: {
                        size: 10,
                        number: currentPage
                    },
                    search: searchProduct,
                    filter: selectCategory,
                    sort
                }
            })
            setProducts(data.data)
            setTotalPage(data.totalPage)

        } catch (error) {
            console.log(error);
        }
    }
    function nextPage(){
        setCurrentPage(currentPage + 1)
    }

    function prevPage(){
        setCurrentPage(currentPage - 1)
    }

    // const findProduct = async () => {
    //     try {
    //         let { data } = await GetProducts({
    //             url: `/pub/products?search=${searchProduct}`,
    //             method: 'GET'
    //         })
    //         console.log(searchProduct);
    //         setProducts(data.data)
    //         setTotalPage(data.totalPage)

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    useEffect(() => {
        getAllProducts()
    }, [])

    useEffect(() => {
        getAllProducts()
    }, [currentPage, searchProduct, sort, selectCategory])


    return (
        <>
            <div style={{ width: '95vw' }} className="mx-auto my-5 mb-2">
                <div className="relative">
                    <figcaption className="absolute px-4 text-lg text-white bottom-20 left-10">
                        <h1 className="text-4xl font-bold " >CASUAL, CRAFTED WITH CARE</h1>
                        <p className="mb-5">Experience the perfect fusion of comfort and quality in every piece we create</p>
                        <a href="/#Products" type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">Start Shopping</a>
                    </figcaption>
                    <img className="rounded-lg w-full h-full object-cover" src={fotohome} alt="image description" />
                </div>
            </div>


            <div id="Products" className="bg-white pt-10">
                <div id="Products" className="sticky top-20 z-50 bg-white pb-2">
                <h1 style={{ textAlign: 'center' }} className="text-2xl font-bold mt-10 mb-5">Products</h1>
                <div>
                    <Search getAllProducts={getAllProducts} searchProduct={searchProduct} setSearchProduct={setSearchProduct} />
                    <FilterButton selectCategory={selectCategory} setSelectCategory={setSelectCategory} />
                    <SortButton setSort={setSort}/>
                </div>
                </div>

                <div className="font-[sans-serif] py-4 mx-auto lg:max-w-[95vw] max-w-lg md:max-w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

                        {products.map((product, i) => (
                            <Card key={i} product={product} />
                        ))}

                    </div>
                </div>
                <Pagination currentPage={currentPage} nextPage={nextPage} prevPage={prevPage} totalPage={totalPage}/>
                
            </div>
        </>
    )
}

export default Home