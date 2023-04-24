import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import styles from "../../styles/components/footer.module.css";
export default function Footer() {
  return (
    <>
      <Box className="footer" p="25px 0px" sx={{ backgroundColor: "#011027" }}>
        <Container>
          <Box sx={{ width: "150px", margin: "20px 0px" }}>
            <img
              src="https://res.cloudinary.com/dm9tstije/image/upload/v1682145260/breezehome/breeze-logo_ruga6f.svg"
              alt="logo"
              width="100%"
            />
          </Box>
        </Container>
        <hr />
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="footer-card">
                <Typography variant="h5" p="20px">
                  Features
                </Typography>
                <List>
                  <ListItem>
                    <a>Cookie & Cache</a>
                  </ListItem>
                  <ListItem>
                    <a>Responsive Layout</a>
                  </ListItem>
                  <ListItem>
                    <a>Take Screenshot</a>
                  </ListItem>
                  <ListItem>
                    <a>Live Edit</a>
                  </ListItem>
                  <ListItem>
                    <a>SEO Panel</a>
                  </ListItem>
                  <ListItem>
                    <a>What is?</a>
                  </ListItem>
                  <ListItem>
                    <a>Media</a>
                  </ListItem>
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="footer-card" mt="68px">
                <List>
                  <ListItem>
                    <a>Environment</a>
                  </ListItem>
                  <ListItem>
                    <a>Browser Support</a>
                  </ListItem>
                  <ListItem>
                    <a>Tech Stack</a>
                  </ListItem>
                  <ListItem>
                    <a>Screenshot Audit</a>
                  </ListItem>
                  <ListItem>
                    <a>Team Sharing</a>
                  </ListItem>
                  <ListItem>
                    <a>Page Manager</a>
                  </ListItem>
                  <ListItem>
                    <a>CheckList</a>
                  </ListItem>
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="footer-card">
                <Typography variant="h5" p="20px">
                  Company
                </Typography>
                <List>
                  <ListItem>
                    <a>Contact us</a>
                  </ListItem>
                  <ListItem>
                    <a>Blog</a>
                  </ListItem>
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="footer-card" mt="24px" pb="20px">
                <img
                  src="https://res.cloudinary.com/dm9tstije/image/upload/v1682145262/breezehome/chrome-web-store_dq2sca.svg"
                  alt="web-store"
                  width="100%"
                />
                <Typography variant="span" sx={{ width: "100%" }} pt="20px">
                  Check out our 9 reviews
                </Typography>
                <Box mt="10px">
                  <StarIcon className={styles["iconcolor"]} />
                  <StarIcon className={styles["iconcolor"]} />
                  <StarIcon className={styles["iconcolor"]} />
                  <StarIcon className={styles["iconcolor"]} />
                  <StarIcon className={styles["iconcolor"]} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <hr />
        <Container
          sx={{
            display: { md: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box className="trademark">
            <Typography variant="h5" mt="25px">
              © SCube.co
            </Typography>
            <Typography mt="5px">
              SCube.co & SCube Theme is trading name for SCube Digital Limited.
            </Typography>
            <Typography mt="5px">
              SCube is Trademarked with UK Government.
            </Typography>
          </Box>
          <Box className="policies" mt="18px">
            <List
              sx={{
                position: "relative",
                left: "-20px",
                display: { md: "flex" },
              }}
            >
              <ListItem>Terms & Policies</ListItem>
              <ListItem>Privacy Policy</ListItem>
              <ListItem>Cookie Policy</ListItem>
            </List>
          </Box>
        </Container>
      </Box>
    </>
  );
}
