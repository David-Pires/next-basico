import {useRouter} from 'next/router'
export default function CodigoENome() {
  const router = useRouter()
  const codigo = router.query.codigo
  const nome = router.query.nome

  console.log(router)
  return (
    <div>
      <h1>Rotas / {codigo} / {nome}</h1>
      <LINK href="/rotas" passHref>
        <button>Voltar</button>
      </LINK>
    </div>
  )
}