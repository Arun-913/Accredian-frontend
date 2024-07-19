import refer_option from '../assets/images/refer-option.png'
import add_friend from '../assets/images/add_friend.png'
import assignment from '../assets/images/assignment.png'
import participate from '../assets/images/participate.png'
import { useNavigate } from 'react-router-dom';

interface Props {
    authToken: string;
}


export const ReferOption: React.FC<Props> = ({ authToken }) =>{
    const navigate = useNavigate();

    const handleOnClick = () =>{
        if(!authToken){
            navigate('/');
        }
        navigate('/refer-form')
    }

    return (
        <div className="bg-custom-refer-option h-[785px]">
            <div className="w-[321px] h-[120px] m-auto flex justify-center items-center">
                <div className="text-4xl font-bold">How Do I <span className="text-custom-blue">Refer?</span></div>
            </div>
            <div>
                <img src={refer_option} alt="" className='m-auto relative h-auto z-10' />
                <img src={add_friend} alt="" className='absolute top-[1180px] left-[470px] z-10'/>
                <div className='h-[10px] w-[220px] p-2 text-center text-[16px] absolute top-[1280px] left-[390px] z-10'>Submit referrals easily via our website’s referral section.</div>
                <img src={assignment} alt="" className='absolute top-[1180px] left-[870px] z-10'/>
                <div className='h-[10px] w-[220px] p-2 text-center text-[16px] absolute top-[1280px] left-[790px] z-10'>Earn rewards once your referral joins an Accredian program.</div>
                <img src={participate} alt="" className='absolute top-[1180px] left-[1260px] z-10'/>
                <div className='h-[10px] w-[200px] p-2 text-center text-[16px] absolute top-[1280px] left-[1190px] z-10'>Both parties receive a bonus 30 days after program enrollment.</div>
            </div>

            <div className='flex justify-center items-center m-[90px]'>
                <div className='w-[236px] h-[64px] text-xl text-white bg-custom-blue flex justify-center items-center rounded-lg m-auto cursor-pointer' onClick={handleOnClick}>
                    Refer Now
                </div>
            </div>
        </div>
    )
}