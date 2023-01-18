import BoxUnic from "./BoxUnic/BoxUnic"
import './boxFunction.css'
import CompreAqui from "../CompreAqui/CompreAqui"

function BoxFunction(){
    return(
        <div className="box-container">
            <CompreAqui />
            <BoxUnic text={"Garantia de 15 dias"} />
            <BoxUnic text={"Acesso imediato"} />
            <BoxUnic text={"1 ano de acesso"} />
            <BoxUnic text={"Compra segura"} />
            <BoxUnic text={"+ de 10 mil alunos"} />
            <BoxUnic text={"Suporte ao vivo"} />
        </div>    
    )
}

export default BoxFunction