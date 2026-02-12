export const WHATSAPP_NUMBER = '919946666255'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export function generateWhatsAppMessage(productName: string, details?: string): string {
  const baseMessage = `Hi, I'm interested in ${productName}`
  return details ? `${baseMessage}. ${details}` : baseMessage
}

export function openWhatsApp(message?: string): void {
  const url = message ? `${WHATSAPP_URL}?text=${encodeURIComponent(message)}` : WHATSAPP_URL
  if (typeof window !== 'undefined') {
    window.open(url, '_blank')
  }
}

export interface OrderDetails {
  productName: string
  quantity: number
  name?: string
  designation?: string
  specialInstructions?: string
}

export function generateOrderMessage(order: OrderDetails): string {
  const lines = [
    `Product: ${order.productName}`,
    `Quantity: ${order.quantity}`,
  ]

  if (order.name) lines.push(`Name: ${order.name}`)
  if (order.designation) lines.push(`Designation: ${order.designation}`)
  if (order.specialInstructions) lines.push(`Special Instructions: ${order.specialInstructions}`)

  lines.push('\nPlease provide a quote for the above.')

  return lines.join('\n')
}
