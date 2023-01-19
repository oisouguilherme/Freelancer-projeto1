import BoxUnic from "./BoxUnic/BoxUnic"
import './boxFunction.css'
import CompreAqui from "../CompreAqui/CompreAqui"

function BoxFunction(){
    return(
        <div className="box-container">
            <CompreAqui />
            <BoxUnic text={"Garantia de 7 dias"} />
            <BoxUnic text={"Compra segura"} />
            <BoxUnic text={"1 ano de acesso"} />
            <BoxUnic text={"Suporte"} />
            <BoxUnic text={"Acesso imediato"} />
            <BoxUnic text={"Grupo no WhatsApp"} />
        </div>    
    )
}

export default BoxFunction