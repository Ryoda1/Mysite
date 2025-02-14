import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>About Me - Ryoda</title>
                <meta name="description" content="About Ryoda, TypeScript developer and Linux user." />
            </Head>

            <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#1e1e2e] to-[#2b2c38] text-[#d9e0ee]">
                
                {/* Header Section */}
                <header className="flex justify-between items-center px-4 py-2 bg-[#181825] text-[#f8c6c1]">
                    <h1 className="text-2xl font-bold tracking-wider">Ryoda Website</h1>
                    <a
                        href="https://github.com/Ryoda1"
                        target="_blank"
                        className="bg-[#F28FAD] text-[#1e1e2e] font-semibold px-4 py-2 rounded-lg hover:bg-[#fab387] transition-all duration-300 ease-in-out"
                    >
                        GitHub
                    </a>
                </header>

                <div className="flex-grow container mx-auto px-6 py-12">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                        {/* Left Section */}
                        <div className="w-fit text-center md:text-left">
                            <a href="https://github.com/Ryoda1" target="_blank">
                                <img
                                    className="w-64 h-64 rounded-full border-4 border-[#d8a657] transition-transform duration-300 ease-in-out hover:scale-110"
                                    src="https://github.com/Ryoda1.png"
                                    alt="Ryoda"
                                />
                            </a>
                            <h1 className="text-4xl font-bold mt-6 text-[#f8c6c1]">#Ryoda</h1>
                            <p className="text-[#f2d0a9] text-xl">Developer & Linux user</p>
                            <div className="mt-6 space-y-4">
                                <a
                                    href="mailto:ryoda@wp.pl"
                                    className="bg-[#F28FAD] text-[#1e1e2e] font-semibold flex items-center justify-center px-6 py-3 rounded-lg hover:bg-[#fab387] transition-all duration-300 ease-in-out w-full md:w-auto"
                                >
                                    <span className="text-lg">ryoda@wp.pl</span>
                                </a>
                                <a
                                    href="https://t.me/ryoday"
                                    className="bg-[#F28FAD] text-[#1e1e2e] font-semibold flex items-center justify-center px-6 py-3 rounded-lg hover:bg-[#fab387] transition-all duration-300 ease-in-out w-full md:w-auto"
                                >
                                    <span className="text-lg">Telegram</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="w-full md:w-3/4 mt-6 md:mt-0">
                            <h1 className="text-3xl font-bold mb-6 text-[#f8c6c1]">About Me</h1>
                            <p className="text-[#f2d0a9] mb-8 text-lg">
                                I am an enthusiast programmer and system administrator with a strong passion for technology.
                            </p>

                            <h2 className="text-2xl font-bold mb-6 text-[#f8c6c1]">What I’m Doing</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {["Front-End Developing", "System Administration", "Open Source", "Community Engagement"].map((title, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#2a2a3a] p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
                                    >
                                        <h3 className="text-lg font-semibold text-[#f8c6c1]">{title}</h3>
                                        <p className="text-[#f2d0a9]">
                                            {title === "Front-End Developing" && "I focus on building responsive and visually appealing user interfaces."}
                                            {title === "System Administration" && "Managing IT infrastructure and enhancing system security."}
                                            {title === "Open Source" && "Supporting and contributing to open source communities."}
                                            {title === "Community Engagement" && "Sharing knowledge and interacting with like-minded people."}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* My Projects Section */}
                            <h2 className="text-2xl font-bold mt-12 mb-6 text-[#f8c6c1]">My Projects</h2>
                            <div className="bg-[#2a2a3a] p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
                                <h3 className="text-lg font-semibold text-[#f8c6c1]">Visit My GitBook</h3>
                                <p className="text-[#f2d0a9] mt-2">
                                    I’ve created a GitBook to help people with Fedora. Check it out to learn more.
                                </p>
                                <a
                                    href="https://ryoda.gitbook.io/easy-fedora/"
                                    target="_blank"
                                    className="bg-[#F28FAD] text-[#1e1e2e] font-semibold px-6 py-3 mt-4 rounded-lg hover:bg-[#fab387] transition-all duration-300 ease-in-out w-full md:w-auto inline-block"
                                >
                                    Visit My GitBook
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <footer className="flex items-center justify-center py-6 bg-[#181825] text-[#CDD6F4] border-t border-[#313244]">
                    <span className="text-lg font-semibold tracking-wide bg-gradient-to-r from-[#F28FAD] to-[#fab387] text-transparent bg-clip-text">
                        ⌬ This website is made by Ryoda ⌬
                    </span>
                </footer>
            </div>
        </>
    );
}

            </div>
        </>
    );
}
