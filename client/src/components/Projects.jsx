import { Box, Typography, Link } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion } from "framer-motion";

const projects = [
  {
    year: "2025",
    logo: "",
    title: "HokieTracker",
    description:
      "Monitors Virginia Tech course availability in real time, with push notifications that help students secure high-demand classes minutes faster than paid alternatives.",
    technologies: ["React", "FastAPI", "PostgreSQL", "Docker"],
    link: "",
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
    link: "",
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
        <Typography variant="body2" sx={{ color: "text.tertiary" }}>
          {year || "Ongoing"}
        </Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
          {logo && (
            <Box
              component="img"
              src={logo}
              alt={`${title} logo`}
              sx={{ width: 32, height: 32, mr: 2, objectFit: "contain" }}
            />
          )}
          {link ? (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Typography
                variant="body1"
                component="span"
                sx={{ fontWeight: 600, color: "text.primary" }}
              >
                {title}
              </Typography>
              <ArrowOutwardIcon sx={{ fontSize: 16, ml: 0.6 }} />
            </Link>
          ) : (
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, color: "text.primary" }}
            >
              {title}
            </Typography>
          )}
        </Box>
        <Typography variant="body1" sx={{ mb: 0.5, color: "text.secondary" }}>
          {description}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.tertiary" }}>
          {technologies.join(" • ")}
        </Typography>
      </Box>
    </Box>
  );
};

const Projects = () => {
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
          Side Projects
        </Typography>
      </motion.div>

      <motion.div variants={sectionVariants} initial="hidden" animate="visible">
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </Box>
  );
};

export default Projects;
