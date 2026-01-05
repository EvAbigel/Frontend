export function UjAllat(){
    return(
        <div className="container">
    <h2 className="my-4 text-center">Új állat regisztrálása</h2>
    <div className="row">
            <div className="offset-lg-3 offset-md-2 col-lg-6 col-md-8 col-12">

            <div className="mb-3">
                <label htmlFor="nev"> Új állat neve </label>
                <input className="form-control" type="text" id="nev" name="nev"/>
            </div>

            <div className="mb-3">
                <label htmlFor="faj"> Faja az állatnak </label>
                <input className="form-control" type="text" id="faj" name="faj"/>
            </div>

            <div className="mb-3">
                <label htmlFor="date" className="form-label">Érkezés dátuma</label>
                <input type="date" className="form-control" name="erkezes" />
            </div>

            <div className="mb-3">
                <label htmlFor="helye"> Helye az állatkertben </label>
                <input className="form-control" type="text" id="helye" name="helye"/>
            </div>

            <div className="mb-3">
                <label htmlFor="gondozo" className="form-label">Gondozója</label>
                <select className="form-control" name="gondozo" id="gondozo" >
                    <option>Kérem válasszon</option>
                    <option> Példa Béla </option>                    
                </select>
            </div>

            <div className="mb-3 text-center">
                <button className="btn btn-primary px-5">Felvétel</button>
            </div>

            <div className="alert alert-danger alert-dismissible" role="alert">
                <strong>Hibaüzenete helye</strong>
                <button type="button" className="btn-close"></button>
            </div>

            </div>
    </div>
</div>
    )
}