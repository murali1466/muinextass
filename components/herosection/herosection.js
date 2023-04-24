import {
  Typography,
  Box,
  List,
  ListItem,
  Button,
  Container,
} from "@mui/material";
import Header from "../header/header";
import Footer from "../footer";
export default function HeroSection() {
  return (
    <>
      <Header />
      <Box
        className="hero-section"
        sx={{
          backgroundImage:
            "url('https://res.cloudinary.com/dm9tstije/image/upload/v1678089689/hero-banner_yny4mv.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "30%",
          backgroundSize: "cover",
          padding: "20px",
        }}
      >
        <Container>
          <Box
            className="hero-section-content-1"
            sx={{ width: { md: "50%" } }}
            pt="100px"
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Chakra Petch', sans-serif",
                fontSize: "37px",
                fontWeight: "400",
                marginBottom: "20px",
                color: "#fff",
              }}
            >
              We have fixed{" "}
              <Typography variant="span" sx={{ fontWeight: "bolder" }}>
                website migration
              </Typography>
            </Typography>
            <Typography
              variant="p"
              sx={{ opacity: ".6", fontWeight: "400", fontSize: "20px" }}
            >
              Website migration should not be this hard. We have built the
              necessary tools to make website migration a Breeze.{" "}
            </Typography>
            <List sx={{ listStyleType: "disc" }}>
              <ListItem sx={{ display: "block" }}>
                Lack of standard process documents
              </ListItem>
              <ListItem sx={{ display: "block" }}>
                Integration with technology{" "}
              </ListItem>
              <ListItem sx={{}}>Sharing & onboarding team members</ListItem>
            </List>
            <Box
              className="buttons"
              sx={{ display: { sm: "flex", gap: "15px" } }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#00E789",
                  color: "#043783",
                  width: { xs: "100%", sm: "150px" },
                  marginTop: "10px",
                }}
              >
                Get Started
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#1A068A",
                  color: "#FFFFFF",
                  width: { xs: "100%", sm: "150px" },
                  marginTop: "10px",
                }}
              >
                Explore Breeze
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
