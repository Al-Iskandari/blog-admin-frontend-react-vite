import "react";
import { Link } from "react-router-dom";
import Table from "../../components/admin/Table";
import { _ApiHandler } from "../../utils/ApiHandler";
import { UseApiGet } from "../../utils/QueryMutation";

const getUser = () => 
    _ApiHandler({
        method : 'GET',
        url : '/user'
    });

const User = () => {
    const { isLoading, error, data :users } = UseApiGet("users", getUser);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {JSON.stringify(error.message)}</div>;

    return (
        <div className="content-wrapper">
            <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                        <h4 className="card-title">Tabel User</h4>
                        <p className="card-description">
                          <Link to="/admin/create-user">
                            <button type="button" className="btn btn-outline-primary btn-icon-text">
                            <i className="ti-plus btn-icon-prepend"></i>
                            Add New User
                            </button>
                          </Link>
                        </p>
                            <div className="table-responsive">
                                { users.data.data[0] ?
                                <Table apiRoute="user" cols={Object.keys(users.data.data[0])} data={users.data.data} bordered={false} striped={true} />
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

export default User;