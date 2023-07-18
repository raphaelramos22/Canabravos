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
        <div class=" h-screen bg-orange-600 pt-3">
          <div>
            <img 
              src={repo.image}
              alt={repo.displayName}
              class= "w-80 h-80"
              />
            <h1 class="text-center text-xl">{repo.displayName}</h1>
            <p class="text-center text-xl">Time: {repo.soccerTeam}</p>
            <p class="text-center text-xl">Profisão: {repo.professions}</p>
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

