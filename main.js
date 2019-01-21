function getContacts() {
    $.ajax({
        type : 'GET',
        url:'http://localhost:8080/api/contacts/',
        success: function (response, status) {
            $('#output').html(response.data.map(contact => {
                return `<li data-id="${ contact._id }">
                <span>${ contact.name }</span>
                <span>${ contact.email }</span>
                </li>`;
            }).join(''));
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
        success: function(response, status){
            $("#output").html(response.message);
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

        success: function(response, staus){
            $('#output').html(response.message + `<br>` + response.data.name + "  " + response.data.email);
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
        success: function(response, staus){
            $('#output').html(response.message + `<br>` + response.data.name + "  " + response.data.email);
        },
        error: function () {
            $('#output').html('There was an error!');
        },
    });
    return false;
}
