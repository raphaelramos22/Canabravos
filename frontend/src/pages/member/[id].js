import Link from 'next/link'

export async function getServerSideProps({params}) {
  const id = params.id
  const res = await fetch(`http://localhost:3008/member/${id}`)
  const repo = await res.json()
  return { props: { repo } }
}
 
export default function Profile({repo}) {
 
  return (
    <>
      {repo?
        <div class=" h-screen flex justify-around bg-orange-600 pt-3">
          <div class="h-80 border-8 grid content-evenly place-items-center border-blue-950">
            <img 
              src={repo.image}
              alt={repo.displayName}
              class= "w-52 h-52"
              />
            <h1 class="text-center text-xl">{repo.displayName}</h1>
            <p class="text-center text-xl">{repo.maritalStatus}</p>
            <Link href={repo.instagram}>
              <img class="text-center" src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"/>
            </Link>
          </div>
      </div>:
        <div class="text-center text-8xl">Erro</div>
      }
   </>
  )
}

