export default async function GithubProfile() {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const response = await fetch('http://api.github.com/users/EvertonFS7')
  const user = await response.json()
  return <pre>{JSON.stringify(user, null, 2)}</pre>
}
