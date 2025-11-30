import { Box, Typography, Link } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion } from "framer-motion";

const experiences = [
  {
    period: "5/2025 - Present",
    title: "Software Engineer Intern – Investure",
    company: "",
    description: "Developed tools to automate financial data extraction and a UI to simplify analyst workflows.",
    technologies: ["Python", "FastAPI", "OpenAI", "SQL Server", "React"],
    link: "https://www.investure.com/",
  },
  {
    period: "5/2024 - 12/2025",
    title: "Undergraduate Teaching Assistant – VT CS",
    company: "",
    description:
      "Supported 400+ students in Data Structures & Algorithms and Database Management Systems through office hours and Q&A forums.",
    technologies: ["Java", "SQL"],
    link: "https://cs.vt.edu/",
  },
  {
    period: "3/2024 - 5/2025",
    title: "Student Hiring Admin – VT Dining Services",
    company: "",
    description:
      "Automated onboarding tasks and supported high-volume hiring, processing 1,000+ student hires per semester.",
    technologies: ["Excel", "Power Automate", "Power BI"],
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
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
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
