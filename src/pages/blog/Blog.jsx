import "react";
import { Link } from "react-router-dom";
import Table from "../../components/admin/Table";
import { _ApiHandler } from "../../utils/ApiHandler";
import { UseApiGet } from "../../utils/QueryMutation";

const getBlog = () => 
    _ApiHandler({
        method : 'GET',
        url : '/blog'
    });

const Blog = () => {
    const { isLoading, error, data :blog } = UseApiGet("blog", getBlog);

    if (isLoading) return <div>Loading...</div>;
    if (error && blog.data.status >= 400) return <div>Error: {error.message}</div>;

    
    return (
        <div className="content-wrapper">
            <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                        <h4 className="card-title">Tabel Blog</h4>
                        <p className="card-description">
                          <Link to="/admin/create-blog">
                            <button type="button" className="btn btn-outline-primary btn-icon-text">
                            <i className="ti-plus btn-icon-prepend"></i>
                            Add Blog
                            </button>
                          </Link>
                        </p>
                            <div className="table-responsive">
                                { blog.data.data[0] ?
                                <Table apiRoute="blog" cols={Object.keys(blog.data.data[0])} data={blog.data.data} bordered={false} striped={true} />
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

export default Blog;