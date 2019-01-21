function getContacts() {
    $.ajax({
        type : 'GET',
        url:'http://localhost:8080/api/contacts/',
        complete: function (response) {
            $('#output').html(response.responseText);
        },
        error: function () {
            $('#output').html('There was an error!');
        },
    });
    return false;
}

function removeContacts() {
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8080/api/contacts/"+$("#contactId").val(),
        complete: function(response){
            $("#output").html(response.responseText);
        },
        error: function () {
            $('#output').html('There was an error!');
        },
    });
    return false;
}

function createContacts() {
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/api/contacts/",
        data: {
                name : $("#user_name").val(),
                email : $("#email_address").val()
        },

        complete: function(response){
            $('#output').html(response.responseText);
        },
        error: function () {
            $('#output').html('There was an error!');
        },
    });
    return false;
}

function updateContacts() {
    $.ajax({
        type: "PUT",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        url: "http://localhost:8080/api/contacts/"+$('#contactId').val(),
        data: {
                name : $('#user_name').val(),
                email : $('#email_address').val()
        },
        complete: function(response){
            $("#output").html(response.responseText);
        },
        error: function () {
            $('#output').html('There was an error!');
        },
    });
    return false;
}
