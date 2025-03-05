import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>About Me - Ryoka</title>
        <meta name="description" content="About Ryoka, TypeScript developer and Linux user." />
      </Head>

      <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#2c3338] via-[#3d474c] to-[#2c3338] text-[#d4d7d6]">
        {/* Header */}
        <header className="flex justify-between items-center px-8 py-4 bg-[#232e34] text-[#a3b0b9] shadow-lg backdrop-blur-lg bg-opacity-80 rounded-b-2xl">
          <h1 className="text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#a0bdbd] to-[#98c0b3]">Ryoka</h1>
          <a
            href="https://github.com/Ryoda1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a0bdbd] font-semibold text-lg border-b-2 border-transparent hover:border-[#a0bdbd] transition duration-300"
          >
            GitHub
          </a>
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            {/* Profile Section */}
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <a href="https://github.com/Ryoda1" target="_blank" rel="noopener noreferrer">
                <img
                  className="w-64 h-64 rounded-full border-4 border-[#a0bdbd] transition-transform duration-500 hover:scale-110 shadow-xl"
                  src="https://github.com/Ryoda1.png"
                  alt="Ryoka"
                />
              </a>
              <h1 className="text-5xl font-extrabold mt-6 text-[#a3b0b9]">#Ryoka</h1>
              <p className="text-[#b8c7c4] text-xl">Developer & Linux user</p>
              <div className="mt-6 space-y-4 flex flex-col w-full items-center md:items-start">
                {[{ label: "ryoda@wp.pl", href: "mailto:ryoda@wp.pl" }, { label: "Telegram", href: "https://t.me/ryoday" }].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="block bg-gradient-to-r from-[#a0bdbd] to-[#98c0b3] text-[#1e1e2e] font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition duration-300 w-64 text-lg text-center shadow-lg"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* About Section */}
            <div className="w-full md:w-3/4">
              <h1 className="text-4xl font-bold mb-6 text-[#a3b0b9]">About Me</h1>
              <p className="text-[#b8c7c4] text-lg mb-8">
                I am an enthusiast programmer and system administrator with a strong passion for technology.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-[#a3b0b9]">What I’m Doing</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[{ title: "Front-End Developing", desc: "I focus on building responsive and visually appealing user interfaces." }, { title: "System Administration", desc: "Managing IT infrastructure and enhancing system security." }, { title: "Open Source", desc: "Supporting and contributing to open source projects." }, { title: "Community Engagement", desc: "Sharing knowledge and interacting with like-minded people." }].map(({ title, desc }, index) => (
                  <div
                    key={index}
                    className="bg-[#2e3b42] p-6 rounded-xl shadow-2xl hover:shadow-lg transition-transform duration-300 hover:scale-105 backdrop-blur-lg bg-opacity-80 border border-[#444d54]"
                  >
                    <h3 className="text-xl font-semibold text-[#a3b0b9]">{title}</h3>
                    <p className="text-[#b8c7c4] mt-2">{desc}</p>
                  </div>
                ))}
              </div>

              {/* Projects Section */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-[#a3b0b9]">My Projects</h2>
              <div className="bg-[#2e3b42] p-8 rounded-xl shadow-2xl hover:shadow-lg transition-transform duration-300 hover:scale-105 backdrop-blur-lg bg-opacity-80 border border-[#444d54]">
                <h3 className="text-xl font-semibold text-[#a3b0b9]">Visit My GitBook</h3>
                <p className="text-[#b8c7c4] mt-2">I’ve created a GitBook to help people with Fedora. Check it out!</p>
                <a
                  href="https://ryoda.gitbook.io/easy-fedora/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-[#a0bdbd] to-[#98c0b3] text-[#1e1e2e] font-semibold px-6 py-3 mt-4 rounded-lg hover:opacity-90 transition duration-300 shadow-lg"
                >
                  Visit My GitBook
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="flex items-center justify-center py-6 bg-[#232e34] text-[#CDD6F4] border-t border-[#313244]">
          <span className="text-lg font-semibold tracking-wide bg-gradient-to-r from-[#a0bdbd] to-[#98c0b3] text-transparent bg-clip-text">
            ⌬ This website is made by Ryoda ⌬
          </span>
        </footer>
      </div>
    </>
  );
}

