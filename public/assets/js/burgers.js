//Create new burger

$(".create-form").on("submit", function (event) {
    event.preventDefault();

    console.log("hello")

    var newBurger = {
        burger_name: $("#bu").val().trim(),
        devoured: false
    }

    //POST request

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("created new burger");

            location.reload();

        }
    )
});

//Update burger state

$("li").on("click", function (event) {
   event.preventDefault();

    var id = $(this).data("id");

    var newDevouredState = {
        devoured: true
    }

    //PUT request

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
    }).then(
        function () {
            console.log("changed devoured state to true")

           location.reload();
        }
    )
})