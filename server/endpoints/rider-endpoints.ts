import {database} from "server/database/database"
import {IRider} from "server/database/riders-table"

export const riderEndpoints = {
  create: async (rider: Omit<IRider, "id">) => {
    const riders = await database.riders.list()
    const newRider = {
      id: riders.length.toString(),
      ...rider,
    }
    return await database.riders.add(newRider)
  },
  get: async ({id}: Pick<IRider, "id">) => {
    const rider = await database.riders.get(id)
    return rider
  },
  list: async () => {
    const riders = await database.riders.list()
    return riders
  },
}
