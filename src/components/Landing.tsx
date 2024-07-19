import { useRecoilValue } from "recoil"
import { Advertisement } from "./Advertisement"
import { AppBar } from "./AppBar"
import { ContactUs } from "./ContactUs"
import { Footer } from "./Footer"
import { QuestionAsked } from "./QuestionAsked"
import { ReferOption } from "./ReferOption"
import { Referral } from "./Referral"
import { authTokenState } from "./Atom"


export const Landing = () =>{
    // const [authToken, setAuthToken] = useState<string>('');
    const authToken = useRecoilValue(authTokenState);

    return (
        <div>
            <AppBar authToken={authToken}/>  
            <Advertisement authToken={authToken}/>
            <ReferOption authToken={authToken}/>
            <Referral authToken={authToken}/>
            <QuestionAsked />
            <ContactUs />
            <Footer />
        </div>
    )
}