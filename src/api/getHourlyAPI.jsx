const API_KEY="c146c0cddaf9e15ea212cf85ea580aab";

export const getHourlyWeatherAPI=async()=>{
    try{
        const url=`https://api.openweathermap.org/data/2.5/forecast?lat=41.0082&lon=28.9784&appid=${API_KEY}&units=metric&lang=tr`;
        const response=await fetch(url);
        const data=await response.json();

        const formattedData=data.list.map((item)=>{
            const date=new Date(item.dt*1000);
            const formattedTime=date.getHours() + ":00";
            return{
                time:formattedTime,
                temp:Math.round(item.main.temp),
                status:item.weather[0].main,
                description:item.weather[0].description,
            }
        })
        return formattedData;
        
    }catch(err){
        console.log("Saatlik hava durumunu çekerken bir hata oluştu!",err);
    }
}