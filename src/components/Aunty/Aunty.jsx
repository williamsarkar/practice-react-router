import { useContext } from "react";
import Causin from "../Causin/Causin";
import { assetContext } from "../GrandPa/GrandPa";


const Aunty = () => {
    const gift = useContext(assetContext);
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
           <Causin name={'Alif'}></Causin>
           <Causin name={"Alifa"}></Causin>
           <p>has:{gift}</p>
            </section>
        </div>
    );
};

export default Aunty;