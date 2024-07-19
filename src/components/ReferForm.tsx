import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

export const ReferForm = () =>{
    const [name, setName] =  useState<string>('');
    const [email, setEmail] =  useState<string>('');
    const [message, setMessage] =  useState<string>('');
    const [error, setError] = useState<string>('');
    const [authToken, setAuthToken] = useState<string>('');
    const navigate = useNavigate();

    const handelOnClick = async(event: React.FormEvent) =>{
        event?.preventDefault();
        try {
            console.log(name, email, message);
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/referral`,
                {
                    name,
                    email,
                    message
                },
                {
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                }
            );
            console.log(response);
            setError('');
            alert('Form successfully submitted')
            navigate('/');
        } catch (error) {
            console.log(error);
            setError('Fill the input details correctly');
        }
    }

    useEffect(() =>{
        const authToken = Cookies.get('authToken');
        if(!authToken){
            navigate('/signin');
        }
        // @ts-ignore
        setAuthToken(authToken);
    }, [])

    return (
        <>
            <form className="h-screen flex flex-col justify-center items-center text-2xl" onSubmit={handelOnClick}>
                <div className="text-custom-blue text-5xl font-semibold p-4">Referral Form</div>
                <table>
                    <tr>
                        <td className="px-4 py-2">
                            <label>Name:</label>
                        </td>
                        <td className="px-4 py-2">
                            <input
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className="rounded border-2 border-black m-2 p-1"
                                type="text" placeholder="Enter name"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">
                            <label>Email:</label>
                        </td>
                        <td className="px-4 py-2">
                            <input
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="rounded border-2 border-black m-2 p-1"
                                type="email" placeholder="example@email.com"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">
                            <label>Message:</label>
                        </td>
                        <td className="px-4 py-2">
                            <textarea 
                                className="border-2 shadow-custom"
                                value={message}
                                onChange={e => setMessage(e.target.value)}>
                            </textarea>
                        </td>
                    </tr>
                </table>
                    <div className="cursor-pointer">
                        <button className="h-14 text-lg rounded-lg border-2 m-6 w-20 bg-custom-blue" style={{color:"white"}} type="submit">Submit</button>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
            </form>
        </>
    );
}