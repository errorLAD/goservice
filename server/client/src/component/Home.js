import React, { Component }  from 'react';
import { useState, useEffect, useContext } from "react";
import {
  Button,
  Chip,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  Paper,
  TextField,
  Typography,
  Modal,
  
  FormControlLabel,
  FormGroup,
  MenuItem,
  Checkbox,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import Pagination from "@material-ui/lab/Pagination";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import Navbar from  "./Navbar"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import  AutoPlay from "./MobileHome"




import { SetPopupContext } from "../App";


import apiList from "../lib/apiList";
import { userType } from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  body: {
    height: "inherit",
  },
  button: {
    width: "100%",
    height: "100%",
  },
  jobTileOuter: {
    padding: "30px",
    margin: "20px 0",
    boxSizing: "border-box",
    width: "100%",
  },
  popupDialog: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const JobTile = (props) => {
  const classes = useStyles();
  const { job } = props;
  const setPopup = useContext(SetPopupContext);

  const [open, setOpen] = useState(false);
  const [sop, setSop] = useState("");

  const handleClose = () => {
    setOpen(false);
    setSop("");
  };

  const handleApply = () => {
    console.log(job._id);
    console.log(sop);
    axios
      .post(
        `${apiList.jobs}/${job._id}/applications`,
        {
          sop: sop,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        setPopup({
          open: true,
          severity: "success",
          message: response.data.message,
        });
        handleClose();
      })
      .catch((err) => {
        console.log(err.response);
        setPopup({
          open: true,
          severity: "error",
          message: err.response.data.message,
        });
        handleClose();
      });
  };

  const deadline = new Date(job.deadline).toLocaleDateString();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <>
    <div class="w3-hide-small">
       <div class="max-w-7xl py-2">
       <div class="">
       <div class="max-w- mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl flex">
       <div class="md:shrink-0">
                 <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://imgur.com/Pa0pZpl.jpg" alt="Man looking at item at a store"/>
           </div>
           <div class="px-4"></div>
           
      <Grid container>
   
        <Grid container item xs={9} spacing={1} direction="column">
          <Grid item>
          <p class="mt-2 text-l leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl py-2">
          {job.title}
          </p>
       
          </Grid>
          <span class="px-2">
          <Grid item>
            <Rating value={job.rating !== -1 ? job.rating : null} readOnly />
          </Grid>
          <Grid item>
          <p class="ml-3 leading-6  text-gray-700">
            Role : {job.jobType}</p></Grid>
          <Grid item>
          <p class="ml-3 leading-6  text-gray-700">
            Salary : &#8377; {job.salary} per month</p></Grid>
          <Grid item>  <p class="ml-3 leading-6  text-gray-700">
            Duration :{" "}
            {job.duration !== 0 ? `${job.duration} month` : `Flexible`}
          </p>
          </Grid>
          <Grid item>
          <p class="ml-3 leading-6  text-gray-700">
            Posted By : {job.recruiter.name}</p></Grid>
          <Grid item>
          <p class="ml-3 leading-6  text-gray-700">
            Application Deadline : {deadline}</p></Grid>
            <Grid>
            <p class="ml-3 leading-6  text-gray-700">
            address: {job.address}</p></Grid>
       
          <Grid item>  <p class="ml-2 leading-6  text-gray-700 py-3">
            {job.skillsets.map((skill) => (
              <Chip label={skill} style={{ marginRight: "2px" }} />
            ))}</p>
          </Grid>
         
          </span>
        </Grid>

        <Grid item xs={3}>
          <div class="py-4"></div>
        <button type="button" class="py-24 text-white bg-indigo-800 hover:bg-indigo-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-16 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => {
              setOpen(true);
            }}
            disabled={userType() === "recruiter"}
          >
            Click to contact
          </button>
        </Grid>
      </Grid>
      <Modal open={open} onClose={handleClose} className={classes.popupDialog}>
        <Paper
          style={{
            padding: "20px",
            outline: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minWidth: "50%",
            alignItems: "center",
          }}
        >
          <TextField
            label="Write SOP (upto 250 words)"
            multiline
            rows={8}
            style={{ width: "100%", marginBottom: "30px" }}
            variant="outlined"
            value={sop}
            onChange={(event) => {
              if (
                event.target.value.split(" ").filter(function (n) {
                  return n != "";
                }).length <= 250
              ) {
                setSop(event.target.value);
              }
            }}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ padding: "10px 50px" }}
            onClick={() => handleApply()}
          >
            Submit
          </Button>
   
        </Paper>
      </Modal>
    
    </div>
    </div>
    </div>
    </div>



 <div class="w3-hide-large w3-hide-medium">
    <div class="box">
    <h2 class="mt-2 text-l leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl py-2">
          {job.title}
    </h2>
    <hr></hr>
    <Rating value={job.rating !== -1 ? job.rating : null} readOnly />
        
  <p class="ml-3 leading-6  text-gray-700">
            Role : {job.jobType}</p>

  <p class="ml-3 leading-6  text-gray-700">
            Salary : &#8377; {job.salary} per month</p>
  
  <p class="ml-3 leading-6  text-gray-700">
            Duration :{" "}
            {job.duration !== 0 ? `${job.duration} month` : `Flexible`}
          </p>
 <p class="ml-3 leading-6  text-gray-700">
            Posted By : {job.recruiter.name}</p>

    <p class="ml-3 leading-6  text-gray-700">
            Application Deadline : {deadline}</p>
  <p class="ml-3 leading-6  text-gray-700">
            address: {job.address}</p>
  <p class="ml-2 leading-6  text-gray-700 py-3">
            {job.skillsets.map((skill) => (
              <Chip label={skill} style={{ marginRight: "2px" }} />
            ))}</p>
    
    <button type="button" class="py-2 px-28 text-white bg-indigo-800 hover:bg-indigo-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-16 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => {
              setOpen(true);
            }}
            disabled={userType() === "recruiter"}
          >
            Click to contact
    </button>
    <Modal open={open} onClose={handleClose} className={classes.popupDialog}>
        <Paper
          style={{
            padding: "20px",
            outline: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minWidth: "50%",
            alignItems: "center",
          }}
        >
          <TextField
            label="Details pla Name, Phone no, other"
            multiline
            rows={8}
            style={{ width: "100%", marginBottom: "30px" }}
            variant="outlined"
            value={sop}
            onChange={(event) => {
              if (
                event.target.value.split(" ").filter(function (n) {
                  return n != "";
                }).length <= 250
              ) {
                setSop(event.target.value);
              }
            }}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ padding: "10px 50px" }}
            onClick={() => handleApply()}
          >
            Submit
          </Button>
   
        </Paper>
      </Modal>

    </div>
 </div>
    </>
  );
};

const FilterPopup = (props) => {
  const classes = useStyles();
  const { open, handleClose, searchOptions, setSearchOptions, getData } = props;
  return (
    <div class="">
    <Modal open={open} onClose={handleClose} className={classes.popupDialog}>
      <Paper
        style={{
          padding: "50px",
          outline: "none",
          minWidth: "50%",
        }}
      >
        <Grid container direction="column" alignItems="center" spacing={3}>
         




          <Grid container item alignItems="center">
            <Grid item xs={3}>
              Salary
            </Grid>
            <Grid item xs={9}>
              <Slider
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => {
                  return value * (100000 / 100);
                }}
                marks={[
                  { value: 0, label: "0" },
                  { value: 100, label: "100000" },
                ]}
                value={searchOptions.salary}
                onChange={(event, value) =>
                  setSearchOptions({
                    ...searchOptions,
                    salary: value,
                  })
                }
              />
            </Grid>
          </Grid>
          <Grid container item alignItems="center">
            <Grid item xs={3}>
              Duration
            </Grid>
            <Grid item xs={9}>
              <TextField
                select
                label="Duration"
                variant="outlined"
                fullWidth
                value={searchOptions.duration}
                onChange={(event) =>
                  setSearchOptions({
                    ...searchOptions,
                    duration: event.target.value,
                  })
                }
              >
                <MenuItem value="0">All</MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="6">6</MenuItem>
                <MenuItem value="7">7</MenuItem>
              </TextField>
            </Grid>
          </Grid>
          <Grid container item alignItems="center">
            <Grid item xs={3}>
              Sort
            </Grid>
            <Grid item container direction="row" xs={9}>
              <Grid
                item
                container
                xs={4}
                justify="space-around"
                alignItems="center"
                style={{ border: "1px solid #D1D1D1", borderRadius: "5px" }}
              >
                <Grid item>
                  <Checkbox
                    name="salary"
                    checked={searchOptions.sort.salary.status}
                    onChange={(event) =>
                      setSearchOptions({
                        ...searchOptions,
                        sort: {
                          ...searchOptions.sort,
                          salary: {
                            ...searchOptions.sort.salary,
                            status: event.target.checked,
                          },
                        },
                      })
                    }
                    id="salary"
                  />
                </Grid>
                <Grid item>
                  <label for="salary">
                    <Typography>Salary</Typography>
                  </label>
                </Grid>
                <Grid item>
                  <IconButton
                    disabled={!searchOptions.sort.salary.status}
                    onClick={() => {
                      setSearchOptions({
                        ...searchOptions,
                        sort: {
                          ...searchOptions.sort,
                          salary: {
                            ...searchOptions.sort.salary,
                            desc: !searchOptions.sort.salary.desc,
                          },
                        },
                      });
                    }}
                  >
                    {searchOptions.sort.salary.desc ? (
                      <ArrowDownwardIcon />
                    ) : (
                      <ArrowUpwardIcon />
                    )}
                  </IconButton>
                </Grid>
              </Grid>
              <Grid
                item
                container
                xs={4}
                justify="space-around"
                alignItems="center"
                style={{ border: "1px solid #D1D1D1", borderRadius: "5px" }}
              >
                <Grid item>
                  <Checkbox
                    name="duration"
                    checked={searchOptions.sort.duration.status}
                    onChange={(event) =>
                      setSearchOptions({
                        ...searchOptions,
                        sort: {
                          ...searchOptions.sort,
                          duration: {
                            ...searchOptions.sort.duration,
                            status: event.target.checked,
                          },
                        },
                      })
                    }
                    id="duration"
                  />
                </Grid>
                <Grid item>
                  <label for="duration">
                    <Typography>Duration</Typography>
                  </label>
                </Grid>
                <Grid item>
                  <IconButton
                    disabled={!searchOptions.sort.duration.status}
                    onClick={() => {
                      setSearchOptions({
                        ...searchOptions,
                        sort: {
                          ...searchOptions.sort,
                          duration: {
                            ...searchOptions.sort.duration,
                            desc: !searchOptions.sort.duration.desc,
                          },
                        },
                      });
                    }}
                  >
                    {searchOptions.sort.duration.desc ? (
                      <ArrowDownwardIcon />
                    ) : (
                      <ArrowUpwardIcon />
                    )}
                  </IconButton>
                </Grid>
              </Grid>
              <Grid
                item
                container
                xs={4}
                justify="space-around"
                alignItems="center"
                style={{ border: "1px solid #D1D1D1", borderRadius: "5px" }}
              >
                <Grid item>
                  <Checkbox
                    name="rating"
                    checked={searchOptions.sort.rating.status}
                    onChange={(event) =>
                      setSearchOptions({
                        ...searchOptions,
                        sort: {
                          ...searchOptions.sort,
                          rating: {
                            ...searchOptions.sort.rating,
                            status: event.target.checked,
                          },
                        },
                      })
                    }
                    id="rating"
                  />
                </Grid>
                <Grid item>
                  <label for="rating">
                    <Typography>Rating</Typography>
                  </label>
                </Grid>
                <Grid item>
                  <IconButton
                    disabled={!searchOptions.sort.rating.status}
                    onClick={() => {
                      setSearchOptions({
                        ...searchOptions,
                        sort: {
                          ...searchOptions.sort,
                          rating: {
                            ...searchOptions.sort.rating,
                            desc: !searchOptions.sort.rating.desc,
                          },
                        },
                      });
                    }}
                  >
                    {searchOptions.sort.rating.desc ? (
                      <ArrowDownwardIcon />
                    ) : (
                      <ArrowUpwardIcon />
                    )}
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              color="primary"
              style={{ padding: "10px 50px" }}
              onClick={() => getData()}
            >
              Apply
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
    </div>
  );
};

const Home = (props) => {
  const [jobs, setJobs] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchOptions, setSearchOptions] = useState({
    query: "",
    jobType: {
      fullTime: false,
      partTime: false,
      wfh: false,
    },
    salary: [0, 100],
    duration: "0",
    sort: {
      salary: {
        status: false,
        desc: false,
      },
      duration: {
        status: false,
        desc: false,
      },
      rating: {
        status: false,
        desc: false,
      },
    },
  });

  const setPopup = useContext(SetPopupContext);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let searchParams = [];
    if (searchOptions.query !== "") {
      searchParams = [...searchParams, `q=${searchOptions.query}`];
    }
    if (searchOptions.jobType.architect) {
      searchParams = [...searchParams, `jobType=Architect`];
    }
    if (searchOptions.jobType.contractor) {
      searchParams = [...searchParams, `jobType=Contractor`];
    }
    if (searchOptions.jobType.worker) {
      searchParams = [...searchParams, `jobType=Worker`];
    }

    if (searchOptions.jobType.mistri) {
      searchParams = [...searchParams, `jobType=Mistri`];
    }
    if (searchOptions.jobType.tool) {
      searchParams = [...searchParams, `jobType=Tool`];
    }
    if (searchOptions.jobType.plumber) {
      searchParams = [...searchParams, `jobType=Plumber`];
    }
    if (searchOptions.jobType.electrican) {
      searchParams = [...searchParams, `jobType=Electrican`];
    }

    if (searchOptions.salary[0] != 0) {
      searchParams = [
        ...searchParams,
        `salaryMin=${searchOptions.salary[0] * 1000}`,
      ];
    }
    if (searchOptions.salary[1] != 100) {
      searchParams = [
        ...searchParams,
        `salaryMax=${searchOptions.salary[1] * 1000}`,
      ];
    }
    if (searchOptions.duration != "0") {
      searchParams = [...searchParams, `duration=${searchOptions.duration}`];
    }

    let asc = [],
      desc = [];

    Object.keys(searchOptions.sort).forEach((obj) => {
      const item = searchOptions.sort[obj];
      if (item.status) {
        if (item.desc) {
          desc = [...desc, `desc=${obj}`];
        } else {
          asc = [...asc, `asc=${obj}`];
        }
      }
    });
    searchParams = [...searchParams, ...asc, ...desc];
    const queryString = searchParams.join("&");
    console.log(queryString);
    let address = apiList.jobs;
    if (queryString !== "") {
      address = `${address}?${queryString}`;
    }

    axios
      .get(address, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setJobs(
          response.data.filter((obj) => {
            const today = new Date();
            const deadline = new Date(obj.deadline);
            return deadline > today;
          })
        );
      })
      .catch((err) => {
        console.log(err.response.data);
        setPopup({
          open: true,
          severity: "error",
          message: "Error",
        });
      });
  };
 
  return (
    <>
  <div class="w3-hide-large w3-hide-medium">
    <div class="lg:text-center">
      <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase"></h2>
      <p class="mt-2  leading-8 bold tracking-tight text-gray-900 sm:text-l flex">A better way to find On Services, On Demand 
       </p>
    
      <img class="block mx-auto h-10 w-40 rounded-full sm:mx-0 sm:shrink-0" src="https://imgur.com/ux9PKcU.png" alt="Woman's Face"/>
              
    </div>
</div>
    <div class="">

      <Grid
        container
        item
        direction="column"
        alignItems="center"
        style={{ padding: "30px", minHeight: "93vh" }}
      >
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs>
          <div class="max-w-7xl mx-auto  py-2">
    <div class="lg:text-center w3-hide-small">
      <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase"></h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl flex">A better way to find On Services, On Demand 
       </p>
      

      <img class="block mx-auto h-10 w-40 rounded-full sm:mx-0 sm:shrink-0" src="https://imgur.com/ux9PKcU.png" alt="Woman's Face"/>
              
    </div>
   
  
   </div>
          </Grid>
        
          <div class="w3-hide-small">
          <Grid item xs>
            <TextField
              label="Search By Location"
              value={searchOptions.query}
              onChange={(event) =>
                setSearchOptions({
                  ...searchOptions,
                  query: event.target.value,
                })
              }
              onKeyPress={(ev) => {
                if (ev.key === "Enter") {
                  getData();
                }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton onClick={() => getData()}>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              style={{ width: "500px" }}
              variant="outlined"
            />
          </Grid>

          </div>




        <div class="w3-hide-large w3-hide-medium">
        <TextField
              label="Search By Location"
              value={searchOptions.query}
              onChange={(event) =>
                setSearchOptions({
                  ...searchOptions,
                  query: event.target.value,
                })
              }
              onKeyPress={(ev) => {
                if (ev.key === "Enter") {
                  getData();
                }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton onClick={() => getData()}>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              style={{ width: "300px" }}
              variant="outlined"
            />
        </div>

       
 
          <Grid item>
            <IconButton onClick={() => setFilterOpen(true)}>
              <FilterListIcon />
            </IconButton>
          </Grid>
        </Grid>
       <div class="w3-hide-small">
<span class="py-2"></span>
         <div class="lg:text-center ">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase  py-4">Filter By categories </h2>
         </div>
         <span class="py-4"></span>
            <Grid
              container
              item
              xs={12}
              justify="space-around"
              // alignItems="center"
            >
             
              <Grid item>


              <img class="h-8 w-auto sm:h-10 px-5" src="https://imgur.com/4fZdkbR.png"/>

                <FormControlLabel
                  control={
                    <Checkbox
                      name="architect"
                      checked={searchOptions.jobType.architect}
                      onChange={(event) => {
                        setSearchOptions({
                          ...searchOptions,
                          jobType: {
                            ...searchOptions.jobType,
                            [event.target.name]: event.target.checked,
                          },
                        });
                      }}
                    />
                  }
                  label="Architect"
                />
              </Grid>
              <Grid item>
              <img class="h-8 w-auto sm:h-10 px-5" src="https://imgur.com/zezzlRp.png"/>

                <FormControlLabel
                  control={
                    <Checkbox
                      name="contractor"
                      checked={searchOptions.jobType.contractor}
                      onChange={(event) => {
                        setSearchOptions({
                          ...searchOptions,
                          jobType: {
                            ...searchOptions.jobType,
                            [event.target.name]: event.target.checked,
                          },
                        });
                      }}
                    />
                  }
                  label="Contractor"
                />
              </Grid>
              <Grid item>
              <img class="h-8 w-auto sm:h-10 px-5" src="https://imgur.com/KsRkovX.png"/>

                   <FormControlLabel
                  control={
                    <Checkbox
                      name="worker"
                      checked={searchOptions.jobType.worker}
                      onChange={(event) => {
                        setSearchOptions({
                          ...searchOptions,
                          jobType: {
                            ...searchOptions.jobType,
                            [event.target.name]: event.target.checked,
                          },
                        });
                      }}
                    />
                  }
                  label="worker"
                />
              </Grid>
              <Grid item>
              <img class="h-8 w-auto sm:h-10 px-5" src="https://imgur.com/klb7vI6.png"/>

                <FormControlLabel
                  control={
                    <Checkbox
                      name="mistri"
                      checked={searchOptions.jobType.mistri}
                      onChange={(event) => {
                        setSearchOptions({
                          ...searchOptions,
                          jobType: {
                            ...searchOptions.jobType,
                            [event.target.name]: event.target.checked,
                          },
                        });
                      }}
                    />
                  }
                  label="Mistri"
                />
              </Grid>
              <Grid item>
              <img class="h-8 w-auto sm:h-10 px-5" src="https://imgur.com/GiIkYtC.png"/>

                <FormControlLabel
                  control={
                    <Checkbox
                      name="tool"
                      checked={searchOptions.jobType.tool}
                      onChange={(event) => {
                        setSearchOptions({
                          ...searchOptions,
                          jobType: {
                            ...searchOptions.jobType,
                            [event.target.name]: event.target.checked,
                          },
                        });
                      }}
                    />
                  }
                  label="Tool"
                />
              </Grid>
              <Grid item>
              <img class="h-8 w-auto sm:h-10 px-5" src="https://imgur.com/uyHLy3k.png"/>

                <FormControlLabel
                  control={
                    <Checkbox
                      name="plumber"
                      checked={searchOptions.jobType.plumber}
                      onChange={(event) => {
                        setSearchOptions({
                          ...searchOptions,
                          jobType: {
                            ...searchOptions.jobType,
                            [event.target.name]: event.target.checked,
                          },
                        });
                      }}
                    />
                  }
                  label="Plumber"
                />
              </Grid>
              <Grid item>
              <img class="h-8 w-auto sm:h-10 px-5" src="https://imgur.com/hVbpnFc.png"/>

                <FormControlLabel
                  control={
                    <Checkbox
                      name="electrican"
                      checked={searchOptions.jobType.electrican}
                      onChange={(event) => {
                        setSearchOptions({
                          ...searchOptions,
                          jobType: {
                            ...searchOptions.jobType,
                            [event.target.name]: event.target.checked,
                          },
                        });
                      }}
                    />
                  }
                  label="Electrican"
                />
              </Grid>
            </Grid>
        
         
            <Button
              variant="contained"
              color="primary"
              style={{ padding: "10px 50px" }}
              onClick={() => getData()}
              
            >
              Apply
            </Button>
            </div>



      <div class="w3-hide-large w3-hide-medium">

         <div class="lg:text-center ">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase  py-4">Filter By categories </h2>
         </div>
            <Grid
              container
              item
              xs={12}
              justify="space-around"
              // alignItems="center"
            >
             
              <Grid item>


              <img class="h-8 w-auto sm:h-10 px-5" src="https://imgur.com/4fZdkbR.png"/>

                <FormControlLabel
                  control={
                    <Checkbox
                      name="architect"
                      checked={searchOptions.jobType.architect}
                      onChange={(event) => {
                        setSearchOptions({
                          ...searchOptions,
                          jobType: {
                            ...searchOptions.jobType,
                            [event.target.name]: event.target.checked,
                          },
                        });
                      }}
                    />
                  }
                  label="Architect"
                />
              </Grid>
              <Grid item>
              <img class="h-8 w-auto sm:h-10 px-5" src="https://imgur.com/zezzlRp.png"/>

                <FormControlLabel
                  control={
                    <Checkbox
                      name="contractor"
                      checked={searchOptions.jobType.contractor}
                      onChange={(event) => {
                        setSearchOptions({
                          ...searchOptions,
                          jobType: {
                            ...searchOptions.jobType,
                            [event.target.name]: event.target.checked,
                          },
                        });
                      }}
                    />
                  }
                  label="Contractor"
                />
              </Grid>
              <Grid item>
              <img class="h-8 w-auto sm:h-10 px-5" src="https://imgur.com/KsRkovX.png"/>

                   <FormControlLabel
                  control={
                    <Checkbox
                      name="worker"
                      checked={searchOptions.jobType.worker}
                      onChange={(event) => {
                        setSearchOptions({
                          ...searchOptions,
                          jobType: {
                            ...searchOptions.jobType,
                            [event.target.name]: event.target.checked,
                          },
                        });
                      }}
                    />
                  }
                  label="worker"
                />
              </Grid>
              <Grid item>
              <img class="h-8 w-auto sm:h-10 px-5" src="https://imgur.com/klb7vI6.png"/>

                <FormControlLabel
                  control={
                    <Checkbox
                      name="mistri"
                      checked={searchOptions.jobType.mistri}
                      onChange={(event) => {
                        setSearchOptions({
                          ...searchOptions,
                          jobType: {
                            ...searchOptions.jobType,
                            [event.target.name]: event.target.checked,
                          },
                        });
                      }}
                    />
                  }
                  label="Mistri"
                />
              </Grid>
              <Grid item>
              <img class="h-8 w-auto sm:h-10 px-5" src="https://imgur.com/GiIkYtC.png"/>

                <FormControlLabel
                  control={
                    <Checkbox
                      name="tool"
                      checked={searchOptions.jobType.tool}
                      onChange={(event) => {
                        setSearchOptions({
                          ...searchOptions,
                          jobType: {
                            ...searchOptions.jobType,
                            [event.target.name]: event.target.checked,
                          },
                        });
                      }}
                    />
                  }
                  label="Tool"
                />
              </Grid>
              <Grid item>
              <img class="h-8 w-auto sm:h-10 px-5" src="https://imgur.com/uyHLy3k.png"/>

                <FormControlLabel
                  control={
                    <Checkbox
                      name="plumber"
                      checked={searchOptions.jobType.plumber}
                      onChange={(event) => {
                        setSearchOptions({
                          ...searchOptions,
                          jobType: {
                            ...searchOptions.jobType,
                            [event.target.name]: event.target.checked,
                          },
                        });
                      }}
                    />
                  }
                  label="Plumber"
                />
              </Grid>

            </Grid>
        
          
            <Button
              variant="contained"
              color="primary"
              style={{ padding: "10px 50px" }}
              onClick={() => getData()}
              
            >
              Apply
            </Button>
      </div> 
      
        <Grid
          container
          item
          xs
          direction="column"
          alignItems="stretch"
          justify="center"
        >
          {jobs.length > 0 ? (
            jobs.map((job) => {
              return <JobTile job={job} />;
            })
          ) : (
            <Typography variant="h5" style={{ textAlign: "center" }}>
              No jobs found
            </Typography>
          )}
        </Grid>
        {/* <Grid item>
          <Pagination count={10} color="primary" />
        </Grid> */}
      </Grid>
      <FilterPopup
        open={filterOpen}
        searchOptions={searchOptions}
        setSearchOptions={setSearchOptions}
        handleClose={() => setFilterOpen(false)}
        getData={() => {
          getData();
          setFilterOpen(false);
        }}
      />
      </div>

    </>
  );
};

export default Home;
