import { useState } from "react";
import { useEffect } from "react";

export default function Allatok() {
  const [allatok, setAllatok] = useState([]);

  useEffect(() => {
    async function getAllatok() {
      const response = await fetch("http://localhost:5000/allatok");
      const resData = await response.json();

      // const ordered = resData.sort((a, b) => (a.gondozo > b.gondozo ? 1 : -1));
      const ordered = resData.sort((a, b) =>
        a.gondozo.localeCompare(b.gondozo)
      );

      setAllatok(ordered);
    }

    getAllatok();
  }, []);

  return (
    <div>
      <h1 className="mb-5">Állatkertünk jelenlegi lakói</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Állat neve</th>
            <th>Faj</th>
            <th>Gondozója</th>
            <th>Helye az állatkertben</th>
            <th>Érkezése</th>
          </tr>
        </thead>
        <tbody>
          {allatok.map((allat) => (
            <tr key={allat.nev}>
              <td>{allat.nev}</td>
              <td>{allat.faj}</td>
              <td>{allat.gondozo}</td>
              <td>{allat.helye}</td>
              <td>{allat.erkezes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
