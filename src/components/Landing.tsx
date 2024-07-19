import { Advertisement } from "./Advertisement"
import { AppBar } from "./AppBar"
import { ContactUs } from "./ContactUs"
import { Footer } from "./Footer"
import { QuestionAsked } from "./QuestionAsked"
import { ReferOption } from "./ReferOption"
import { Referral } from "./Referral"
// import Cookies from 'js-cookie';
import { useEffect } from "react";


export const Landing = () =>{
    // const [authToken, setAuthToken] = useState<string>('');
    const authToken = 'arun';

    useEffect(() =>{
        // const authToken = Cookies.get('authToken');
        // @ts-ignore
        // setAuthToken(authToken);
    }, [])

    return (
        <div>
            <AppBar />  
            <Advertisement authToken={authToken}/>
            <ReferOption authToken={authToken}/>
            <Referral authToken={authToken}/>
            <QuestionAsked />
            <ContactUs />
            <Footer />
        </div>
    )
}