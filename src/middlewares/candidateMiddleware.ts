import { NextFunction, Request, Response } from "express";

export function createCandidateMiddleware(req: Request, res: Response, next: NextFunction) {
  const { body } = req

  if(body.name === undefined) {
    return res.status(400).send("Name is missing")
  }
  if(body.email === undefined) {
    return res.status(400).send("E-mail is missing")
  }
  if(body.password === undefined) {
    return res.status(400).send("Password is missing")
  }
  if(body.phoneNumber === undefined) {
    return res.status(400).send("Phone Number is missing")
  }
  if(body.resume === undefined) {
    return res.status(400).send("Resume is missing")
  }
  if(body.academicHistory === undefined) {
    return res.status(400).send("Academic History is missing")
  }

  console.log("All required fields are present!")

  next()
}

export function updateCandidateMiddleware(req: Request, res: Response, next: NextFunction) {
    const { params } = req

    if(params.id === undefined) {
        return res.status(400).send("ID is missing")
    }

    console.log("All required fields are present!")

    next()
} 

export function getByIdCandidateMiddleware(req: Request, res: Response, next: NextFunction) {
    const { params } = req

    if(params.id === undefined) {
        return res.status(400).send("ID is missing")
    }

    console.log("All required fields are present!")

    next()
}

export function deleteCandidateMiddleware(req: Request, res: Response, next: NextFunction) {
    const { params } = req

    if(params.id === undefined) {
        return res.status(400).send("ID is missing")
    }

    console.log("All required fields are present!")

    next()
}