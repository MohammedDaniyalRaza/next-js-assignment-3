import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
   <div>
    <div className="container1home">
      <h1 className="h1Home">Hello Guy's Welcome To My Website / Project Assignment.</h1>
      <h2 className="h2home1">I Built It By Using Next JS!</h2>
      <h2 className="h2Home">Wana Know Next Js?</h2>
      <p className="pHome">What is <strong>Next.js</strong>? Next.js is a <strong>React framework</strong> that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.What are <strong>Next.js components</strong> ?
      Next. js components are integral to building modular and efficient applications, offering tools like Image, Link, Script, and Font to handle media, navigation, scripts, and typography effectively. These components enhance performance and streamline development in Next.</p>
      <h2 className="h2Home">More About Next Js:</h2>
      <p className="pHome">It's important to note that while <strong>Next. js is considered a full-stack framework</strong>, it doesn't cover every aspect of back-end and full-stack development. For instance, it doesn't include a database system. You'll still need to set up and connect with your preferred database provider.</p>
    </div>
    
    <div className="container2home">
    <button className="btn"><Link href={"/about"}>About Me</Link></button>
    </div>
   </div>
  );
}
