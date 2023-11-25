export default async function LongWaitProfile() {
  await new Promise((resolve) => setTimeout(resolve, 5000))

  return <pre>Conteúdo carregado!</pre>
}
