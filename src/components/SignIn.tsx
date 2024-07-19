import axios from "axios";
import { useState } from "react";
// import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

export const SignIn = () =>{
    const [name, setName] =  useState<string>('');
    const [email, setEmail] =  useState<string>('');
    const [password, setPassword] =  useState<string>('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    const handelOnClick = async(event: React.FormEvent) =>{
        event?.preventDefault();
        try {
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/signin`,{
                name,
                email,
                password
            });
            // Cookies.set('authToken', response.data.token, {expires: 2});
            setError('');
            navigate('/');
        } catch (error) {
            console.log(error);
            setError('Fill the input details correctly');
        }
    }

    return (
        <>
            <form className="h-screen flex justify-center items-center text-2xl" onSubmit={handelOnClick}>
                <div>
                    <div className="text-custom-blue text-5xl font-semibold p-4">Login Form</div>
                    <div>
                        <label>Name: &nbsp;&nbsp;&nbsp;&nbsp;</label>
                        <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="rounded border-2 border-black m-2 p-1"
                            type="text" placeholder="Enter name" />
                    </div>
                    <div>
                        <label>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="rounded border-2 border-black m-2 p-1"
                            type="email" placeholder="example@email.com" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="rounded border-2 border-black m-2 whitespace p-1"
                            type="password" placeholder="Enter password" />
                    </div>
                    <div className="flex justify-center items-center cursor-pointer">
                        <button className="h-14 text-lg rounded-lg border-2 m-6 w-20 bg-custom-blue" style={{color:"white"}} type="submit">Signin</button>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                </div>
            </form>
        </>
    );
}