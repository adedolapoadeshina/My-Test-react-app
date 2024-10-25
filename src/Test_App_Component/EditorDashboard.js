import Header from "./Header"



const EditorDashboard=()=>{
    return(
        <div>
            <Header/>
        <div class="row">
            <div class="offset-3 col-md-6">
                <h1 class="text-center text-primary">EDITOR DASHBORAD</h1>
                <p class="text-center">This is the editor dashboard</p>
                <table class="table table-stripped">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>POST TITLE</th>
                            <th>DATE CREATED</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Food is live!</td>
                            <td>3rd Nov. 2023</td>
                            <td>
                                <button type="button" class="btn btn-warning">Edit Post</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Our Nation.Nigeria...</td>
                            <td>3rd Oct. 2023</td>
                            <td>
                                <button type="button" class="btn btn-warning">Edit Post</button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Software development</td>
                            <td>13rd Nov. 2024</td>
                            <td>
                                <button type="button" class="btn btn-warning">Edit Post</button>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Artificial Intelligence!</td>
                            <td>23rd Nov. 2025</td>
                            <td>
                                <button type="button" class="btn btn-warning">Edit Post</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}

export default EditorDashboard