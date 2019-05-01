# CMPE-266-AWS-Kinesis

## Table Of Content:
<!-- toc -->
- [Team members](#team-members)
- [Project Introduction](#project-introduction)
- [Sample Demo Screenshots](#sample-demo-screenshots)
- [Pre-requisites Set Up](#pre-requisites-set-up)
- [How to set up and kick-off project from developer sandbox?](#how-to-set-up-and-kick-off-project-from-developer-sandbox)
<!-- tocstop -->

<p align="center">
  <img src="https://user-images.githubusercontent.com/47429297/57045023-3e82f080-6c21-11e9-8a94-77f08a6ed3ac.jpg">
</p>

#### University Name: [San Jose State University](http://www.sjsu.edu/)  
#### Course: [Big Data Engineering and Analytics](http://info.sjsu.edu/web-dbgen/catalog/courses/CMPE266.html)  
#### Professor: [Sanjay Garje](https://www.linkedin.com/in/sanjaygarje/)  

## Team members:  
1. [Tarun Arora](https://www.linkedin.com/in/tarunarorasjsu/)  
2. [Rohit Sharma](https://www.linkedin.com/in/rohit-r-sharma/)  
3. [Parth Modi](https://www.linkedin.com/in/parth-y-modi/)  
4. [Mayank Padshala](https://www.linkedin.com/in/mayank-padshala/)  
5. [Vineet Tyagi](https://www.linkedin.com/in/vineet-tyagi-2a2237158/)  

## Project Introduction
In this project, we are analyzing the Twitter tweets stream for geolocation and devices used analysis. The geolocation will be 
displayed on a world map which will help to project the real-time live location of the tweets. Also, the real-time stream of 
data is used to find out the devices from which the tweets originate. It can be an android device, an IOS device, or simply 
web application. The tweets stream is produced using PubNub’s twitter stream service. This service is publishing 50 tweets per 
second on API which will be consumed using AWS Kinesis for the analysis and will be stored in S3 bucket. We will use AWS 
Kinesis stream or Kinesis firehose to process the stream of data and eventually store data in S3 bucket. While storing data in 
S3 bucket we are using a lambda function on data and store only required data. After storing data in S3 bucket we use IAM to
give access of S3 to Athena. Athena will have Data Catalog to understand stored data in S3. It will fetch data from S3 and send
it to Amazon Quick Sight. 

### Features List
* Analysis of tweets 
* Extraction of Geolocation from tweets
* Extraction of Device generating tweets
* Near real time update
* Storing only required data, decreasing storage load

## Sample Demo Screenshots

## Pre-requisites Set Up

## How to set up and kick-off project from developer sandbox?
