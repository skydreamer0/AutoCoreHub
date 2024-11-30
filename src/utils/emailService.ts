interface EmailData {
  type: 'contact' | 'order'
  data: Record<string, any>
}

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyRmMe4520mVo7o9t02mIDx1tLQlLLdKsnKl4efn7hYBHLnjw1joElWSosE4kUbOZVelA/exec' // Replace with your deployment URL

export async function sendEmail(emailData: EmailData): Promise<void> {
  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })

    if (!response.ok) {
      throw new Error('Failed to send email')
    }

    const result = await response.json()
    
    if (!result.success) {
      throw new Error(result.message || 'Failed to send email')
    }
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}