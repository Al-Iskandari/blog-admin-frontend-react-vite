import "react";
import { Link } from "react-router-dom";
import Table from "../../components/admin/Table";
import { _ApiHandler } from "../../utils/ApiHandler";
import { UseApiGet } from "../../utils/QueryMutation";

const section = () => 
    _ApiHandler({
        method : 'GET',
        url : '/section'
    });

const Section = () => {
    const { isLoading, error, data :sections } = UseApiGet("sections", section);

    if (isLoading) return <div>Loading...</div>;
    if (error && sections.data.status >= 400) return <div>Error: {error.message}</div>;

    return (
        <div className="content-wrapper">
            <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                        <h4 className="card-title">Tabel Section</h4>
                        <p className="card-description">
                          <Link to="/admin/create-section">
                            <button type="button" className="btn btn-outline-primary btn-icon-text">
                            <i className="ti-plus btn-icon-prepend"></i>
                            Add New Section
                            </button>
                          </Link>
                        </p>
                            <div className="table-responsive">
                                { sections.data.data[0] ?
                                <Table apiRoute="section" cols={Object.keys(sections.data.data[0])} data={sections.data.data} bordered={false} striped={true} />
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

export default Section;