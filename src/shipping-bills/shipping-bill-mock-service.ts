
import { getDemoData, saveBill } from './demo-store'
import { SavedBill, ShippingBillFormValues, loadingPorts, ports } from './model'

const MOCK_DELAY_MS = 250

function delay<T>(value: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), MOCK_DELAY_MS)
  })
}

export const shippingBillMockService = {
  async list(): Promise<SavedBill[]> {
    const bills = getDemoData().bills
    return delay([...bills])
  },

  async getById(id: string | number): Promise<SavedBill | undefined> {
    const bill = getDemoData().bills.find(
      (item) => String(item.id) === String(id)
    )

    return delay(bill)
  },

  async getFormOptions() {
    const { exporters, businesses } = getDemoData()

    return delay({
      exporters: [...exporters],
      businesses: [...businesses],
      loadingPorts: [...loadingPorts],
      destinationPorts: [...ports]
    })
  },

  async upsert(
    values: ShippingBillFormValues,
    id?: number
  ): Promise<SavedBill> {
    const savedBill = saveBill(values, id)
    return delay(savedBill)
  }
}
