import { Box } from "@mui/system";
import React, { createContext, useContext, useEffect, useState } from "react";
import { profile_API } from "./API";

const profileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const getProfile = () => {
    fetch(`${profile_API}/profile/1`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => getProfile(), []);
  const [profile, setProfile] = useState(data);
console.log(data)
  return (
    <profileContext.Provider value={[data, setData]}>
      <Box>
      { children }
      </Box>
    </profileContext.Provider>
  );
};

// export function Profile() {
//   const [data,setData] = useContext(profileContext);
//   console.log(data)
//   return (
//     <Box>
//       <p>hi</p>
//     </Box>
//   );
// }
