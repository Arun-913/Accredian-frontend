import image1 from '../assets/images/image-1.png'
import image2 from '../assets/images/image-2.png'
import image3 from '../assets/images/image-3.png'
import image4 from '../assets/images/image-4.png'
import { useNavigate } from "react-router-dom";

interface Props {
    authToken: string;
}

import advertise_page from '../assets/images/Advertisement.png';

export const Advertisement: React.FC<Props> = ({ authToken }) =>{
    const navigate = useNavigate();

    const handleOnClick = () =>{
        if(!authToken){
            navigate('/');
        }
        navigate('/refer-form')
    }

    return (
        <div className="flex justify-center items-center">
            <div className="w-[1360px] h-[702px] m-8 bg-custom-light-gray rounded-3xl shadow-custom">
                <div className="flex">
                    <div>
                        <img src={image1} alt="Image" />
                        <div className='w-[440px] h-[367px] m-12'>
                            <div className='font-bold text-7xl'>Let's Learn & Earn</div>
                            <div className='text-4xl font pr-20 pt-24'>Get a chance to win up-to <span className='font-bold text-custom-blue text-5xl'>Rs. 15,000</span></div>
                        </div>
                        <div className='w-[192px] h-[54px] m-12 text-xl text-white bg-custom-blue flex justify-center items-center rounded-lg cursor-pointer'>
                            <div onClick={handleOnClick}>Refer Now</div>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src={advertise_page} alt="Advertisement" className='relative w-full h-auto z-10'/>                        
                        <img src={image2} alt="" className='absolute top-[500px] left-[50px] z-10' />                        
                        <img src={image3} alt="" className='absolute top-[0px] left-[650px]' />                        
                        <img src={image4} alt="" className='absolute top-[0px] left-[210px]' />                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}