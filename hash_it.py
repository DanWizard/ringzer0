#I am using requests to send the get and post requests, BeautifulSoup to parse the HTML page, re to further parse Where BeautifulSoup cannot, and hashlib to hash my message with sha512.
import requests
from bs4 import BeautifulSoup
import re
import hashlib


#defining initial variables
login_url = 'https://ringzer0ctf.com/login'
challenge_page_url = 'https://ringzer0ctf.com/challenges/13/'
login_credentials = {
	'username': 'YOUR_USERNAME',
	'password': 'YOUR_PASSWORD'
}

#1. Establishing session, login to account, and get the challenge page HTML
mySession = requests.Session()
login = mySession.post(login_url, data=login_credentials)
challenge_page = mySession.get(challenge_page_url)

#2. Parse the challenge page HTML down to just the message
message = BeautifulSoup(challenge_page.text, 'html.parser').find(class_= 'message').get_text()
clean_message = re.split('\s', message)

#3. Hash the message
hashed_message = hashlib.sha512(clean_message[11].encode()).hexdigest()

#4. Send the hashed message back to the challenge page url
result = mySession.get(challenge_page_url+str(hashed_message))

#Print the HTML from the get request to locate the FLAG
print(result.text)

