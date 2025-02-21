import 'react';
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { _ApiHandler } from '../../utils/ApiHandler';
import { UseApiSend  } from '../../utils/QueryMutation';

const Table = ({apiRoute, cols, data, bordered = false,hoverable= false,striped= false,isDark= false}) => {
    
    const [message, setMessage ] = useState('');
    const [deletedId, setDeletedId] = useState(undefined);
    const [updatedId, setUpdatedId] = useState(undefined);
    const navigate = useNavigate();

    const deleteData = () => _ApiHandler({
        method: 'DELETE',
        url: `/${apiRoute}/${deletedId}`
    });
        

    const { mutate, isPending } = UseApiSend(
        deleteData,
        (response) => {
            console.log(response);
            if(response.status === 204){
                setMessage(response.data.message);
                setDeletedId(undefined);
            }
        },
        (error) => {
            setMessage(error.message);
        }
    );

    useEffect(()=>{
        if (isPending) {
        setMessage("Data in progress . . .");
        }

        if(updatedId){
            navigate(`/admin/create-${apiRoute}/${updatedId}`);
        }

        if(deletedId){
            try {
                mutate();
                
            } catch (error) {
                setMessage(JSON.stringify(error));
            }
        }

    },[apiRoute, deletedId, isPending, mutate, navigate, updatedId]);

    const handleEdit = (id) =>(e) => {
        e.preventDefault();
        setUpdatedId(id);
    }

    const handleDelete = (id) => (e) => {
        e.preventDefault();
        setDeletedId(id);
        
    }

    return (
        <div className="table-responsive">
        <p>{message}</p>
            <table className={`table display expandable-table ${bordered ? 'table-bordered' : 'table-borderless'} ${hoverable && 'table-hover'} ${striped && 'table-striped'} ${isDark && 'table-dark'}`}>
                <thead>
                    <tr>
                        {cols.map((headerItem, index) => (
                            <th key={index}>{headerItem}</th>
                        ))}
                            <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            {cols.map((col, key) => (
                                <td key={key}>{item[col]}</td>
                            ))}
                            <td>
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-primary">
                                        <i className="ti-pencil" onClick={handleEdit(item.id)}/>
                                    </button>
                                    <button type="button" className="btn btn-primary" onClick={handleDelete(item.id)}>
                                        <i className="ti-trash" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

Table.propTypes = {
    apiRoute: PropTypes.string.isRequired,
    cols: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    bordered: PropTypes.bool,
    hoverable: PropTypes.bool,
    striped: PropTypes.bool,
    isDark: PropTypes.bool,
}


export default Table;