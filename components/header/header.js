import { AppBar, Container, List, ListItem, Box, Button } from "@mui/material";
import Link from "next/link";
export default function Header() {
  return (
    <>
      <AppBar
        sx={{
          display: "block",
          backgroundColor: "transparent",
          shapeOutside: "0px",
        }}
        elevation={0}
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
              <Link href="./" legacyBehavior>
                <a>
                  <img
                    src="https://res.cloudinary.com/dm9tstije/image/upload/v1682145260/breezehome/breeze-logo_ruga6f.svg"
                    alt="logo"
                    width="100%"
                  />
                </a>
              </Link>
            </Box>
            <Box className="nav-section">
              <List
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ListItem>
                  <Link href="./product" legacyBehavior>
                    <a>Product</a>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="./resource" legacyBehavior>
                    <a>Resources</a>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="./contactus" legacyBehavior>
                    <a>Contact us</a>
                  </Link>
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
