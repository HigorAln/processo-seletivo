import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import faker from 'faker'

const users = [
  {id:1, name: "Higor Example",avatar_url: "https://avatars.githubusercontent.com/u/86208458?v=4", email: "higorexample@gmail.com", data:"30/07/2021", hora: "15:49", number: 155542, method: "Cartão de Crédito - Visa"},
  {id:2, name: "Higor Example",avatar_url: "https://avatars.githubusercontent.com/u/86208458?v=4", email: "higorexample@gmail.com", data:"30/07/2021", hora: "15:49", number: 155542, method: "Cartão de Crédito - Visa"},
  {id:3, name: "Higor Example",avatar_url: "https://avatars.githubusercontent.com/u/86208458?v=4", email: "higorexample@gmail.com", data:"30/07/2021", hora: "15:49", number: 155542, method: "Cartão de Crédito - Visa"},
  {id:4, name: "Higor Example",avatar_url: "https://avatars.githubusercontent.com/u/86208458?v=4", email: "higorexample@gmail.com", data:"30/07/2021", hora: "15:49", number: 155542, method: "Cartão de Crédito - Visa"},
  {id:5, name: "Higor Example",avatar_url: "https://avatars.githubusercontent.com/u/86208458?v=4", email: "higorexample@gmail.com", data:"30/07/2021", hora: "15:49", number: 155542, method: "Cartão de Crédito - Visa"},
  {id:6, name: "Higor Example",avatar_url: "https://avatars.githubusercontent.com/u/86208458?v=4", email: "higorexample@gmail.com", data:"30/07/2021", hora: "15:49", number: 155542, method: "Cartão de Crédito - Visa"}
]

const handler: NextApiHandler = (request: NextApiRequest, response: NextApiResponse) => {
  if(request.method !== "GET"){
    response.status(400).json({err: "method not exist"})
  }

  return response.json(users)
}

export default handler;