import Link from 'next/link'
import Image from 'next/image'
import React from 'react'


export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3008/member')
  const repo = await res.json()
  return { props: { repo } }
}



export default function Page({ repo }) {
  const [rest, setRest] = React.useState("");
  const [resut, setResut] = React.useState("");
  function filterName(repo) {
    return repo.displayName === rest
  }
  return  (
    <div class=" h-screen flex justify-around bg-orange-600 pt-3">
     <label>
        <input value={rest} onChange={(e) => setRest(e.target.value) } type="text" id="User" name="Name" />
        <button onClick={()=>setResut(repo.find(filterName), setRest(""))} >Buscar</button>
      </label>
      {resut?
      <Link key={resut.id} href={`member/${resut.id}`}>
      <div class="h-80 border-8 grid content-evenly place-items-center border-blue-950">
        <img 
          src={resut.image}
          alt={resut.displayName}
          class= "w-52 h-52"
          />
        <h1 class="text-center text-xl">{resut.displayName}</h1>
      </div>
    </Link> 
      :repo.map(({id,displayName, image},i)=>(
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
