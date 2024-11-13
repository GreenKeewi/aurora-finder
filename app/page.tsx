"use client";

import axios from "axios";
import * as cheerio from "cheerio";
import Link from "next/link";
import { useEffect, useState } from "react";

interface AuroraSighting {
  location: string;
  time: string;
  description: string;
}

export default function Home() {
  const [sightings, setSightings] = useState<AuroraSighting[]>([]);
  const [currentAlert, setCurrentAlert] = useState<string>("");
  const [previousAlert, setPreviousAlert] = useState<string>("");

  useEffect(() => {
    async function fetchAuroraData() {
      try {
        // Replace with the actual API endpoint
        const response = await fetch("https://api.auroras.live/v1/?type=all");
        if (!response.ok) {
          console.error("Failed to fetch data:", response.statusText);
          return;
        }
        const data = await response.json();
        // Transform the data to match the AuroraSighting interface
        const transformedData = data.map(
          (item: { location: string; time: string; description: string }) => ({
            location: item.location,
            time: item.time,
            description: item.description,
          })
        );
        setSightings(transformedData);

        // Web scraping logic
        const alertResponse = await axios.get(
          "https://www.aurorawatch.ca/content/view/26/60/"
        );
        const $ = cheerio.load(alertResponse.data);
        const currentAlertText = $("div.alert-current").text().trim();
        const previousAlertText = $("div.alert-previous").text().trim();
        console.log("Current Alert Text:", currentAlertText);
        console.log("Previous Alert Text:", previousAlertText);
        setCurrentAlert(currentAlertText);
        setPreviousAlert(previousAlertText);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchAuroraData();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center p-10 space-y-4">
      <h1 className="text-7xl text-[#fe841d] font-bold mt-20 text-center">
        Active Auroras
      </h1>
      <p className="text-[#fe841d] text-base text-center max-w-md leading-relaxed">
        Active Auroras tracks real-time aurora sightings worldwide, helping you
        catch the beauty of the Northern and Southern Lights as they happen.
      </p>
      <Link href="">
        <button className="btn-ghost group relative h-12 rounded-full border border-neutral-200 bg-transparent px-4 sm:h-10 sm:px-3">
          <span className="relative inline-flex overflow-hidden">
            <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[120%] group-hover:skew-y-12">
              Find Auroras
            </div>
            <div className="absolute translate-y-[120%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
              Find Auroras
            </div>
          </span>
        </button>
      </Link>
      <section className="w-full max-w-2xl p-4 mt-80 rounded-lg shadow-lg sm:p-2 sm:mt-5">
        <h2 className="text-2xl font-bold text-center text-[#fe841d] mb-4 sm:text-xl">
          Latest Sightings
        </h2>
        <ul className="space-y-2">
          {sightings.map((sighting, index) => (
            <li key={index} className="p-2 border-b border-gray-200">
              <strong>Location:</strong> {sighting.location}
              <br />
              <strong>Time:</strong> {sighting.time}
              <br />
              <strong>Description:</strong> {sighting.description}
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <h3 className="text-xl font-bold text-center text-[#fe841d] mb-4">
            Current Alert Status
          </h3>
          <p className="text-center">{currentAlert}</p>
          <h3 className="text-xl font-bold text-center text-[#fe841d] mt-4 mb-4">
            Previous Alert Status
          </h3>
          <p className="text-center">{previousAlert}</p>
        </div>
      </section>
    </main>
  );
}
