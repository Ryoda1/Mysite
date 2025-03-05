import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>About Me - Ryoka</title>
        <meta name="description" content="About Ryoka, TypeScript developer and Linux user." />
        <style>{`
          body {
            user-select: none;
          }
        `}</style>
      </Head>

      <div className="min-h-screen flex flex-col bg-white text-black">
        {/* Header */}
        <header className="flex justify-between items-center px-8 py-4 bg-white text-black border-b">
          <h1 className="text-3xl font-bold">Ryoka</h1>
          <a
            href="https://github.com/Ryoda1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-semibold text-lg"
          >
            GitHub
          </a>
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Profile Section */}
            <div className="text-center md:text-left">
              <a href="https://github.com/Ryoda1" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://github.com/Ryoda1.png"
                  alt="Ryoka"
                  className="w-64 h-64 rounded-full border"
                />
              </a>
              <h1 className="text-5xl mt-6">#Ryoka</h1>
              <p className="text-xl">Developer & Linux user</p>
              <div className="mt-6 space-y-4">
                {[
                  { label: "ryoda@wp.pl", href: "mailto:ryoda@wp.pl" },
                  { label: "Telegram", href: "https://t.me/ryoday" }
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="block bg-white text-black border p-3 rounded text-center"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* About Section */}
            <div>
              <h1 className="text-4xl font-bold mb-6">About Me</h1>
              <p className="text-lg mb-8">
                I am an enthusiast programmer and system administrator with a strong passion for technology.
              </p>

              <h2 className="text-3xl font-bold mb-6">What I’m Doing</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Front-End Developing", desc: "I focus on building responsive and visually appealing user interfaces." },
                  { title: "System Administration", desc: "Managing IT infrastructure and enhancing system security." },
                  { title: "Open Source", desc: "Supporting and contributing to open source projects." },
                  { title: "Community Engagement", desc: "Sharing knowledge and interacting with like-minded people." }
                ].map(({ title, desc }, index) => (
                  <div key={index} className="bg-white border p-6 rounded">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="mt-2">{desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">My Projects</h2>
              <div className="bg-white border p-8 rounded">
                <h3 className="text-xl font-bold">Visit My GitBook</h3>
                <p className="mt-2">
                  I’ve created a GitBook to help people with Fedora. Check it out!
                </p>
                <a
                  href="https://ryoda.gitbook.io/easy-fedora/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-black border p-3 mt-4 rounded"
                >
                  Visit My GitBook
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-6 bg-white text-center border-t">
          <span className="text-lg font-bold">⌬ This website is made by Ryoda ⌬</span>
        </footer>
      </div>
    </>
  );
}

