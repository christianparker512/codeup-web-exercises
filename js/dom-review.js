$(document).ready(function () {
    var favFood = $('#input');
    var foodList = $('#favorite-food');
    var addBtn = $('#add-to-list');
    var changeHeading = $('#change-me');
    var cohort = $('#my-cohort');
    var inputCohort = $('#cohort-name');
    var cohortBtn = $('#change-cohort');
    var highlight = $('#highlight');
    var container = $('.container');

    addBtn.click(function (e) {
        e.preventDefault();
        foodList.append(`<li> ${favFood.val()} </li>`);
    });

    changeHeading.dblclick(function () {
        $(this).css('background-color', 'purple')
    });

    cohortBtn.click(function (e) {
        e.preventDefault();
        cohort.html("");
        cohort.html(inputCohort.val());
    });

    highlight.click(function () {
        cohort.css('background', 'yellow')
    });

    setTimeout(function () {
        container.css('background-color', 'pink')
    }, 3000);



})