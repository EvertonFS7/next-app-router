export default async function Catalog() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return <div>Catalog</div>
}
