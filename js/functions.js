function onAboutItemEnter($id) {
    document.getElementById($id).classList.remove('hide');
    document.getElementById($id).classList.add('animate-tooltip');
}

function onAboutItemLeave($id) {
    document.getElementById($id).classList.add('hide');
    document.getElementById($id).classList.remove('animate-tooltip');
}