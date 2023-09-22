import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';


 export const assetContext = createContext('gold');


const GrandPa = () => {

    const asset = 'diamond';

    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <assetContext.Provider value="Gold">
                <section className="flex">
                    <Dad asset={asset}></Dad>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                </section>
            </assetContext.Provider>
        </div>
    );
};

export default GrandPa;