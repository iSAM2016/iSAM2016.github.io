/*
 * @Author: huangzexia
 * @Date:   2017-01-11 15:49:29
 * @Last Modified by:   huangzexia
 * @Last Modified time: 2017-01-11 15:49:52
 */

$(document).ready(function() {
    let btn = document.getElementById('btn');
    btn.addEventListener('click', function() {
        openWindow('/foods/');
    })
    $('body').css('backgroundColor', 'red')
    $('#isam').text('hellowolde')
    let a = 13
    console.log(a)
})