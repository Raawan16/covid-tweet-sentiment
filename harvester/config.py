'''
COMP90024
Team 11
Marco Marasco - 834882
Austen McClernon - 834063
Sam Mei - 1105817
Cameron Wong - 1117840
'''

import os
NODE_ID = os.getenv("NODE_ID")
COUCHDB_USER = os.getenv("COUCHDB_USER")
COUCHDB_PASSWORD = os.getenv("COUCHDB_PASSWORD")
TWITTER_CONSUMER_KEY = os.getenv("TWITTER_CONSUMER_KEY")
TWITTER_CONSUMER_SECRET = os.getenv("TWITTER_CONSUMER_SECRET")
TWITTER_ACCESS_TOKEN = os.getenv("TWITTER_ACCESS_TOKEN")
TWITTER_ACCESS_TOKEN_SECRET = os.getenv("TWITTER_ACCESS_TOKEN_SECRET")

VICTORIA = [144.33363404800002, -38.514 ,145.8784120140001,-37.3265]
VICTORIA_RADIUS = "-37.937051,144.920965,58km"

TWEET_DEC2018 = "1068826000966995969"
TWEET_MAY2019 = "1131389506488360966"
TWEET_DEC2019 = "1201072198338920448"

FIRST_SEARCH_LIMIT = 1000
SEARCH_LIMIT = 20
USER_THRESHOLD = 200