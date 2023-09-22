import { useContext } from "react";
import { assetContext } from "../GrandPa/GrandPa";


const Special = ({asset}) => {

    const gift = useContext(assetContext);

    return (
        <div>
            <h2>Special</h2>
            <p>has: {asset}</p>
            <p>Aslo has: {gift}</p>
        </div>
    );
};

export default Special;