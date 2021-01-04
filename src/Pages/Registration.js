import React, { useState } from 'react'
import MyInput from "../Components/MyInput"
import MySelect from '../Components/MySelect'
import axios from 'axios'

function Registration() {
    const [name, setName] = useState("");
    const [isAssisting, setIsAssisting] = useState(false);
    const [hasPartner, setHasPartner] = useState(false);
    const [partnerName, setPartnerName] = useState("");
    const [partnerFoodStyle, setPartnerFoodStyle] = useState("");
    const [partnerIntolerances, setPartnerIntolerances] = useState("");
    const [foodStyle, setFoodStyle] = useState("");
    const [intolerances, setIntolerances] = useState("");
    const [children, setChildren] = useState([]);
    const [isUsingBus, setIsUsingBus] = useState(false);

    function selectChildren(e) {
        let arrayCopy = [];
        for (let i = 0; i < e.target.value; i++) {
            arrayCopy.push({});
        }
        setChildren(arrayCopy);
    }

    function handleSubmit(e) {
        e.preventDefault();
        let request = createRequestObject(e);
        axios.post(process.env.REACT_APP_API_URL+'/attendee/new', request).then(el=>{
            alert("todo bien")
        })        
    }

    function createRequestObject(e){
        let request = {};        
        request.name = name;
        request.isAssisting = isAssisting;
        if (isAssisting) {            
            if (hasPartner) {
                request.partner = {};
                request.partner.name = partnerName;
                request.partner.foodStyle = partnerFoodStyle;
                request.partner.intolerances = partnerIntolerances
            }
            if (children.length > 0) {
                request.children = children;
            }
            request.isUsingBus = isUsingBus;
            request.intolerances = intolerances;
            request.foodStyle = foodStyle;
        }
        return request;
    }

    function changeChildName(e, index)
    {
        let childrenCopy = [...children];        
        childrenCopy[index].name = e.target.value;
        setChildren(childrenCopy);
    }

    function changeChildFoodStyle(e, index)
    {
        let childrenCopy = [...children];        
        childrenCopy[index].foodStyle = e.target.value;
        setChildren(childrenCopy);
    }

    function changeChildIntolerances(e, index)
    {
        let childrenCopy = [...children];        
        childrenCopy[index].intolerances = e.target.value;
        setChildren(childrenCopy);
    }

    return (
        <form onSubmit={handleSubmit}>
            <MyInput label="Nombre y Apellido" value={name} inputClick={(e)=> setName(e.target.value)} />
            <MySelect label="Asistiré" options={["Sí", "No"]} firstEmpty changeSelect={(e) => setIsAssisting(e.target.value === "Sí")} />
            {isAssisting && <MySelect label="Vendré acompañado" options={["Sí", "No"]} firstEmpty changeSelect={(e)=> setHasPartner(e.target.value === "Sí")} />}
            {isAssisting && hasPartner && <MyInput label="Nombre y Apellido de mi pareja" inputClick={(e)=> setPartnerName(e.target.value)}/>}
            {isAssisting && <MySelect label="Niños" options={[0, 1, 2, 3, 4]} changeSelect={selectChildren} />}
            {children.map((element, index) => {
                return <MyInput key={index} label="Nombre de mi hijo" inputClick={(e) => changeChildName(e, index)}/>
            })}
            {isAssisting && <MySelect label="Irémos en bus" options={["Sí", "No"]} firstEmpty changeSelect={(e)=>setIsUsingBus(e.target.value === "Sí")} />}
            {isAssisting && <h2>Consideraciones especiales:</h2>}
            {isAssisting && <MySelect label="regimen especial" options={["vegetariano", "vegano", "diabetico"]} firstEmpty changeSelect={(e)=> setFoodStyle(e.target.value)}/>}
            {isAssisting && hasPartner && <MySelect label={`regimen especial de ${partnerName}`} options={["vegetariano", "vegano", "diabetico"]} firstEmpty changeSelect={(e)=> setPartnerFoodStyle(e.target.value)} />}
            {children.map((element, index) => {
                return <MySelect label={`regimen especial de ${element.name}`} options={["vegetariano", "vegano", "diabetico"]} firstEmpty changeSelect={(e)=> changeChildFoodStyle(e, index)} />
            })}
            {isAssisting && <MySelect label="mis intolerancias o alergias" options={["gluten", "lactosa", "frutos secos"]} firstEmpty changeSelect={(e)=> setIntolerances(e.target.value)}/>}
            {isAssisting && hasPartner && <MySelect label={`intolerancias o alergias de ${partnerName}`} options={["gluten", "lactosa", "frutos secos"]} firstEmpty changeSelect={(e)=> setPartnerIntolerances(e.target.value)}/>}
            {children.map((element, index) => {
                return <MySelect label={`intolerancias o alergias de ${element.name}`} options={["gluten", "lactosa", "frutos secos"]} firstEmpty changeSelect={(e)=> changeChildIntolerances(e, index)} />
            })}
            <button>Confirmar</button>
        </form>
    )
}

export default Registration
