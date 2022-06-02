import React, { Component }  from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    makeStyles,
  } from "@material-ui/core";
  import { useHistory } from "react-router-dom";
  import { Link } from "react-router-dom";
//
  
  import isAuth, { userType } from "../lib/isAuth";
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  const Navbar = (props) => {
    const classes = useStyles();
    let history = useHistory();
  
    const handleClick = (location) => {
      console.log(location);
      history.push(location);
    };
  
    return (
      <>

      <div class="w3-hide-small">
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <Link to="/" className={classes.title}>
            <span class="flex">
          <img class="h-8 w-auto sm:h-10" src="https://imgur.com/0I2eClR.png"/>
           </span>
           </Link>
          
       
        
          </Typography>
          {isAuth() ? (
            userType() === "recruiter" ? (
              <>
              <div class="py-1">
                <button type="button" class="py-3 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                
                onClick={() => handleClick("/home")}>
                Home
                </button>
                <button type="button" class="py-3 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                
                 onClick={() => handleClick("/addjob")}>
                  Add Jobs
                </button>
                <button type="button" class="py-3 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                
                onClick={() => handleClick("/myjobs")}>
                  My Jobs
                </button>
                <button type="button" class="py-3 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                
                onClick={() => handleClick("/employees")}>
                  Employees
                </button>
                <button type="button" class="py-3 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                
                onClick={() => handleClick("/profile")}>
                  Profile
                </button>
                <button type="button" class="py-3 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" 
                
                onClick={() => handleClick("/logout")}>
                  Logout
                </button>
                </div>
              </>
            ) : (
              <>
              <button type="button" class="py-3 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
   
                onClick={() => handleClick("/home")}>
                   Services
                </button>
                <button type="button" class="py-3 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
   
                  onClick={() => handleClick("/applications")}
                >
                  Applications
                </button>
              
                <button type="button" class="py-3 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" 
                
                onClick={() => handleClick("/logout")}>
                  Logout
                </button>
                
              </>
            )
          ) : (
            <>
            <button type="button" class="py-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => handleClick("/login")}>
                Login
              </button>
              
             <button type="button" class="py-3 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => handleClick("/signup")}>
                Signup
              </button>
            </>
          )}
        </Toolbar>
      </AppBar>
      </div>

     <div class="w3-hide-large w3-hide-medium">
     <div class="w3-bar">
  <button class="w3-button w3-left">

  <div class="w3-dropdown-hover">
    <button class="w3-button w3-black w3-small">Menu</button><br></br>
    <div class="w3-dropdown-content  w3-left"  >
      
    {isAuth() ? (
            userType() === "recruiter" ? (
              <>
  
                <button type="button" class="px-3 py-2 text-xs text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                
                onClick={() => handleClick("/home")}>
                    Homes
                </button>
                <button type="button" class="px-3 py-2 text-xs text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                
                 onClick={() => handleClick("/addjob")}>
                  Add Jobs
                </button>
                <button type="button" class="px-3 py-2 text-xs text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                
                onClick={() => handleClick("/myjobs")}>
                  My Jobs
                </button>
                <button type="button" class="px-3 py-2 text-xs text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                
                onClick={() => handleClick("/employees")}>
                  Employees
                </button>
                <button type="button" class="px-3 py-2 text-xs text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                
                onClick={() => handleClick("/profile")}>
                  Profile
                </button>
                <button type="button" class="px-3 py-2 text-xs text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" 
                
                onClick={() => handleClick("/logout")}>
                  Logout
                </button>
                
              </>
            ) : (
              <>
              <button type="button" class="px-3 py-2 text-xs text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
   
                onClick={() => handleClick("/home")}>
                   Services
                </button>
                <button type="button" class="px-3 py-2 text-xs text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
   
                  onClick={() => handleClick("/applications")}
                >
                  Applications
                </button>
              
                <button type="button" class="px-3 py-2 text-xs text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" 
                
                onClick={() => handleClick("/logout")}>
                  Logout
                </button>
                
              </>
            )
          ) : (
            <>
            <button type="button" class="px-3 py-2 text-xs text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => handleClick("/login")}>
                Login
              </button>
              
             <button type="button" class="px-3 py-2 text-xs text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => handleClick("/signup")}>
                Signup
              </button>
            </>
          )}
    </div>
  </div>
 
  </button>

  <button class="w3-button w3-right py-2">
  <img class="h-8 w-auto sm:h-10" src="https://imgur.com/0I2eClR.png"/>
  </button>
</div>
     </div>

     </>
    );
  };
  
  export default Navbar;
  
