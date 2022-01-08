import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";

const socialItems = [
  { icon: GitHubIcon, url: "https://github.com/DrevAnt", name: "github" },
  {
    icon: LinkedInIcon,
    url: "https://www.linkedin.com/in/anton-drevetskyi-web-dev/",
    name: "linkedin",
  },
  {
    icon: FacebookIcon,
    url: "https://www.facebook.com/ant.drev",
    name: "facebook",
  },
];

const Social = ({ direction }) => {
  return (
    <Grid container direction={direction || "row"} spacing={1}>
      {socialItems.map((item) => (
        <Grid item key={item.name}>
          <Link href={item.url}>
            <IconButton>
              <item.icon />
            </IconButton>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Social;
