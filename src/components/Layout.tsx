import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/material";
import { getImageURL } from "../utils/image-util";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

// function GetImage({ imagePath }: { imagePath: string }) {
// // const iconPath = images[imagePath]?.default;

// // const absPath = iconPath.split("/public")[0];

// return absPath ? <img src={absPath} alt="Icon" /> : <span></span>;
// }

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  zIndex: 1300,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const drawerMenuItems = [
  {
    title: "Promotions",
    icon: "icon-gift.svg",
    hasNestedMenu: true,
  },
  {
    title: "Affiliate",
    icon: "icon-affiliate.svg",
    hasNestedMenu: false,
  },
  {
    title: "VIP Club",
    icon: "icon-vip-club.svg",
    hasNestedMenu: false,
  },
  {
    title: "Blog",
    icon: "icon-blog.svg",
    hasNestedMenu: false,
  },
  {
    title: "Forum",
    icon: "icon-forum.svg",
    hasNestedMenu: false,
  },
  {
    title: "Sponsorships",
    icon: "icon-sponsorships.svg",
    hasNestedMenu: true,
  },
  {
    title: "Responsible Gambling",
    icon: "icon-resp-gamb.svg",
    hasNestedMenu: false,
  },
  {
    title: "Live Support",
    icon: "icon-live-support.svg",
    hasNestedMenu: true,
  },
  {
    title: "Language:English",
    icon: "icon-lang.svg",
    hasNestedMenu: true,
  },
];

export default function Layout() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          paddingLeft: "60px",
        }}
        position="fixed"
        open={open}
      >
        <Toolbar>
          {/* header  content here*/}
          <Box
            sx={{
              width: "100%",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              // boxShadow: "#0003 0 4px 6px -1px, #0000001f 0 2px 4px -1px",
              touchAction: "none",
            }}
          >
            <Box
              sx={{
                padding: `0 3vw`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                width: "100%",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  maxWidth: "1200px",
                }}
              >
                <Box
                  sx={{
                    gridTemplateColumns: "auto 1fr",
                    position: "relative",
                    height: "60px",
                    alignItems: "center",
                    width: "100%",
                    display: "grid",
                  }}
                  className="navigation-container"
                >
                  <svg
                    style={{
                      borderRadius: ".25rem",
                      transition: ".2s",
                      outlineOffset: ".125rem",
                      width: "100%",
                      color: "#ffffff",
                      maxWidth: "66.95px",
                    }}
                    fill="#ffffff"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 396.11 197.92"
                    className="svelte-md2ju7"
                  >
                    <g id="Layer_5" data-name="Layer 5">
                      <path
                        fill="#ffffff"
                        d="M25.68,56.89c-.1-26.47,16.84-41.15,47.94-41.26C96,15.55,100,30.19,100,35.51c0,10.19-14.42,21-14.42,21s.8,6.35,13.18,6.3,24.44-8.22,24.37-28.67C123.07,10.65,98.46-.09,74.13,0,53.78.07-.19,2.93,0,56.51c.18,47.59,90,51.79,90.07,82.26.12,33.09-37,42-49.56,42S22.84,171.88,22.82,167c-.09-26.8,26.58-34.26,26.58-34.26,0-2-1.56-10.91-11.89-10.87C10.9,121.92.3,144.8.38,167.14c.07,19,13.5,30.86,33.78,30.78,38.78-.14,82.51-19.06,82.35-61.08C116.37,97.54,25.79,87.28,25.68,56.89Z"
                      ></path>
                      <path
                        fill="#ffffff"
                        d="M395.37,162.18c-.31-.75-1.18-.57-2.33.38-4.4,3.63-14.46,13.91-38,14-42.92.16-50.37-70.58-50.37-70.58s32.71-24.42,37.82-34.27-11.15-12-11.15-12-22.88,27.84-39.1,36C294,83.6,306,56,306.69,40.13s-19.11-12-22.27-10.48c0,6.93-17.49,69.84-23.86,104.42-3.75,6-9.11,12.86-13.91,12.87-2.78,0-3.8-5.15-3.83-12.53,0-10.24,5.64-26.65,5.6-36.62,0-6.9-3.17-7.31-5.9-7.3-.59,0-3.87.09-4.47.09-7,0-4.7-6-11-5.94-19.28.07-43.84,21.12-44.91,52.89-6.51,4.31-15.62,9.74-20.27,9.76-4.88,0-6.09-4.51-6.1-8.41,0-6.85,11.08-47.55,11.08-47.55s14.11-3.62,20.27-4.81c4.66-.91,6-1.25,7.81-3.5s5.35-6.9,8.21-11.08.05-7.41-5.24-7.39c-6.94,0-25.51,4.4-25.51,4.4s8.92-38.46,8.91-39.24-1-1.19-2.51-1.18c-3.38,0-9.41,1.82-13.27,3.2-5.91,2.11-10.72,9.35-11.69,12.72s-7.65,29.76-7.65,29.76-35.77,12.35-40.66,14.2a.74.74,0,0,0-.5.7c0,.32,4.09,16,12.48,15.94,6,0,23.63-7.22,23.63-7.22s-9.06,36-9,48c0,7.7,3.63,16.72,18.67,16.67,14,0,26.25-7.23,33.11-12.26,3.75,9.49,12.61,12.09,18.66,12.07,13.56,0,24-10.82,25.34-12.27,1.76,4.16,5.91,12.15,15.39,12.12,5.36,0,10.91-6,15-11.82a23.38,23.38,0,0,0,.05,3.63c1.64,14.92,23.79,6.15,25,4.07.75-10.79.28-32.85,4.59-46.47,5.72,46.46,27.42,77.71,66.43,77.57,21.81-.08,33-6.35,37.63-11.52A15.9,15.9,0,0,0,395.37,162.18ZM208.2,146.86c-18.73.07,5.73-48.48,21.71-48.54C229.93,104.58,229.58,146.79,208.2,146.86Z"
                      ></path>
                      <path
                        fill="#ffffff"
                        d="M360.26,161.74c16.91-.06,30-11.19,32.4-14.81,3.1-4.71-3.6-11.82-5.73-11.7-5.34,5.11-10.92,11.29-23.45,11.33-14.75.06-11.41-16.17-11.41-16.17s28.39,3.67,39.8-16.74c3.65-6.53,3.8-15.56,2.33-19.45s-9.73-11.09-22.87-10c-16.14,1.36-36.48,18.19-40.95,38.4C326.79,138.86,333.58,161.84,360.26,161.74Zm18-68.1c2.66-.09,2.42,4.29,1.71,8.87-1,6.21-9.53,22-25.81,21.38C355.29,114.7,367.4,94,378.29,93.64Z"
                      ></path>
                    </g>
                  </svg>
                  <Box component="section">
                    <Box
                      sx={{
                        padding: 0,
                        gap: 0,
                        alignItems: "center",
                        justifyContent: "flex-end",
                        gridAutoFlow: "column",
                        display: "grid",
                      }}
                    >
                      <button
                        style={{
                          transitionProperty:
                            "color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter",
                          msTransitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
                          transitionDuration: ".15s",
                          lineHeight: 1,
                          fontWeight: 600,
                          fontSize: ".875rem",
                          padding: ".9375rem 1.25rem",
                          borderRadius: `calc(.5rem - 4px)`,
                          whiteSpace: "nowrap",
                          gap: ".5rem",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "inline-flex",
                          position: "relative",
                          outline: "none",
                          cursor: "pointer",
                          border: "none",
                          appearance: "none",
                          margin: 0,
                          background: "none",
                        }}
                        type="button"
                        tabIndex={0}
                      >
                        Sign In
                      </button>
                      <button
                        style={{
                          transitionProperty:
                            "color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter",
                          msTransitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
                          transitionDuration: ".15s",
                          lineHeight: 1,
                          fontWeight: 600,
                          fontSize: ".875rem",
                          padding: ".9375rem 1.25rem",
                          borderRadius: `calc(.5rem - 4px)`,
                          whiteSpace: "nowrap",
                          gap: ".5rem",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "inline-flex",
                          position: "relative",
                          outline: "none",
                          cursor: "pointer",
                          border: "none",
                          appearance: "none",
                          margin: 0,
                          boxShadow:
                            "0 0 #0000, 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1)",
                          color: "rgba(255,255,255, 1)",
                          backgroundColor: "rgba(20,117,225, 1)",
                        }}
                        type="button"
                        tabIndex={0}
                      >
                        Register
                      </button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          "& .MuiPaper-root": {
            border: "none",
            background: "#0f212e",
            color: "#ffffff",
            filter: "drop-shadow(0 0 5px rgba(25,25,25,.25))",
            "& > div": {
              padding: 0,
            },
          },
        }}
        variant="permanent"
        open={open}
      >
        <DrawerHeader
          sx={
            {
              // boxShadow:
              //   "0 10px 15px -3px rgba(0, 0, 0, .2), 0 4px 6px -2px rgba(0, 0, 0, .1)",
            }
          }
        >
          <Box className="header svelte-1hoeywl collapsed">
            <button
              onClick={toggleDrawerOpen}
              style={{
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, .2), 0 4px 6px -2px rgba(0, 0, 0, .1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                minWidth: "3.75rem",
                height: "3.75rem",
                borderRadius: ".25rem",
                padding: "0",
                border: "none",
                fontFamily: "inherit",
                fontSize: "inherit",
                fontWeight: "inherit",
                color: "inherit",
                lineHeight: 1.5,
                outline: "none",
                appearance: "none",
                background: "none",
                margin: "none",
              }}
            >
              <svg
                fill="currentColor"
                viewBox="0 0 64 64"
                className="svg-icon "
                style={{
                  pointerEvents: "none",
                  strokeWidth: 0,
                  stroke: "currentColor",
                  fill: "#b3b6d4",
                  flexShrink: 0,
                  display: "inline-block",
                  width: "1em",
                  height: "1em",
                }}
              >
                <title />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 0h64v13H0V0Zm0 25.5h64v13H0v-13ZM64 51H0v13h64V51Z"
                />
              </svg>
            </button>
            <Box
              sx={{
                flexDirection: "column",
                padding: "1rem 0 0 0",
                boxShadow: "none",
                display: "flex",
                touchAction: "none",
                gap: ".5rem",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                style={{
                  width: "2.75rem",
                  height: "2.75rem",
                  flex: "unset",
                  backgroundImage:
                    "url(https://mediumrare.imgix.net/casino-poker-cards-small-en.jpg?auto=format&w=44)",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  minHeight: "2.25rem",
                  borderRadius: ".25rem",
                  color: "#ffffff",
                  fontSize: ".875rem",
                  fontWeight: 700,
                  textShadow:
                    "0px 1px 2px rgba(0, 0, 0, .12), 0px 1px 3px rgba(0, 0, 0, .2)",
                  WebkitUserSelect: "none",
                  MozUserSelect: "none",
                  userSelect: "none",
                }}
              >
                {open && <span>CASINO</span>}
              </Box>
              <Box className="image-loader svelte-jby8ge" />
              <Box
                style={{
                  width: "2.75rem",
                  height: "2.75rem",
                  flex: "unset",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  minHeight: "2.25rem",
                  borderRadius: ".5rem",
                  color: "#fffff",
                  fontSize: ".875rem",
                  fontWeight: 700,
                  textShadow:
                    "0px 1px 2px rgba(0, 0, 0, .12), 0px 1px 3px rgba(0, 0, 0, .2)",
                  WebkitUserSelect: "none",
                  MozUserSelect: "none",
                  userSelect: "none",
                  backgroundImage:
                    "url(https://mediumrare.imgix.net/sports-balls-en.jpg?auto=format&w=78)",
                }}
              >
                {open && <span>SPORTS</span>}
              </Box>
              <Box className="image-loader svelte-jby8ge" />
            </Box>
          </Box>
        </DrawerHeader>
        <List>
          {drawerMenuItems.slice(0, 5).map((item) => (
            <ListItem key={item.title} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  <img src={getImageURL(item.icon)} alt="" />
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
          {drawerMenuItems.slice(5).map((item) => (
            <ListItem key={item.title} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  <img
                    style={{ width: "14px", height: "14px" }}
                    src={getImageURL(item.icon)}
                    alt=""
                  />
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {/* hero section */}
        <Box
          sx={{
            padding: "3rem 2rem",
          }}
          component="section"
        ></Box>
      </Box>
    </Box>
  );
}
