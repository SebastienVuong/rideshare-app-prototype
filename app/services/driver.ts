import {endpoints} from "server/endpoints/endpoints"

export const driversService = {
  list: endpoints.driver.list,
  create: async (driverName: string) =>
    await endpoints.driver.create({name: driverName}),
}
