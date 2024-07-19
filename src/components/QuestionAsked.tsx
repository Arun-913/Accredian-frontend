import { useState } from "react";

export const QuestionAsked = () =>{
    const [selected, setSelected] = useState<number>(0);
    const frequentQuestions = ['Eligibility', 'How To Use', 'Terms & Conditions'];
    const questions = ['Do I need to have prior Product Management and Project Management experience to enroll in the program?', 'What is the minimum system configuration required?'];
    const answers = ['No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.', 'Minimum requirement is Windows 11 with atleast 8GB RAM'];

    return (
        <div className="w-[1281] h-[341] ">
            <div className="w-[548px] h-[36px] m-auto flex justify-center items-center mt-16">
                <div className="text-4xl font-bold">Frequently Asked <span className="text-custom-blue">Questions</span></div>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-[400px]">
                    {frequentQuestions.map((question, index)=>{
                        return (
                            <div onClick={() => setSelected(index)} key={index} className={`m-6 w-[259px] h-[68px] text-[20px] flex justify-center items-center rounded-lg font-bold cursor-pointer ${index == selected ? 'text-custom-blue shadow-custom' : 'text-dark-gray borderColor-dark-gray border-[3px]'}`}>
                                <div>{question}</div>
                            </div>
                        )
                    })}
                </div>

                <div className="w-[918px] ">
                    {questions.map((question, index)=>{
                        return (
                            <div key={index} className="h-auto">
                                <div className="mt-4 text-custom-blue font-bold text-[20px]">{question}</div>
                                <div className="text-[16px] ml-6 mt-4">{answers[index]}</div>
                            </div>
                        )
                    })}

                    {/* <div className="h-auto">
                        <div className="text-custom-blue font-bold text-[20px]">Do I need to have prior Product Management and Project Management experience to enroll in the program?</div>
                        <div className="text-[16px] ml-4 mt-4">No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.</div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}