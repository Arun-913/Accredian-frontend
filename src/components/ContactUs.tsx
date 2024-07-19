import half_circle from '../assets/images/half-circle.png'
import contactUs from '../assets/images/contact-us.png'
import right_arrow_blue from '../assets/images/right-arrow-blue.png'

export const ContactUs = () =>{
    return (
        <div className="w-[1360px] h-[210px] bg-custom-blue m-auto mt-24 mb-24 flex justify-between items-center">
            <div className='flex justify-center items-center max-w-[780px] absolute'>
                <img className='m-4' src={contactUs} alt="Contact Us" />
                <div className='m-4 text-white'>
                    <div className='text-4xl'>Want to delve deeper into the program?</div>
                    <div>Share your details to receive expert insights from our program team!</div>
                </div>
            </div>

            <div>
                <div className='px-8 w-[200px] h-[52px] absolute z-10 bg-white flex justify-around text-[18px] text-custom-blue font-semibold items-center rounded-xl top-[3270px] right-[235px] z-20 cursor-pointer'>
                    <div>Get in touch</div>
                    <img src={right_arrow_blue} alt="Arrow button" />
                </div>
                <img className='relative h-auto z-10' src={half_circle} alt="Circle" />
            </div>
        </div>
    )
}