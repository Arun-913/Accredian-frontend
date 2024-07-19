import { useState } from 'react';
import logo from '../assets/images/accredian.png'
import facebook from '../assets/images/Facebook.png'
import instagram from '../assets/images/Instagram.png'
import linkedin from '../assets/images/LinkedIn.png'
import youtube from '../assets/images/Youtube.png'
import twitter from '../assets/images/Twitter.png'


const Programs = () =>{
    const programs = ['Data Science & AI', 'Product Management', 'Business Analytics', 'Digital Transformation', 'Business Management', 'Project Management', 'Strategy & Leadership', 'Senior Management', 'Fintech'];
    const [visibleAnswerIndex, setVisibleAnswerIndex] = useState<number | null>(null);
    
    const toggleAnswerVisibility = (index: number) => {
        setVisibleAnswerIndex(visibleAnswerIndex === index ? null : index);
    };

    return (
        <div className="w-[432px] h-[540px] p-4">
            <div className="p-2 font-bold text-[20px]">Programs</div>
            {programs.map((program, index) =>{
                return (
                    <div key={index}>
                        <div
                            className="faq-question flex justify-between items-center p-2 cursor-pointer bg-gray-700 rounded font-bold"
                            onClick={() => toggleAnswerVisibility(index)}
                        >
                            {program}<span>{visibleAnswerIndex === index ? '-' : '+'}</span>
                        </div>
                        <div className={`faq-answer ml-4 ${visibleAnswerIndex === index ? 'block' : 'hidden'} p-2 bg-gray-600 rounded`}>
                            It's {program} program.
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const Pages = () =>{
    const accredianPages = ['About', 'Career', 'Blog', 'Admission Policy', 'Referral Policy', 'Privacy Policy', 'Terms of Service', 'Master FAQs'];
    
    return (
        <div className="w-1/4 p-4">
            <div className="font-bold text-[20px]">Accredian</div>
            <div className="flex flex-col space-y-2">
                {accredianPages.map((page, index)=>{
                    return <a key={index} href="" className="text-blue-400 text-[14px]">{page}</a>
                })}
            </div>
        </div>
    )
}

const Contact = () =>{
    const images = [facebook, linkedin, twitter, instagram, youtube];
    const links = ['https://www.facebook.com/accredian', 'https://www.linkedin.com/company/accredian','https://twitter.com/accredian', 'https://www.instagram.com/accredian', 'https://www.youtube.com/accredian'];

    return (
        <div className="w-1/2 p-4">
            <p className="font-bold text-[20px]">Contact Us</p>
            <div className="flex flex-col">
                <p>Email us (For Data Science Queries): <a href="mailto:admissions@accredian.com" className="text-blue-400">admissions@accredian.com</a></p>
                <p>Email us (For Product Management Queries): <a href="mailto:pm@accredian.com" className="text-blue-400">pm@accredian.com</a></p>
                <p>Data Science Admission Helpline: <a href="tel:+919079653292" className="text-blue-400">+91 9079653292</a> (9 AM - 7 PM)</p>
                <p>Product Management Admission Helpline: <a href="tel:+919625811095" className="text-blue-400">+91 9625811095</a></p>
                <p>Enrolled Student Helpline: <a href="tel:+917969322507" className="text-blue-400">+91 7969322507</a></p>
                <p>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</p>
            </div>
            <div className="mt-4">
                <p className="font-bold text-lg">Follow Us</p>
                <div className="flex space-x-4 mt-2">
                    {images.map((image, index)=>{
                        return (
                            <a key={index} href={links[index]} target="_blank" rel="noopener noreferrer">
                                <img src={image} alt="Facebook" />
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export const Footer = () =>{


    

    return (
        <div className="bg-black flex flex-col items-center bg-gray-800 text-white p-8">
            <div className="w-3/4 flex justify-between mb-4">
                    <img src={logo} alt="Accredian Logo" />
                <div className="flex flex-col items-center">
                    <button className="bg-custom-blue text-white text-[16px] px-4 py-2 rounded-xl w-[250px] h-[39px]">Schedule 1-on-1 call Now</button>
                    <p className='text-[14px]'>Speak with our Learning Advisor</p>
                </div>
            </div>
            
            <hr className="w-3/4 border-gray-600" />

            <div className="flex flex-wrap justify-between w-full mt-8">
                <Programs />
                <Contact />
                <Pages />
            </div>
            <div className="mt-8 text-center">
                &copy; 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
            </div>
        </div>
    );
};
