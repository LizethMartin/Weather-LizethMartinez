import { WeatherData } from "../interfaces/WeatherData"

export const DegreeSection = ({ data: {temperature, description, icon}} : 
{ 
    data : WeatherData;
}) => {
    return (
        <>
            <section className='text-5xl font-bold text-[#240b36]'>
                <span className='text-[#240b36]' id='temperature'>
                    {temperature}
                </span>
                °C
            </section>
            <section>
                <img id='iconImg' src={icon} />
            </section>
            <section className='font-bold uppercase text-xl text-[#240b36] mb-6' id='description'>
                {description}
            </section>
        </>
    )
}
