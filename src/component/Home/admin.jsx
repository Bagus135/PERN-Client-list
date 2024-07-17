const foto = "/img/Ayanokouji.jpg"
const facebook = '/img/facebook.png'
const ig = '/img/ig.png'
const github = '/img/github.png'


function Admin(){
    return(
        <>
            <button type="button" 
            className="btn btn-primary" 
            data-toggle="modal"
            data-target={`#idAdmin`}>
            Admin
            </button>

            <div className="modal" id={`idAdmin`}>
            <div className="modal-dialog">
                <div className="modal-content">

                <div className="modal-header">
                    <h4 className="modal-title">ADMIN</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>

                <div className="modal-body">
                    <div className="container-fluid">
                    <h2 className="text-center">ABOUT AUTHOR</h2>
                    <img className="w-100" src={foto}/>
                    <h3 className="text-center mt-5">Bagus Mustaqim</h3>
                    <hr className="bg-dark"/>
                    <p>Ampun puhh.... Masih pemula puhh. Saya masih kroco puh. Saya belum ada apa apanya dibandingkan sepuh sekalian</p>
                    <h3 className='text-center mt-5 mb-3'>Follow Me</h3>

                    <div className='d-flex justify-content-center'>
                    <a href='https://www.facebook.com/bagus.mustaqim.56?mibextid=ZbWKwL' target='blank'><img className="w-75" src={facebook} title='Facebook'/></a>
                    <a href='https://www.instagram.com/bagustaqim_?igsh=ZWxwajlsbHl2dGlx'target='blank'><img className="w-75" src={ig} title='Instagram'/></a>
                    <a href='https://github.com/Bagus135' target='blank'><img className="w-75" src={github} title="Github"/></a>
                    </div>
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