

 	var request=new XMLHttpRequest()

	request.open('GET','https://restcountries.eu/rest/v2/all',true)
	
	request.send()
	request.onload=function(){
		try{
					var counteryData=JSON.parse(this.response)
				//console.log(counteryData)
				var lat,lon

				counteryData.forEach(element => {
					lat=element.latlng[0]
					lon=element.latlng[1]
					name=element.name
				
				getWheatherData(lat,lon,name)
	
				} )	
			}
			catch(err){
				console.log(err)
		}
}





	


function getWheatherData(lat,lon,name)
	{
		var request=new XMLHttpRequest()
		request.open('GET',`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=87e2694e2d34d8e0694b2146ee9d7f74`,true)
	console.log(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=87e2694e2d34d8e0694b2146ee9d7f74`)
	request.send()

	request.onload=function(){
			try{
				wheatherData=JSON.parse(this.response)
		console.log(name,wheatherData.main.temp)
			}
		catch(err){
			console.log(err)
		}
	}	
	

	}

		
	
			



	
