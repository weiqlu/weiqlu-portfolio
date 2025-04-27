import { Box, Typography, Avatar } from "@mui/material";

const Profile = () => {
  return (
    <Box sx={{ mb: 6}}>
      <Box sx={{ display: "flex", ml: 1, alignItems: "center", mb: 4 }}>
        <Avatar
          src="portrait_image_pixel.png"
          alt="Wei Lu"
          sx={{
            width: 95,
            height: 95,
            mr: 3,
            border: "2px solid rgba(255, 255, 255, 0.1)",
          }}
        />
        <Box>
          <Typography variant="h1" component="h1" gutterBottom sx={{ mb: 0.3 }}>
            Wei Lu
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ color: "#aaaaaa", mb: 0.3 }}
          >
            Software Developer
          </Typography>
          <Typography variant="body1" sx={{ color: "#aaaaaa" }}>
            weiqlu@vt.edu
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography
          variant="body1"
          component="h2"
          sx={{ fontWeight: 600, color: "#ffffff", mb: 1 }}
        >
          About
        </Typography>
        <Typography variant="body1">
          I'm Wei, a junior studying Computer Science at Virginia Tech. I enjoy
          creating practical, intuitive products that simplify everyday tasks
          and improve through real user feedback. Always learning.
        </Typography>
      </Box>
    </Box>
  );
};

export default Profile;
