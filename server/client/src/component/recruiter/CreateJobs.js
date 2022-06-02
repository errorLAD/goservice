import React, { Component }  from 'react';
import { useContext, useEffect, useState } from "react";
import {
  Button,
  Grid,
  Typography,
  Modal,
  Paper,
  makeStyles,
  TextField,
  MenuItem,
} from "@material-ui/core";
import axios from "axios";
import ChipInput from "material-ui-chip-input";

import { SetPopupContext } from "../../App";

import apiList from "../../lib/apiList";
import Navbar from "../Navbar"
//icon 
import { FaCheck } from "react-icons/fa";
import { FaBullhorn} from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  body: {
    height: "inherit",
  },
  popupDialog: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // padding: "30px",
  },
}));

const CreateJobs = (props) => {
  const classes = useStyles();
  const setPopup = useContext(SetPopupContext);

  const [jobDetails, setJobDetails] = useState({
    title: "",
    maxApplicants: 100,
    deadline: new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000)
      .toISOString()
      .substr(0, 16),
    skillsets: [],
    jobType: "Architect",
    duration: 0,
    salary: 0,
  });

  const handleInput = (key, value) => {
    setJobDetails({
      ...jobDetails,
      [key]: value,
    });
  };

  const handleUpdate = () => {
    console.log(jobDetails);
    axios
      .post(apiList.jobs, jobDetails, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setPopup({
          open: true,
          severity: "success",
          message: response.data.message,
        });
        setJobDetails({
          title: "",
          maxApplicants: 100,
          deadline: new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000)
            .toISOString()
            .substr(0, 16),
          skillsets: [],
          jobType: "Architect",
          duration: 0,
          salary: 0,
        });
      })
      .catch((err) => {
      
        console.log(err.response);
      });
  };

  return (
    <>
<div class="w3-hide-large w3-hide-medium">
<div className="px-12 bg-white">
 
      <div className="">
      <div class="py-4">
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">ADD YOU JOB</p>
      <p class="l text-gray-500 lg:mx-auto">1.Tell Us About</p>
      
      </div>
      </div>

      <div class="field">
      <TextField
                    label="Title"
                    value={jobDetails.title}
                    onChange={(event) =>
                      handleInput("title", event.target.value)
                    }
                    variant="outlined"
                    fullWidth
                  />
      </div>
      <div class="field">
      <ChipInput
                    className={classes.inputBox}
                    label="Skills"
                    variant="outlined"
                    helperText="Press enter to add skills"
                    value={jobDetails.skillsets}
                    onAdd={(chip) =>
                      setJobDetails({
                        ...jobDetails,
                        skillsets: [...jobDetails.skillsets, chip],
                      })
                    }
                    onDelete={(chip, index) => {
                      let skillsets = jobDetails.skillsets;
                      skillsets.splice(index, 1);
                      setJobDetails({
                        ...jobDetails,
                        skillsets: skillsets,
                      });
                    }}
                    fullWidth
                  />
      </div>
      <div class="field">
      <TextField
                    select
                    label="Job Type"
                    variant="outlined"
                    value={jobDetails.jobType}
                    onChange={(event) => {
                      handleInput("jobType", event.target.value);
                    }}
                    fullWidth
                  >
                    <MenuItem value="Architect">Architect</MenuItem>
                    <MenuItem value="Contractor">Contractor</MenuItem>
                    <MenuItem value="Worker">Worker</MenuItem>
                    <MenuItem value="Mistri">Mistri</MenuItem>
                    <MenuItem value="Tool">Tool</MenuItem>
                    <MenuItem value="Plumber">Plumber</MenuItem>
                    <MenuItem value="Electrican">Electrican</MenuItem>

                  </TextField>
      </div>
      <div class="field">
      <TextField
                    select
                    label="Duration"
                    variant="outlined"
                    value={jobDetails.duration}
                    onChange={(event) => {
                      handleInput("duration", event.target.value);
                    }}
                    fullWidth
                  >
                    <MenuItem value={0}>Flexible</MenuItem>
                    <MenuItem value={1}>1 Month</MenuItem>
                    <MenuItem value={2}>2 Months</MenuItem>
                    <MenuItem value={3}>3 Months</MenuItem>
                    <MenuItem value={4}>4 Months</MenuItem>
                    <MenuItem value={5}>5 Months</MenuItem>
                    <MenuItem value={6}>6 Months</MenuItem>
                  </TextField>
      </div>
      <div class="field">
      <TextField
                    label="Salary"
                    type="number"
                    variant="outlined"
                    value={jobDetails.salary}
                    onChange={(event) => {
                      handleInput("salary", event.target.value);
                    }}
                    InputProps={{ inputProps: { min: 0 } }}
                    fullWidth
                  />
      </div>
      <div class="field">
      <TextField
                    label="Address"
                    value={jobDetails.address}
                    onChange={(event) =>
                      handleInput("address", event.target.value)
                    }
                    variant="outlined"
                    fullWidth
                  />
      </div>
      <div class="field">
      <TextField
                    label="Application Deadline"
                    type="datetime-local"
                    value={jobDetails.deadline}
                    onChange={(event) => {
                      handleInput("deadline", event.target.value);
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    fullWidth
                  />
      </div>
      <div class="field">
      <TextField
                    label="Maximum Number Of Applicants"
                    type="number"
                    variant="outlined"
                    value={jobDetails.maxApplicants}
                    onChange={(event) => {
                      handleInput("maxApplicants", event.target.value);
                    }}
                    InputProps={{ inputProps: { min: 1 } }}
                    fullWidth
                  />
      </div>
      <div class="field">
      <Button
                variant="contained"
                color="primary"
                style={{ padding: "10px 50px", marginTop: "30px" }}
                onClick={() => handleUpdate()}
              >
                Create Job
              </Button>
          
      </div>
    
  </div>
</div>


<div class="hidden md:block">
  <Navbar />
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={7}>
          <Paper className={classes.paper} elevation={2}>
            <Grid container>
              <Grid item sm>
            
                <Grid
        container
        item
        direction="column"
        alignItems="center"
        style={{ padding: "30px", minHeight: "93vh", width: "" }}
      >
    

        <Grid item container xs direction="column" justify="center">
        <div class="lg:text-center">
        <div class="max-w-6xl text-center">

        <div class="lg:text-center">
                 <p class="mt-2 py-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                   ADD YOU JOB
                 </p>
                
                 </div>
                 <img class="block mx-auto h-10 w-40 rounded-full sm:mx-0 sm:shrink-0" src="https://imgur.com/ux9PKcU.png" alt="Woman's Face"/>
              
                  
          <Grid item>
      
              <Grid
                container
                direction="column"
                alignItems="stretch"
                spacing={3}
              >
                <Grid item>
                  <TextField
                    label="Title"
                    value={jobDetails.title}
                    onChange={(event) =>
                      handleInput("title", event.target.value)
                    }
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <ChipInput
                    className={classes.inputBox}
                    label="Skills"
                    variant="outlined"
                    helperText="Press enter to add skills"
                    value={jobDetails.skillsets}
                    onAdd={(chip) =>
                      setJobDetails({
                        ...jobDetails,
                        skillsets: [...jobDetails.skillsets, chip],
                      })
                    }
                    onDelete={(chip, index) => {
                      let skillsets = jobDetails.skillsets;
                      skillsets.splice(index, 1);
                      setJobDetails({
                        ...jobDetails,
                        skillsets: skillsets,
                      });
                    }}
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    select
                    label="Job Type"
                    variant="outlined"
                    value={jobDetails.jobType}
                    onChange={(event) => {
                      handleInput("jobType", event.target.value);
                    }}
                    fullWidth
                  >
                    <MenuItem value="Architect">Architect</MenuItem>
                    <MenuItem value="Contractor">Contractor</MenuItem>
                    <MenuItem value="Worker">Worker</MenuItem>
                    <MenuItem value="Mistri">Mistri</MenuItem>
                    <MenuItem value="Tool">Tool</MenuItem>
                    <MenuItem value="Plumber">Plumber</MenuItem>
                    <MenuItem value="Electrican">Electrican</MenuItem>

                  </TextField>
                </Grid>
                <Grid item>
                  <TextField
                    select
                    label="Duration"
                    variant="outlined"
                    value={jobDetails.duration}
                    onChange={(event) => {
                      handleInput("duration", event.target.value);
                    }}
                    fullWidth
                  >
                    <MenuItem value={0}>Flexible</MenuItem>
                    <MenuItem value={1}>1 Month</MenuItem>
                    <MenuItem value={2}>2 Months</MenuItem>
                    <MenuItem value={3}>3 Months</MenuItem>
                    <MenuItem value={4}>4 Months</MenuItem>
                    <MenuItem value={5}>5 Months</MenuItem>
                    <MenuItem value={6}>6 Months</MenuItem>
                  </TextField>
                </Grid>
                <Grid item>
                  <TextField
                    label="Salary"
                    type="number"
                    variant="outlined"
                    value={jobDetails.salary}
                    onChange={(event) => {
                      handleInput("salary", event.target.value);
                    }}
                    InputProps={{ inputProps: { min: 0 } }}
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Address"
                    value={jobDetails.address}
                    onChange={(event) =>
                      handleInput("address", event.target.value)
                    }
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Application Deadline"
                    type="datetime-local"
                    value={jobDetails.deadline}
                    onChange={(event) => {
                      handleInput("deadline", event.target.value);
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Maximum Number Of Applicants"
                    type="number"
                    variant="outlined"
                    value={jobDetails.maxApplicants}
                    onChange={(event) => {
                      handleInput("maxApplicants", event.target.value);
                    }}
                    InputProps={{ inputProps: { min: 1 } }}
                    fullWidth
                  />
                </Grid>
                <Grid item>
            
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                style={{ padding: "10px 50px", marginTop: "30px" }}
                onClick={() => handleUpdate()}
              >
                Create Job
              </Button>
          
           
          </Grid>
       </div> 
       </div>      
        </Grid>

      </Grid>
                
      
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3} style={{ marginLeft: "40px" }}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "white" }}
            elevation={2}
          >
               <img class="h-50 py-8" src="https://imgur.com/w3ZG08i.png" alt="ChitChat Logo"/>

                 <div class="lg:text-center">
                 <p class="mt-2 py-2 text-xl leading-8 font-bold tracking-tight text-gray-900 sm:text-xl">
                    WHY ONLINE
                    <img class="block mx-auto h-5 w-40 rounded-full sm:mx-0 sm:shrink-0" src="https://imgur.com/ux9PKcU.png" alt="Woman's Face"/>
                 </p>
                 </div>
    <div class="rounded-xl shadow-lg">
                 <div class="px-2 py-2 max-w-sm mx-auto bg-white  flex ">
                <img class="block mx-auto h-12 rounded-full" src="https://imgur.com/ug6QNgu.png" alt="Woman's Face"/>
                <div class=" ">
              <div class="px-2">
               <p class=" text-gray-900 ">
               Growth in the online  market
               </p>
               <p class=" text-gray-600"> <small>india's retail industry is projected to grow at a slower pace of 9% over 2019-2030</small></p>
                </div> </div>
</div>




</div>


    <div class="rounded-xl shadow-lg">
                 <div class="px-2 py-2 max-w-sm mx-auto bg-white  flex ">
                <img class="block mx-auto h-12 rounded-full" src="https://imgur.com/4wflIfx.png" alt="Woman's Face"/>
                <div class=" ">
              <div class="px-2">
               <p class=" text-gray-900 ">
               Growth 
               </p>
               <p class=" text-gray-600"> <small>
               wide range of customer base, .
                </small></p>
                </div> </div>
</div>


</div>
          </Paper>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
    </div>
    
    </>
  );
};

export default CreateJobs;
