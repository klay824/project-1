var dukeMode = localStorage.getItem("dukeMode");

function enableDukeMode() {
    $('link[href="develop/style.css"]').attr('href', 'develop/duke.css');
    localStorage.setItem("dukeMode", "enabled");
    $('input').attr("checked", "checked");
}

function disableDukeMode() {
    $('link[href="develop/duke.css"]').attr('href', 'develop/style.css');
    localStorage.setItem("dukeMode", "null");
}

if (dukeMode === "enabled") {
    enableDukeMode();
}

$('#switcher').click(function () {
    dukeMode = localStorage.getItem("dukeMode");
    if (dukeMode !== "enabled") {
        enableDukeMode();
    } else {
        disableDukeMode();
    }
});