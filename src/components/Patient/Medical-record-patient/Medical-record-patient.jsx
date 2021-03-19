import React from 'react';
// import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Table } from 'reactstrap';
import HeaderPatient from '../Header-patient/Header-patient';
import { connect } from 'react-redux';

let MrPatient = (props) => {
    
    const history = useHistory();

    // const { buttonLabel } = props;

    // const [show, setShow] = useState(false);

    // const toggle = () => setShow(!show);


    //ver si esta logeado
    if(props.user?.userType !== 'Patient'){
        setTimeout(()=>{
             history.push('/');
        }, 200);
 
        return null;
    }

    return (

        <div id='medical-record'>
            <div className="header-patient">
                <HeaderPatient />
            </div>
            <div classNam='body-medical-record'>
                <Table borderless 
                className='table-medical-record'>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Nombre</th>
                            <th>Medico</th>
                            <th className='medical-record-reason'>Motivo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">24-3-2020</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td className='medical-record-reason'>Dolor de muela</td>
                        </tr>
                        <tr>
                            <th scope="row">12-05-2020</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td className='medical-record-reason'>Limpieza</td>
                        </tr>
                        <tr>
                            <th scope="row">22-05-2021</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td className='medical-record-reason'>Extracion muela del juicio</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td className='medical-record-reason'></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td className='medical-record-reason'></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td className='medical-record-reason'></td>
                        </tr>
                    </tbody>

                </Table>
            </div>
        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        user : state.userReducer.user
    }
};
export default connect(mapStateToProps)(MrPatient);