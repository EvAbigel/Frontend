import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UjAllat() {
  const navigate = useNavigate();
  const [gondozok, setGondozo] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    async function getGondozok() {
      try {
        const response = await fetch("http://localhost:5000/gondozok");
        if (!response.ok)
          throw new Error(
            `Hiba a gondozók betöltése közben: Hibakód: ${response.status}, Hibaüzenet: ${response.statusText}`
          );

        const resData = await response.json();
        setGondozo(resData);
      } catch (e) {
        setErr(e.message);
      }
    }

    getGondozok();
  }, []);

  const datum = new Date().toISOString().substring(0, 10);

  const nevInput = useRef("");
  const fajInput = useRef("");
  const erkezesInput = useRef(datum);
  const helyeInput = useRef("");
  const gondozoInput = useRef("");

  const [isValid, setIsValid] = useState({
    nev:false,
    faj: false,
    helye: false
  });

    const [isEdit, setIsEdited] = useState({
    nev:false,
    faj: false,
    helye: false
  });

  function inputValidate(inputText, inputName){
    // if (inputText.length == 0){
    //   setIsValid(prev => ({
    //     ...prev,
    //     [inputName]: false
    //   }))
    // }
    // else{
    //   setIsValid(prev => ({
    //     ...prev,
    //     [inputName]: true
    //   }))
    // }


    setIsValid(prev => ({
        ...prev,
        [inputName]: inputText.length > 0
      }))

      setIsEdited(prev=>({
        ...prev,
        [inputName]: true,
      }));
  }

  async function onSave(event) {
    event.preventDefault();

    // const fd = new FormData(event.target)
    // console.log(fd)
    // const ujAllat = Object.fromEntries(fd.entries())
    // console.log(ujAllat);

    if (isValid.nev && isValid.faj && isValid.helye){
      const ujAllat = {
        nev: nevInput.current.value,
        faj: fajInput.current.value,
        erkezes: erkezesInput.current.value,
        helye: helyeInput.current.value,
        gondozo: gondozoInput.current.value,
      };
      const response = await fetch("http://localhost:5000/ujallat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ujAllat),
      });
      console.log(response);
      if (response.ok){
        navigate("/allataink")
      }
    }
    else{
      setErr("Minden mezőt kötelező kitölteni!")
    }
  }

  function closeErrorMessage() {
    setErr(null);
  }



  return (
    <div className="container">
      <h2 className="my-4 text-center">Új állat regisztrálása</h2>
      <div className="row">
        <div className="offset-lg-3 offset-md-2 col-lg-6 col-md-8 col-12">
          
          <form onSubmit={onSave}>
              
              
              <div className="mb-3">

                <div className="row">
                  <div className="col-6 text-start">
                    <label htmlFor="nev"> Új állat neve </label>
                    </div>
                      <div className="col-6 text-end">
                        <label htmlFor="nev"> 
                        {isEdit.nev && !isValid.nev && (
                          <span className="text-danger fw-bold">
                            Az állat neve nem lehet üres!
                          </span>
                        )}
                      </label>
                  </div>
                </div>


                <input
                  ref={nevInput}
                  className="form-control"
                  type="text"
                  id="nev"
                  name="nev"
                  onChange={()=> inputValidate(nevInput.current.value, nevInput.current.name)}
                  onBlur={()=> inputValidate(nevInput.current.value, nevInput.current.name)}
                />
              </div>

              <div className="mb-3">
                
                <div className="row">
                  <div className="col-6 text-start">
                    <label htmlFor="faj"> Faja az állatnak </label>
                    </div>
                      <div className="col-6 text-end">
                        <label htmlFor="faj"> 
                        {isEdit.faj && !isValid.faj && (
                          <span className="text-danger fw-bold">
                            Az állat faja nem lehet üres!
                          </span>
                        )}
                      </label>
                  </div>
                </div>
                
                <input
                  ref={fajInput}
                  className="form-control"
                  type="text"
                  id="faj"
                  name="faj"
                  onChange={()=> inputValidate(fajInput.current.value, fajInput.current.name)}
                  onBlur={()=> inputValidate(fajInput.current.value, fajInput.current.name)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="date" className="form-label">
                  Érkezés dátuma
                </label>
                <input
                  ref={erkezesInput}
                  type="date"
                  className="form-control"
                  name="erkezes"
                  defaultValue={datum}
                />
              </div>

              <div className="mb-3">
                
                <div className="row">
                  <div className="col-6 text-start">
                    <label htmlFor="helye"> Helye az állatkertben </label>
                    </div>
                      <div className="col-6 text-end">
                        <label htmlFor="helye"> 
                        {isEdit.helye && !isValid.helye && (
                          <span className="text-danger fw-bold">
                            Az állat helye nem lehet üres!
                          </span>
                        )}
                      </label>
                  </div>
                </div>


                <input
                  ref={helyeInput}
                  className="form-control"
                  type="text"
                  id="helye"
                  name="helye"
                  onChange={()=> inputValidate(helyeInput.current.value, helyeInput.current.name)}
                  onBlur={()=> inputValidate(helyeInput.current.value, helyeInput.current.name)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="gondozo" className="form-label">
                  Gondozója
                </label>
                <select
                  ref={gondozoInput}
                  className="form-control"
                  name="gondozo"
                  id="gondozo"
                >
                  <option disabled>Kérem válasszon</option>
                  {gondozok.map((gondozo) => (
                    <option key={gondozo.nev}>{gondozo.nev}</option>
                  ))}
                </select>
              </div>

              <div className="mb-3 text-center">
                <button className="btn btn-primary px-5">
                  Felvétel
                </button>
              </div>

              {err != null && (
                <div className="alert alert-danger alert-dismissible" role="alert">
                  <strong>{err}</strong>
                  <button
                    onClick={closeErrorMessage}
                    type="button"
                    className="btn-close"
                  ></button>
                </div>
              )}


          </form>

          
        </div>
      </div>
    </div>
  );
}
