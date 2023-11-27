import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function About() {

    return(<>
          <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
            <h1>About</h1>
            <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa assumenda odio quis consectetur, aliquid quidem modi doloremque sint? Facilis fugiat eveniet, quasi veniam quo tenetur neque explicabo doloribus deleniti! Libero!</p>
            </div>

            <Link href="/">
                Return to home
            </Link>
        </main>
    </>)
}