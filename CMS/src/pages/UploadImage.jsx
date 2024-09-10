import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
// import GetProducts from "../helpers/GetProducts";
import Swal from "sweetalert2"
import axios from "axios";

const UploadImage = () => {
    const [file, setFile] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()

    const UploadImageCover = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', file)

        try {
            await axios.patch(`https://mrkive.site/products/${id}/cover-url`, formData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                    'Content-Type': 'multipart/form-data'
                }
            })
            navigate("/")
            Swal.fire({
                title: "Good job!",
                text: "Successfully Change Cover Image!",
                icon: "success"
            });
        } catch (error) {
            console.log(error);
            if(error.response.status){
                Swal.fire({
                    title: "Error!",
                    text: `${error.response.data.message}`,
                    icon: "error",
                  });
            }
        }

    }

    return (
        <div className="pl-72 p-10">

                <form onSubmit={UploadImageCover} className="font-[sans-serif] max-w-md mx-auto mt-20 align-middle">
                    <label className="text-base text-balck font-semibold mb-2 block">Change Image Cover</label>
                    <input type="file"
                        className="w-full text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded" 
                        name="image"
                        onChange={(e) => setFile(e.target.files[0])}
                        />
                    <p className="text-xs text-gray-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
                <button type="submit"
                    className="mt-5 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wider border-2 border-black outline-none bg-transparent hover:bg-black text-black hover:text-white transition-all duration-300"
                >
                    Upload
                </button>
                </form>

        </div>
    )
}

export default UploadImage