



const AdminDashboard=()=>{
    return(
        <div className="row">
            <div className="offset-3 col-md-6">
                <h1 className="text-center text-primary">ADMIN DASHBORAD</h1>
                <p className="text-center">This is the admin dashboard</p>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>PHONE NUMBER</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Ade</td>
                            <td>Ade@gmail.com</td>
                            <td>08123456789</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Ola</td>
                            <td>Ola@gmail.com</td>
                            <td>08123456789</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Ada</td>
                            <td>Ada@gmail.com</td>
                            <td>08123456789</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Amina</td>
                            <td>Amina@gmail.com</td>
                            <td>08123456789</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminDashboard