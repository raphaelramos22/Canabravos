import Link from "next/link";

export default function Home() {
  return (
    <div class="h-screen grid content-evenly bg-orange-600" >
      <h1 class="text-center text-6xl" >Canabravos &#x1F37A;</h1>
      <button class= "bg-lime-500 mx-auto rounded-full border-solid border-green-700 text-3xl "><Link href="/canabravos" class="p-4 text-center" >play Brabo</Link></button>
    </div>
  )
}
