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
            <h2 className="text-2xl font-bold mb-4">Vendre un cotxe</h2>
            <form onSubmit={submitForm} className="space-y-4">
                <input type="text" placeholder="Marca" className="w-full p-2 border" onChange={e => update('brand', e.target.value)} required />
                <input type="text" placeholder="Model" className="w-full p-2 border" onChange={e => update('model', e.target.value)} required />
                <input type="number" placeholder="Preu" className="w-full p-2 border" onChange={e => update('price', e.target.value)} required />
                <input type="text" placeholder="Combustible (separat per comes)" className="w-full p-2 border" onChange={e => update('fuel', e.target.value.split(','))} required />
                <input type="number" placeholder="Any" className="w-full p-2 border" onChange={e => update('year', e.target.value)} required/>
                <input type="number" placeholder="Potència (cv)" className="w-full p-2 border" onChange={e => update('power', e.target.value)} required />
                <input type="number" placeholder="Quilòmetres" className="w-full p-2 border" onChange={e => update('km', e.target.value)} required />
                <textarea type="textarea" placeholder="Descripció" className="w-full p-2 border" onChange={e => update('description', e.target.value)} required />
                <input type="file" multiple onChange={e => update('images', e.target.files)}
                className="text-sm text-stone-500 file:py-1 file:px-3 file:border
                file:text-xs file:font-medium file:bg-stone-50 file:text-stone-700
                hover:file:cursor-pointer hover:file:bg-blue-50 hover:file:text-blue-700"
                required />
                <button className="bg-blue-600 text-white w-full py-2 rounded">Enviar</button>
            </form>
        </div>
    );
}

export default SellPage;