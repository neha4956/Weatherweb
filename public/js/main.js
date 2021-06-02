

const submitBtn=document.getElementById("submitBtn");
const cityName=document.getElementById("cityName");
const city_name=document.getElementById("city_name");
const temp_status=document.getElementById("temp_status");
const temp=document.getElementById("temp_span");
const dataHide=document.querySelector(".middle_layer")
const getInfo =async(event)=>{
     event.preventDefault();
         let cityVal=cityName.value;
         
          if(cityVal==="" ){
            city_name.innerText=`plzz write the name before you search`;
            dataHide.classList.add("data_hide");
          }
          else{
     
               try{
     
          let url= `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=4ff8976167145fbd9275e21131f671b9`
          const response =await fetch(url);
          const data = await response.json();
          const arrData=[data];

          city_name.innerHTML=`${arrData[0].name},${arrData[0].sys.country }`;
          temp.innerText=(arrData[0].main.temp - 273.15).toFixed(2);
          //temp_status.innerText=arrData[0].weather[0].main;

          const tempMood=arrData[0].weather[0].main;

          //condition to check weather condition for icons (font awesome)

          if(tempMood=="Sunny"){
               temp_status.innerHTML="<i class='fas fa-sun' style ='color:  #eccc68;'></i>";
          }
        else  if(tempMood=="Clouds"){
               temp_status.innerHTML="<i class='fas fa-cloud' style ='color:  #f1f2f6;'></i>";
          }
        else  if(tempMood=="Rainy"){
               temp_status.innerHTML="<i class='fas fa-cloud-rain' style ='color:  #a4b0be;'></i>";
          }
          else{
               temp_status.innerHTML="<i class='fas fa-sun' style ='color:  #eccc68;'></i>";
          }
          
               dataHide.classList.remove("data_hide");
          }

     catch(err){
          console.log(err);
          city_name.innerText=`plz enter the correct city name`; 
            dataHide.classList.add("data_hide");  }
     
     }
}



submitBtn.addEventListener("click", getInfo);
