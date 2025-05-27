export default function ({ redirect }) {
  if (process.client) {
    const user = localStorage.getItem('user')
    const token = localStorage.getItem('token')

    if (!user || !token) {
      return redirect('/login')
    }
  }
}
