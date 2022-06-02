import { Grid, Typography } from "@material-ui/core";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Welcome = (props) => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
   <>
   
   <div class=""> 
  <div class="max-w-7xl">
  <div class= "px">
   <div class="w3-hide-large w3-hide-medium">

   <div class="grid grid-cols-2 gap-4">

<div class="py-8"> 
  <div class=" mx-auto  px-2">
  <h2 class=" font-extrabold  text-black sm:text-5xl font-serif">
    <span class="py-">
  <span class=" font-serif">  Find  The 
  
   </span>
     <Slider {...settings}>
 
          <p class="text-red-900 font-serif">ARCHITECT</p>
          <p class="text-indigo-900 font-serif">CONTRACTOR</p>
          <p class="text-indigo-900 font-serif">WORKER</p>
          <p class="text-indigo-900 font-serif">MISTRI</p>
          <p class="text-indigo-900 font-serif">TOOL</p>
          <p class="text-indigo-900 font-serif">PLUMBER</p>
          <p class="text-indigo-900 font-serif">ELECTRICAN</p>
     </Slider>
       Nearest Your Location
       <img class=" h-10 w-20" src="https://imgur.com/ux9PKcU.png" alt="Woman's Face"/>
     </span>

  </h2>
</div>
</div>
<div>
<div class=" mx-auto ">
  <span class="shadow-3xl rounded-lg ">
  <Slider {...settings}>
     <div class="box">
     <img src="https://imgur.com/iUclZ1o.png" class="object-cover h-58 w-116 ..."/>
     </div>

     <div class="box">
     <img src="https://imgur.com/3S74saY.png" class="object-cover h-58 w-116 ..."/>
     </div>

     <div class="box">
     <img src="https://imgur.com/qXQ9qy7.png" class="object-cover h-58 w-116 ..."/>
     </div>

     <div class="box">
     <img src="https://imgur.com/Q2BpkdX.png" class="object-cover h-58 w-116 ..."/>
     </div>


     <div class="box">
     <img src="https://imgur.com/JJupn2R.png" class="object-cover h-58 w-116 ..."/>
     </div>

     <div class="box">
     <img src="https://imgur.com/Cm6Zi7f.png" class="object-cover h-58 w-116 ..."/>
     </div>
     <div class="box">
     <img src="https://imgur.com/oPUOzNy.png" class="object-cover h-58 w-116 ..."/>
     </div>

  </Slider>
  </span>
  </div>
  </div> 
  </div>
   </div>

  <div class="max-w-6xl w3-hide-small">
  <div class="grid grid-cols-2 gap-4">

  <div class=""> 
    <div class=" mx-auto py-16 px-4">
    <h2 class=" font-extrabold  text-black sm:text-5xl font-serif">
      <span class="">
    <span class=" font-serif">  Find  The 
    
     </span>
       <Slider {...settings}>
   
            <p class="text-red-900 font-serif">ARCHITECT</p>
            <p class="text-indigo-900 font-serif">CONTRACTOR</p>
            <p class="text-indigo-900 font-serif">WORKER</p>
            <p class="text-indigo-900 font-serif">MISTRI</p>
            <p class="text-indigo-900 font-serif">TOOL</p>
            <p class="text-indigo-900 font-serif">PLUMBER</p>
            <p class="text-indigo-900 font-serif">ELECTRICAN</p>
       </Slider>
         Nearest Your Location
         <img class=" h-10 w-20" src="https://imgur.com/ux9PKcU.png" alt="Woman's Face"/>
       </span>

    </h2>
  </div>
  </div>
  <div>
  <div class=" mx-auto py-8">
    <span class="shadow-3xl rounded-lg ">
    <Slider {...settings}>
       <div class="box">
       <img src="https://imgur.com/iUclZ1o.png" class="object-cover h-58 w-116 ..."/>
       </div>

       <div class="box">
       <img src="https://imgur.com/3S74saY.png" class="object-cover h-58 w-116 ..."/>
       </div>

       <div class="box">
       <img src="https://imgur.com/qXQ9qy7.png" class="object-cover h-58 w-116 ..."/>
       </div>

       <div class="box">
       <img src="https://imgur.com/Q2BpkdX.png" class="object-cover h-58 w-116 ..."/>
       </div>


       <div class="box">
       <img src="https://imgur.com/JJupn2R.png" class="object-cover h-58 w-116 ..."/>
       </div>

       <div class="box">
       <img src="https://imgur.com/Cm6Zi7f.png" class="object-cover h-58 w-116 ..."/>
       </div>
       <div class="box">
       <img src="https://imgur.com/oPUOzNy.png" class="object-cover h-58 w-116 ..."/>
       </div>

    </Slider>
    </span>
    </div>
    </div> 
    </div>
  </div>
  </div>
  </div>



  <div class="w3-hide-large w3-hide-medium">
<div class="lg:text-center py-2 px-4">
   
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Our Services</p>
     
    </div> 
  

<div class="w3-row">
  <div class="w3-col s4  w3-center">
  <div class="max-w-sm bg-white rounded-lg  ">
    <a href="#">
        <img class="rounded-t-lg" src="https://imgur.com/jd2wlSA.png" alt="" />
    </a>
    <div class="p-3">
        <a href="#">
            <h6 class="text-l font-bold tracking-tight text-gray-900 dark:text-white">Architect</h6>
        </a>
           <div class="mb-2">
         <small>Find The Architect</small>
          </div>
          <button type="button" class="text-dark bg-indigo-100 dark:bg-dark cursor-not-allowed font-medium rounded-lg text-sm px-4 py-2 " disabled><small>LogIn to Find</small></button>
    </div>
</div>
  </div>
  <div class="w3-col s4  w3-center">
  <div class="max-w-sm bg-white rounded-lg  ">
    <a href="#">
        <img class="rounded-t-lg" src="https://imgur.com/DqxH1RF.png" alt="" />
    </a>
    <div class="p-3">
        <a href="#">
            <h6 class="text-l font-bold tracking-tight text-gray-900 dark:text-white">Architect Farm</h6>
        </a>
        <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">
          <small>Find Architect Farm</small></p>
          <button type="button" class="text-dark bg-indigo-100 dark:bg-dark cursor-not-allowed font-medium rounded-lg text-sm px-4 py-2 " disabled><small>LogIn to Find</small></button>
   
    </div>
</div>  
  </div>


  <div class="w3-col s4  w3-center">
  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="https://imgur.com/MU36Mo8.png" alt="" />
    </a>
    <div class="p-3">
        <a href="#">
            <h6 class="text-l font-bold tracking-tight text-gray-900 dark:text-white">Interior Design</h6>
        </a>
        <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">
          <small>Find Interior Design </small></p>
          <button type="button" class="text-dark bg-indigo-100 dark:bg-dark cursor-not-allowed font-medium rounded-lg text-sm px-4 py-2 " disabled><small>LogIn to Find</small></button>
   
    </div>
</div>
  </div>

</div>


<div class="w3-row">
  <div class="w3-col s4  w3-center">
  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="https://imgur.com/HGq9YYF.png" alt="" />
    </a>
    <div class="p-3">
        <a href="#">
            <h6 class="text-l font-bold tracking-tight text-gray-900 dark:text-white">Exterior Design</h6>
        </a>
        <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">
          <small>Find Interior Design</small></p>
          <button type="button" class="text-dark bg-indigo-100 dark:bg-dark cursor-not-allowed font-medium rounded-lg text-sm px-4 py-2 " disabled><small>LogIn to Find</small></button>
   
    </div>
</div>
  </div>
  <div class="w3-col s4 w3-center">
  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="https://imgur.com/HugToAZ.png" alt="" />
    </a>
    <div class="p-3">
        <a href="#">
            <h6 class="text-l font-bold tracking-tight text-gray-900 dark:text-white">Contractor</h6>
        </a>
           <div class="mb-2">
         <small>Find The Top Contractor</small>
          </div>
          <button type="button" class="text-dark bg-indigo-100 dark:bg-dark cursor-not-allowed font-medium rounded-lg text-sm px-4 py-2 " disabled><small>LogIn to Find</small></button>
    </div>
</div>
  </div>
  <div class="w3-col s4 w3-center">
  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="https://imgur.com/9diADla.png" alt="" />
    </a>
    <div class="p-3">
        <a href="#">
            <h6 class="text-l font-bold tracking-tight text-gray-900 dark:text-white">Worker | Helper</h6>
        </a>
           <div class="mb-2">
         <small>Find The worker & helper</small>
          </div>
          <button type="button" class="text-dark bg-indigo-100 dark:bg-dark cursor-not-allowed font-medium rounded-lg text-sm px-4 py-2 " disabled><small>LogIn to Find</small></button>
    </div>
</div>
</div>
</div>


<footer class="w3-container w3-padding-64 w3-gray w3-center w3-opacity">  
  <div class="w3-xlarge w3-padding-32">
    <i class="fa fa-facebook-official w3-hover-opacity"></i>
    <i class="fa fa-instagram w3-hover-opacity"></i>
    <i class="fa fa-snapchat w3-hover-opacity"></i>
    <i class="fa fa-pinterest-p w3-hover-opacity"></i>
    <i class="fa fa-twitter w3-hover-opacity"></i>
    <i class="fa fa-linkedin w3-hover-opacity"></i>
 </div>
 <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
</footer>

</div>



  <div class="py-12 bg-white w3-hide-small">
 <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="lg:text-center">
      
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Our Services</p>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Choose from our wide range of  services</p>
    </div>    
  </div>
  <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
    <div class="columns">
  <div class="column">
  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="https://imgur.com/jd2wlSA.png" alt="" />
    </a>
    <div class="p-3">
        <a href="#">
            <h6 class="text-l font-bold tracking-tight text-gray-900 dark:text-white">Architect</h6>
        </a>
           <div class="mb-2">
         <small>Find The Top Architect</small>
          </div>
          <button type="button" class="text-dark bg-indigo-100 dark:bg-dark cursor-not-allowed font-medium rounded-lg text-sm px-4 py-2 " disabled><small>LogIn to Find</small></button>
    </div>
</div>
  </div>

  <div class="column">
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="https://imgur.com/DqxH1RF.png" alt="" />
    </a>
    <div class="p-3">
        <a href="#">
            <h6 class="text-l font-bold tracking-tight text-gray-900 dark:text-white">Architect Farm</h6>
        </a>
        <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">
          <small>Find Architect Farm</small></p>
          <button type="button" class="text-dark bg-indigo-100 dark:bg-dark cursor-not-allowed font-medium rounded-lg text-sm px-4 py-2 " disabled><small>LogIn to Find</small></button>
   
    </div>
</div>  
  </div>
  
  <div class="column">
  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="https://imgur.com/MU36Mo8.png" alt="" />
    </a>
    <div class="p-3">
        <a href="#">
            <h6 class="text-l font-bold tracking-tight text-gray-900 dark:text-white">Interior Design</h6>
        </a>
        <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">
          <small>Find Interior Design </small></p>
          <button type="button" class="text-dark bg-indigo-100 dark:bg-dark cursor-not-allowed font-medium rounded-lg text-sm px-4 py-2 " disabled><small>LogIn to Find</small></button>
   
    </div>
</div>
  </div>
  
  <div class="column">
  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="https://imgur.com/HGq9YYF.png" alt="" />
    </a>
    <div class="p-3">
        <a href="#">
            <h6 class="text-l font-bold tracking-tight text-gray-900 dark:text-white">Exterior Design</h6>
        </a>
        <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">
          <small>Find Interior Design</small></p>
          <button type="button" class="text-dark bg-indigo-100 dark:bg-dark cursor-not-allowed font-medium rounded-lg text-sm px-4 py-2 " disabled><small>LogIn to Find</small></button>
   
    </div>
</div>
  </div>
</div>
    </div>
</div>
<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
    <div class="columns">
  <div class="column">
  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="https://imgur.com/HugToAZ.png" alt="" />
    </a>
    <div class="p-3">
        <a href="#">
            <h6 class="text-l font-bold tracking-tight text-gray-900 dark:text-white">Contractor</h6>
        </a>
           <div class="mb-2">
         <small>Find The Top Contractor</small>
          </div>
          <button type="button" class="text-dark bg-indigo-100 dark:bg-dark cursor-not-allowed font-medium rounded-lg text-sm px-4 py-2 " disabled><small>LogIn to Find</small></button>
    </div>
</div>
  </div>
  <div class="column">
  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="https://imgur.com/9diADla.png" alt="" />
    </a>
    <div class="p-3">
        <a href="#">
            <h6 class="text-l font-bold tracking-tight text-gray-900 dark:text-white">Worker | Helper</h6>
        </a>
           <div class="mb-2">
         <small>Find The worker & helper</small>
          </div>
          <button type="button" class="text-dark bg-indigo-100 dark:bg-dark cursor-not-allowed font-medium rounded-lg text-sm px-4 py-2 " disabled><small>LogIn to Find</small></button>
    </div>
</div>
  </div>

  <div class="column">
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="https://imgur.com/4eSLA4N.png" alt="" />
    </a>
    <div class="p-3">
        <a href="#">
            <h6 class="text-l font-bold tracking-tight text-gray-900 dark:text-white">Plumber</h6>
        </a>
        <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">
          <small>Hire the best Plumbers</small></p>
          <button type="button" class="text-dark bg-indigo-100 dark:bg-dark cursor-not-allowed font-medium rounded-lg text-sm px-4 py-2 " disabled><small>LogIn to Find</small></button>
   
    </div>
</div>  
  </div>
  
  <div class="column">
  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="https://imgur.com/OodtDEB.png" alt="" />
    </a>
    <div class="p-3">
        <a href="#">
            <h6 class="text-l font-bold tracking-tight text-gray-900 dark:text-white">Tool</h6>
        </a>
        <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">
          <small>Tools List for Construction</small></p>
          <button type="button" class="text-dark bg-indigo-100 dark:bg-dark cursor-not-allowed font-medium rounded-lg text-sm px-4 py-2 " disabled><small>LogIn to Find</small></button>
   
    </div>
</div>
  </div>
  
  <div class="column">
  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="https://imgur.com/WKNRPrf.png" alt="" />
    </a>
    <div class="p-3">
        <a href="#">
            <h6 class="text-l font-bold tracking-tight text-gray-900 dark:text-white">Electrician</h6>
        </a>
        <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">
          <small>Best Electricians near you </small></p>
          <button type="button" class="text-dark bg-indigo-100 dark:bg-dark cursor-not-allowed font-medium rounded-lg text-sm px-4 py-2 " disabled><small>LogIn to Find</small></button>
   
    </div>
</div>
  </div>
</div>
    </div>
</div>


</div>



   </div>
   </>
  );
};


export default Welcome;
