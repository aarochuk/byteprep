import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <header>
        <p>iBuddy</p>
        <div>
          <p>Sign up</p>
          <p>Login</p>
        </div>
      </header>
      <section>
        <p>Practice for your technical and behavioural interview using ai.</p>
        <Button>Get started with Google</Button>        
        <Button>Get started with Github</Button>        
      </section>
    </div>
  );
}
