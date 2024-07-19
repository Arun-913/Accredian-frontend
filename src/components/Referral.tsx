import right_arrow_white from '../assets/images/right-arrow-white.png'
import right_arrow_black from '../assets/images/right-arrow-black.png'
import graduate_cap from '../assets/images/graduate-cap.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

interface Props {
    authToken: string;
}

export const Referral: React.FC<Props> = ({ authToken }) =>{
    const [selected, setSelected] = useState<number>(0);
    const programs = ['Professional Certificate Program in Product Management', 'PG Certificate Program in Strategic Product Management', 'Executive Program in Data Driven Product Management', 'Executive Program in Product Management and Digital Transformation', 'Executive Program in Product Management', 'Advanced Certification in Product Management', 'Executive Program in Product Management and Project Management'];
    const programName = ['ALL PROGRAMS', 'Product Management', 'Strategy & Leadership', 'Business Management', 'Fintech', 'Senior Management', 'Data Science', 'Digital Transformation', 'Business Analytics'];
    const navigate = useNavigate();

    const handleOnClick = () =>{
        if(!authToken){
            navigate('/');
        }
        navigate('/refer-form')
    }

    return (
        <div className="h-[1000px] p-[50px]">
            <div className="w-[584px] h-[120px] m-auto flex justify-center items-center">
                <div className="text-4xl font-bold">What Are The <span className="text-custom-blue">Referral Benefits?</span></div>
            </div>

            <div className="flex justify-center items-center w-[1698px] p-6 bg-custom-light-gra">
                <div className="bg-white rounded-xl shadow-custom m-6">
                    {programName.map((name, index) =>{
                        return (
                            <div onClick={() => setSelected(index)} key={index} className={`w-[270px] h-[50px] p-6 font-[20px] font-semibold flex justify-between items-center cursor-pointer ${selected == index ? 'bg-custom-blue text-white': 'text-black'} ${selected == 0 ? 'rounded-t-xl' : ''} ${selected == programName.length-1 ? 'rounded-b-xl': ''}}`}>
                                <span>{name}</span>
                                <img src={selected == index ? right_arrow_white : right_arrow_black} alt="" />
                            </div>
                        )
                    })}
                </div>
                
                <table className='text-[20px] shadow-custom rounded-xl'>
                    <thead className='rounded-t-xl bg-custom-light-purple'>
                        <tr className='h-[58px]'>
                        <th className='w-[621px] text-left p-4 border-r-2 border-custom-gray rounded-tl-xl'>Programs</th>
                        <th className='w-[180px] text-center p-4 border-r-2 border-custom-gray'>Referrer Bonus</th>
                        <th className='w-[180px] text-center p-4 rounded-tr-xl'>Referee Bonus</th>
                        </tr>
                    </thead>
                    {programs.map((program, index) => {
                        return (
                            <tr key={index}>
                                <td className='flex items-center text-[20px] p-4 border-r-2 border-custom-gray'>
                                    <img src={graduate_cap} alt="" />
                                    <span className='ml-4'>{program}</span>
                                </td>
                                <td className='text-center text-[20px] p-4 border-r-2 border-custom-gray'>
                                    &#8377; 7,000
                                </td>
                                <td className='text-center text-[20px] p-4'>
                                    &#8377; 9,000
                                </td>
                            </tr>
                        );
                    })}
                </table>
            </div>
            <div className='flex justify-center items-center m-[90px]'>
                <div className='w-[236px] h-[64px] text-xl text-white bg-custom-blue flex justify-center items-center rounded-lg m-auto cursor-pointer' onClick={handleOnClick}>
                    Refer Now
                </div>
            </div>
        </div>
    )
}