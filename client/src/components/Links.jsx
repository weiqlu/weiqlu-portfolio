import { Box, Typography, Link } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Links = () => {
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
      username: "@resume",
      url: "/weiqlu_resume.pdf",
    },
  ];

  const LinkItem = ({ platform, username, url }) => {
    return (
      <Box sx={{ display: "flex", mb: 2 }}>
        <Box sx={{ width: "120px", flexShrink: 0, pr: 2 }}>
          <Typography variant="body2" sx={{ color: "#aaaaaa" }}>
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
              sx={{ color: "#ffffff" }}
            >
              {username}
            </Typography>
            <ArrowOutwardIcon sx={{ fontSize: 16, ml: 0.5 }} />
          </Link>
        </Box>
      </Box>
    );
  };

  return (
    <Box sx={{ mb: 6 }}>
      <Typography
        variant="body1"
        component="h2"
        sx={{ fontWeight: 600, color: "#ffffff", mb: 3 }}
      >
        Links
      </Typography>

      {links.map((link, index) => (
        <LinkItem key={index} {...link} />
      ))}
    </Box>
  );
};

export default Links;
