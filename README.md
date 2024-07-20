# Load Balancer Example

This project demonstrates how to set up and use a load balancer with an EC2 instance.

## Prerequisites

- An AWS account
- SSH access to your EC2 instance
- The `load-balancer-example.pem` key file

## Connecting to Your EC2 Instance

To connect to your EC2 instance, use the following SSH command:

```sh
ssh -i load-balancer-example.pem ec2-user@3.84.1.104
```

docker build -t load-balancer-example .

docker run -p 3000:3000 load-balancer-example