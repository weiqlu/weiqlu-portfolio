import { Box, Typography, Link } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion } from "framer-motion";

const links = [
  {
    platform: "LinkedIn",
    username: "@weiqlu",
    url: "https://www.linkedin.com/in/weiqlu/",
  },
  {
    platform: "Github",
    username: "@weiqlu",
    url: "https://github.com/weiqlu",
  },
  {
    platform: "Resume",
    username: "download",
    url: "/Wei_Lu_Resume.pdf",
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const LinkItem = ({ platform, username, url }) => {
  return (
    <Box sx={{ display: "flex", mb: 2 }}>
      <Box sx={{ width: "122px", flexShrink: 0, pr: 2 }}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {platform}
        </Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#ffffff",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          <Typography
            variant="body1"
            component="span"
            sx={{ color: "text.primary" }}
          >
            {username}
          </Typography>
          <ArrowOutwardIcon sx={{ fontSize: 16, ml: 0.5 }} />
        </Link>
      </Box>
    </Box>
  );
};

const Links = () => {
  return (
    <Box sx={{ mb: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      >
        <Typography
          variant="body1"
          component="h2"
          sx={{ fontWeight: 600, color: "#ffffff", mb: 3 }}
        >
          Links
        </Typography>
      </motion.div>

      <motion.div variants={sectionVariants} initial="hidden" animate="visible">
        {links.map((link, index) => (
          <motion.div key={index} variants={itemVariants}>
            <LinkItem {...link} />
          </motion.div>
        ))}
      </motion.div>
    </Box>
  );
};

export default Links;
