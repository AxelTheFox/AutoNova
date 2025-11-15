import { useState } from "react";

function SellPage() {
    const [form, setForm] = useState({});

    const update = (field, value) => setForm({ ...form, [field]: value });
    const submitForm = event => {
        event.preventDefault();
        console.log(form)
        alert("Cotxe enviat! (Falta backend)")
    };

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Vendre un cotxe</h1>
            <form onSubmit={submitForm} className="space-y-4">
                <input type="file" multiple onChange={e => update('images', e.target.files)} className="w-full" />
                <input type="text" placeholder="Marca" className="w-full p-2 border" onChange={e => update('brand', e.target.value)} />
                <input type="text" placeholder="Model" className="w-full p-2 border" onChange={e => update('model', e.target.value)} />
                <input type="number" placeholder="Preu" className="w-full p-2 border" onChange={e => update('price', e.target.value)} />
                <input type="text" placeholder="Combustible (separat per comes)" className="w-full p-2 border" onChange={e => update('fuel', e.target.value.split(','))} />
                <input type="number" placeholder="Any" className="w-full p-2 border" onChange={e => update('year', e.target.value)} />
                <input type="number" placeholder="Potència (cv)" className="w-full p-2 border" onChange={e => update('power', e.target.value)} />
                <input type="number" placeholder="Quilòmetres" className="w-full p-2 border" onChange={e => update('km', e.target.value)} />
                <button className="bg-blue-600 text-white px-4 py-2 rounded">Enviar</button>
            </form>
        </div>
    );
}

export default SellPage;