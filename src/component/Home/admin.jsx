import foto from "../../img/Ayanokouji.jpg"
import facebook from "../../img/facebook.png"
import ig from "../../img/instagram.png"
import github from "../../img/github.jpg"

function Admin(){
    return(
        <>
            <button type="button" 
            className="btn btn-primary" 
            data-toggle="modal"
            data-target={`#idAdmin`}>
            Edit
            </button>

            <div className="modal" id={`idAdmin`}>
            <div className="modal-dialog">
                <div className="modal-content">

                <div className="modal-header">
                    <h4 className="modal-title">Edit Menu</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>

                <div className="modal-body">
                    <h2>ABOUT AUTHOR</h2>
                    <img src={foto}/>
                    <h3>Bagus Mustaqim</h3>
                    <p>Ampun puhh.... Masih pemula puhh. Saya masih kroco puh. Saya belum ada apa apanya dibandingkan sepuh sekalian</p>
                    <h3 className='follow'>Follow Me</h3>

                    <div className='Sosmed'>
                    <a href='https://www.facebook.com/bagus.mustaqim.56?mibextid=ZbWKwL' target='blank'><img src={facebook} title='Facebook'/></a>
                    <a href='https://www.instagram.com/bagustaqim_?igsh=ZWxwajlsbHl2dGlx'target='blank'><img src={ig} title='Instagram'/></a>
                    <a href='https://github.com/Bagus135' target='blank'><img src={github} title="Github"/></a>
                    </div>
                </div>

                <div className="modal-footer">
                    <button type="button" 
                    className="btn btn-primary" 
                    data-dismiss="modal">Ganteng Banget :V </button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

                </div>
            </div>
            </div>
        </>
    )
}

export default Admin