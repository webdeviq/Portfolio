import { Box, Typography, keyframes } from "@mui/material";

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-28px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const blink = keyframes`
  0%, 100% { opacity: 0.25; }
  50%      { opacity: 1; }
`;

const Intro = () => {
  return (
    <Box
      sx={{
        minHeight: { xs: "42vh", sm: "48vh" },
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        pt: { xs: 3, sm: 6 },
        pb: { xs: 4, sm: 6 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1.5,
          animation: `${slideIn} 700ms ease-out forwards`,
          opacity: 0,
        }}
      >
        <Typography
          variant="overline"
          sx={{
            letterSpacing: 2,
            color: "rgba(255,255,255,0.70)",
            fontWeight: 800,
          }}
        >
          Hi Everyone
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            lineHeight: 1.1,
            fontSize: { xs: "2rem", sm: "2.6rem", md: "3.2rem" },
            color: "rgba(255,255,255,0.92)",
          }}
        >
          I&apos;m{" "}
          <Box component="span" sx={{ color: "primary.main" }}>
            Ali
          </Box>
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: "rgba(255,255,255,0.78)", // ✅ subtitle brighter
            fontWeight: 600,
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.4rem" },
          }}
        >
          A{" "}
          <Box
            component="span"
            sx={{
              fontWeight: 900,
              color: "secondary.main",
              position: "relative",
              whiteSpace: "nowrap",
            }}
          >
            Software Engineer
            <Box
              component="span"
              sx={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: "primary.main",
                ml: 1,
                transform: "translateY(-1px)",
                animation: `${blink} 1.15s ease-in-out infinite`,
              }}
            />
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default Intro;
