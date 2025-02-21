import "react";
import { Link } from "react-router-dom";
import Table from "../../components/admin/Table";
import { _ApiHandler } from "../../utils/ApiHandler";
import { UseApiGet } from "../../utils/QueryMutation";

const getTestimony = () => 
    _ApiHandler({
        method : 'GET',
        url : '/testimony'
    });

const Testimony = () => {
    const { isLoading, error, data :testimonys } = UseApiGet("testimonys", getTestimony);

    if (isLoading) return <div>Loading...</div>;
    if (error && testimonys.data.status >= 400) return <div>Error: {error.message}</div>;

    
    return (
        <div className="content-wrapper">
            <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                        <h4 className="card-title">Tabel Testimony</h4>
                        <p className="card-description">
                          <Link to="/admin/create-testimony">
                            <button type="button" className="btn btn-outline-primary btn-icon-text">
                            <i className="ti-plus btn-icon-prepend"></i>
                            Add Testimony
                            </button>
                          </Link>
                        </p>
                            <div className="table-responsive">
                                { testimonys.data.data[0] ?
                                <Table apiRoute="testimony" cols={Object.keys(testimonys.data.data[0])} data={testimonys.data.data} bordered={false} striped={true} />
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

export default Testimony;