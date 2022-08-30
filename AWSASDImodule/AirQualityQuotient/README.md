# AirQualityQuotient (AQQ) Tool

# Problem Statement

Throughout the world people are migrating from rural areas to cities in search of better livelihood. As cities are growing in size they are faced with new challenges. A growing city results in usage of more vehicles and  resources leading to more carbon emission which ultimately results in degradation of air quality. Major cities in India and China facing air quality issue have made global headlines in the recent years with New Delhi being its poster child. Every winter the issue gets aggravated and the city becomes unliveable. But citizens in other cities might not relaize the extent of poor air quality.

# How are we helping

**AirQualityQuotient**(AQQ) will provide meaningful insights and tools leveraging "ASDI OpenAQ" dataset on how air quality of the city has changed over the years. This will empower activists and citizens with necessary information to question policy makers and bring about a change for the better and increase livability and sustainabilty of the city.

# MVP for hackathon and Future

## MVP

Hackathons come with time constraints, given the limited time below are the features of our solution 
* Visualization provides ability to view different air quality parameters like CO, O3, PPM, NO2, PM10, PM25, SO2 across the globe for major cities for time period selected. Visualization can be integrated into thrid party applications.
* Visualization provides ability to select a particular city and view different air quality parameters for the time period selected. Visualization can be integrated into thrid party applications
* ML algorithm to forecast PPM count for NewDelhi with range slider showing visualization of historical data as jupyter notebook.

## Future
    
* AirQualityQuotient will leverage machine learning and forecast different air quality paramteres for multiple cities.
* Expose forecasted air quality paramters as a API service for thrid party developers to integrate within their application.

# How did we do it

Our solution leverages the power of cloud and is built on top of AWS managed services. Architecture covers current and future state of our application implementation.

![alt text](https://github.com/sssDeveloper/AirQualityQuotient/blob/master/AQQ.jpeg "Architecture Diagram")

# Visualization of Solution

We are adding images of the dashboard as AWS only allows members of the same account to view the dashboard and work with it.

## Visualization of air quality parameters for selected time range

![alt text](https://github.com/sssDeveloper/AirQualityQuotient/blob/master/DataViz.png "Data Visualization of multiple cities")

## Machine Learning Notebook

openaq_analysis.ipynb provides in depth exploratory analysis of openaq data and also creates a forecast prediction model using AWS forecast as an API to predict the next 14 days air quality index for the city of New Delhi

### New Delhi PM25 time series visualization

![alt text](https://github.com/sssDeveloper/AirQualityQuotient/blob/master/PM25.png "New Delhi PM25 time series visualization")

### Most polluted countries
![alt text](https://github.com/sssDeveloper/AirQualityQuotient/blob/master/Top10.png "Top 10 most poluted countries")

