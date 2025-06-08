import { Box, Typography, Link } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Projects = () => {
  const projects = [
    {
      year: "2025",
      logo: "",
      title: "CrisisWeb",
      description:
        "Discover and visualize crisis-related webpages through intelligent web crawling and classification. Upload URLs, run a one-class classifier, and explore results in an interactive graph.",
      technologies: ["FastAPI", "SQLAlchemy", "MySQL", "React", "Docker"],
      link: "https://vtechworks.lib.vt.edu/items/38c7ee80-88a4-4a09-98f6-596648145783",
    },
    {
      year: "2024",
      logo: "",
      title: "EduGrade",
      description:
        "Browse grade distributions and submit anonymous course reviews to make smarter scheduling decisions. Built for fast, real-time searching across 20,000+ class records.",
      technologies: ["React", "Express", "Node.js", "MySQL"],
      link: "",
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
    {
      year: "2023",
      logo: "",
      title: "HokieTracker",
      description:
        "Track course availability and send real-time alerts to help students enroll faster than existing tools.",
      technologies: ["Python"],
      link: "",
    },
  ];

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
                sx={{ width: 32, height: 32, mr: 2, objectFit: "contain" }}
              />
            )}

            {link ? (
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#ffffff",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                <Typography
                  variant="body1"
                  component="span"
                  sx={{ fontWeight: 600, color: "#ffffff" }}
                >
                  {title}
                </Typography>
                <ArrowOutwardIcon sx={{ fontSize: 16, ml: 0.6 }} />
              </Link>
            ) : (
              <Typography
                variant="body1"
                sx={{ fontWeight: 600, color: "#ffffff" }}
              >
                {title}
              </Typography>
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
