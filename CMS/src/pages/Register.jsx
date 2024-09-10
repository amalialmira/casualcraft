import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import GetProducts from "../helpers/GetProducts";
import Swal from "sweetalert2";

const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")

    const navigate = useNavigate()

    const handleRegist = async (e) => {
        e.preventDefault()
        try {
            let { data } = await GetProducts({
                url: '/add-user',
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                },
                data: {
                    username,
                    email,
                    password,
                    phoneNumber,
                    address
                }
            })
            navigate('/')
            Swal.fire({
                title: "Good job!",
                text: "Successfully added new user!",
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
        <div className="max-w-4xl mx-auto font-[sans-serif] p-6 ml-[27vw]">
            <div className="text-center mb-16">
                <h4 className="text-gray-800 text-2xl font-semibold mt-6">Add New User</h4>
            </div>

            <form onSubmit={handleRegist}>
                <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Username</label>
                        <input 
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                        name="username"
                        type="text"
                        className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-gray-300 transition-all" placeholder="Enter username" />
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Email</label>
                        <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        name="email" type="email" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-gray-300 transition-all" placeholder="Enter email" />
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Password</label>
                        <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        name="password" type="password" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-gray-300 transition-all" placeholder="Enter password" />
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Phone Number</label>
                        <input 
                        value={phoneNumber}
                        onChange={(e) => {
                            setPhoneNumber(e.target.value)
                        }}
                        name="phoneNumber" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-gray-300 transition-all" placeholder="Enter phone number" />
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Address</label>
                        <input
                        value={address}
                        onChange={(e) => {
                            setAddress(e.target.value)
                        }}
                        name="address" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-gray-300 transition-all" placeholder="Enter address" />
                    </div>
                </div>

                <div className="!mt-12">
                    <button onClick={handleRegist} type="submit" className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-black hover:bg-gray-300 focus:outline-none">
                        Add User
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Register
