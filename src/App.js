import {Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {Welcome} from './pages/Welcome';
import {Login} from './pages/Login';
import {SignUp} from './pages/SignUp';
import './assets/css/index.css';
import {Profile} from "./pages/Profile";
import {Appointment} from "./pages/Appointment";
import {Forum} from "./pages/Forum";
import {Analyze} from "./pages/Analyze";
import {AnalyzeChat} from "./pages/AnalyzeChat";
import {FillProfile} from "./pages/FillProfile";
import {Guide} from "./pages/Guide";
import {Shop} from "./pages/Shop";
import {MyAppointments} from "./pages/MyAppointments";
import AdminLogin from "./pages/admin/AdminLogin";
import {AdminDashboard} from "./pages/admin/AdminDashboard";
import AdminUserList from "./pages/admin/AdminUserList";
import {AdminAppointments} from "./pages/admin/AdminAppointments";
import {EditProfile} from "./pages/EditProfile";
import {SwitchLang} from "./pages/SwitchLang";
import SkinQuiz from "./pages/SkinQuiz";
import AnalyzeQuizes from "./pages/AnalyzeQuizes";
import SleepQuize from "./pages/SleepQuize";
import NutritionQuiz from "./pages/NutritionQuiz";
import FaceYoga from './pages/FaceYoga';
import NoseYoga from './pages/NoseYoga';
import CheekYoga from './pages/CheekYoga';
import EyeYoga from './pages/EyeYoga';
import NeckYoga from './pages/NeckYoga';
import ForeheadYoga from './pages/ForeheadYoga';
import MouthYoga from './pages/MouthYoga';
import JawlineYoga from './pages/JawlineYoga';
import Protocols from './pages/Protocols';
import OSPW from './pages/protocols/OSPW';
import OSPT from './pages/protocols/OSPT';
import DSNW from './pages/protocols/DSNW';
import DSNT from './pages/protocols/DSNT';
import DSPW from './pages/protocols/DSPW';
import DSPT from './pages/protocols/DSPT';
import ORNT from './pages/protocols/ORNT';
import OSNT from './pages/protocols/OSNT';
import OSNW from './pages/protocols/OSNW';
import OSPWTreatment from './pages/protocols/OSPWTreatment';
import OSNTTreatment from './pages/protocols/OSNTTReatment';
import ORNTTreatment from './pages/protocols/ORNTTreatment';
import DSPWTreatment from './pages/protocols/DSPWTreatment';
import DSNTTreatment from './pages/protocols/DSNTTreatment';
import DSNWTreatment from './pages/protocols/DSNWTreatment';
import OSPTTreatment from './pages/protocols/OSPTTreatment';
import DSPTTreatment from './pages/protocols/DSPTTreatment';
import OSNWTreatment from './pages/protocols/OSNWTreatment';


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/welcome'} element={<Welcome/>}/>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/signup'} element={<SignUp/>}/>
            <Route path={'/shop'} element={<Shop/>}/>
            <Route path={'/profile'} element={<Profile/>}/>
            <Route path={'/profile/guide'} element={<Guide/>}/>
            <Route path={'/profile/appointments'} element={<MyAppointments/>}/>
            <Route path={'/profile/edit'} element={<EditProfile/>}/>
            <Route path={'/profile/lang'} element={<SwitchLang />} />
            <Route path={'/appointment'} element={<Appointment/>}/>
            <Route path={'/forum'} element={<Forum/>}/>
            <Route path={'/analyze/counseling'} element={<Analyze/>}/>
            <Route path={'/signup/complete'} element={<FillProfile/>}/>
            <Route path={'/analyze/chat/'} element={<AnalyzeChat/>}/>
            <Route path={'/analyze/'} element={<AnalyzeQuizes/>}/> 
            <Route path={'/analyze/quiz/sleep'} element={<SleepQuize/>}/> 
            <Route path={'/analyze/quiz/nutrition'} element={<NutritionQuiz/>}/> 
            <Route path={'/analyze/quiz/skin'} element={<SkinQuiz/>}/> 
            <Route path={'/analyze/yoga'} element={<FaceYoga/>}/> 
            <Route path={'/analyze/yoga/nose'} element={<NoseYoga/>}/> 
            <Route path={'/analyze/yoga/cheek'} element={<CheekYoga/>}/> 
            <Route path={'/analyze/yoga/eye'} element={<EyeYoga/>}/> 
            <Route path={'/analyze/yoga/neck'} element={<NeckYoga/>}/> 
            <Route path={'/analyze/yoga/jawline'} element={<JawlineYoga/>}/> 
            <Route path={'/analyze/yoga/forehead'} element={<ForeheadYoga/>}/> 
            <Route path={'/analyze/yoga/mouth'} element={<MouthYoga/>}/> 
            <Route path={'/analyze/protocols'} element={<Protocols/>}/> 
            <Route path={'/analyze/protocols/ospw'} element={<OSPW/>}/> 
            <Route path={'/analyze/protocols/ospw/treatment'} element={<OSPWTreatment/>}/>
            <Route path={'/analyze/protocols/ospt'} element={<OSPT/>}/>
            <Route path={'/analyze/protocols/ospt/treatment'} element={<OSPTTreatment/>}/>
            <Route path={'/analyze/protocols/dsnw'} element={<DSNW/>}/>
            <Route path={'/analyze/protocols/dsnw/treatment'} element={<DSNWTreatment/>}/>
            <Route path={'/analyze/protocols/dsnt'} element={<DSNT/>}/>
            <Route path={'/analyze/protocols/dsnt/treatment'} element={<DSNTTreatment/>}/>
            <Route path={'/analyze/protocols/dspw'} element={<DSPW/>}/>
            <Route path={'/analyze/protocols/dspw/treatment'} element={<DSPWTreatment/>}/>
            <Route path={'/analyze/protocols/dspt'} element={<DSPT/>}/>
            <Route path={'/analyze/protocols/dspt/treatment'} element={<DSPTTreatment/>}/>
            <Route path={'/analyze/protocols/ornt'} element={<ORNT/>}/>
            <Route path={'/analyze/protocols/ornt/treatment'} element={<ORNTTreatment/>}/>
            <Route path={'/analyze/protocols/osnt'} element={<OSNT/>}/>
            <Route path={'/analyze/protocols/osnt/treatment'} element={<OSNTTreatment/>}/>
            <Route path={'/analyze/protocols/osnw'} element={<OSNW/>}/>
            <Route path={'/analyze/protocols/osnw/treatment'} element={<OSNWTreatment/>}/>
            <Route path={'/admin'} element={<AdminLogin/>}/>
            <Route path={'/admin/dashboard'} element={<AdminDashboard/>}/>
            <Route path={'/admin/user-list'} element={<AdminUserList/>}/>
            <Route path={'/admin/appointments'} element={<AdminAppointments/>}/>
        </Routes>
    );
}

export default App;
