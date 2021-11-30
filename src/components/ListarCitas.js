import React from 'react'
import { Button, Card, Icon, Table } from 'react-materialize'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteCitas } from '../actions/citasAction'

const ListarCitas = () => {

    const dispatch = useDispatch()

    const { citas } = useSelector(state => state.citas)

    const handleBorrar = (id) => {
        dispatch(DeleteCitas(id))
    }

    return (
        <div>
            <Card title='Agenda'>
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th>Síntomas</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                citas.map(cita => (
                                    <tr key={cita.id}>
                                        <td>{cita.nombre}</td>
                                        <td>{cita.fecha}</td>
                                        <td>{cita.hora}</td>
                                        <td>{cita.sintomas}</td>
                                        <td>
                                            <Button className='red'
                                                node='button'
                                                onClick={() => handleBorrar(cita.id)}
                                            >
                                                Borrar
                                                <Icon right>delete</Icon>
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </Table>
                </div>
            </Card>
        </div>
    )
}

export default ListarCitas
