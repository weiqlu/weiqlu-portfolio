import { Box, Typography, Link } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion } from "framer-motion";

const experiences = [
  {
    period: "2025 - Present",
    title: "Software Engineer Intern – Investure",
    company: "Summer 2025.",
    description: "",
    technologies: ["React", "Material UI", "FastAPI", "Python"],
    link: "https://www.investure.com/",
  },
  {
    period: "2024 - Present",
    title: "Undergraduate Teaching Assistant – VT CS",
    company: "",
    description:
      "Supported 400+ students across two upper-level CS course (Data Structures & Algorithms and Database Management Systems. Held regular office hours and provided one-on-on guidance, resolving ~25 questions weekly.",
    technologies: ["Java", "SQL"],
    link: "https://cs.vt.edu/",
  },
  {
    period: "2024 - Present",
    title: "Student Hiring Admin – VT Dining Services",
    company: "",
    description:
      "Collaborated on a team of 8 to hire 1000+ students for Virginia Tech Dining Services per semester. Improved hiring efficiency by automating tasks with Microsoft Power Automate, reducing data entry time.",
    technologies: ["Teams, Power Automate, Excel"],
    link: "https://dining.vt.edu/",
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

const Experience = () => {
  return (
    <Box sx={{ mb: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Typography
          variant="body1"
          component="h2"
          sx={{ fontWeight: 600, color: "#ffffff", mb: 3 }}
        >
          Work Experience
        </Typography>
      </motion.div>

      <motion.div variants={sectionVariants} initial="hidden" animate="visible">
        {experiences.map((exp, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Box sx={{ display: "flex", mb: 3 }}>
              <Box sx={{ width: "120px", flexShrink: 0, pr: 2 }}>
                <Typography variant="body2" sx={{ color: "text.tertiary" }}>
                  {exp.period}
                </Typography>
              </Box>

              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                  {exp.link ? (
                    <Link
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <Typography
                        variant="body1"
                        component="span"
                        sx={{ fontWeight: 600, color: "text.primary" }}
                      >
                        {exp.title}
                      </Typography>
                      <ArrowOutwardIcon sx={{ fontSize: 16, ml: 0.6 }} />
                    </Link>
                  ) : (
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 600, color: "text.primary" }}
                    >
                      {exp.title}
                    </Typography>
                  )}
                </Box>
                {exp.company && (
                  <Typography
                    variant="body1"
                    sx={{ mb: 0.5, color: "text.secondary" }}
                  >
                    {exp.company}
                  </Typography>
                )}
                {exp.description && (
                  <Typography
                    variant="body1"
                    sx={{ mb: 0.5, color: "text.secondary" }}
                  >
                    {exp.description}
                  </Typography>
                )}
                <Typography variant="body2" sx={{ color: "text.tertiary" }}>
                  {exp.technologies.join(" • ")}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        ))}
      </motion.div>
    </Box>
  );
};

export default Experience;
