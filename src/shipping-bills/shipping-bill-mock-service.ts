import { getDemoData, saveBill } from './demo-store'
import { loadingPorts, ports } from './model'
import type { SavedBill, ShippingBillFormValues } from './model'

const MOCK_DELAY_MS = 250

function delay<T>(value: T, ms = MOCK_DELAY_MS): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms)
  })
}

/**
 * API-ready mock service for the Shipping Bill workflow.
 * Replace these methods with HTTP requests when a backend is available.
 * UI components should not depend on the underlying data source.
 */
export const shippingBillMockService = {
  async list(): Promise<SavedBill[]> {
    const { bills } = getDemoData()
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
    await delay(undefined)
    return saveBill(values, id)
  }
}