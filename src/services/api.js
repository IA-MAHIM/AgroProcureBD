const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'

function getFriendlyErrorMessage(data) {
  let message = data?.message || data?.error || 'Something went wrong'

  if (typeof message === 'string') {
    try {
      const parsed = JSON.parse(message)
      message = parsed
    } catch {
      // keep original message
    }
  }

  if (Array.isArray(message)) {
    const firstError = message[0]

    if (
      firstError?.path?.includes('password') &&
      firstError?.code === 'too_small'
    ) {
      return 'Password must be at least 6 characters.'
    }

    if (firstError?.path?.includes('email')) {
      return 'Please enter a valid email address.'
    }

    if (firstError?.path?.includes('phone')) {
      return 'Phone number is required.'
    }

    if (firstError?.message) {
      return firstError.message
    }

    return 'Please check your form information.'
  }

  if (typeof message === 'string') {
    return message
  }

  return 'Something went wrong. Please try again.'
}

export async function apiRequest(path, options = {}) {
  const token = localStorage.getItem('agro-token')

  const headers = {
    ...(options.headers || {})
  }

  if (!(options.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json'
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(getFriendlyErrorMessage(data))
  }

  return data
}
