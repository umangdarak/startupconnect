// "use client";
// import { Box, Button, TextField, Typography } from "@mui/material";
// import { useState } from "react";
// import Documents from "./documents";
// import Overview from "./overview";
// import { DashboardLayout } from "../dashboard/DashBoardLayout";

// export default function StartupProfile() {
//   const [type, setType] = useState<string>("Overview");

//   return (
//     <Box sx={{ width: '100%', p: 3 }} className="bg-white">
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
//         <h1>Profile</h1>
//         {/* <Button variant="contained" color="primary">Preview Profile</Button> */}
//       </Box>
//       <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
//         <Box
//           sx={{
//             width: 150,
//             height: 150,
//             border: '1px dashed grey',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             flexDirection: 'column',
//             mt: 2,
//             mr: 3,
//           }}
//         >
//           <Typography variant="body2" color="textSecondary">
//             Drag & Drop
//           </Typography>
//           <Typography variant="body2" color="textSecondary">
//             or
//           </Typography>
//           <Button variant="contained" size="small">Upload</Button>
//         </Box>
//         <Box sx={{ flexGrow: 1 }}>
//           <TextField
//             fullWidth
//             label="Company Name"
//             variant="outlined"
//             margin="normal"
//             disabled
//           />
//           <TextField
//             fullWidth
//             label="Add 1-2 sentences of description for the project that will be displayed to investors as a sneak peek on the platform, our newsletters, etc."
//             variant="outlined"
//             margin="normal"
//             multiline
//             rows={2}
//           />
//           <Box sx={{ display: 'flex', gap: 2 }}>
//             <TextField
//               fullWidth
//               label="Website URL"
//               variant="outlined"
//               margin="normal"
//             />
//             <TextField
//               fullWidth
//               label="Country"
//               variant="outlined"
//               margin="normal"
//             />
//             <TextField
//               fullWidth
//               label="Type city"
//               variant="outlined"
//               margin="normal"
//             />
//           </Box>
//           {/* <Button variant="contained" color="primary" sx={{ mt: 2 }}>
//             Add sector
//           </Button> */}
//         </Box>
//       </Box>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
//         <Button onClick={() => setType("Overview")} sx={{ textTransform: 'none', mr: 2 }}>
//           Overview
//         </Button>
//         <Button onClick={() => setType("Documents")} sx={{ textTransform: 'none', mr: 2 }}>
//           Documents
//         </Button>
//       </Box>
//       {type === "Documents" ? <Documents /> : <Overview />}
//     </Box>
//   );
// }
"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Documents from "./documents";
import Overview from "./overview";
import { DashboardLayout } from "../dashboard/DashBoardLayout";

interface StartupProfileProps {
  startup: {
    companyName: string;
    description: string;
    websiteUrl: string;
    country: string;
    city: string;
    sector: string;
  };
}

const StartupProfile: React.FC<StartupProfileProps> = ({ startup }) => {
  const [type, setType] = useState<string>("Overview");
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({ ...startup });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleEditToggle = () => setIsEditing(!isEditing);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Saved data:", profileData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    console.log("Selected file:", file);
  };

  return (
    <Box sx={{ width: '100%', p: 3 }} className="bg-white">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <h1>Profile</h1>
        <Button variant="outlined" color="primary" onClick={handleEditToggle}>
          {isEditing ? "Save Changes" : "Edit"}
        </Button>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
        <Box
          sx={{
            width: 150,
            height: 150,
            border: '1px dashed grey',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            mt: 2,
            mr: 3,
          }}
        >
          <Typography variant="body2" color="textSecondary">
            Drag & Drop
          </Typography>
          <Typography variant="body2" color="textSecondary">
            or
          </Typography>
          <input
            type="file"
            id="upload-input"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <Button variant="contained" size="small" onClick={() => document.getElementById("upload-input")?.click()}>
            Upload
          </Button>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <TextField
            fullWidth
            label="Company Name"
            name="companyName"
            value={profileData.companyName}
            onChange={handleChange}
            disabled={!isEditing}
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={profileData.description}
            onChange={handleChange}
            disabled={!isEditing}
            variant="outlined"
            margin="normal"
            multiline
            rows={2}
          />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              fullWidth
              label="Website URL"
              name="websiteUrl"
              value={profileData.websiteUrl}
              onChange={handleChange}
              disabled={!isEditing}
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Country"
              name="country"
              value={profileData.country}
              onChange={handleChange}
              disabled={!isEditing}
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="City"
              name="city"
              value={profileData.city}
              onChange={handleChange}
              disabled={!isEditing}
              variant="outlined"
              margin="normal"
            />
          </Box>
          <TextField
            fullWidth
            label="Sector"
            name="sector"
            value={profileData.sector}
            onChange={handleChange}
            disabled={!isEditing}
            variant="outlined"
            margin="normal"
          />
        </Box>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Button onClick={() => setType("Overview")} sx={{ textTransform: 'none', mr: 2 }}>
          Overview
        </Button>
        <Button onClick={() => setType("Documents")} sx={{ textTransform: 'none', mr: 2 }}>
          Documents
        </Button>
      </Box>

      {type === "Documents" ? <Documents /> : <Overview />}
    </Box>
  );
}

export default StartupProfile;
