import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <header>
        <p>iBuddy</p>
        <div>
          <Button>Sign up</Button>
        </div>
      </header>
      <section>
        <p>your personal ai interview coach</p>
        <p>Become confident for your next technical or behavioural interview using ai.</p>
        <p>Practice with interview questions tailored to the job description and the company you are interviewing for.</p>
        <Button>Get started with Google</Button>        
        <Button>Get started with Github</Button>        
      </section>
      <footer>
        <p>Andrew Arochukwu &copy; 2025</p>
        <p>Github</p>
      </footer>
    </div>
  );
}
