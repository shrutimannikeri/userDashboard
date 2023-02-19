import {ColorModeContext,useMode} from './theme'
import {CssBaseline,ThemeProvider} from '@mui/material'
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebars";
// import Dashboard from "./scenes/dashboard/Dashboard";
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
import Bar from "./scenes/charts/Bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar/calendar";
import { Routes, Route } from "react-router-dom";
import Sidebars from './scenes/global/Sidebars';
import { createContext, useEffect, useState } from 'react';
import Dashboard from './scenes/dashboard/Dashboard';
import Line from './scenes/charts/Line';
import Pie from './scenes/charts/Pie';
import Users from './userpages/Users';
import Adduser from './userpages/Adduser';
import UserEdit from './userpages/UserEdit';
import { profile_API } from './profilepages/API';
import { Profile } from './profilepages/Profile';
import EditProfile from './profilepages/EditProfile';
import FAQ from './components/FAQ';

export const profileContext = createContext();

function App() {
  const [theme , colorMode]=useMode()
  const [isSidebar, setIsSidebar] = useState(true)



  const [profile, setProfile] = useState({});
  const getProfile = () => {
    fetch(`${profile_API}/profile/1`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setProfile(data));
  };

  useEffect(() => getProfile(), []);



  return (
    <profileContext.Provider value={[profile, setProfile]}>
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='app'>
      <Sidebars isSidebar={isSidebar} />
        <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />

<Routes>
<Route path="/" element={<Dashboard />} />
<Route path="/bar" element={<Bar />} />
<Route path="/line" element={<Line />} />
<Route path="/pie" element={<Pie />} />
<Route path="/users" element={<Users />}  />
<Route path="/adduser" element={<Adduser />}  />
<Route path="/user/:id" element={<UserEdit />}  />
<Route path="/profile" element={<Profile />}  />
<Route path="/profileedit" element={<EditProfile />}  />
<Route path="/faq" element={<FAQ />} />
             
</Routes>
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  </profileContext.Provider>

  );
}


export default App;
