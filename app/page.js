"use client"
import { useState } from "react";
import Image from "next/image";
import Footer from "./components/Footer";
import "./custom.css";

export default function Home() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [desiredLevel, setDesiredLevel] = useState(0);
  const [smithingStones, setSmithingStones] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]); // Added 9th entry for Ancient Dragon Smithing Stone
  const [totalRunes, setTotalRunes] = useState(0);
  const [weaponCount, setWeaponCount] = useState(1); // Number of weapons

  const calculateSmithingStones = () => {
    const stones = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // Added 9th entry for Ancient Dragon Smithing Stone
    const runeCosts = [200, 400, 600, 900, 1200, 1500, 2400, 3600, 0]; // Cost per stone for each tier
    let totalRuneCost = 0;

    for (let level = currentLevel + 1; level <= desiredLevel; level++) {
      if (level >= 1 && level <= 3) {
        const stonesNeeded = level === 1 ? 2 : level === 2 ? 4 : 6;
        stones[0] += stonesNeeded; // Smithing-Stone(1)
        totalRuneCost += stonesNeeded * runeCosts[0];
      } else if (level >= 4 && level <= 6) {
        const stonesNeeded = level === 4 ? 2 : level === 5 ? 4 : 6;
        stones[1] += stonesNeeded; // Smithing-Stone(2)
        totalRuneCost += stonesNeeded * runeCosts[1];
      } else if (level >= 7 && level <= 9) {
        const stonesNeeded = level === 7 ? 2 : level === 8 ? 4 : 6;
        stones[2] += stonesNeeded; // Smithing-Stone(3)
        totalRuneCost += stonesNeeded * runeCosts[2];
      } else if (level >= 10 && level <= 12) {
        const stonesNeeded = level === 10 ? 2 : level === 11 ? 4 : 6;
        stones[3] += stonesNeeded; // Smithing-Stone(4)
        totalRuneCost += stonesNeeded * runeCosts[3];
      } else if (level >= 13 && level <= 15) {
        const stonesNeeded = level === 13 ? 2 : level === 14 ? 4 : 6;
        stones[4] += stonesNeeded; // Smithing-Stone(5)
        totalRuneCost += stonesNeeded * runeCosts[4];
      } else if (level >= 16 && level <= 18) {
        const stonesNeeded = level === 16 ? 2 : level === 17 ? 4 : 6;
        stones[5] += stonesNeeded; // Smithing-Stone(6)
        totalRuneCost += stonesNeeded * runeCosts[5];
      } else if (level >= 19 && level <= 21) {
        const stonesNeeded = level === 19 ? 2 : level === 20 ? 4 : 6;
        stones[6] += stonesNeeded; // Smithing-Stone(7)
        totalRuneCost += stonesNeeded * runeCosts[6];
      } else if (level >= 22 && level <= 24) {
        const stonesNeeded = level === 22 ? 2 : level === 23 ? 4 : 6;
        stones[7] += stonesNeeded; // Smithing-Stone(8)
        totalRuneCost += stonesNeeded * runeCosts[7];
      } else if (level === 25) {
        stones[8] += 1; // Ancient Dragon Smithing Stone
        totalRuneCost += 0; // Ancient Dragon Smithing Stone has no rune cost
      }
    }

    setSmithingStones(stones);
    setTotalRunes(totalRuneCost);
  };

  return (
    <div className="canvas min-h-screen w-screen flex flex-col items-center bg-[url(/background.png)]  bg-center bg-cover ">
      <div className="main min-h-screen w-full bg-black/35 backdrop-blur-sm back flex flex-col items-center">
        <div className="logoContainer  flex flex-col items-center mt-10">
          <img src="/logo.png" alt="logo" />
          <h1 className="elden-font text-center text-4xl text-[#D9B46E]">Smithing Stone Calculator</h1>
        </div>
        <div className="calculator-section  flex flex-col items-center bg-black/65   ">
          <div className="section-1 flex  max-tab:flex-col gap-10">
            <div className="inputSection flex flex-col justify-center">
              <span className="p-2 flex gap-2 ">
                Current Weapon Level:{" "}
                <input
                  className="bg-black/60 text-center back"
                  type="number"
                  placeholder="Enter your current level"
                  value={currentLevel}
                  onChange={(e) => setCurrentLevel(Number(e.target.value))}
                />
              </span>
              <span className="p-2 flex gap-2 ">
                Desired Weapon Level:{" "}
                <input
                  className="bg-black/60 text-center back"
                  type="number"
                  placeholder="Enter your desired level"
                  value={desiredLevel}
                  onChange={(e) => setDesiredLevel(Number(e.target.value))}
                />
              </span>
              <span className="p-2 flex gap-4">
                Number of Weapons:{" "}
                <input
                  className="bg-black/60 text-center back"
                  type="number"
                  placeholder="Enter number of weapons"
                  value={weaponCount}
                  onChange={(e) => setWeaponCount(Number(e.target.value))}
                />
              </span>
              <button
                className=" bg-[#D9B46E]  text-[black] hover:cursor-pointer hover:bg-[#d9b46eec] px-4 py-2 mt-4 "
                onClick={calculateSmithingStones}
              >
                Calculate
              </button>
            </div>
            <div className="output-section">
              <table className="mainTable w-full">
                <thead>
                  <tr>
                    <th>Smithing Stones</th>
                    <th className="w-42">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Smithing-Stone(1):</td>
                    <td>{smithingStones[0]}</td>
                  </tr>
                  <tr>
                    <td>Smithing-Stone(2):</td>
                    <td>{smithingStones[1]}</td>
                  </tr>
                  <tr>
                    <td>Smithing-Stone(3):</td>
                    <td>{smithingStones[2]}</td>
                  </tr>
                  <tr>
                    <td>Smithing-Stone(4):</td>
                    <td>{smithingStones[3]}</td>
                  </tr>
                  <tr>
                    <td>Smithing-Stone(5):</td>
                    <td>{smithingStones[4]}</td>
                  </tr>
                  <tr>
                    <td>Smithing-Stone(6):</td>
                    <td>{smithingStones[5]}</td>
                  </tr>
                  <tr>
                    <td>Smithing-Stone(7):</td>
                    <td>{smithingStones[6]}</td>
                  </tr>
                  <tr>
                    <td>Smithing-Stone(8):</td>
                    <td>{smithingStones[7]}</td>
                  </tr>
                  <tr>
                    <td>Ancient Dragon Smithing Stone:</td>
                    <td>{smithingStones[8]}</td>
                  </tr>
                </tbody>
              </table>
              <table className="mainTable mt-4">
                <thead>
                  <tr>
                    <th>Smithing Stones</th>
                    <th>Total for {weaponCount} Weapons</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Smithing-Stone(1):</td>
                    <td>{smithingStones[0] * weaponCount}</td>
                  </tr>
                  <tr>
                    <td>Smithing-Stone(2):</td>
                    <td>{smithingStones[1] * weaponCount}</td>
                  </tr>
                  <tr>
                    <td>Smithing-Stone(3):</td>
                    <td>{smithingStones[2] * weaponCount}</td>
                  </tr>
                  <tr>
                    <td>Smithing-Stone(4):</td>
                    <td>{smithingStones[3] * weaponCount}</td>
                  </tr>
                  <tr>
                    <td>Smithing-Stone(5):</td>
                    <td>{smithingStones[4] * weaponCount}</td>
                  </tr>
                  <tr>
                    <td>Smithing-Stone(6):</td>
                    <td>{smithingStones[5] * weaponCount}</td>
                  </tr>
                  <tr>
                    <td>Smithing-Stone(7):</td>
                    <td>{smithingStones[6] * weaponCount}</td>
                  </tr>
                  <tr>
                    <td>Smithing-Stone(8):</td>
                    <td>{smithingStones[7] * weaponCount}</td>
                  </tr>
                  <tr>
                    <td>Ancient Dragon Smithing Stone:</td>
                    <td>{smithingStones[8] * weaponCount}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="totalRunes text-xl p-2 flex gap-3 mt-5 border-2 border-[#D9B46E] hover:cursor-default" title="Cost if u buy all the smithing stones above">
            <h2>Smithing-Stone Cost:</h2><span className="flex items-center gap-1.5">{totalRunes}<img className="size-5" src="/rune.webp" alt="rune" /></span>
          </div>
        </div>
        <footer className="flex justify-center w-full mt-15 text-center">
          <Footer />
        </footer>
      </div>
    </div>
  );
}
