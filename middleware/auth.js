export default function ({ store, redirect, route }) {
  // Si no hay sesión activa, redirige
  if (!store.state.loggedIn || !store.state.user.first_name) {
    // Puedes cambiar '/' por '/login' si tuvieras una ruta login
    return redirect(`/?redirect=${route.fullPath}`)
  }
}
