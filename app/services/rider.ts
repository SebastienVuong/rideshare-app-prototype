import {endpoints} from "server/endpoints/endpoints"

export const ridersService = {
  list: endpoints.rider.list,
  create: async (riderName: string) =>
    await endpoints.rider.create({name: riderName}),
}
