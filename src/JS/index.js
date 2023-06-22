/** The simplest use of uibuilder client library
 * See the docs if the client doesn't start on its own.
 */

// Listen for incoming messages from Node-RED and action
// uibuilder.onChange('msg', (msg) => {
//     // do stuff with the incoming msg
// })


const menu = document.getElementById('sidebarToggleTop');
const sidebar = document.getElementsByClassName('sidebar')[0];

menu.addEventListener('click', function () {
    sidebar.classList.toggle('hide');
})

// In your Javascript (external .js resource or <script> tag)
$(document).ready(function () {
    $('.select').select2();
});

$(document).ready(function () {
    $("#btnEdit").click(function () {
        $("#editPresetData").append(
            `<div class='card mt-2'>
            <div class='card-header d-flex justify-content-between align-items-center py-0' style='background-color: #1E74FD !important;'>
                <div class='text-white'>Preset Data Murid</div>
                <div>
                    <a type='button' id='newData'><i class='bi bi-plus text-white' style='font-size: 25px;'></i></a>
                </div>
        </div>
        <div class='card-body'>
            <table class='table'>
                <tbody>
                  <tr>
                    
                    <td class='col-9'>Team A</td>
                    
                    <td class='col'>
                        <button class='btn bg-success' data-bs-toggle='modal' data-bs-target='#exampleModal'><i class='bi bi-eye text-white'></i></button>
        <button class='btn bg-danger'><i class='bi bi-trash text-white'></i></button>
                    </td>
                  </tr>
                  <tr>
                    
                    <td>Team B</td>
                    
                    <td>
                        <button class='btn bg-success' data-bs-toggle='modal' data-bs-target='#exampleModal'><i class='bi bi-eye text-white'></i></button>
        <button class='btn bg-danger'><i class='bi bi-trash text-white'></i></button>
                    </td>
                  </tr>
                  
                </tbody>
              </table>
        </div>
        </div>`
        );
    })
})

$(document).ready(function () {
    $('#newData').click(function () {
        $('#editPresetData').prepend(
            `<div class="card">
            <div class="card-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                    New Data Preset</h1>
                
            </div>
            <div class="card-body">
                <div>
                    <label for="formGroupExampleInput" class="form-label">Data Reference (Use Line Break)</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="123456"></textarea>
                        
                <div>
                    <label for="formGroupExampleInput" class="form-label">Data Result</label>
                    <input type="text" class="form-control mb-2" id="formGroupExampleInput"
                        placeholder="Result">
                        <div class="d-flex justify-content-end">
                    <button class="btn btn-primary mt-3 col-12 mb-1">Submit</button>
                </div>
            </div>

        </div>
    </div>
</div>`
        )
    })
})

// data-bs-toggle='modal' data-bs-toggle="modal" data-bs-target="#staticBackdrop"