import "react";
import { Link } from "react-router-dom";
import Table from "../../components/admin/Table";
import { _ApiHandler } from "../../utils/ApiHandler";
import { UseApiGet } from "../../utils/QueryMutation";

const getService = () => 
    _ApiHandler({
        method : 'GET',
        url : '/service'
    });

const Service = () => {
    const { isLoading, error, data :services } = UseApiGet("services", getService);

    if (isLoading) return <div>Loading...</div>;
    if (error && services.data.status >= 400) return <div>Error: {error.message}</div>;

    
    return (
        <div className="content-wrapper">
            <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                        <h4 className="card-title">Tabel Service</h4>
                        <p className="card-description">
                          <Link to="/admin/create-service">
                            <button type="button" className="btn btn-outline-primary btn-icon-text">
                            <i className="ti-plus btn-icon-prepend"></i>
                            Add Service
                            </button>
                          </Link>
                        </p>
                            <div className="table-responsive">
                                { services.data.data[0] ?
                                <Table apiRoute="service" cols={Object.keys(services.data.data[0])} data={services.data.data} bordered={false} striped={true} />
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

export default Service;