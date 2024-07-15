import { BottomNavigation, Box, Container, Paper, Typography } from "@mui/material";
import ImageCollage from "../components/ImageCollage";
import ControlledAccordions from "../components/Accordian";
import BasicModal from "../components/Modal";


const Tour = () => {

  return (
    <Container sx={{ width: 1400 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the world with us
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg"
          alt="random"
          height={325} />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem
        </Typography>
        <Typography variant="h6" component="h4" marginTop={3}>
          Frequently Asked Questions
        </Typography>
        <ControlledAccordions />
      </Box>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
}

export default Tour;