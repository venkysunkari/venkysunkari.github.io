import React, { Component } from "react";
import {
  ThemeProvider, Paper,
  Button,
  IconButton,
  CardContent,
  Grid, Avatar,
  Card,
  Hidden,
  AppBar,
  Toolbar,
  CardMedia,
  List,
  ListItem,
  Tabs,
  Tab,
  ListItemText,
  Typography,
  Drawer,
  Divider
} from "@material-ui/core";
import AOS from "aos";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { darkTheme, lightTheme } from "./home";

export class Home extends Component {
  state = {
    dark: null,
    htmlclass: "common",
    cssclass: "common",
    jsclass: "common",
    reactclass: "common",
    djangoclass: "common",
    mysqlclass: "common",
    hamburgerClass: "hamburger",
    hamburgerOpen: false,
    totalDisplay: {
      display: "none",
    },
    letterDisplay: {
      display: "block",
    },
    tabValue: 1,
  };

  constructor(props) {
    super(props);
    this.Skills = new React.createRef();
    this.Home = new React.createRef();
    this.Contact = new React.createRef();
    this.Projects = new React.createRef();
    this.About = new React.createRef();
  }
  componentDidMount = () => {
    var theme = localStorage.getItem("isDark");
    if (theme == "true") {
      this.setState({ dark: true });
    } else {
      this.setState({ dark: false });
    }
    window.addEventListener("scroll", this.checkVisible);
    setTimeout(() => {
      this.setState({
        totalDisplay: {
          display: "block",
        },
        letterDisplay: {
          display: "none",
        },
      });
      AOS.init({ duration: 1000 });
    }, 2700);
  };
  checkVisible = () => {
    var rect = this.Skills.current.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    var isVisible = elemTop > 0 && elemBottom <= window.innerHeight;
    if (isVisible) {
      this.setState({
        htmlclass: "common html-active",
        cssclass: "common css-active",
        jsclass: "common js-active",
        reactclass: "common react-active",
        djangoclass: "common django-active",
        mysqlclass: "common mysql-active",
      });
    }
  };
  handleTheme = () => {
    this.state.dark
      ? localStorage.setItem("isDark", false)
      : localStorage.setItem("isDark", true);
    this.setState({ dark: !this.state.dark });
  };

  handleHamburger = () => {
    if (this.state.hamburgerOpen) {
      this.setState({ hamburgerClass: "hamburger", hamburgerOpen: false });
    } else {
      this.setState({
        hamburgerClass: "hamburger open",
        hamburgerOpen: true,
      });
    }
  };
  //handles the tab changed
  handleTabs = (e, newValue) => {
    this.setState({ tabValue: newValue });
  };
  render() {
    const { dark } = this.state;
    return (
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <Paper
          style={{
            transition: "all 0.4s ease-in-out",
          }}
          className="wrapper-paper"
        >
          <div className="box" style={this.state.letterDisplay}>
            <div className={dark ? "icon dark" : "icon"}>
              <svg
                viewBox="0 0 520 520"
                style={{ enableBackground: "new 0 0 512 512" }}
              >
                <g
                  fillRule="evenodd"
                  strokeLinecap="butt"
                  strokeLinejoin=""
                  fill="#31ef88"
                >
                  <g>
                    <path
                      d="M510.432,249.597L388.297,38.537c-2.096-3.631-5.967-5.378-10.159-5.378H133.861c-4.192,0-8.063,1.747-10.159,5.378
			L1.567,249.841c-2.09,3.631-2.09,7.976,0,11.607l122.135,211.535c2.096,3.632,5.967,5.858,10.159,5.858h244.276
			c4.192,0,8.063-2.288,10.159-5.919l122.135-211.569C512.523,257.722,512.523,253.228,510.432,249.597z M371.369,"/>
                  </g>
                </g>
              </svg>
            </div>
            <div className={dark ? "s dark" : "s"}>V</div>
          </div>
          <div className="total" style={this.state.totalDisplay}>
            <AppBar
              position="fixed"
              style={{
                background: dark ? "#0a192f" : "#172a45",
                padding: 0,
                border: "none",
                transition: "all 0.4s ease-in-out",
                paddingTop: "10px",
                width: "100%",
              }}
            >
              <Toolbar>
                <Grid container>
                  <Grid item xs={2}>
                    <div className="box1" data-aos="fade">
                      <div className={dark ? "icon1 dark" : "icon1"}>
                        <svg
                          viewBox="0 0 514 514"
                          style={{ enableBackground: "new 0 0 512 512" }}
                        >
                          <g
                            fillRule="evenodd"
                            strokeLinecap="butt"
                            strokeLinejoin=""
                            fill="#31ef88"
                          >
                            <g>
                              <path
                                d="M510.432,249.597L388.297,38.537c-2.096-3.631-5.967-5.378-10.159-5.378H133.861c-4.192,0-8.063,1.747-10.159,5.378
			L1.567,249.841c-2.09,3.631-2.09,7.976,0,11.607l122.135,211.535c2.096,3.632,5.967,5.858,10.159,5.858h244.276
			c4.192,0,8.063-2.288,10.159-5.919l122.135-211.569C512.523,257.722,512.523,253.228,510.432,249.597z M371.369,"/>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className={dark ? "s1 dark" : "s1"}>V</div>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={6}></Grid>
                  <Grid
                    item
                    container
                    xs
                    alignItems="center"
                    className={dark ? "nav-ref dark" : "nav-ref"}
                  >
                    <Grid item xs>
                      <IconButton onClick={this.handleTheme} disableRipple>
                        {dark ? (
                          <Brightness3Icon className="icons" />
                        ) : (
                          <WbSunnyIcon
                            className="icons"
                            style={{ color: "gray" }} />
                        )}
                      </IconButton>
                    </Grid>
                    <Hidden xsDown>
                      {["Home", "About", "Skills", "Projects", "Contact"].map(
                        (e) => (
                          <Grid
                            item
                            xs
                            onClick={() => {
                              e === "Home"
                                ? this.Home.current.scrollIntoView({
                                  behavior: "smooth",
                                })
                                : e === "About"
                                  ? this.About.current.scrollIntoView({
                                    behavior: "smooth",
                                  })
                                  : e === "Skills"
                                    ? this.Skills.current.scrollIntoView({
                                      behavior: "smooth",
                                    })
                                    : e === "Projects"
                                      ? this.Projects.current.scrollIntoView({
                                        behavior: "smooth",
                                      })
                                      : this.Contact.current.scrollIntoView({
                                        behavior: "smooth",
                                      });
                            }}
                          >
                            <Typography variant="body1">{e}</Typography>
                          </Grid>
                        )
                      )}
                    </Hidden>
                    <Hidden smUp>
                      <Grid item xs>
                        <div
                          className={this.state.hamburgerClass}
                          onClick={this.handleHamburger}
                        >
                          <div className={dark ? "span1 dark" : "span1"}></div>
                          <div className={dark ? "span2 dark" : "span2"}></div>
                          <div className={dark ? "span3 dark" : "span3"}></div>
                        </div>
                      </Grid>
                    </Hidden>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
            <br />
            <div
              className="name-intro"
              data-aos="fade"
              data-aos-delay="300"
              ref={this.Home}
            >
              <Typography
                variant="subtitle1"
                style={dark ? { color: "#64ffda" } : { color: "red" }}
              >
                Hi. I'm
              </Typography>
              <Typography variant="h2">Venkataramana Sunkari</Typography>
              <Typography variant="h3" color="textSecondary">
                I build things with passion for the web
              </Typography>
            </div>
            <div className="intro-para" data-aos="fade" data-aos-delay="500">
              <Typography variant="body1">
                {" "}
                I'm a self taught full stack developer.
              </Typography>
              <br />
              <Button
                variant="outlined"
                size="large"
                onClick={() => {
                  window.open("mailto:venkysunkari549@gmail.com");
                }}
                style={dark ? { color: "#64ffda" } : { color: "blue" }}
              >
                Get In Touch
              </Button>
            </div>
            <div
              className="about-me"
              data-aos="fade-up"
              data-aos-duration="500"
              ref={this.About}
            >
              <Grid container>
                <Grid item xs={4} sm={3}>
                  <Typography
                    variant="h4"
                    style={dark
                      ? { color: "white", fontWeight: "bold" }
                      : { color: "black", fontWeight: "bold" }}
                  >
                    {" "}
                    About Me
                  </Typography>
                </Grid>
                <Grid item container xs justify="center" alignItems="center">
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12} sm={5}>
                  <Hidden xsDown>
                    <Avatar
                      src={require("./profile.jpg")}
                      style={{
                        width: "150px",
                        height: "150px",
                        margin: "40px auto",
                      }} />
                  </Hidden>
                  <Hidden smUp>
                    <Avatar
                      src={require("./profile.jpg")}
                      style={{
                        width: "100px",
                        height: "100px",
                        margin: "20px auto",
                        marginBottom: 0,
                      }} />
                  </Hidden>
                </Grid>
                <Grid item xs={12} sm>
                  <Typography
                    variant="body1"
                    component="p"
                    style={{ marginTop: "40px" }}
                  >
                    <span
                      style={dark ? { color: "#64ffda" } : { fontWeight: "bold" }}
                    >
                    </span>
                    I'm currently seeking a summer internship in software development and engineering. I'm studying for a Master's in Computer Science at the University of Central Florida, set to graduate in 2025. I have previous experience as a software engineer at Persistent Systems. I'm a self-taught Full stack developer who enjoys building dynamic websites. I focus on creating fast, efficient products with great performance. Aside from JavaScript and React, I also code in C, C++, Java, and Python.

                  </Typography>
                </Grid>
              </Grid>
            </div>
            <div
              className="skills"
              data-aos="fade"
              data-aos-duration="500"
              ref={this.Skills}
            >
              <Grid container>
                <Grid item xs={4} sm={3}>
                  <Typography
                    variant="h4"
                    style={dark
                      ? { color: "white", fontWeight: "bold" }
                      : { color: "black", fontWeight: "bold" }}
                  >
                    My Skills
                  </Typography>
                </Grid>
                <Grid item container xs justify="center" alignItems="center">
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                </Grid>
              </Grid>
              <div
                style={{
                  transition: "all 0.4s ease",
                  height: "auto",
                  width: "auto",
                }}
              >
                <Grid container>
                  <Hidden xsDown>
                    <Grid
                      item
                      cotainer
                      xs={12}
                      sm
                      justify="center"
                      alignItems="center"
                    >
                      <Grid item xs>
                        <Typography variant="body1">
                          Other technologies I have worked upon
                        </Typography>
                        <List>
                          {["C", "C++", "Python", "Java"].map((e) => (
                            <ListItem>
                              <ListItemText>{e}</ListItemText>
                            </ListItem>
                          ))}
                        </List>
                      </Grid>
                    </Grid>
                  </Hidden>
                  <Grid
                    direction="column"
                    alignItems="center"
                    justify="center"
                    className="grid"
                    ref={this.skillsRef}
                    sm={6}
                    xs={12}
                    item
                    container
                    spacing={1}
                  >
                    <Grid item container justify="center" alignItems="center">
                      <Grid item xs={3}>
                        <Typography variant="body1">HTML</Typography>
                      </Grid>
                      <Grid item xs className={dark ? "bar dark" : "bar"}>
                        <div className={this.state.htmlclass}></div>
                      </Grid>
                    </Grid>
                    <Grid item container justify="center" alignItems="center">
                      <Grid item xs={3}>
                        <Typography variant="body1">CSS</Typography>
                      </Grid>
                      <Grid item xs className={dark ? "bar dark" : "bar"}>
                        <div className={this.state.cssclass}></div>
                      </Grid>
                    </Grid>
                    <Grid item container justify="center" alignItems="center">
                      <Grid item xs={3}>
                        <Typography variant="body1" color="default">
                          JS
                        </Typography>
                      </Grid>
                      <Grid item xs className={dark ? "bar dark" : "bar"}>
                        <div className={this.state.jsclass}></div>
                      </Grid>
                    </Grid>
                    <Grid item container justify="center" alignItems="center">
                      <Grid item xs={3}>
                        <Typography variant="body1">React</Typography>
                      </Grid>
                      <Grid item xs className={dark ? "bar dark" : "bar"}>
                        <div className={this.state.reactclass}></div>
                      </Grid>
                    </Grid>
                    <Grid item container justify="center" alignItems="center">
                      <Grid item xs={3}>
                        <Typography variant="body1">Spring Boot</Typography>
                      </Grid>
                      <Grid item xs className={dark ? "bar dark" : "bar"}>
                        <div className={this.state.djangoclass}></div>
                      </Grid>
                    </Grid>
                    <Grid item container justify="center" alignItems="center">
                      <Grid item xs={3}>
                        <Typography variant="body1">Mysql</Typography>
                      </Grid>
                      <Grid item xs className={dark ? "bar dark" : "bar"}>
                        <div className={this.state.mysqlclass}></div>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Hidden smUp>
                    <Grid item direction="column" container xs={12}>
                      <Grid item xs>
                        <Typography variant="body1">
                          Other technologies I have worked upon{" "}
                        </Typography>
                      </Grid>
                      <Grid item container xs style={{ marginTop: "10px" }}>
                        {["C", "C++", "Python", "Java"].map((e) => (
                          <Grid item xs>
                            <span className={dark ? "topic dark" : "topic"}>
                              {" "}
                              {e}
                            </span>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Hidden>
                </Grid>
              </div>
            </div>
            <div className="projects" data-aos="fade-up" ref={this.Projects}>
              <Grid container>
                <Grid item sm={5}>
                  <Typography
                    variant="h4"
                    style={dark
                      ? { color: "white", fontWeight: "bold" }
                      : { color: "black", fontWeight: "bold" }}
                  >
                    My past few projects
                  </Typography>
                </Grid>
                <Grid item container xs justify="center" alignItems="center">
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                </Grid>
              </Grid>
              <div className="projects-tab">
                <Tabs
                  value={this.state.tabValue}
                  onChange={this.handleTabs}
                  indicatorColor="primary"
                >
                  <Tab label="Beginner" />
                  <Tab label="Advanced" />
                </Tabs>
              </div>
              {this.state.tabValue === 0 && (
                <>
                  <Card
                    className="project-card"
                    data-aos="fade"
                    style={{ transition: "all 0.4s ease-in-out" }}
                  >
                    <CardMedia
                      image={require("./news.png")}
                      style={{ width: "100%", height: "50%" }} />
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="right"
                        style={{ fontWeight: "bold" }}
                      >
                        News
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        align="right"
                      >
                        Collection of NEWS from top news articles around the
                        world
                      </Typography>
                      <div className="one">
                        {["React", "Flexbox", "AOS"].map((e) => (
                          <span className={dark ? "topic dark" : "topic"}>
                            {e}
                          </span>
                        ))}
                      </div>
                      <div className="two">
                        {["React-router", "News Api"].map((e) => (
                          <span className={dark ? "topic dark" : "topic"}>
                            {e}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    className="project-card2"
                    data-aos="fade"
                    style={{ transition: "all 0.4s ease-in-out" }}
                  >
                    <CardMedia
                      image={require("./ecom.jpeg")}
                      style={{ width: "100%", height: "50%" }} />
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="right"
                        style={{ fontWeight: "bold" }}
                      >
                        Online store
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        align="right"
                      >
                        A online e-commerce website built using React and
                        Context Api.
                      </Typography>
                      <div className="one">
                        {["React", "CSS", "material-ui"].map((e) => (
                          <span className={dark ? "topic dark" : "topic"}>
                            {e}
                          </span>
                        ))}
                      </div>
                      <div className="two">
                        {["React-router", "Context Api"].map((e) => (
                          <span className={dark ? "topic dark" : "topic"}>
                            {e}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  {<Card
                    className="project-card2"
                    data-aos="fade"
                    style={{ transition: "all 0.4s ease-in-out" }}
                  >
                    <CardMedia
                      image={require("./music.png")}
                      style={{ width: "100%", height: "50%" }} />
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="right"
                        style={{ fontWeight: "bold" }}
                      >
                        Music Player
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        align="right"
                      >
                        A music player with some best songs made with React.
                      </Typography>
                      <div className="one">
                        {["React", "Flexbox", "CSS"].map((e) => (
                          <span className={dark ? "topic dark" : "topic"}>
                            {e}
                          </span>
                        ))}
                      </div>
                      <div className="two">
                        {["React-router", "Material-ui"].map((e) => (
                          <span className={dark ? "topic dark" : "topic"}>
                            {e}
                          </span>
                        ))}
                      </div>

                    </CardContent>
                  </Card>}

                  <Card
                    className="project-card"
                    data-aos="fade"
                    style={{ transition: "all 0.4s ease-in-out" }}
                  >
                    <CardMedia
                      image={require("./games2.jpeg")}
                      style={{ width: "100%", height: "50%" }} />
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="right"
                        style={{ fontWeight: "bold" }}
                      >
                        Apps and Games
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        align="right"
                      >
                        Collection of Apps and challenging games Built using
                        React.
                      </Typography>
                      <div className="one">
                        {["React", "Flexbox", "CSS"].map((e) => (
                          <span className={dark ? "topic dark" : "topic"}>
                            {e}
                          </span>
                        ))}
                      </div>
                      <div className="two">
                        {["React-router"].map((e) => (
                          <span className={dark ? "topic dark" : "topic"}>
                            {e}
                          </span>
                        ))}
                      </div>

                    </CardContent>
                  </Card>
                </>
              )}
              {this.state.tabValue === 1 && (
                <>
                  <Card
                    className="project-card"
                    data-aos="fade"
                    style={{ transition: "all 0.4s ease-in-out" }}
                  >
                    <CardMedia
                      image={require("./instagram.jpeg")}
                      style={{ width: "100%", height: "50%" }} />
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="right"
                        style={{ fontWeight: "bold" }}
                      >
                        Insta Clone
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        align="right"
                      >
                        A Clone of Instragram built using React and Django.
                      </Typography>
                      <div className="one">
                        {["React", "Ajax", "Django"].map((e) => (
                          <span className={dark ? "topic dark" : "topic"}>
                            {e}
                          </span>
                        ))}
                      </div>
                      <div className="two">
                        {["React-router", "Mysql"].map((e) => (
                          <span className={dark ? "topic dark" : "topic"}>
                            {e}
                          </span>
                        ))}
                      </div>

                    </CardContent>
                  </Card>
                  <Card
                    className="project-card2"
                    data-aos="fade"
                    style={{ transition: "all 0.4s ease-in-out" }}
                  >
                    <CardMedia
                      image={require("./chatapp.jpeg")}
                      style={{ width: "100%", height: "50%" }} />
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="right"
                        style={{ fontWeight: "bold" }}
                      >
                        Chat app
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        align="right"
                      >
                        Two random users will be connected online and can be able to chat
                      </Typography>
                      <div className="one">
                        {["React", "Express", "Node"].map((e) => (
                          <span className={dark ? "topic dark" : "topic"}>
                            {e}
                          </span>
                        ))}
                      </div>
                      <div className="two">
                        {["React-router", "Socket.io"].map((e) => (
                          <span className={dark ? "topic dark" : "topic"}>
                            {e}
                          </span>
                        ))}
                      </div>

                    </CardContent>
                  </Card>
                  <Card
                    className="project-card"
                    data-aos="fade"
                    style={{ transition: "all 0.4s ease-in-out" }}
                  >
                    <CardMedia
                      image={require("./music.png")}
                      style={{ width: "100%", height: "50%" }} />
                    <CardContent>
                      <Typography
                        variant="h6"
                        align="right"
                        style={{ fontWeight: "bold" }}
                      >
                        Music Player
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        align="right"
                      >
                        A music player with some best songs made with React.
                      </Typography>
                      <div className="one">
                        {["React", "Flexbox", "CSS"].map((e) => (
                          <span className={dark ? "topic dark" : "topic"}>
                            {e}
                          </span>
                        ))}
                      </div>
                      <div className="two">
                        {["React-router", "Material-ui"].map((e) => (
                          <span className={dark ? "topic dark" : "topic"}>
                            {e}
                          </span>
                        ))}
                      </div>

                    </CardContent>
                  </Card>
                </>
              )}
            </div>
            <div className="contact" ref={this.Contact}>
              <Grid container>
                <Grid item xs={4} sm={3}>
                  <Typography
                    variant="h4"
                    style={dark
                      ? { color: "white", fontWeight: "bold" }
                      : { color: "black", fontWeight: "bold" }}
                  >
                    Contact
                  </Typography>
                </Grid>
                <Grid item container xs justify="center" alignItems="center">
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                </Grid>
              </Grid>

              <div className="paper-cards-contact">
                <Grid
                  container
                  spacing={2}
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs>
                    <Paper
                      elevation={2}
                      className="contact-paper"
                      onClick={() => {
                        window.open(
                          "https://maps.app.goo.gl/MNmhwrA2GESaP5xc9",
                          "_blank"
                        );
                      }}
                    >
                      <Grid container direction="column" className="x">
                        <Grid item xs={7}>
                          <HomeIcon
                            style={dark
                              ? { color: "#31ef88", margin: "30px auto" }
                              : {
                                color: "rgb(211, 13, 13)",
                                margin: "30px auto",
                              }} />
                        </Grid>
                        <Grid item xs>
                          <Typography
                            variant="subtitle2"
                            style={{ fontWeight: "bold" }}
                          >
                            LOCATION
                          </Typography>
                        </Grid>
                        <Grid item xs>
                          <Typography variant="caption" color="textSecondary">
                            Orlando, Florida, United States
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Grid item xs>
                    <Paper
                      elevation={2}
                      className="contact-paper"
                      onClick={() => {
                        window.open("mailto:venkysunkari549@gmial.com");
                      }}
                    >
                      <Grid container direction="column" className="x">
                        <Grid item xs={7}>
                          <EmailOutlinedIcon
                            style={dark
                              ? { color: "#31ef88", margin: "30px auto" }
                              : {
                                color: "rgb(211, 13, 13)",
                                margin: "30px auto",
                              }} />
                        </Grid>
                        <Grid item xs>
                          <Typography
                            variant="subtitle2"
                            style={{ fontWeight: "bold" }}
                          >
                            EMAIL
                          </Typography>
                        </Grid>
                        <Grid item xs>
                          <Typography variant="caption" color="textSecondary">
                            venkysunkari549@gmail.com
                          </Typography>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Hidden xsDown>
                    <Grid item xs>
                      <Paper
                        elevation={2}
                        className="contact-paper"
                        onClick={() => {
                          window.open(
                            "https://api.whatsapp.com/send?phone=13213236626"
                          );
                        }}
                      >
                        <Grid container direction="column" className="x">
                          <Grid item xs={7}>
                            <PhoneIcon
                              style={dark
                                ? { color: "#31ef88", margin: "30px auto" }
                                : {
                                  color: "rgb(211, 13, 13)",
                                  margin: "30px auto",
                                }} />
                          </Grid>
                          <Grid item xs>
                            <Typography
                              variant="subtitle2"
                              style={{ fontWeight: "bold" }}
                            >
                              Phone
                            </Typography>
                          </Grid>
                          <Grid item xs>
                            <Typography variant="caption" color="textSecondary">
                              (+1)3213236626
                            </Typography>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                  </Hidden>
                </Grid>
              </div>
            </div>
            <Hidden xsDown>
              <div className="social-media-sm">
                <Grid direction="column" alignItems="center" justify="center">
                  <Grid item xs>
                    <IconButton
                      onClick={() => {
                        window.open("https://github.com/venkysunkari", "_blank");
                      }}
                      disableFocusRipple
                      disableRipple
                    >
                      <GitHubIcon size="small" />
                    </IconButton>
                  </Grid>
                  <Grid item xs>
                    <IconButton
                      onClick={() => {
                        window.open(
                          "mailto:venkysunkari549@gmial.com",
                          "_blank"
                        );
                      }}
                      disableFocusRipple
                      disableRipple
                    >
                      <EmailOutlinedIcon size="small" />
                    </IconButton>
                  </Grid>
                  <Grid item xs>
                    <IconButton
                      onClick={() => {
                        window.open(
                          "https://api.whatsapp.com/send?phone=13213236626"
                        );
                      }}
                      disableFocusRipple
                      disableRipple
                    >
                      <PhoneIcon size="small" />
                    </IconButton>
                  </Grid>
                  <Grid item xs>
                    <IconButton
                      onClick={() => {
                        window.open(
                          "https://www.linkedin.com/in/venky-sunkari",
                          "_blank"
                        );
                      }}
                      disableFocusRipple
                      disableRipple
                    >
                      <LinkedInIcon size="small" />
                    </IconButton>
                  </Grid>
                  <Grid item xs>
                    <IconButton
                      onClick={() => {
                        window.open(
                          "https://instagram.com/venkysunkari_7",
                          "_blank"
                        );
                      }}
                      disableFocusRipple
                      disableRipple
                    >
                      <InstagramIcon size="small" />
                    </IconButton>
                  </Grid>
                  <Grid
                    item
                    container
                    className="social-divider-grid"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item xs={11} className="inner-div">
                      <Divider />
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Hidden>
            <Hidden smUp>
              <div className="social-media-xs">
                <Grid container alignItems="center" justify="center">
                  <Grid item xs>
                    <IconButton
                      onClick={() => {
                        window.open("https://github.com/venkysunkari", "_blank");
                      }}
                      disableFocusRipple
                      disableRipple
                    >
                      <GitHubIcon size="small" />
                    </IconButton>
                  </Grid>
                  <Grid item xs>
                    <IconButton
                      onClick={() => {
                        window.open(
                          "https://www.linkedin.com/in/venky-sunkari",
                          "_blank"
                        );
                      }}
                      disableFocusRipple
                      disableRipple
                    >
                      <LinkedInIcon size="small" />
                    </IconButton>
                  </Grid>
                  <Grid item xs>
                    <IconButton
                      onClick={() => {
                        window.open(
                          "https://facebook.com/",
                          "_blank"
                        );
                      }}
                      disableFocusRipple
                      disableRipple
                    >
                      <FacebookIcon size="small" />
                    </IconButton>
                  </Grid>

                  <Grid item xs>
                    <IconButton
                      onClick={() => {
                        window.open(
                          "https://instagram.com/venkysunkari_7",
                          "_blank"
                        );
                      }}
                      disableFocusRipple
                      disableRipple
                    >
                      <InstagramIcon size="small" />
                    </IconButton>
                  </Grid>
                  <Grid item xs>
                    <IconButton
                      onClick={() => {
                        window.open(
                          "https://twitter.com/",
                          "_blank"
                        );
                      }}
                      disableFocusRipple
                      disableRipple
                    >
                      <TwitterIcon size="small" />
                    </IconButton>
                  </Grid>
                </Grid>
              </div>
            </Hidden>
          </div>

          <Drawer
            anchor="right"
            open={this.state.hamburgerOpen}
            onClose={this.handleHamburger}
          >
            <div className="drawer-ham-icon">
              <div
                className={this.state.hamburgerClass}
                onClick={this.handleHamburger}
              >
                <div className={dark ? "span1 dark" : "span1"}></div>
                <div className={dark ? "span2 dark" : "span2"}></div>
                <div className={dark ? "span3 dark" : "span3"}></div>
              </div>
            </div>
            <div className="hamburger-list">
              <List>
                {["Home", "About", "Skills", "Projects", "Contact"].map((e) => (
                  <ListItem
                    onClick={() => {
                      e === "Home"
                        ? this.Home.current.scrollIntoView({
                          behavior: "smooth",
                        })
                        : e === "About"
                          ? this.About.current.scrollIntoView({
                            behavior: "smooth",
                          })
                          : e === "Skills"
                            ? this.Skills.current.scrollIntoView({
                              behavior: "smooth",
                            })
                            : e === "Projects"
                              ? this.Projects.current.scrollIntoView({
                                behavior: "smooth",
                              })
                              : this.Contact.current.scrollIntoView({
                                behavior: "smooth",
                              });
                      this.handleHamburger();
                    }}
                  >
                    <ListItemText>
                      <Typography variant="h6">{e}</Typography>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </div>
          </Drawer>
        </Paper>
      </ThemeProvider>
    );
  }
}
