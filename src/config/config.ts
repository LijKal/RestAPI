export const config = {
  "dev": {
    "username": "udagramkaldev",
    "password": "udagramkaldev",
    "database": "udagramkaldev",
    "host": "udagramkaldev.cjsiqg5txxjj.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
  },
  "aws":{ 
    "aws_region": "us-east-1",
    "aws_profile": "DEPLOYED",
    "aws_media_bucket": "udagramkaldevbucket"
  },
  "jwt": {
    "secret": " "
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
