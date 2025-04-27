import { Box, Typography, Link } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Experience = () => {
  const experiences = [
    {
      period: "Incoming",
      title: "Software Engineer Intern – Investure",
      company: "Incoming Summer 2025 SWE Intern.",
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
        "Collaborated within an 8-person team to process and hire over 1500 students each semester. Automated workflows using Microsoft Power Automate, saving up to 5 minutes per applicant and significantly accelerating overall hiring processes.",
      technologies: ["Teams, Power Automate, Excel"],
      link: "https://dining.vt.edu/",
    },
  ];

  return (
    <Box sx={{ mb: 6 }}>
      <Typography
        variant="body1"
        component="h2"
        sx={{ fontWeight: 600, color: "#ffffff", mb: 3 }}
      >
        Work Experience
      </Typography>

      {experiences.map((exp, index) => (
        <Box key={index} sx={{ display: "flex", mb: 3 }}>
          <Box sx={{ width: "120px", flexShrink: 0, pr: 2 }}>
            <Typography variant="body2" sx={{ color: "#666666" }}>
              {exp.period}
            </Typography>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
              <Typography
                href={exp.link}
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
                {exp.title}
              </Typography>
              {exp.link && (
                <Link
                  href={exp.link}
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
            {exp.company && (
              <Typography variant="body1" sx={{ mb: 0.5 }}>
                {exp.company}
              </Typography>
            )}
            {exp.description && (
              <Typography variant="body1" sx={{ mb: 0.5 }}>
                {exp.description}
              </Typography>
            )}
            <Typography variant="body2" sx={{ color: "#666666" }}>
              {exp.technologies.join(" • ")}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Experience;
