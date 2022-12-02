import { db } from '@/services/cloudbase'
import { Stock } from '@/entities/stock'

const _ = db.command
export default class StockService {
  static getStocks() {
    return db
      .collection('stock')
      .where({ remnant_inventory: _.gt(0) })
      .orderBy('remnant_inventory', 'desc')
      .get() as Promise<ListResponse<Stock>>
  }
}
