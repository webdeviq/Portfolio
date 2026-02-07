import { Box, Chip, Paper, Stack, Typography, keyframes } from "@mui/material";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const experiences = [
  {
    title: "TOS Developer (Navis N4)",
    company: "BGT (ICTSI Iraq)",
    location: "Umm Qasr, Iraq • Terminal Operations / Global Port Industry",
    date: "2022 – Present",
    tags: [
      "Navis N4",
      "N4 Billing",
      "EDI / XML / XSLT",
      "C# / .NET",
      "SQL Server",
      "React / TypeScript",
      "SAP Integrations",
      "Reporting",
    ],
    details: [
      "Build and support production applications used daily by terminal operations and commercial teams, ensuring reliability and fast incident response.",
      "Develop full-stack solutions using C#/.NET and React/TypeScript to streamline workflows (billing automation, invoice tools, operational dashboards).",
      "Work heavily with Navis N4 and N4 Billing: configuration, troubleshooting, and enhancements aligned with real operational requirements.",
      "Design and maintain EDI workflows (including XML/XSLT templates and EDI session configurations) for shipping lines and internal integrations.",
      "Create and optimize SQL Server queries, views, and reports to support planning, billing validation, KPIs, and operational visibility.",
      "Integrate terminal and billing data with external systems (including SAP-related workflows), supporting CSV/FTP-based automation where required.",
      "Refactor and modernize legacy processes into maintainable services/APIs with clear logging and structured error handling.",
      "Collaborate cross-functionally with operations, finance, and IT to deliver stable solutions and continuously improve performance and user experience.",
    ],
  },
  {
    title: "Data Administrator",
    company: "McKesson",
    location: "Detroit, Michigan, U.S.",
    date: "Dec 2020 – Jun 2022",
    tags: ["Operations", "Data Accuracy", "Excel", "Support"],
    details: [
      "Managed daily logging and tracking of incoming/outgoing pharmaceutical materials with strong focus on accuracy and timeliness.",
      "Designed and maintained an inventory tracking workflow in Excel (structured data entry + formulas) to support team operations.",
      "Provided professional communication with clients and internal stakeholders while handling high-volume workloads.",
      "Supported day-to-day troubleshooting of internal technical issues, helping teams stay productive.",
    ],
  },
];

const ExperienceList = () => {
  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 2 }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 900,
            color: "rgba(255,255,255,0.90)",
          }}
        >
          Experience
        </Typography>

        <Chip
          label={`${experiences.length} roles`}
          size="small"
          sx={{
            fontWeight: 850,
            color: "rgba(255,255,255,0.85)",
            bgcolor: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.16)",
            backdropFilter: "blur(10px)",
          }}
        />
      </Stack>

      <Stack spacing={2.2}>
        {experiences.map((exp, idx) => (
          <Paper
            key={`${exp.title}-${idx}`}
            elevation={0}
            sx={{
              p: { xs: 2, sm: 2.4 },
              borderRadius: 3,
              bgcolor: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.14)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 14px 50px rgba(0,0,0,0.28)",
              animation: `${fadeUp} 520ms ease-out forwards`,
              animationDelay: `${idx * 90}ms`,
              opacity: 0,
              transition:
                "transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease, background-color 160ms ease",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 18px 65px rgba(0,0,0,0.36)",
                borderColor: "rgba(255,255,255,0.22)",
                bgcolor: "rgba(255,255,255,0.10)",
              },
            }}
          >
            <Stack spacing={1.2}>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 950,
                    fontSize: "1.05rem",
                    color: "rgba(255,255,255,0.92)",
                  }}
                >
                  {exp.title} • {exp.company}
                </Typography>

                <Typography
                  sx={{
                    mt: 0.4,
                    color: "rgba(255,255,255,0.70)",
                  }}
                >
                  {exp.location}
                </Typography>

                <Typography
                  variant="caption"
                  sx={{ color: "rgba(255,255,255,0.58)" }}
                >
                  {exp.date}
                </Typography>
              </Box>

              <Stack direction="row" flexWrap="wrap" gap={1} sx={{ pt: 0.5 }}>
                {exp.tags.map((t) => (
                  <Chip
                    key={t}
                    label={t}
                    size="small"
                    sx={{
                      fontWeight: 850,
                      borderRadius: 2,
                      color: "rgba(255,255,255,0.88)",
                      bgcolor: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.16)",
                      backdropFilter: "blur(10px)",
                      transition:
                        "transform 140ms ease, background-color 140ms ease, border-color 140ms ease",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        bgcolor: "rgba(255,255,255,0.12)",
                        borderColor: "rgba(255,255,255,0.24)",
                      },
                    }}
                  />
                ))}
              </Stack>

              <Box component="ul" sx={{ m: 0, pl: 2.2 }}>
                {exp.details.map((point, i) => (
                  <Box component="li" key={i} sx={{ mb: 0.8 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        lineHeight: 1.75,
                        color: "rgba(255,255,255,0.78)",
                      }}
                    >
                      {point}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default ExperienceList;
