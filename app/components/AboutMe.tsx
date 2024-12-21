import Image from 'next/image';


export default function AboutMe() {
    return (
        <section className="bg-panel-bg p-6 rounded-lg shadow-lg mt-6 text-foreground text-center flex flex-col items-center">
        <h2 className="text-2xl font-bold text-accent mb-4">About Me</h2>
        <Image
        src="/Headshot.png"
        alt="Katy's Profile Picture"
        width={130} // Specify the width
        height={130} // Specify the height
        className="rounded-full mb-4 "
      />
        <p className="text-lg text-yellowAccent leading-relaxed">
          Hi, I'm Katy! 👩‍💻 I'm a passionate web developer sharing my journey into the world of coding, design, and technology.
          <br />
          <br />
          I love exploring creative ways to build engaging web experiences, and this blog is my canvas for learning, experimenting, and growing.
        </p>
      </section>
    );
  }
  