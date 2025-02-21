import "react";
import { Link } from "react-router-dom";
import Table from "../../components/admin/Table";
import { _ApiHandler } from "../../utils/ApiHandler";
import { UseApiGet } from "../../utils/QueryMutation";

const getProject = () => 
    _ApiHandler({
        method : 'GET',
        url : '/project'
    });

const Project = () => {
    const { isLoading, error, data :projects } = UseApiGet("projects", getProject);

    if (isLoading) return <div>Loading...</div>;
    if (error && projects.data.status >= 400) return <div>Error: {error.message}</div>;

    return (
        <div className="content-wrapper">
            <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                        <h4 className="card-title">Tabel Project</h4>
                        <p className="card-description">
                          <Link to="/admin/create-project">
                            <button type="button" className="btn btn-outline-primary btn-icon-text">
                            <i className="ti-plus btn-icon-prepend"></i>
                            Add Project
                            </button>
                          </Link>
                        </p>
                            <div className="table-responsive">
                               { projects.data.data[0] ?
                                <Table apiRoute="project" cols={Object.keys(projects.data.data[0])} data={projects.data.data} bordered={false} striped={true} />
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

export default Project;