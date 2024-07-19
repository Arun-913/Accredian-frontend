import logo from '../assets/images/logo.png';
import downArrow from '../assets/images/down-arrow.png';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

interface Props {
    authToken: string;
}

export const AppBar: React.FC<Props> = ({ authToken }) =>{
    const [loginVisible, setLoginVisible] = useState<boolean>(true);
    const navigate = useNavigate();
    const [selected, setSelected] = useState<number>(0);
    const menuItems = ["Refer", "Benefits", "FAQs", "Support"];

    const handleTryForFreeButton = () =>{
        if(authToken == ""){
            navigate('/');
        }
        navigate('/refer-form')
    }

    useEffect(() =>{
        if(authToken){
            setLoginVisible(false);
        }
    }, [])

    return (
        <div>
            <div className="w-[1798px] h-[79.2px] p-[9.6px] px-[280px] gap-0 opacity-1 flex justify-between items-center">
                <div className="w-[1360px] h-[60px] py-[10px] justify-between">
                    <div className="w-[560px] h-[40px] gap-[32px] flex text-center">
                        <img className='w-[125px] h-[36.66px]' src={logo} alt="" />
                        <div className='w-[166px] h-[4opx] text-[14.88px] font-inter font-medium leading-[24px] bg-white flex justify-center items-center text-lg bg-custom-blue text-white rounded-md'>
                            <div className='p-1'>Courses</div>
                            <img src={downArrow} alt="Down Arrow" className='p-1'/>
                        </div>
                    </div>
                    <div className="w-[600px] h-[40px] gap-[32px] opacity-0.2"></div>
                </div>

                <div className='w-[920px] h-[40px] flex justfiy-center items-center font-medium'>
                    <div className="p-2 cursor-pointer">Refer & Earn</div>
                    <div className="p-2">
                        <span className="p-2 cursor-pointer">Resources</span>
                        <span className="p-2 cursor-pointer">About Us</span>
                    </div>
                    <div className="p-2">
                        {loginVisible ? <span className="mr-2 p-2 rounded-md bg-custom-gray cursor-pointer" onClick={() => navigate('/signin')}>Login</span> : <span className="mr-2 p-2 rounded-md bg-custom-gray cursor-pointer">Hello</span>}
                        <span className="m-2 p-2 rounded-md bg-custom-blue text-white cursor-pointer" onClick={handleTryForFreeButton}>Try for free</span>
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>
                <div className='flex justify-around items-center items-center w-[797px] h-[63px] top-[179px] rounded-full text-2xl bg-custom-gray'>
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className={`cursor-pointer ${selected === index ? 'text-custom-blue' : ''}`}
                            onClick={() => setSelected(index)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}