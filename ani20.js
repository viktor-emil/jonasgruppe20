$(window).on("load", jonasThink);


function jonasThink() {
    console.log("jonasThink");

    $("#jonas_sprite").addClass("jonasthink");

    $("#jonas_container").on("animationend", nude);


}

function nude() {
    console.log("nude");
    $("#nude_container").off("animationend", nude)

    $("#nude_sprite").addClass("nude");
    $("#nude_sprite").show();


    $("#nude_container").on("animationend", share);
}


function share() {
    console.log("share");
    $("#share_container").off("animationend", share);

    $("#jonas_sprite").hide();

    $("#nude_sprite").removeClass("nude");
    $("#nude_sprite").hide();

    $("#share_sprite").addClass("test");
    $("#share_container").show();


    $("#share_container").on("animationend", prison);

}

function prison() {
    console.log("prison");

    $("#prison_container").off("animationend", prison);

    $("#share_sprite").removeClass("test");
    $("#share_container").hide();

    $("#jonas_sprite").show();
    $("#jonas_sprite").addClass("jonasthink");



    $("#prison_container").off("animationend", prison);

}
