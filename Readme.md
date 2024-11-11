<h1>AWS CLOUD RESUME</h1>
<p>This is the overview of how i created my aws resume</p>
<p>my webiste link <em>www.fahadkhan.link</em></p>

<h2>Architectural diagram of my project</h2>
<img src="My-resume-code\my-resume-website-documentation\architectural diagram\diagram.png">
<ul><h4>The services used in the above architectural diagram</h4>
    <li><strong>Route 53</strong>: This service is used to point my custom domain (<em>www.fahadkhan.link</em>) to my CloudFront distribution.</li>
    <li><strong>CloudFront</strong>: This AWS service is used to make my static website in the S3 bucket accessible worldwide with improved speed and HTTPS support.</li>
    <li><strong>AWS Certificate Manager</strong>: I used this AWS service to create an SSL/TLS certificate for use with my CloudFront distribution.</li>
    <li><strong>AWS API Gateway</strong>: I used this service to create a REST API for my backend, which connects Lambda to the frontend to provide the visitor count.</li>
    <li><strong>AWS Lambda</strong>: I used this service to create a function triggered by AWS API Gateway. This function fetches data, performs the necessary computations, and then sends the results to DynamoDB and API Gateway.</li>
    <li><strong>AWS DynamoDB</strong>: This NoSQL database stores the visitor count for the website.</li>
</ul>

<h2>Step-by-Step Procedure of How I Did It</h2>
<p><strong>Step 1</strong>: Created my website using HTML, CSS, and JavaScript.</p>

<p><strong>Step 2</strong>: Purchased a domain name (I actually got two by mistake, but only used one).</p>
<img src="My-resume-code/my-resume-website-documentation/route53/get-yourself-some-domain-name.jpg" alt="Getting a domain name">

<p><strong>Step 3</strong>: Created an S3 bucket and uploaded the website files to it.</p>
<img src="My-resume-code/my-resume-website-documentation/s3/create-bucket-1.jpg" alt="Creating S3 bucket">
<img src="My-resume-code/my-resume-website-documentation/s3/upload-static-website.jpg" alt="Uploading static website files">

<p><strong>Step 4</strong>: Enabled static website hosting for the S3 bucket.</p>
<img src="My-resume-code/my-resume-website-documentation/s3/enable-static-websit-hosting.jpg" alt="Enabling static website hosting">

<p><strong>Step 5</strong>: Configured a bucket policy and disabled <strong>BLOCK ALL PUBLIC ACCESS</strong> on the bucket to make the static website publicly accessible.</p>
<img src="My-resume-code/my-resume-website-documentation/s3/bucket-policy-for-static-website.jpg" alt="Bucket policy for static website">
<img src="My-resume-code/my-resume-website-documentation/s3/bucket-access-off-1.jpg" alt="Disabling bucket access restrictions">

<p><strong>Step 6</strong>: I created a table in DynamoDB to store visitor count data.</p>
<img src="My-resume-code/my-resume-website-documentation/dynamo DB/create-dynamo-db-table.jpg" alt="Creating a table in DynamoDB">

<p><strong>Step 7</strong>: Next, I created a Lambda function to retrieve data from the DynamoDB table, perform computations, and send the result back to AWS API Gateway, while storing the updated data in DynamoDB.</p>
<img src="My-resume-code/my-resume-website-documentation/lambda/create-lambda.jpg" alt="Creating a Lambda function">
<img src="My-resume-code\my-resume-website-documentation\lambda\write lambda function.jpg" alt="Writing code for the Lambda function">

<p><strong>Step 8</strong>: Then, I created a REST API in AWS API Gateway. This API serves as the entry point to the backend, triggering the Lambda function, which returns the visitor count to the website.</p>
<img src="My-resume-code/my-resume-website-documentation/api gateway/create-REST-api-which-triggers-lambda.jpg" alt="Creating REST API in AWS API Gateway">

<p><strong>Step 9</strong>: I obtained an SSL/TLS certificate from AWS Certificate Manager to enable HTTPS on CloudFront. S3 static website hosting doesn’t support HTTPS directly, so using CloudFront with ACM was necessary.</p>
<p><strong>Note:</strong> Make sure to create the certificate in the <em>us-east-1</em> region, as AWS CloudFront only supports certificates from that region.</p>
<img src="My-resume-code/my-resume-website-documentation/aws certificate manager/create-a-public-ssl-tsl-certificate-to-use-with-cloudfront-1.jpg" alt="Obtaining an SSL/TLS certificate">

<p><strong>Step 10</strong>: Lastly, I added two DNS records in Route 53 to point the custom domain to the CloudFront distribution.</p>
<img src="My-resume-code\my-resume-website-documentation\aws certificate manager\add-both-records.jpg">
<img src="My-resume-code\my-resume-website-documentation\route53\add-route-to-your-cloud-formation-for-root-domain.jpg">
<img src="My-resume-code\my-resume-website-documentation\route53\add-route-to-your-cloud-formation-for-subdomain.jpg">

<p><strong>Step 11</strong>: After that, I created a CloudFront distribution, added my S3 bucket as an origin, and attached the SSL/TLS certificate obtained from AWS Certificate Manager.</p>
<img src="My-resume-code\my-resume-website-documentation\cloud front\create-cloudfront-distribution-2-change-viewer-protocol-to-http-to-https-.jpg">
<img src="My-resume-code\my-resume-website-documentation\cloud front\create-cloudfront-distribution-3-choose-aws-certificate-manager-created-certificate.jpg">
<img src="My-resume-code\my-resume-website-documentation\cloud front\create-cloudfront-distribution-4-choose-index html as default root obj.jpg">


<p><strong>Step 12</strong>: In the end i added above created cloudfront distribution to route53 so that it can redirect traffic to the cloudfront distribution</p>
<img src="My-resume-code\my-resume-website-documentation\cloud front\create-cloudfront-distribution-1-choose-bucket-endpoint.jpg">


<h2>Some General Questions</h2>

<p><strong>1. </strong>What kind of architecture is this?</p>
<p><strong>Answer: </strong>This is a serverless architecture, meaning there are no servers to manage or maintain. It scales automatically based on demand and doesn't require human intervention for the infrastructure.</p>

<p><strong>2. </strong>What's the availability of this workload?</p>
<p><strong>Answer: </strong>This workload uses CloudFront, which makes it easily accessible and available worldwide with low latency. CloudFront ensures high availability and performance, reducing latency by serving content from edge locations near the user.</p>

<p><strong>3. </strong>Is it resilient?</p>
<p><strong>Answer: </strong>Yes, this architecture is resilient. CloudFront provides high availability, with a global distribution that ensures content is always available. The S3 standard storage class also offers 99.9% durability, while Lambda functions are designed to automatically scale to meet demand.</p>

<p><strong>4. </strong>How many users can it handle?</p>
<p><strong>Answer: </strong>The system can handle a large number of concurrent users, thanks to the scalability of serverless components. CloudFront can support millions of users accessing the website simultaneously. However, it does rely on a single Lambda function and one DynamoDB table, so the IOPS (Input/Output Operations Per Second) of Lambda and DynamoDB might impose limits under very heavy load:</p>
<ul>
  <li><strong>Lambda IOPS:</strong> AWS Lambda can handle thousands of requests per second (depending on the function's configuration and allocated resources). However, there are limits on concurrency (default limit is 1,000 concurrent executions per AWS account). You can request a higher limit if needed.</li>
  <li><strong>DynamoDB IOPS:</strong> DynamoDB can handle up to 40,000 read capacity units (RCUs) and 40,000 write capacity units (WCUs) in a provisioned capacity model. In on-demand mode, DynamoDB can scale automatically to accommodate unpredictable workloads. However, exceeding these limits could result in throttling or slower performance.</li>
</ul>

<p><strong>5. </strong>What are the costs associated with this architecture?</p>
<p><strong>Answer: </strong>The costs are primarily based on the usage of AWS services like CloudFront, Lambda, and DynamoDB. CloudFront pricing is based on data transfer and requests, Lambda is priced based on the number of executions and duration of the function, and DynamoDB costs are based on read/write capacity and storage. It's important to monitor usage to avoid unexpected costs.</p>

<p><strong>6. </strong>How secure is this architecture?</p>
<p><strong>Answer: </strong>This architecture is secure as it leverages AWS security features such as IAM roles for access control, SSL/TLS encryption for secure communication, and automated backups for DynamoDB. AWS also provides tools like CloudWatch and CloudTrail to monitor and audit activities for compliance.</p>

<p><strong>7. </strong>How does the architecture scale?</p>
<p><strong>Answer: </strong>Serverless components such as Lambda, CloudFront, and DynamoDB automatically scale based on demand. Lambda scales the number of executions to match incoming requests, CloudFront caches content at edge locations to handle large numbers of users, and DynamoDB automatically scales in on-demand mode to handle fluctuations in workload.</p>
