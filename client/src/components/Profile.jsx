import { Box, Typography, Avatar } from "@mui/material";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Box sx={{ mb: 6 }}>
        <Box sx={{ display: "flex", ml: 1, alignItems: "center", mb: 4 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <Avatar
              src="/portrait_image_pixel.png"
              alt="Wei Lu"
              sx={{
                width: 95,
                height: 95,
                mr: 3,
                border: "2px solid rgba(255, 255, 255, 0.1)",
              }}
            />
          </motion.div>
          <Box>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            >
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{ mb: 0.3 }}
              >
                Wei Lu
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            >
              <Typography
                variant="body1"
                gutterBottom
                sx={{ color: "text.secondary", mb: 0.3 }}
              >
                Software Engineer
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            >
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                weiqlu@vt.edu
              </Typography>
            </motion.div>
          </Box>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
        >
          <Box sx={{ mt: 4 }}>
            <Typography
              variant="body1"
              component="h2"
              sx={{ fontWeight: 600, color: "#ffffff", mb: 1 }}
            >
              About
            </Typography>
            <Typography variant="body1">
              {
                "Welcome! I'm Wei, a Computer Science student at Virginia Tech. I enjoy creating practical, intuitive products that simplify everyday life and improve with real user feedback."
              }
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default Profile;
