import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>About Me - Ryoda</title>
                <meta name="description" content="About Ryoda, TypeScript developer and Linux user."/>
            </Head>

            <div className="min-h-screen flex flex-col bg-[#1e1e2e] text-[#d9e0ee]">
                <div className="flex-grow container mx-auto px-6 py-12">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        {/* Left Section */}
                        <div className="w-fit text-center md:text-left">
                            <a href="https://github.com/Ryoda1" target="_blank">
                                <img
                                    className="w-64 h-64 rounded-full border-4 border-[#d8a657] transition-transform duration-300 ease-in-out hover:scale-105"
                                    src="https://github.com/Ryoda1.png"
                                    alt="Ryoday"
                                />
                            </a>
                            <h1 className="text-3xl font-bold mt-6 text-[#f8c6c1]">#Ryoda</h1>
                            <p className="text-[#f2d0a9] text-lg">Developer && Linux user</p>
                            <div className="mt-6 space-y-3">
                                {/* Email Button */}
                                <a
                                    href="mailto:ryoda@wp.pl"
                                    className="bg-[#2a2a3a] text-[#d9e0ee] flex items-center justify-center space-x-3 px-6 py-2 rounded-md hover:bg-[#4c4f69] transition-all duration-300 ease-in-out w-full md:w-auto"
                                >
                                    <span className="text-lg">ryoda@wp.pl</span>
                                </a>

                                {/* Telegram Button */}
                                <a
                                    href="https://t.me/ryoday"
                                    className="bg-[#2a2a3a] text-[#d9e0ee] flex items-center justify-center space-x-3 px-6 py-2 rounded-md hover:bg-[#4c4f69] transition-all duration-300 ease-in-out w-full md:w-auto"
                                >
                                    <span className="text-lg">Telegram</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="w-full md:w-3/4 mt-6 md:mt-0">
                            <h1 className="text-2xl font-bold mb-6 text-[#f8c6c1]">About Me</h1>
                            <p className="text-[#f2d0a9] mb-8 text-lg">
                                I am an enthusiast programmer and system administrator.
                            </p>

                            <h2 className="text-2xl font-bold mb-6 text-[#f8c6c1]">What I’m Doing</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div
                                    className="bg-[#2a2a3a] p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
                                    <h3 className="text-lg font-semibold text-[#f8c6c1]">Front-End developing</h3>
                                    <p className="text-[#f2d0a9]">I’m a Front-End developer, focused on building
                                        user-friendly and
                                        visually appealing interfaces.</p>
                                </div>

                                <div
                                    className="bg-[#2a2a3a] p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
                                    <h3 className="text-lg font-semibold text-[#f8c6c1]">System Administration</h3>
                                    <p className="text-[#f2d0a9]">I’m a System Administrator, managing IT infrastructure
                                        and ensuring
                                        its security and performance. I am also studying Linux to deepen my expertise in
                                        system
                                        management.</p>
                                </div>

                                <div
                                    className="bg-[#2a2a3a] p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
                                    <h3 className="text-lg font-semibold text-[#f8c6c1]">Open source</h3>
                                    <p className="text-[#f2d0a9]">I’m passionate about open source and actively support
                                        it by promoting
                                        the use of open technologies, although I’m not currently participating in
                                        projects.</p>
                                </div>

                                <div
                                    className="bg-[#2a2a3a] p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
                                    <h3 className="text-lg font-semibold text-[#f8c6c1]">Community Engagement</h3>
                                    <p className="text-[#f2d0a9]">I enjoy engaging in online communities, sharing
                                        knowledge, and
                                        exchanging experiences with others.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <footer
                    className="row-start-3 flex items-center justify-center py-6 bg-[#181825] text-[#CDD6F4] border-t border-[#313244]"
                >
                    <span className="text-lg font-semibold tracking-wide bg-gradient-to-r from-[#89B4FA] to-[#A6E3A1] text-transparent bg-clip-text">
                        ⌬ This website is made by ryoda ⌬
                    </span>
                </footer>

            </div>
        </>
    );
}

