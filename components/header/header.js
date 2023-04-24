import { Padding } from "@mui/icons-material";
import { AppBar, Container, List, ListItem, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
export default function Header() {
  return (
    <>
      <AppBar
        sx={{
          display: "block",
          backgroundColor: "transparent",
          shapeOutside: "0px",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box className="breeze-logo" sx={{ width: "125px" }}>
              <a href="/">
                <img
                  src="https://res.cloudinary.com/dm9tstije/image/upload/v1682145260/breezehome/breeze-logo_ruga6f.svg"
                  alt="logo"
                  width="100%"
                />
              </a>
            </Box>
            <Box className="nav-section">
              <List
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ListItem>
                  <a>Product</a>
                </ListItem>
                <ListItem>
                  <a>Resources</a>
                </ListItem>
                <ListItem>
                  <a href="./contactus">Contact Us</a>
                </ListItem>
                <ListItem>
                  <a>Download</a>
                </ListItem>
                <ListItem>
                  <a>Pricing</a>
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box>
            <Button variant="contained" sx={{ backgroundColor: "#00E7B9" }}>
              Login
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#00E7B9", ml: "10px" }}
            >
              Create Account
            </Button>
          </Box>
        </Container>
      </AppBar>
    </>
  );
}
