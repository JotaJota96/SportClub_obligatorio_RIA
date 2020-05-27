export class WeatherForecast{
    
	public date: string;
	public temperatureC: number;
	public temperatureF: number;
	public summary: string;
 
	constructor(date:string, temperatureC:number, temperatureF:number, summary:string){
		this.date=date;
		this.temperatureC=temperatureC;
		this.temperatureF=temperatureF;
		this.summary=summary;       
	}
}