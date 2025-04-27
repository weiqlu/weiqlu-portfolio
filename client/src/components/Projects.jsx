import { Box, Typography, Link } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const ProjectCard = ({
  year,
  logo,
  title,
  description,
  technologies,
  link,
}) => {
  return (
    <Box sx={{ display: "flex", mb: 3 }}>
      <Box sx={{ width: "120px", flexShrink: 0, pr: 2 }}>
        <Typography variant="body2" sx={{ color: "#666666" }}>
          {year || "Ongoing"}
        </Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
          {logo && (
            <Box
              component="img"
              src={logo}
              alt={title}
              sx={{
                width: 32,
                height: 32,
                mr: 2,
                objectFit: "contain",
              }}
            />
          )}
          <Typography
            variant="body1"
            component="span"
            sx={{
              fontWeight: 600,
              color: "#ffffff",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            {title}
          </Typography>
          {link && (
            <Link
              href={link}
              sx={{
                ml: 0.6,
                display: "flex",
                alignItems: "center",
                color: "text.primary",
              }}
            >
              <ArrowOutwardIcon sx={{ fontSize: 16 }} />
            </Link>
          )}
        </Box>
        <Typography variant="body1" sx={{ mb: 0.5 }}>
          {description}
        </Typography>
        <Typography variant="body2" sx={{ color: "#666666" }}>
          {technologies.join(" • ")}
        </Typography>
      </Box>
    </Box>
  );
};

const Projects = () => {
  const projects = [
    {
      year: "Ongoing",
      logo: "",
      title: "WeiQLu",
      description: "A visually engaging portfolio with smooth animations.",
      technologies: ["React", "Material UI", "Framer Motion"],
      link: "#",
    },
    {
      year: "Ongoing",
      logo: "",
      title: "CrisisWeb",
      description:
        "Discover and visualize crisis-related webpages through intelligent web crawling and classification. Upload URLs, run a one-class classifier, and explore results in an interactive graph.",
      technologies: ["FastAPI", "SQLAlchemy", "MySQL", "React", "Docker"],
      link: "#",
    },
    {
      year: "2024",
      logo: "",
      title: "EduGrade",
      description:
        "Browse grade distributions and submit anonymous course reviews to make smarter scheduling decisions. Built for fast, real-time searching across 20,000+ class records.",
      technologies: ["React", "Express", "Node.js", "MySQL"],
      link: "#",
    },
    {
      year: "2024",
      logo: "",
      title: "WorkWise",
      description:
        "Manage employee records and track user sessions through a full-stack dashboard built with real-time MongoDB integration. Designed for responsive access across devices.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://workwise-frontend.onrender.com/",
    },
  ];

  return (
    <Box sx={{ mb: 6 }}>
      <Typography
        variant="body1"
        component="h2"
        sx={{ fontWeight: 600, color: "#ffffff", mb: 3 }}
      >
        Side Projects
      </Typography>

      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Box>
  );
};

export default Projects;
