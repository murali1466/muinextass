import {
  Typography,
  Box,
  Container,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import Footer from "../footer";
import Header from "../header/header";
export default function ContactUs() {
  return (
    <>
      <Header />
      <Box>
        <Box
          sx={{
            backgroundImage:
              "url(https://res.cloudinary.com/dm9tstije/image/upload/v1678403817/breeze%20contactform/hero-bg_o60bl6.svg)",
            backgroundSize: "cover",
            height: "250px",
          }}
        >
          <Container sx={{ paddingTop: "80px" }}>
            <Typography
              variant="h5"
              sx={{ color: "#fff", textAlign: "center" }}
            >
              Contact Us
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              Need to get in touch with us? Contact us by filling out this form
              and we will reach out to you soon
            </Typography>
          </Container>
        </Box>
        <Container
          maxWidth="sm"
          sx={{
            backgroundColor: "#ffffff",
            padding: "30px",
            position: "relative",
            top: "-50px",
            borderRadius: "10px",
            borderColor: "green",
            borderStyle: "solid",
            borderWidth: "1px",
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={6}>
              {" "}
              <TextField
                required
                id="outlined-required"
                label="First Name"
                defaultValue="First Name"
              />
            </Grid>
            <Grid item xs={6}>
              {" "}
              <TextField
                required
                id="outlined-required"
                label="Last Name"
                defaultValue="Last Name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="outlined-required"
                label="Email address"
                defaultValue="Email address"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="outlined-required"
                label="Comments or message"
                defaultValue="Write your comments or message here..."
              />
            </Grid>
          </Grid>
          <Box sx={{ marginTop: "20px" }}>
            <Button variant="contained">Submit</Button>
          </Box>
        </Container>
        <Container
          sx={{
            backgroundImage:
              "linear-gradient(180deg, #011027 0%, #1A068A 100%)",
            padding: "20px",
            borderRadius: "20px",
            marginTop: "25px",
          }}
        >
          <Grid container spacing={12}>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Chakra Petch, sans-serif",
                    fontSize: "37px",
                  }}
                >
                  Start managing your websites
                </Typography>
                <Typography sx={{ color: "#fff", opacity: ".6" }} pt="10px">
                  The first compherensive tool developed for Website Managers.
                  Everything you need in one place for your team.
                </Typography>
                <Box className="buttons" mt="15px">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#00E7B9",
                      borderColor: "#fff",
                      borderRadius: "8px",
                      color: "rgb(4, 55, 131)",
                    }}
                  >
                    Get Started free
                  </Button>
                  <Button
                    varined="outlined"
                    sx={{
                      backgroundColor: "transparent",
                      borderColor: "#fff",
                    }}
                  >
                    Signup with Google
                  </Button>
                </Box>
                <Typography>No credit card required</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="freelancer">
                <Box
                  sx={{
                    backgroundColor: "#011027",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "18px",
                  }}
                  p="10px"
                >
                  <img
                    src="https://res.cloudinary.com/dm9tstije/image/upload/v1678403816/breeze%20contactform/circle-tick_xqi1ei.svg"
                    alt="tick"
                  />
                  <Typography variant="span" pl="10px">
                    Freelancer:free
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#011027",
                    display: "flex",
                    alignItems: "center",
                    marginTop: "10px",
                    borderRadius: "18px",
                    padding: "10px",
                    width: { xs: "100%" },
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/dm9tstije/image/upload/v1678403816/breeze%20contactform/circle-tick_xqi1ei.svg"
                    alt="tick"
                  />
                  <Typography variant="span" pl="10px">
                    Starter:Free when in Beta
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#011027",
                    display: "flex",
                    alignItems: "center",
                    marginTop: "10px",
                    borderRadius: "18px",
                    padding: "10px",
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/dm9tstije/image/upload/v1678403816/breeze%20contactform/circle-tick_xqi1ei.svg"
                    alt="tick"
                  />
                  <Typography variant="span" pl="10px">
                    Pro:Free when in Beta
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
