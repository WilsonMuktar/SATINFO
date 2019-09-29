# SATINFO
Satellite System Visualization and Performance Evaluation</br>
DEMO：http://yenwie.tech/satinfo#

**Visualization**<br/>
`Visualize full constellation satellites and orbits by TLE ephemeris data propagation to predict real-time or custom-time position on 2D/3D Digital Earth and multi-view, Support ECI/ECEF Coordinate System,Support multi constellation system`
<br/><img width=500px src="http://yenwie.tech/pages/guidepage/images/1.png"/><br/>

**Performance**<br/>
`System performance visualization, including visibility, coverage, and DOP are calculated and visualize on 2D/3D Digital Earth`
<br/><img width=400px src="http://yenwie.tech/pages/guidepage/images/2.png"/>
<img width=400px src="http://yenwie.tech/pages/guidepage/images/3.png"/>
<img width=400px src="http://yenwie.tech/pages/guidepage/images/4.png"/>
<img width=400px src="http://yenwie.tech/pages/guidepage/images/5.png"/>
<img width=400px src="http://yenwie.tech/pages/guidepage/images/6.png"/><br/>

**Editor**<br/>
`System ephemeris data be parsed to a few keplerian parameters which can be edit directly by user for having different constellation system and performance result`
<br/><img width=400px src="http://yenwie.tech/pages/guidepage/images/7.png"/><br/>


**TLE(Two Line Elements) Ephemeris**<br/>
`TLE is a data format encoding a list of orbital elements of an Earth-orbiting object for a given point in time, the epoch. Using suitable prediction formula, the state (position and velocity) at any point in the past or future can be estimated to some accuracy. The TLE data representation is specific to the simplified perturbations models (SGP, SGP4, SDP4, SGP8 and SDP8), so any algorithm using a TLE as a data source must implement one of the SGP models to correctly compute the state at a time of interest. TLEs can describe the trajectories only of Earth-orbiting objects.`

An example TLE for the International Space Station:<br/>
|-----------|
|ISS (ZARYA)|
|1 25544U 98067A   08264.51782528 -.00002182  00000-0 -11606-4 0  2927|
|2 25544  51.6416 247.4627 0006703 130.5360 325.0288 15.72125391563537|

|Line 1|
|------|

|Field|Columns|Content|Example|
|-----|-------|-------|-------|
|1|01–01|Line number|1|
|2|03–07|Satellite catalog number|25544|
|3|08–08|Classification (U=Unclassified, C=Classified, S=Secret)|U|
|4|10–11|International Designator (last two digits of launch year)|98|
|5|12–14|International Designator (launch number of the year)|067|
|6|15–17|International Designator (piece of the launch)|A|
|7|19–20|Epoch Year (last two digits of year)|08|
|8|21–32|Epoch (day of the year and fractional portion of the day)|264.51782528|
|9|34–43|First Derivative of Mean Motion aka the Ballistic Coefficient|−.00002182|
|10|45–52|Second Derivative of Mean Motion (decimal point assumed)|00000-0|
|11|54–61|Drag Term aka Radiation Pressure Coefficient or BSTAR (decimal point assumed)|-11606-4|
|12|63–63|Ephemeris type (internal use only - always zero in distributed TLE data)|0|
|13|65–68|Element set number. Incremented when a new TLE is generated for this object.|292|
|14|69–69|Checksum (modulo 10)|7|


|Line 2|
|------|

|Field|Columns|Content|Example|
|-----|-------|-------|-------|
|1|01–01|Line number|2|
|2|03–07|Satellite Catalog number|25544|
|3|09–16|Inclination (degrees)|51.6416|
|4|18–25|Right Ascension of the Ascending Node (degrees)|247.4627|
|5|27–33|Eccentricity (decimal point assumed)|0006703|
|6|35–42|Argument of Perigee (degrees)|130.5360|
|7|44–51|Mean Anomaly (degrees)|325.0288|
|8|53–63|Mean Motion (revolutions per day)|15.72125391|
|9|64–68|Revolution number at epoch (revolutions)|56353|
|10|69–69|Checksum (modulo 10)|7|

**CESIUMJS**<br/>
`An open-source JavaScript library for world-class 3D globes and maps`
<img width=600px src="https://cesiumjs.org/images/CesiumViewer.jpg"/>

[Data source]
TLE link: https://www.celestrak.com/NORAD/elements/ <br/>
CesiumJS link: https://cesiumjs.org/
