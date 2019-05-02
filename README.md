# CMPE-266-AWS-Kinesis

## Table Of Content:
<!-- toc -->
- [Team members](#team-members)
- [Project Introduction](#project-introduction)
- [Sample Demo Screenshots](#sample-demo-screenshots)
- [Pre-requisites Set Up](#pre-requisites-set-up)
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
* Showing analysis of sources of tweets with its counts:

![alt text](https://github.com/tananrules/CMPE-266-AWS-Kinesis/blob/master/images/13.png?raw=true)

* Showing the sum of tweets on basis of language of the tweet:

![alt text](https://github.com/tananrules/CMPE-266-AWS-Kinesis/blob/master/images/14.png?raw=true)

* Counting the records on the basis of lat, long and language(PART-A):

![alt text](https://github.com/tananrules/CMPE-266-AWS-Kinesis/blob/master/images/15.png?raw=true)

* Counting the records on the basis of lat, long and language(PART-B):

![alt text](https://github.com/tananrules/CMPE-266-AWS-Kinesis/blob/master/images/16.png?raw=true)

## Pre-requisites Set Up
* **Setting up the Kinesis Delivery System**
  * Sign in to the AWS Management Console and open the Kinesis console at https://console.aws.amazon.com/kinesis.
  * Choose Data Firehose in the navigation pane.
  * Choose Create delivery stream.
  * Enter values for the following fields:
    * Delivery stream name : The name of your Kinesis Data Firehose delivery stream.
    * Source: Direct PUT or other sources: Choose this option to create a Kinesis Data Firehose delivery stream that producer       applications write to directly.
    * Kinesis stream: Choose this option to configure a Kinesis Data Firehose delivery stream that uses a Kinesis data stream as a data source. You can then use Kinesis Data Firehose to read data easily from an existing Kinesis data stream and load it into destinations. For more information about using Kinesis Data Streams as your data source, see Writing to Amazon Kinesis Data Firehose Using Kinesis Data Streams.

* **Setting up the S3 for storing the data from the Firehose Delivery System.**
  * Sign in to the preview version of the AWS Management Console.
  * Under Storage & Content Delivery, choose S3 to open the Amazon S3 console.       
  * From the Amazon S3 console dashboard, choose Create Bucket.
  * In Create a Bucket, type a bucket name in Bucket Name.
  * The bucket name you choose must be globally unique across all existing bucket names in Amazon S3 (that is, across all AWS customers). 
  * In Region, choose Oregon.
  * Choose Create.
  
**When Amazon S3 successfully creates your bucket, the console displays your empty bucket in the Buckets pane.**

* **Setting up the Amazon AMI EC2**  
  * Before you can launch and connect to an Amazon EC2 instance, you need to create a key pair, unless you already have one. You can create a key pair using the Amazon EC2 console and then you can launch your EC2 instance.
  * To create a key pair
  
Follow the steps in Setting Up with Amazon EC2 in the Amazon EC2 User Guide for Linux Instances to create a key pair. If you already have a key pair, you do not need to create a new one and you can use your existing key pair for this exercise.

  * To launch the EC2 instance
  * Open the Amazon EC2 console at https://console.aws.amazon.com/ec2/.
  * Choose Launch Instance.
     * In Step 1: Choose an Amazon Machine Image (AMI), find an Amazon Linux AMI at the top of the list and choose Select.
     * In Step 2: Choose an Instance Type, choose Next: Configure Instance Details.
     * In Step 3: Configure Instance Details, choose Network, and then choose the entry for your default VPC. It should look something like vpc-xxxxxxx (172.31.0.0/16) (default).
     * Choose Subnet, and then choose a subnet in any Availability Zone.
     * Choose Next: Add Storage.
     * Choose Next: Tag Instance.
     * Name your instance and choose Next: Configure Security Group.
     * Configure Security Group, review the contents of this page, ensure that Assign a security group is set to                                              
     * Choose Review and Launch.
     * Choose Launch.
     * Select the check box for the key pair that you created, and then choose Launch Instances.
     * Choose View Instances.
     * Choose the name of the instance you just created from the list, and then choose Actions.
     * From the menu that opens, choose Networking and then choose Change Security Groups.
     * Select the check box next to the security group with the description default VPC security group.
     * Choose Assign Security Groups.
* **Setting up the ssh connection and deploying the node application** 
     * Browse to the key folder.
     * Use chmod to make key secure
       ```ssh
       ssh -i /path/my-key-pair.pem ec2-user@2001:db8:1234:1a00:9691:9503:25ad:1761
       ```
     * Install nvm on the instance 
       ```
       curl https://raw.githubusercontent.com/creationix/nvm/v0.25.0/install.sh | bash
       ```
     * Install node
       ```
       nvm install v10.15.1(install recommended version)
       ```
     * Setup the node_modules by browsing to the project folder and writing the following command:
       ```
       npm install
       ```
     * Start the stream of data by following command:
       ```node
       node app.js
       ```
       
* **Setting Up the Amazon Athena** 
  * Open the Athena console.
  * To create a database named mydatabase, enter the following CREATE DATABASE statement, and then choose Run Query:
    ```sql
    CREATE DATABASE mydatabase
    ```
**Confirm that the catalog display refreshes and mydatabase appears in the DATABASE list in the Catalog dashboard on the left side.**
* **Building the Quicksight Dashboard**
  * Launch into QuickSight – https://us-east-1.quicksight.aws.amazon.com/sn/start.
  * Choose Manage data from the top right.
  * Choose New Data Set.
  * Create a new Athena Data Source.
  * Select the socialanalyticsblog database and the tweet_sentiments table.
  * Then Choose Edit/Preview Data.
  

