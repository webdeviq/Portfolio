import { Box, Typography, keyframes } from "@mui/material";

const fadeIn = keyframes`from {opacity: 0; transform: translateY(80px);} 
to {opacity:1; transform:translateY(0)}`;

const blink = keyframes`0%,100% {opacity: 0.2;} 50% {opacity: 1;}`;

const Intro = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: 7,
        }}
      >
        <Typography variant="h4" color="primary">
          Hi Everyone!
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: 3,
        }}
      >
        <Typography
          variant="h5"
          color="primary"
          sx={{
            animation: `${fadeIn} 2s ease-in-out forwards`,
            fontSize: { xs: "16px", sm: "1.5rem", md: "1.8rem" },
          }}
        >
          I'm Ali and I'm a{" "}
          <Box
            component="span"
            sx={{ fontWeight: "bold", color: "secondary.main" }}
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
                animation: `${blink} 1.2s infinite ease-in-out`,
              }}
            ></Box>
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default Intro;
