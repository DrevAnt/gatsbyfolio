import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import Hidden from "@material-ui/core/Hidden";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    width: "100%",
    maxWidth: "16.6rem",
    margin: "0.5rem",
  },
  card: {
    display: "flex",
  },
  links: {
    marginRight: "auto",
  },
  tag: {
    marginRight: 5,
    marginBottom: 5,
  },
}));

function TagsContainer({ tags }) {
  const styles = useStyles();
  return (
    <div>
      {tags.map((tag) => (
        <Chip
          className={styles.tag}
          label={tag}
          variant="outlined"
          key={tag}
        ></Chip>
      ))}
    </div>
  );
}

function Project({ title, description, imageUrl, tags, links }) {
  const styles = useStyles();
  return (
    <>
      <Grid item className={styles.borders}>
        <CardActionArea>
          <Card className={styles.card}>
            <Hidden xsDown>
              <CardMedia
                className={styles.cardMedia}
                image={imageUrl}
              ></CardMedia>
            </Hidden>
            <div>
              <CardContent>
                <Typography variant="h5" paragraph>
                  {title}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {description}
                </Typography>
                <Hidden mdUp>
                  <TagsContainer tags={tags} />
                </Hidden>
              </CardContent>
              <CardActions>
                <div className={styles.links}>
                  {links.map((linkItem) => (
                    <IconButton href={linkItem.href} key={linkItem.href}>
                      <linkItem.icon />
                    </IconButton>
                  ))}
                </div>
                <Hidden smDown>
                  <TagsContainer tags={tags} />
                </Hidden>
              </CardActions>
            </div>
          </Card>
        </CardActionArea>
      </Grid>
    </>
  );
}

const Projects = () => {
  return (
    <Container maxWidth="md" id="projects">
      <Box pt={9} mb={2}>
        <Typography variant="h4">Projects</Typography>
      </Box>
      <Grid container direction="column" spacing={4}>
        {projectsData.map((data) => (
          <Project {...data} key={data.title} />
        ))}
      </Grid>
    </Container>
  );
};

const projectsData = [
  {
    title: "Cryptocurrency Tracker ",
    description:
      "A Cryptocurrency Tracker App  with fully responsive functionality, using Context API to manage the state of app, and Coin Gecko API for fetching data.",
    imageUrl: "/tracker.jpg",
    imageAlt: "Project 1 Image",
    tags: ["ReactJS", "Material-UI", "ChartJS"],
    links: [
      {
        icon: GitHubIcon,
        href: "https://github.com/DrevAnt/cryptotracker",
      },
      {
        icon: OpenInNewIcon,
        href: "https://cryptrack.netlify.app/",
      },
    ],
  },
  {
    title: "Portfolio NextJS,",
    description:
      "My first website with NextJS, it have responsive design and was build with ReactJS, NextJS and CSS.",
    imageAlt: "Project 2 Image",
    imageUrl: "/nextjs.jpg",
    tags: ["ReactJS", "NextJS"],
    links: [
      {
        icon: GitHubIcon,
        href: "https://github.com/DrevAnt/next-netlify-firsttry",
      },
      {
        icon: OpenInNewIcon,
        href: "https://myfirstnextapp.netlify.app/",
      },
    ],
  },
  {
    title: "Weather App",
    description:
      " Weather App using Openweathermap API. This fully responsive project is made with HTML CSS JavaScript and deployed on Netlify.",
    imageAlt: "Project 3 Image",
    imageUrl: "/jsweather.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        icon: GitHubIcon,
        href: "https://github.com/DrevAnt/weatherappjs",
      },
      {
        icon: OpenInNewIcon,
        href: "https://jsappgeoweather.netlify.app/weather.html",
      },
    ],
  },
  {
    title: "FakeShop App ",
    description:
      "Ecommerce store using Fakestore API and React with Redux State Management library. In this app I simply fetch data from API with ReduxJS and Thunk.",
    imageUrl: "/fakeshop.jpg",
    imageAlt: "Project 1 Image",
    tags: ["ReactJS", "ReduxJS", "Thunk", "Semantic-UI"],
    links: [
      {
        icon: GitHubIcon,
        href: "https://github.com/DrevAnt/fakeecommerce",
      },
      {
        icon: OpenInNewIcon,
        href: "https://fakeshopapiredux.netlify.app/",
      },
    ],
  },
  {
    title: "Real Time Chat App",
    description:
      "Chat App store with Socket.IO, ReactJS. Simple  application with real time messaging using NodeJS and ExpressJS for backend.",
    imageUrl: "/chat.jpg",
    imageAlt: "Project 1 Image",
    tags: ["ReactJS", "Socket.IO", "NodeJS"],
    links: [
      {
        icon: GitHubIcon,
        href: "https://github.com/DrevAnt/chatapp",
      },
    ],
  },
  {
    title: "Gatsby Resume",
    description:
      "Portfolio project using Material-UI, GatsbyJS, ReactJS. App is interactive and responsive, with optimized images for different screen sizes.",
    imageUrl: "/resume.jpg",
    imageAlt: "Project 1 Image",
    tags: ["ReactJS", "GatsbyJS", "Material-UI"],
    links: [
      {
        icon: GitHubIcon,
        href: "https://github.com/DrevAnt/gatsbyfolio",
      },
      {
        icon: OpenInNewIcon,
        href: "https://adrevetskyifolio.netlify.app/",
      },
    ],
  },
];

export default Projects;
