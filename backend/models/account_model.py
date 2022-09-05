from typing import List, Union
from pydantic import BaseModel


class Account( BaseModel ):
    _id: int
    key: int
    name: str
    owner: str
    age: int


class Account_List( BaseModel ):
    accounts: List[ Account ]
