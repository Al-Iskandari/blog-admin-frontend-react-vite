import "react";
import { Link } from "react-router-dom";
import Table from "../../components/admin/Table";
import { _ApiHandler } from "../../utils/ApiHandler";
import { UseApiGet } from "../../utils/QueryMutation";

const gallery = () => 
    _ApiHandler({
        method : 'GET',
        url : '/gallery'
    });

const Gallery = () => {
    const { isLoading, error, data :galleries } = UseApiGet("galleries", gallery);

    if (isLoading) return <div>Loading...</div>;
    if (error && galleries.data.status >= 400) return <div>Error: {error.message}</div>;

    
    return (
        <div className="content-wrapper">
            <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                        <h4 className="card-title">Tabel Gallery</h4>
                        <p className="card-description">
                          <Link to="/admin/create-gallery">
                            <button type="button" className="btn btn-outline-primary btn-icon-text">
                            <i className="ti-plus btn-icon-prepend"></i>
                            Add Gallery
                            </button>
                          </Link>
                        </p>
                            <div className="table-responsive">
                                { galleries.data.data[0] ?
                                <Table apiRoute="gallery" cols={Object.keys(galleries.data.data[0])} data={galleries.data.data} bordered={false} striped={true} />
                                : <div className="alert alert-danger">Data tabel masih kosong!!!</div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Gallery;