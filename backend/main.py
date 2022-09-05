from fastapi import FastAPI
import db_connection
from models.account_model import Account, Account_List
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get( "/", response_model = Account_List )
async def main():
    db = db_connection.client[ "accounts" ]
    accounts = await db.find({})
   
    return accounts

@app.get( "/accounts/{account_id}", response_model = Account )
async def getAccount( account_id: int ):
    db = db_connection.client[ "accounts" ]
    account = await db.find_one_or_404({ "_id": account_id })
        
    return account