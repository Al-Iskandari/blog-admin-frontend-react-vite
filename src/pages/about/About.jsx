import "react";
import { Link } from "react-router-dom";
import Table from "../../components/admin/Table";
import { _ApiHandler } from "../../utils/ApiHandler";
import { UseApiGet } from "../../utils/QueryMutation";

const getAbout = () => 
    _ApiHandler({
        method : 'GET',
        url : '/about'
    });

const About = () => {
    const { isLoading, error, data :about } = UseApiGet("about", getAbout);

    if (isLoading) return <div>Loading...</div>;
    if (error && about.data.status >= 400) return <div>Error: {error.message}</div>;

    
    return (
        <div className="content-wrapper">
            <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                        <h4 className="card-title">Tabel About</h4>
                        <p className="card-description">
                          <Link to="/admin/create-about">
                            <button type="button" className="btn btn-outline-primary btn-icon-text">
                            <i className="ti-plus btn-icon-prepend"></i>
                            Add About
                            </button>
                          </Link>
                        </p>
                            <div className="table-responsive">
                                { about.data.data[0] ?
                                <Table apiRoute="about" cols={Object.keys(about.data.data[0])} data={about.data.data} bordered={false} striped={true} />
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

export default About;