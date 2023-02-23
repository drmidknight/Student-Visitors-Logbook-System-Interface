function openEditUserModal(id) {

    var data = {'id': id};
     $.ajax({
        url: '../modals/editUserModal.php',
        method : 'post',
        data : data,
        success : function(data){
            $("body").append(data);
            $("#edit_users_modal").modal('show');
        },
        error: function(){
            alert('error occured');
        }
    });
}