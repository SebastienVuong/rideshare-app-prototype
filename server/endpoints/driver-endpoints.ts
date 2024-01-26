import {database} from "server/database/database"
import {EDriverStatus, IDriver} from "server/database/drivers-table"

export const driverEndpoints = {
  create: async (driver: Omit<IDriver, "id" | "status">) => {
    const drivers = await database.drivers.list()
    const newDriver = {
      id: drivers.length.toString(),
      status: EDriverStatus.AVAILABLE,
      ...driver,
    }
    return await database.drivers.add(newDriver)
  },
  get: async ({id}: Pick<IDriver, "id">) => {
    const driver = await database.drivers.get(id)
    return driver
  },
  list: async () => {
    const drivers = await database.drivers.list()
    return drivers
  },
  update: async ({id, status}: Pick<IDriver, "id" | "status">) => {
    const driver = await database.drivers.get(id)
    const updatedDriver = {...driver, status}
    return updatedDriver
  },
}
