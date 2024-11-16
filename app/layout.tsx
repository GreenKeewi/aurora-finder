import Navbar from "@/components/ui/navbar";
import { FolderKanban, Github } from "lucide-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Active Auroras",
  description:
    "Active Auroras is a website that helps you find active auroras all around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="nord">
      <head>
        <link rel="icon" href="/tablogo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        <section className="text-center lg:text-start py-12 border-t border-gray-100">
          <div className="container px-4 md:px-8 lg:px-28">
            <div className="grid grid-cols-12 justify-between items-center">
              <div className="col-span-12 lg:col-span-4 flex">
                <ul className="flex">
                  <li className="m-2">
                    <a
                      href="https://github.com/GreenKeewi"
                      target="_blank"
                      className="hover:text-orange-600"
                    >
                      <Github />
                    </a>
                  </li>
                  <li className="m-2">
                    <a
                      href="https://vhanna.netlify.app/"
                      target="_blank"
                      className="hover:text-blue-600"
                    >
                      <FolderKanban />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex justify-center lg:justify-end">
                <p className="mb-0">
                  <span className="group relative h-12 overflow-hidden rounded-[8px]  bg-transparent px-4 flex justify-center">
                    <span className="relative inline-flex">
                      <span className="duration-700 [transition-delay:0.02s] group-hover:[transform:rotateY(360deg)]">
                        M
                      </span>
                      <span className="duration-700 [transition-delay:0.04s] group-hover:[transform:rotateY(360deg)]">
                        a
                      </span>
                      <span className="duration-700 [transition-delay:0.06s] group-hover:[transform:rotateY(360deg)]">
                        d
                      </span>
                      <span className="duration-700 [transition-delay:0.08s] group-hover:[transform:rotateY(360deg)]">
                        e
                      </span>
                      <span className="duration-700 [transition-delay:0.10s] group-hover:[transform:rotateY(360deg)]">
                        &nbsp;
                      </span>
                      <span className="duration-700 [transition-delay:0.12s] group-hover:[transform:rotateY(360deg)]">
                        b
                      </span>
                      <span className="duration-700 [transition-delay:0.14s] group-hover:[transform:rotateY(360deg)]">
                        y
                      </span>
                      <span className="duration-700 [transition-delay:0.16s] group-hover:[transform:rotateY(360deg)]">
                        &nbsp;
                      </span>
                      <span className="duration-700 [transition-delay:0.18s] group-hover:[transform:rotateY(360deg)]">
                        a
                      </span>
                      <span className="duration-700 [transition-delay:0.20s] group-hover:[transform:rotateY(360deg)]">
                        &nbsp;
                      </span>
                      <span className="duration-700 [transition-delay:0.22s] group-hover:[transform:rotateY(360deg)]">
                        K
                      </span>
                      <span className="duration-700 [transition-delay:0.24s] group-hover:[transform:rotateY(360deg)]">
                        i
                      </span>
                      <span className="duration-700 [transition-delay:0.26s] group-hover:[transform:rotateY(360deg)]">
                        w
                      </span>
                      <span className="duration-700 [transition-delay:0.28s] group-hover:[transform:rotateY(360deg)]">
                        i
                      </span>
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
