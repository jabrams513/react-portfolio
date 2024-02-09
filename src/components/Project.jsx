import * as React from 'react';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as projects from '../assets';

const theme = createTheme({
  typography: {
    fontFamily: 'Oswald, sans-serif',
  },
});

const CustomCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#d3d3d3', // Grey background color
  color: 'black', // Black text color
  marginBottom: theme.spacing(2), // Add space between cards
  width: '100%', // Set a fixed height for all cards
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  color: 'black', // Black icon color
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center horizontally
});

export default function Project({ project }) {
  const [expanded, setExpanded] = React.useState(true); // Expanded by default

  const { title, description, github, deployed, image, stack } = project;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <ThemeProvider theme={theme}>
      <CardsContainer>
        <CustomCard sx={{ maxWidth: 345 }}>
          <CardHeader
            action={
              <IconButton aria-label="settings">
              </IconButton>
            }
            title={title}
          />
          <CardMedia
            component="img"
            height="194"
            image={projects[image]}
            alt={description}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="github">
              <a href={github} target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </a>
            </IconButton>
            <IconButton aria-label="share">
              <a href={deployed} target="_blank" rel="noopener noreferrer">
                <ShareIcon />
              </a>
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                {stack}
              </Typography>
            </CardContent>
          </Collapse>
        </CustomCard>
      </CardsContainer>
    </ThemeProvider>
  );
}
