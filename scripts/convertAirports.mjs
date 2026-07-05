import fs from "fs";
import path from "path";
import csv from "csv-parser";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const airports = [];

fs.createReadStream(path.join(__dirname, "../data/airports.csv"))
  .pipe(csv())
  .on("data", (row) => {
    if (!row.ident) return;

    airports.push({
      icao: row.ident,
      iata: row.iata_code || "",
      name: row.name,
      city: row.municipality || "",
      country: row.iso_country,
      lat: Number(row.latitude_deg),
      lon: Number(row.longitude_deg),
    });
  })
  .on("end", () => {
    fs.writeFileSync(
      path.join(__dirname, "../data/airports.json"),
      JSON.stringify(airports, null, 2)
    );

    console.log(`✅ Converted ${airports.length} airports.`);
  });