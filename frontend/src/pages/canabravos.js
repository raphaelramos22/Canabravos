import Link from 'next/link'
import Image from 'next/image'

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3008/member')
  const repo = await res.json()
  return { props: { repo } }
}

export default function Page({ repo }) {
  return  (
    <div class=" h-screen flex justify-around bg-orange-600 pt-3">
      {repo.map(({id,displayName, instagram, maritalStatus, image},i)=>(
      <Link key={i} href={`member/${id}`}>
        <div class="h-80 border-8 grid content-evenly place-items-center border-blue-950">
          <img 
            src={image}
            alt={displayName}
            class= "w-52 h-52"
            />
          <h1 class="text-center text-xl">{displayName}</h1>
        </div>
      </Link> 
      ))}
    </div>
  )
}
