import { Container, Typography, IconButton, Stack } from "@mui/material";
import GithubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <Container
      component="footer"
      maxWidth="lg"
      sx={{ 
        py: 2, 
        borderTop: 1, 
        borderColor: 'divider',
        mt: 'auto',
        backgroundColor: 'background.paper',
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 2, sm: 0 }
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {currentYear} chadhindsight. All rights reserved.
      </Typography>
      
      <Stack direction="row" spacing={1}>
        <IconButton
          component="a"
          target="_blank" 
          href="https://github.com/chadhindsight"
          size="small" 
          color="inherit" 
          aria-label="Github"
          sx={{ color: 'text.secondary' }}
        >
          <GithubIcon fontSize="small" />
        </IconButton>
       
        <IconButton
        component="a"
          target="_blank" 
          href="https://www.instagram.com/chadhindsight/"
          size="small" 
          color="inherit" 
          aria-label="Instagram"
          sx={{ color: 'text.secondary' }}
        >
          <InstagramIcon fontSize="small" />
        </IconButton>
        <IconButton
        component="a"
          target="_blank" 
          href="https://www.linkedin.com/in/chadrick-hinds"
          size="small" 
          color="inherit" 
          aria-label="LinkedIn"
          sx={{ color: 'text.secondary' }}
        >
          <LinkedInIcon fontSize="small" />
        </IconButton>
      </Stack>
    </Container>
  );
}